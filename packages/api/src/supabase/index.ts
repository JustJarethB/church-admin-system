import { createClient } from "@supabase/supabase-js"

const { SUPABASE_URL, SUPABASE_SERVICE } = process.env
if (!SUPABASE_URL) {
    throw new Error('Missing environment variables. Required: SUPABASE_URL')
}
if (!SUPABASE_SERVICE) {
    throw new Error('Missing environment variables. Required: SUPABASE_SERVICE')
}
export const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE)