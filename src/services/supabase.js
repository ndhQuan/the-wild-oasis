import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ovnbrjxlaxpjaoeoufug.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92bmJyanhsYXhwamFvZW91ZnVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE1NTgxNzMsImV4cCI6MjAyNzEzNDE3M30.2EfRc_qzqCpMVWqdeOKi54BFZoSkQj0-e7BNVTvQ0-Q";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
