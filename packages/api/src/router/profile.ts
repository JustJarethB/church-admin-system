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
    ofUser: privateProcedure.query(({ ctx }) => ctx.prisma.profiles.findMany({
        where: {
            userId: ctx.auth.user.id
        }
    })),
    ofOrganisation: privateProcedure.input($.string()).query(({ ctx, input }) => ctx.prisma.profiles.findMany({
        where: {
            organisationId: input
        }
    })),
    create: privateProcedure.input(createSchema).mutation(({ ctx, input: { organisationId, userId } }) => {
        const creatorId = ctx.auth.user.id
        return ctx.prisma.profiles.create({
            data: {
                organisationId,
                creatorId,
                userId
            }
        })
    })

})