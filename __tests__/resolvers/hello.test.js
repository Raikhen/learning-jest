import hello from '../../server/resolvers/queries/hello'

test('Says "Hello" correctly as a function of name', () => {
  const withPaco = hello(null, { name: 'Paco' }, null, null)
  expect(withPaco).toEqual('Hello, Paco!')

  const withoutName = hello(null, {}, null, null)
  expect(withoutName).toEqual('Hello!')
})
