import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://glieyktwfvguogtwtqko.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdsaWV5a3R3ZnZndW9ndHd0cWtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzOTgyNTgsImV4cCI6MjA2MDk3NDI1OH0.ScY2NZme-CuMB32wS8HAWPrFGR0TFOpI84GwBK1NDMI'; // found in your Supabase dashboard (Project Settings > API)

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
