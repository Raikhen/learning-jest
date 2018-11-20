import next               from 'next'
import express            from 'express'
import { GraphQLServer }  from 'graphql-yoga'

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

const resolvers = {
  Query: {
    hello(root, args, ctx, info) {
      const { name } = args
      return `Hello${name ? `, ${name}` : ''}!`
    },
    async slowHello(root, args, ctx, info) {
      return await new Promise((resolve, reject) => {
        setTimeout(() => {
          const { name } = args
          resolve(`Hello${name ? `, ${name}` : ''}!`)
        }, 5000)
      })
    }
  }
}

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
