import { CreateExpressContextOptions } from '@trpc/server/adapters/express';
import { prisma } from './db';
import { supabase } from './supabase';
import { authorizeToken } from './auth';

export const createContext = async ({ info, req, res }: CreateExpressContextOptions) => {
    const { authorization } = req.headers
    const token = authorization?.split(' ')[1] ?? null
    if (token) authorizeToken(token)
    return ({
        prisma,
        supabase,
        auth: token ? authorizeToken(token) : null,
    });
}
export type Context = Awaited<ReturnType<typeof createContext>>;
