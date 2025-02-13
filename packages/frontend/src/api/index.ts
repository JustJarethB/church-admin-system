import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from 'api';
import { createClient } from '@supabase/supabase-js';
//     👆 **type-only** import

// Pass AppRouter as generic here. 👇 This lets the `trpc` object know
// what procedures are available on the server and their input/output types.
export const api = createTRPCReact<AppRouter>()
export const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON)
export default api