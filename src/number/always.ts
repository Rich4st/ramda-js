import { always } from 'ramda'

/**
 * @description 返回一个函数，该函数总是返回给定的值
 */

const me = always('Rich4$t') // => () => string
const five = always(5) // => () => number

me() // => Rich4$t
five() // => 520
