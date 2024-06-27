const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const cors = require('cors');

const domainList = ['http://localhost:4200', 'http://localhost:4201', 'http://localhost:4202', 'https://tribu-ti-nuevascapacidades-dev-gudkbwefdhd9fmhv.z01.azurefd.net']
 
const corsOptions = {
  origin: function (origin, callback) {
    if (domainList.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
}

server.use(jsonServer.bodyParser)
server.use(middlewares)
server.use(cors())

server.use(router)
server.listen(8181, () => {
  console.log('JSON Server is running on PORT 8181')
})
