import { CreateHTTPContextOptions } from '@trpc/server/adapters/standalone';
import { prisma } from '.';
export const createContext = async (opts: CreateHTTPContextOptions) => ({
    prisma
})
export type Context = Awaited<ReturnType<typeof createContext>>;