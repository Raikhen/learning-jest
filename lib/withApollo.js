import ApolloClient from 'apollo-boost'
import withApollo   from 'next-with-apollo'

import { env }      from '../now.json'

export default withApollo(({ ctx, headers }) => (
  new ApolloClient({ uri: env.DEV_API_ENDPOINT })
))
