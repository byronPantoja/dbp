import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wfcugpeybaitjrmbyymu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmY3VncGV5YmFpdGpybWJ5eW11Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgwODUyNzUsImV4cCI6MjAwMzY2MTI3NX0.A9xmQ90ix3n_eV7A8T_Hqd6Wp-2xhvKiZf53XVdAE3Y";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
