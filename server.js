const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(jsonServer.bodyParser)
server.use(middlewares)

server.use(router)
server.listen(8181, () => {
  console.log('JSON Server is running on PORT 8181')
})
