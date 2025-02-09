import { PrismaClient } from "@prisma/client";

// TODO: set logs based on env
export const prisma =
    new PrismaClient({
        log: ["query", "error", "warn"],
    })

