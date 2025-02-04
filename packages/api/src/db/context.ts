import { CreateHTTPContextOptions } from '@trpc/server/adapters/standalone';
import { prisma } from '.';
export const createContext = async (opts: CreateHTTPContextOptions) => ({
    prisma,
    auth: {
        user: {
            id: "ef732fa6-1506-40c0-9c64-67d8b578861b",
            email: "hello@example.com"
        }
    }
})
export type Context = Awaited<ReturnType<typeof createContext>>;