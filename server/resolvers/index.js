const hello = require('./queries/hello')
const slowHello = require('./queries/slowHello')

const resolvers = {
  Query: {
    hello,
    slowHello
  }
}

module.exports = resolvers
