import { CreateExpressContextOptions } from '@trpc/server/adapters/express';
import { prisma } from './db';
import { supabase } from './supabase';

import jwt, { JwtPayload } from 'jsonwebtoken'

import { User } from '@supabase/supabase-js';
export const createContext = async ({ info, req, res }: CreateExpressContextOptions) => {
    const { authorization } = req.headers
    const token = authorization?.split(' ')[1] ?? null
    if (token) authorizeToken(token)
    return ({
        prisma,
        supabase: supabase(token ?? undefined),
        auth: token ? authorizeToken(token) : null,
    });
}
export type Context = Awaited<ReturnType<typeof createContext>>;
const SECRET = process.env.SUPABASE_JWT_SECRET
if (!SECRET) throw new Error('Missing env var SUPABASE_JWT_SECRET')
type Token = JwtPayload & User;
const authorizeToken = async (token: string) => {
    try {
        const decoded = jwt.verify(token, SECRET) as Token
        console.log("DECODED", decoded)
        return decoded
    } catch (error) {
        console.log("ERROR", error)
        return null
    }
}