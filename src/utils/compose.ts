const fivePercenOff = (price: number) => price * 0.95
const fiftyOff = (price: number) => price > 200 ? price - 50 : price

const compose = (...args: ((price: number) => number)[]): (price: number) => any => {
  if (args.length === 0)
    return arg => arg

  return args.reduce((a, b) => (...args) => a(b(...args)))
}
const getPrice = compose(fivePercenOff, fiftyOff)

console.log(getPrice(100))
