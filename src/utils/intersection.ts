const intersection = (a: any[], b: any[], key: string) => {
  const map = new Map()

  a.forEach(v => map.set(v[key], key))

  return b.filter(v => map.has(v[key]))
}

const a = [
  { foo: 1 },
  { foo: 2, baz: '22' },
  { foo: 3 },
]

const b = [
  { foo: 2 },
  { bar: 3 },
  { foo: 4 },
]

console.log(intersection(a, b, 'foo')) // => [ { foo: 2 }, { foo: 3 } ]);
