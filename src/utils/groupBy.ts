const groupBy = (arr: any[], fn: (...args) => any) => {
  if (!Array.isArray(arr))
    throw new Error('First argument must be an array')

  if (typeof fn !== 'function')
    throw new Error('Second argument must be a function')

  return arr.reduce((prv, cur, index) => {
    const v = fn(cur, index)
    if (!Object.prototype.hasOwnProperty.call(prv, v))
      prv[v] = []
    prv[v].push(cur)
    return prv
  }, {})
}

const result = groupBy(['aaa', 'bbbb', 'ccc', 'dddd', 'eeeee'], v => v.length)

console.log(result)
