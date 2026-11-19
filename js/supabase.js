import { createClient } from
  "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://hjnsitrswmeydfjlscas.supabase.co";
const SUPABASE_KEY = "sb_publishable_0Us7sPkIXvLC8Jyyt2x0UA_pVkCPJ35";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
