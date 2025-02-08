import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from 'api';
import { PLACEHOLDER_USERS } from '@/data';
import { createClient } from '@supabase/supabase-js';
//     👆 **type-only** import

// Pass AppRouter as generic here. 👇 This lets the `trpc` object know
// what procedures are available on the server and their input/output types.
export const trpc = createTRPCReact<AppRouter>()

export const useCurrentUser = () => {
  return [PLACEHOLDER_USERS[1]]
}
export const useUserProfiles = () => [trpc.userProfiles.useQuery().data]

export const getUserHasProfile = (userId: string) => [trpc.userHasProfile.useQuery(userId).data]
export const createProfile = (d: unknown) => { throw new Error('Unimplemented') }
export const useChurchFromProfile = (props?: { churchId: string }) => [props ? trpc.churchOfProfile.useQuery(props).data : undefined]

export const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON)