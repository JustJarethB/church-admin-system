import $ from 'zod'
import { router, privateProcedure } from './trpc';

export const organisationRouter = router({
    ofId: privateProcedure.input($.string()).query(({ ctx, input }) => {
        return ctx.prisma.organisations.findUnique({
            where: {
                id: input
            }
        })
    }),

})