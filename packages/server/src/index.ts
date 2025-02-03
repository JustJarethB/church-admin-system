import { router } from 'api'
import { createHTTPServer } from '@trpc/server/adapters/standalone'
import cors from 'cors'
import { createContext } from 'api/src/db/context'

const server = createHTTPServer({ router, middleware: cors(), createContext })

server.listen(3000)
console.log("listening on 3000")