const hello = (root, args, ctx, info) => {
  const { name } = args
  return `Hello${name ? `, ${name}` : ''}!`
}

module.exports = hello
