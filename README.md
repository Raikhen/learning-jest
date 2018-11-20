# Passage to consciousness
## Matchers
For a complete list, check https://jestjs.io/docs/en/expect.

### Equality:
- `expect().toBe` checks if pointers are pointing to the same thing.
- `expect().toEqual` checks recursively.

Fun fact: you can write something like `expect('foo').not.toEqual('bar')`.

### Related to truthiness:
- toBeNull
- toBeUndefined
- toBeDefined
- toBeTruthy
- toBeFalsy

### Numeric:
- toBeGreaterThan
- toBeGreaterThanOrEqual
- toBeLessThan
- toBeLessThanOrEqual
- toBeCloseTo (for floats (using toBe or toEqual with floats may not work))

### For strings:
- toMatch (is like an includes method)

### For arrays:
- toContain

### For error handling:
- toThrow

## Testing async code
### When it uses callbacks
```javascript
test('something async worked!', () => {
  const callback = (data) => {
    expect(data).toEqual(42)
    done() // This done() does the trick!
  }

  meaningOfLife(callback)

  // Playing (I think this may work too)
  expect.assertions(1)
  const res = await new Promise(resolve => meaningOfLife)
  expect(res).toEqual(42)
})
```

### With promises
```javascript
test('something', () => {
  expect.assertions(1)

  return meaningOfLife.then((data) => {
    expect(data).toBe(42)
  })
})
```

## Setup and teardown
### Before and after
beforeEach(f) and afterEach(f) to handle what happens before and after each test().
To handle what happens before and after all tests use beforeAll and afterAll.

### Scoping
You can use describe() to group tests.

### Debugging
To find testing bugs, you can use test.only() instead of test(), and it will be the only test to run.

## Mock functions
We can define testeable functions with `jest.fn()`.
We can `jest.mock()` stuff to simulate modules.
