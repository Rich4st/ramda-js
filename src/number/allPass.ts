import { allPass } from 'ramda'

/**
 * @category Logic
 *
 * @description 判断给定的参数是否满足列表中的所有条件
 * @returns {boolean} 如果给定的参数满足列表中的所有条件，则返回 true，否则返回 false
 */

const isNumber = (x: any) => typeof x === 'number'
const isOdd = (x: number) => x % 2 === 1
// 判断给定的是否是数字并且是奇数
const givenNumberIsOdd = allPass([isOdd, isNumber])

givenNumberIsOdd(1) // => true
givenNumberIsOdd('1') // => false

