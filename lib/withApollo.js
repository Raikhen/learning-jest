import ApolloClient       from 'apollo-boost'
import withApollo         from 'next-with-apollo'
import { InMemoryCache }  from 'apollo-boost'

import { env }            from '../now.json'

// Create cache
const cache = new InMemoryCache()

export default withApollo(({ ctx, headers }) => (
  new ApolloClient({
    cache,
    uri: env.DEV_API_ENDPOINT
  })
))
