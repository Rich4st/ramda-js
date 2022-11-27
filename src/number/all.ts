import { all } from 'ramda'

/**
 * @category Array
 *
 * @description 判断列表中的所有元素是否满足给定的条件
 * @returns {boolean} 如果列表中的所有元素都满足给定的条件，则返回 true，否则返回 false
 */

all((x: number) => x % 2 === 1, [1, 3, 5, 7, 9]) // => true

const allEven = all((x: number) => x % 2 === 0) // => (list: number[]) => boolean

export {
  allEven,
}
