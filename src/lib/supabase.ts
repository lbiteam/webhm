import { createClient } from '@supabase/supabase-js';

// Define your database types (optional but recommended)
export type Database = {
  public: {
    Tables: {
      contact_messages: {
        Row: {
          id: number;
          name: string;
          email: string;
          phone: string | null;
          location: string | null;
          subject: string | null;
          message: string;
          created_at: string;
          status: string;
        };
        Insert: {
          id?: never;
          name: string;
          email: string;
          phone?: string | null;
          location?: string | null;
          subject?: string | null;
          message: string;
          created_at?: string;
          status?: string;
        };
      };
    };
  };
};

// Get environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate environment variables
if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    'Missing Supabase environment variables. Please add VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY to your .env file.'
  );
}

// Create and export the Supabase client with TypeScript support[citation:2]
export const supabase = createClient<Database>(supabaseUrl, supabaseKey);