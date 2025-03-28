import { initTRPC } from '@trpc/server';
import { Context } from '../context';

/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.context<Context>().create();
/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router;
export const publicProcedure = t.procedure;
export const privateProcedure = t.procedure.use((opts) => {
    type AssertedOps = typeof opts & { ctx: { auth: NonNullable<typeof opts.ctx.auth> } };
    if (!opts.ctx.auth) {
        throw new Error('Unauthorized');
    }
    return opts.next(opts as AssertedOps);
})  