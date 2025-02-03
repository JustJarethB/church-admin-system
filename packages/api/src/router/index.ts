import $ from 'zod'
import { mock as mockProfile, profile } from '../profile'
import { mock as mockChurch } from '../church'
import { publicProcedure, router } from './trpc';
import { organisationRouter } from './organisation';
export const appRouter = router({
    ping: publicProcedure.query(() => `pong`),
    userProfiles: publicProcedure.query(({ ctx }) => {
        throw new Error("Not implemented");
    }),
    userHasProfile: publicProcedure.input($.string()).query(({ input }) => input == mockProfile.userId),
    churches: publicProcedure.query(() => [mockChurch]),
    churchOfProfile: publicProcedure.input(profile.pick({ churchId: true })).query(() => mockChurch),
    organisation: organisationRouter
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
