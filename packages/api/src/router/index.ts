import { privateProcedure, publicProcedure, router } from './trpc';
import { organisationRouter } from './organisation';
import { profileRouter } from './profile';
import { teamRouter } from './team';
export const appRouter = router({
    ping: publicProcedure.query(() => `pong`),
    profile: profileRouter,
    organisation: organisationRouter,
    team: teamRouter,
    user: {
        current: privateProcedure.query(({ ctx }) => ctx.auth?.user),
    }
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
