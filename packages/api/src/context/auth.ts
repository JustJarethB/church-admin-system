import jwt, { JwtPayload } from 'jsonwebtoken';
import { prisma } from './db';

const SECRET = process.env.SUPABASE_JWT_SECRET;
if (!SECRET) throw new Error('Missing env var SUPABASE_JWT_SECRET');
export const authorizeToken = async (token: string) => {
    try {
        const decoded = jwt.verify(token, SECRET) as JwtPayload;
        const user = await prisma.appUsers.findUniqueOrThrow({ where: { id: decoded.sub } });
        // console.log("DECODED", decoded);
        return { user };
    } catch (error) {
        console.log("ERROR", error);
        return null;
    }
};
