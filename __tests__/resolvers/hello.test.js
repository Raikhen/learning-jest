const hello = require('../../server/resolvers/queries/hello')

test('Says "Hello" correctly as a function of name', () => {
  const withPaco = hello(null, { name: 'Paco' }, null, null)
  expect(withPaco).toBe('Hello, Paco!')

  const withoutName = hello(null, {}, null, null)
  expect(withoutName).toBe('Hello!')
})
