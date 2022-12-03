interface LoginOption {
  username: string
  password: string
}

const login = (option: LoginOption): Promise<any> => {
  console.log('🚀 ~ file: index.ts:7 ~ login ~ option', option)
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve({ token: 'token' })
    }, 1000)
  })
}

const getUserInfo = (username: string): Promise<any> => {
  console.log('🚀 ~ file: index.ts:16 ~ getUserInfo ~ username', username)
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve(18)
    }, 1000)
  })
}

const getOrderById = (orderId: number): Promise<any> => {
  console.log('🚀 ~ file: index.ts:25 ~ getOrderById ~ orderId', orderId)
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve({ orderId, productName: 'iPhone' })
    }, 1000)
  })
}

const initData: LoginOption = {
  username: 'admin',
  password: '123456',
}

const runPromises = (promiseCreator: any[], initData: LoginOption) => {
  return promiseCreator.reduce((promise, next) => {
    return promise.then(data => next(data))
  }, Promise.resolve(initData))
}

runPromises([login, getUserInfo, getOrderById], initData).then(res => console.log(res))
