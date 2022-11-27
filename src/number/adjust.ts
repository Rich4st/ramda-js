import { adjust, toUpper } from 'ramda'

/**
 * @category Array
 *
 * @description 对数组中指定索引处的值进行函数转换
 */

adjust(0, (x: number) => x + 1, [1, 2, 3]) // => [2, 2, 3]
adjust(1, toUpper, ['a', 'b', 'c', 'd']) // => ['a', 'B', 'c', 'd']
