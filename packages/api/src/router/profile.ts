import $ from 'zod'
import { router, privateProcedure } from './trpc';

const createSchema = $.object({
    organisationId: $.string(),
    userId: $.string()
})

export const profileRouter = router({
    ofId: privateProcedure.input($.string()).query(({ ctx, input }) => {
        return ctx.prisma.profiles.findUnique({
            where: {
                id: input
            }
        })
    }),
    create: privateProcedure.input(createSchema).mutation(({ ctx, input: { organisationId, userId } }) => {
        return ctx.prisma.profiles.create({
            data: {
                organisationId,
                userId
            }
        })
    })

})