import $ from 'zod'
import { router, privateProcedure } from './trpc';

const createSchema = $.object({
    name: $.string(),
    description: $.string()
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
                description: input.description,
                creatorId: ctx.auth.user.id
            }
        })
        // Create a profile for the creator
        const profile = await ctx.prisma.profiles.create({
            data: {
                organisationId: org.id,
                userId: ctx.auth.user.id,
            }
        })
        return org
    })

})