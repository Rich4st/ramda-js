interface User {
  id: number
  name: string
  age: number
  sex: string
}

const createValues = (creator: any, length: number) => Array.from({ length }, creator)

const createUser = (_, k): User => ({ id: Math.random() * 3 >> 0, name: `name${k}`, age: Math.random() * 20 >> 0, sex: 'male' })

const result = createValues(createUser, 1)

console.log(result) // => [ { id: 0, name: 'name0', age: *, sex: 'male' } ]
