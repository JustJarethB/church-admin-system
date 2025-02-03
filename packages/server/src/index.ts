import { appRouter } from 'api'
import { createHTTPServer } from '@trpc/server/adapters/standalone'
import cors from 'cors'
import { createContext } from 'api/src/db/context'

const server = createHTTPServer({ router: appRouter, middleware: cors(), createContext })

server.listen(3000)
console.log("listening on 3000")