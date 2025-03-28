import $ from 'zod'
import { router, privateProcedure } from './trpc';

const createSchema = $.object({
    name: $.string(),
})
const updateSchema = $.object({
    id: $.string(),
    name: $.optional($.string()),
    description: $.optional($.string()),
})

export const organisationRouter = router({
    ofId: privateProcedure.input($.string()).query(({ ctx, input }) => {
        return ctx.prisma.organisations.findUnique({
            where: {
                id: input
            }
        })
    }),
    create: privateProcedure.input(createSchema).mutation(async ({ ctx, input }) => {
        const org = await ctx.prisma.organisations.create({
            data: {
                name: input.name,
                creatorId: ctx.auth.user.id
            }
        })
        // Create a profile for the creator
        const profile = await ctx.prisma.profiles.create({
            data: {
                organisationId: org.id,
                userId: ctx.auth.user.id,
                creatorId: ctx.auth.user.id
            }
        })
        return org
    }),
    update: privateProcedure.input(updateSchema).mutation(async ({ ctx, input }) =>
        ctx.prisma.organisations.update({
            where: {
                id: input.id
            }, data: input
        })
    )

})