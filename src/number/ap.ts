import { ap, concat, toUpper } from 'ramda'

/**
 * @category Function
 *
 * @description 将函数列表作用与值列表上
 */

ap([concat('tasty - '), toUpper], ['foo', 'bar']) // => ['tasty - foo', 'tasty - bar', 'FOO', 'BAR']
