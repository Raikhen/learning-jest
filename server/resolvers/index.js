import hello      from './queries/hello'
import slowHello  from './queries/slowHello'

const resolvers = {
  Query: {
    hello,
    slowHello
  }
}

module.exports = resolvers
