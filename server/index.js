const next = require('next')
const express = require('express')
const { GraphQLServer } = require('graphql-yoga')

const resolvers = require('./resolvers')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const typeDefs = `
  type Query {
    hello(name: String): String!
    slowHello(name: String): String!
  }
`

app.prepare().then(() => {
  // API
  const api = new GraphQLServer({
    typeDefs,
    resolvers
  })

  api.start(() => console.log('API running!'))

  // Server
  const server = express()

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log('Server running!')
  })
})
