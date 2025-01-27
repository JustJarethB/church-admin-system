import { initTRPC } from '@trpc/server';
import { z } from 'zod'
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
    hello: publicProcedure.input(z.string()).query(({ input }) => `Hello ${input}`)
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof router;