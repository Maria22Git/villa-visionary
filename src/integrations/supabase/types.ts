export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      audit_log: {
        Row: {
          action: string
          admin_user_id: string | null
          after_json: Json | null
          before_json: Json | null
          created_at: string
          entity_id: string | null
          entity_type: string
          id: string
        }
        Insert: {
          action: string
          admin_user_id?: string | null
          after_json?: Json | null
          before_json?: Json | null
          created_at?: string
          entity_id?: string | null
          entity_type: string
          id?: string
        }
        Update: {
          action?: string
          admin_user_id?: string | null
          after_json?: Json | null
          before_json?: Json | null
          created_at?: string
          entity_id?: string | null
          entity_type?: string
          id?: string
        }
        Relationships: []
      }
      forms: {
        Row: {
          created_at: string
          enabled: boolean
          fields_json: Json
          form_key: string
          id: string
          recipient_email: string | null
          title_json: Json
          updated_at: string
        }
        Insert: {
          created_at?: string
          enabled?: boolean
          fields_json?: Json
          form_key: string
          id?: string
          recipient_email?: string | null
          title_json?: Json
          updated_at?: string
        }
        Update: {
          created_at?: string
          enabled?: boolean
          fields_json?: Json
          form_key?: string
          id?: string
          recipient_email?: string | null
          title_json?: Json
          updated_at?: string
        }
        Relationships: []
      }
      leads: {
        Row: {
          admin_notes: string | null
          created_at: string
          device_type: string | null
          email: string | null
          form_id: string | null
          form_name: string | null
          id: string
          ip_address: string | null
          language: string | null
          message: string | null
          name: string | null
          page_url: string | null
          phone: string | null
          referrer: string | null
          status: string
          updated_at: string
          user_agent: string | null
          utm_campaign: string | null
          utm_content: string | null
          utm_medium: string | null
          utm_source: string | null
          utm_term: string | null
        }
        Insert: {
          admin_notes?: string | null
          created_at?: string
          device_type?: string | null
          email?: string | null
          form_id?: string | null
          form_name?: string | null
          id?: string
          ip_address?: string | null
          language?: string | null
          message?: string | null
          name?: string | null
          page_url?: string | null
          phone?: string | null
          referrer?: string | null
          status?: string
          updated_at?: string
          user_agent?: string | null
          utm_campaign?: string | null
          utm_content?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          utm_term?: string | null
        }
        Update: {
          admin_notes?: string | null
          created_at?: string
          device_type?: string | null
          email?: string | null
          form_id?: string | null
          form_name?: string | null
          id?: string
          ip_address?: string | null
          language?: string | null
          message?: string | null
          name?: string | null
          page_url?: string | null
          phone?: string | null
          referrer?: string | null
          status?: string
          updated_at?: string
          user_agent?: string | null
          utm_campaign?: string | null
          utm_content?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          utm_term?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "leads_form_id_fkey"
            columns: ["form_id"]
            isOneToOne: false
            referencedRelation: "forms"
            referencedColumns: ["id"]
          },
        ]
      }
      media_assets: {
        Row: {
          alt_json: Json | null
          created_at: string
          id: string
          public_url: string | null
          storage_path: string
          tags: string[] | null
          title: string | null
          type: string
        }
        Insert: {
          alt_json?: Json | null
          created_at?: string
          id?: string
          public_url?: string | null
          storage_path: string
          tags?: string[] | null
          title?: string | null
          type: string
        }
        Update: {
          alt_json?: Json | null
          created_at?: string
          id?: string
          public_url?: string | null
          storage_path?: string
          tags?: string[] | null
          title?: string | null
          type?: string
        }
        Relationships: []
      }
      plan_galleries: {
        Row: {
          category: string
          created_at: string
          enabled: boolean
          id: string
          sort_order: number
          title_json: Json
          updated_at: string
        }
        Insert: {
          category: string
          created_at?: string
          enabled?: boolean
          id?: string
          sort_order?: number
          title_json?: Json
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          enabled?: boolean
          id?: string
          sort_order?: number
          title_json?: Json
          updated_at?: string
        }
        Relationships: []
      }
      plan_gallery_items: {
        Row: {
          cover_image_asset_id: string | null
          created_at: string
          gallery_id: string
          id: string
          pdf_asset_id: string | null
          sort_order: number
        }
        Insert: {
          cover_image_asset_id?: string | null
          created_at?: string
          gallery_id: string
          id?: string
          pdf_asset_id?: string | null
          sort_order?: number
        }
        Update: {
          cover_image_asset_id?: string | null
          created_at?: string
          gallery_id?: string
          id?: string
          pdf_asset_id?: string | null
          sort_order?: number
        }
        Relationships: [
          {
            foreignKeyName: "plan_gallery_items_cover_image_asset_id_fkey"
            columns: ["cover_image_asset_id"]
            isOneToOne: false
            referencedRelation: "media_assets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_gallery_items_gallery_id_fkey"
            columns: ["gallery_id"]
            isOneToOne: false
            referencedRelation: "plan_galleries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plan_gallery_items_pdf_asset_id_fkey"
            columns: ["pdf_asset_id"]
            isOneToOne: false
            referencedRelation: "media_assets"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          display_name: string | null
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      section_content: {
        Row: {
          content_json: Json
          created_at: string
          id: string
          language: string
          section_id: string
          updated_at: string
        }
        Insert: {
          content_json?: Json
          created_at?: string
          id?: string
          language: string
          section_id: string
          updated_at?: string
        }
        Update: {
          content_json?: Json
          created_at?: string
          id?: string
          language?: string
          section_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "section_content_section_id_fkey"
            columns: ["section_id"]
            isOneToOne: false
            referencedRelation: "sections"
            referencedColumns: ["id"]
          },
        ]
      }
      sections: {
        Row: {
          anchor_slug: string | null
          created_at: string
          enabled: boolean
          id: string
          key: string
          layout_variant: string | null
          sort_order: number
          style_json: Json | null
          updated_at: string
        }
        Insert: {
          anchor_slug?: string | null
          created_at?: string
          enabled?: boolean
          id?: string
          key: string
          layout_variant?: string | null
          sort_order?: number
          style_json?: Json | null
          updated_at?: string
        }
        Update: {
          anchor_slug?: string | null
          created_at?: string
          enabled?: boolean
          id?: string
          key?: string
          layout_variant?: string | null
          sort_order?: number
          style_json?: Json | null
          updated_at?: string
        }
        Relationships: []
      }
      site_settings: {
        Row: {
          accent_color: string
          analytics_json: Json | null
          created_at: string
          default_language: string
          enabled_languages: string[]
          id: string
          lead_email_default: string
          seo_defaults_json: Json | null
          updated_at: string
          whatsapp_link: string | null
        }
        Insert: {
          accent_color?: string
          analytics_json?: Json | null
          created_at?: string
          default_language?: string
          enabled_languages?: string[]
          id?: string
          lead_email_default?: string
          seo_defaults_json?: Json | null
          updated_at?: string
          whatsapp_link?: string | null
        }
        Update: {
          accent_color?: string
          analytics_json?: Json | null
          created_at?: string
          default_language?: string
          enabled_languages?: string[]
          id?: string
          lead_email_default?: string
          seo_defaults_json?: Json | null
          updated_at?: string
          whatsapp_link?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
    },
  },
} as const
