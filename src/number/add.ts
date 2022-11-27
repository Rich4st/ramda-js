import { add } from 'ramda'

/**
 * @category Number
 *
 * @description 两数相加
 */

const addOne = (x: number) => add(x) // => (y: number) => number

add(1)(2) // => number, 3

export {
  addOne,
}
