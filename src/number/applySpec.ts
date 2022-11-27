import { add, applySpec, multiply } from 'ramda'

/**
 * @category Function
 *
 * @description 接受一个属性值为函数的对象，返回一个能生成相同结构对象的函数。
 */

const ap = applySpec({
  sum: add,
  nested: { mul: multiply },
})

ap(2, 3) // { sum: 5, nested: { mul: 6 } }
