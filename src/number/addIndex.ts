import { addIndex, map } from 'ramda'

/**
 * @category Array
 *
 * @description Adds an index to a Array items
 */

const mapIndexExample = addIndex<number | string, number | string>(map)

mapIndexExample((val, idx) => `${val}-${idx}`, ['a', 'b', 'c', 'd']) // => ['a-0', 'b-1', 'c-2', 'd-3']

export {
  mapIndexExample,
}
