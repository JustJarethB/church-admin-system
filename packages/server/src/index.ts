import { router } from 'api'
import { createHTTPServer } from '@trpc/server/adapters/standalone'
import cors from 'cors'

const server = createHTTPServer({ router, middleware: cors() })

server.listen(3000)
console.log("listening on 3000")