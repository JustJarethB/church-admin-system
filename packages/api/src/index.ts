import $ from 'zod'
import { initTRPC } from '@trpc/server';
import { mock as mockProfile, profile } from './profile'
import { mock as mockChurch } from './church'
/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.create();

/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
// export const router = t.router;
export const publicProcedure = t.procedure;

export const router = t.router({
    ping: publicProcedure.query(() => `pong`),
    userProfiles: publicProcedure.query(() => [mockProfile]),
    userHasProfile: publicProcedure.input($.string()).query(({ input }) => input == mockProfile.userId),
    churches: publicProcedure.query(() => [mockChurch]),
    churchOfProfile: publicProcedure.input(profile.pick({ churchId: true })).query(() => mockChurch)
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof router;
