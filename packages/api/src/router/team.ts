import $ from 'zod'
import { router, privateProcedure } from './trpc';

const createSchema = $.object({
    name: $.string(),
    organisationId: $.string(),
})

export const teamRouter = router({
    ofId: privateProcedure.input($.string()).query(({ ctx, input }) => {
        return ctx.prisma.teams.findUnique({
            where: {
                id: input
            }
        })
    }),
    ofOrganisation: privateProcedure.input($.string()).query(({ ctx, input }) => ctx.prisma.teams.findMany({
        where: {
            organisationId: input
        }
    })),
    create: privateProcedure.input(createSchema).mutation(async ({ ctx, input: { name, organisationId } }) => {
        const org = await ctx.prisma.teams.create({
            data: {
                name,
                organisationId,
                creatorId: ctx.auth.user.id
            }
        })
        return org
    })

})