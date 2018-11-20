const slowHello = async (root, args, ctx, info) => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      const { name } = args
      resolve(`Hello${name ? `, ${name}` : ''}!`)
    }, 5000)
  })
}

export default slowHello
