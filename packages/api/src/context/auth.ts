import { User } from '@supabase/supabase-js';
import jwt, { JwtPayload } from 'jsonwebtoken';

const SECRET = process.env.SUPABASE_JWT_SECRET;
if (!SECRET) throw new Error('Missing env var SUPABASE_JWT_SECRET');
type Token = JwtPayload & User;
export const authorizeToken = async (token: string) => {
    try {
        const decoded = jwt.verify(token, SECRET) as Token;
        console.log("DECODED", decoded);
        return decoded;
    } catch (error) {
        console.log("ERROR", error);
        return null;
    }
};
