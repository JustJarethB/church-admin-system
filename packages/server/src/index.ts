import { createExpressMiddleware } from '@trpc/server/adapters/express';
import express from 'express';
import { appRouter } from 'api'
import cors from 'cors'
import { createContext } from 'api'
const PORT = 3000
const app = express()
app.use(cors());
app.use(
    '/',
    createExpressMiddleware({
        router: appRouter,
        createContext,
    }),
);
const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error)
    }
    console.log(`listening on`, server.address())
})
