import $ from 'zod'
import { initTRPC } from '@trpc/server';
import { mock as mockProfile, profile } from './profile'
import { mock as mockChurch } from './church'
import { Context } from './db/context';
/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.context<Context>().create();

/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
// export const router = t.router;
export const publicProcedure = t.procedure;

export const router = t.router({
    ping: publicProcedure.query(() => `pong`),
    userProfiles: publicProcedure.query(({ ctx }) => {
        throw new Error("Not implemented");
    }),
    userHasProfile: publicProcedure.input($.string()).query(({ input }) => input == mockProfile.userId),
    churches: publicProcedure.query(() => [mockChurch]),
    churchOfProfile: publicProcedure.input(profile.pick({ churchId: true })).query(() => mockChurch)
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof router;
