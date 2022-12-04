/**
 *
 * @description 具有next方法且可以使用for of遍历的对象
 */

const mEntries = (v: any[]) => {
  let index = 0
  const length = v.length

  const next = () => {
    if (index < length) {
      return {
        value: [index, v[index++]],
        done: false,
      }
    }
    return { value: undefined, done: true }
  }

  return {
    next,
    [Symbol.iterator]() { return this },
  }
}

const a = [12, 23, 34, 98, 76, 54, 32, 10, 87, 65, 43, 21]

const mIterato = mEntries(a)
for (const [k, v] of mIterato)
  console.log(k, v)

