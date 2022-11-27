import { andThen, pick } from 'ramda'

/**
 * @category Function
 *
 * @description 传入一个函数，返回一个新函数，新函数接收一个 Promise，当 Promise resolve 时，执行传入的函数
 */

let person: any = null

const fetchMember = () =>
  Promise.resolve({ firstName: 'Bob', lastName: 'Loblaw', id: 42 })

const onSuccess = (member: any) => {
  person = pick(['firstName'], member)
}

andThen(onSuccess, fetchMember()).then(() => {
  console.log('done', person)
})
