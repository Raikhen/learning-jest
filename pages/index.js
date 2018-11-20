import React      from 'react'
import gql        from 'graphql-tag'
import { Query }  from 'react-apollo'

const query = gql`
  query Hello($name: String) {
    slowHello(name: $name)
  }
`

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <Query query={query}>
          {
            ({ error, loading, data }) => {
              if (loading) return 'Loading...'
              if (error) return 'Error 729!'
              return data.slowHello
            }
          }
        </Query>
        <p>
          This project is simply to test Jest. Hehe.
        </p>
        <style global jsx>
          {
            `
              body {
                color: lime;
                font-family: monospace;
                background-color: black;
              }
            `
          }
        </style>
      </div>
    )
  }
}

export default IndexPage
