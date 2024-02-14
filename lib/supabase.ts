import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nlewesfsoqkuojdybbzw.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5sZXdlc2Zzb3FrdW9qZHliYnp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQzOTMyNzcsImV4cCI6MjAxOTk2OTI3N30.RHsCbYSaK3dhc32VZ8uGqh1sKTrqIg-gXRAX-e7b9j8";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
