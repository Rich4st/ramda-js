import { aperture } from 'ramda'

/**
 * @category List
 *
 * @description 将传入列表中的元素分为 N元组，返回一个新的列表
 */

const ap = aperture(3)

ap([1, 2, 3, 4, 5, 6, 7, 8, 9])// => [[1, 2, 3], [2, 3, 4], [3, 4, 5], [4, 5, 6], [5, 6, 7], [6, 7, 8], [7, 8, 9]]
