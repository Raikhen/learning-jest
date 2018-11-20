const hello = (root, args, ctx, info) => {
  const { name } = args
  return `Hello${name ? `, ${name}` : ''}!`
}

export default hello
