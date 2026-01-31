-- Victoria Villas CMS Database Schema

-- Site Settings (single row for global configuration)
CREATE TABLE public.site_settings (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    default_language text NOT NULL DEFAULT 'ru',
    enabled_languages text[] NOT NULL DEFAULT ARRAY['ru', 'en', 'tr'],
    accent_color text NOT NULL DEFAULT '#D32F2F',
    lead_email_default text NOT NULL DEFAULT 'info@art-sites.org',
    whatsapp_link text,
    analytics_json jsonb DEFAULT '{}',
    seo_defaults_json jsonb DEFAULT '{}',
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Sections (landing page sections)
CREATE TABLE public.sections (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    key text UNIQUE NOT NULL,
    anchor_slug text,
    sort_order integer NOT NULL DEFAULT 0,
    enabled boolean NOT NULL DEFAULT true,
    layout_variant text DEFAULT 'default',
    style_json jsonb DEFAULT '{}',
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Section Content (multilingual content for each section)
CREATE TABLE public.section_content (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    section_id uuid REFERENCES public.sections(id) ON DELETE CASCADE NOT NULL,
    language text NOT NULL,
    content_json jsonb NOT NULL DEFAULT '{}',
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    UNIQUE(section_id, language)
);

-- Media Assets (images and PDFs)
CREATE TABLE public.media_assets (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    type text NOT NULL CHECK (type IN ('image', 'pdf')),
    storage_path text NOT NULL,
    public_url text,
    title text,
    alt_json jsonb DEFAULT '{}',
    tags text[],
    created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Plan Galleries
CREATE TABLE public.plan_galleries (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title_json jsonb NOT NULL DEFAULT '{}',
    category text NOT NULL,
    sort_order integer NOT NULL DEFAULT 0,
    enabled boolean NOT NULL DEFAULT true,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Plan Gallery Items
CREATE TABLE public.plan_gallery_items (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    gallery_id uuid REFERENCES public.plan_galleries(id) ON DELETE CASCADE NOT NULL,
    pdf_asset_id uuid REFERENCES public.media_assets(id) ON DELETE SET NULL,
    cover_image_asset_id uuid REFERENCES public.media_assets(id) ON DELETE SET NULL,
    sort_order integer NOT NULL DEFAULT 0,
    created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Forms Configuration
CREATE TABLE public.forms (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    form_key text UNIQUE NOT NULL,
    title_json jsonb NOT NULL DEFAULT '{}',
    recipient_email text,
    fields_json jsonb NOT NULL DEFAULT '[]',
    enabled boolean NOT NULL DEFAULT true,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Leads (form submissions)
CREATE TABLE public.leads (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    form_id uuid REFERENCES public.forms(id) ON DELETE SET NULL,
    form_name text,
    page_url text,
    language text DEFAULT 'ru',
    name text,
    phone text,
    email text,
    message text,
    utm_source text,
    utm_medium text,
    utm_campaign text,
    utm_term text,
    utm_content text,
    referrer text,
    user_agent text,
    device_type text,
    ip_address text,
    status text NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'won', 'lost')),
    admin_notes text,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Audit Log
CREATE TABLE public.audit_log (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    admin_user_id uuid,
    entity_type text NOT NULL,
    entity_id uuid,
    action text NOT NULL,
    before_json jsonb,
    after_json jsonb,
    created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Profiles for admin users
CREATE TABLE public.profiles (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
    display_name text,
    avatar_url text,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- User Roles (separate table for security)
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

CREATE TABLE public.user_roles (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    UNIQUE (user_id, role)
);

-- Security Definer Function for role checking
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Enable RLS on all tables
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.section_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media_assets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.plan_galleries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.plan_gallery_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Public read access for landing page content
CREATE POLICY "Public can view site settings"
ON public.site_settings FOR SELECT
USING (true);

CREATE POLICY "Public can view enabled sections"
ON public.sections FOR SELECT
USING (enabled = true);

CREATE POLICY "Public can view section content"
ON public.section_content FOR SELECT
USING (true);

CREATE POLICY "Public can view media assets"
ON public.media_assets FOR SELECT
USING (true);

CREATE POLICY "Public can view enabled plan galleries"
ON public.plan_galleries FOR SELECT
USING (enabled = true);

CREATE POLICY "Public can view plan gallery items"
ON public.plan_gallery_items FOR SELECT
USING (true);

CREATE POLICY "Public can view enabled forms"
ON public.forms FOR SELECT
USING (enabled = true);

-- Leads: public can insert, only admin can read/update
CREATE POLICY "Public can submit leads"
ON public.leads FOR INSERT
WITH CHECK (true);

CREATE POLICY "Admins can view all leads"
ON public.leads FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update leads"
ON public.leads FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Admin full access policies
CREATE POLICY "Admins can manage site settings"
ON public.site_settings FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage sections"
ON public.sections FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage section content"
ON public.section_content FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage media assets"
ON public.media_assets FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage plan galleries"
ON public.plan_galleries FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage plan gallery items"
ON public.plan_gallery_items FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage forms"
ON public.forms FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can view audit log"
ON public.audit_log FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert audit log"
ON public.audit_log FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Profiles policies
CREATE POLICY "Users can view own profile"
ON public.profiles FOR SELECT
TO authenticated
USING (user_id = auth.uid());

CREATE POLICY "Users can update own profile"
ON public.profiles FOR UPDATE
TO authenticated
USING (user_id = auth.uid());

CREATE POLICY "Users can insert own profile"
ON public.profiles FOR INSERT
TO authenticated
WITH CHECK (user_id = auth.uid());

-- User roles policies
CREATE POLICY "Admins can view all roles"
ON public.user_roles FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin') OR user_id = auth.uid());

CREATE POLICY "Admins can manage roles"
ON public.user_roles FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Update timestamp trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Apply update triggers
CREATE TRIGGER update_site_settings_updated_at
BEFORE UPDATE ON public.site_settings
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_sections_updated_at
BEFORE UPDATE ON public.sections
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_section_content_updated_at
BEFORE UPDATE ON public.section_content
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_plan_galleries_updated_at
BEFORE UPDATE ON public.plan_galleries
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_forms_updated_at
BEFORE UPDATE ON public.forms
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_leads_updated_at
BEFORE UPDATE ON public.leads
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_profiles_updated_at
BEFORE UPDATE ON public.profiles
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default site settings
INSERT INTO public.site_settings (id, default_language, enabled_languages, accent_color, lead_email_default, whatsapp_link)
VALUES (
    gen_random_uuid(),
    'ru',
    ARRAY['ru', 'en', 'tr'],
    '#D32F2F',
    'info@art-sites.org',
    'https://wa.me/905551234567'
);

-- Insert default sections
INSERT INTO public.sections (key, anchor_slug, sort_order, enabled) VALUES
('hero', 'hero', 1, true),
('benefits', 'benefits', 2, true),
('project', 'about', 3, true),
('premium', 'premium', 4, true),
('architect', 'architect', 5, true),
('city', 'city', 6, true),
('plans', 'plans', 7, true),
('whitebox', 'whitebox', 8, true),
('nature', 'nature', 9, true),
('security', 'security', 10, true),
('lifestyle', 'lifestyle', 11, true),
('developer', 'developer', 12, true),
('faq', 'faq', 13, true),
('steps', 'steps', 14, true),
('contact', 'contact', 15, true);

-- Insert default form
INSERT INTO public.forms (form_key, title_json, recipient_email, fields_json, enabled) VALUES
('main_contact', '{"ru": "Основная форма", "en": "Main Form", "tr": "Ana Form"}', 'info@art-sites.org', '[{"name": "name", "type": "text", "required": true}, {"name": "phone", "type": "tel", "required": true}]', true);

-- Insert default plan galleries
INSERT INTO public.plan_galleries (title_json, category, sort_order, enabled) VALUES
('{"ru": "VIP Виллы", "en": "VIP Villas", "tr": "VIP Villalar"}', 'vip', 1, true),
('{"ru": "Генеральный план", "en": "Site Plan", "tr": "Vaziyet Planı"}', 'site', 2, true),
('{"ru": "Планировки этажей", "en": "Floor Plans", "tr": "Kat Planları"}', 'floor', 3, true);