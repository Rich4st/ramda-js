const userInfo = Array.from({ length: 10000 }, (v, k) => {
  return {
    id: k,
    name: `name${k}`,
    age: k + 10,
    avatar: `https://avatars.githubusercontent.com/u/${Math.floor(Math.random() * 1000)}`,
  }
})

const scoreInfo = Array.from({ length: 10000 }, (v, k) => {
  return {
    id: k,
    score: k + 100,
    comment: `comment${k}`,
    stars: k + 10,
  }
})

console.time('test')

// better than following code, because it's only one loop. Only take about 34ms
const scoreMap = scoreInfo.reduce((prv, cur) => {
  prv[cur.id] = cur
  return prv
}, {} as Record<number, typeof scoreInfo[0]>)

const result = userInfo.map((user) => {
  return {
    ...user,
    ...scoreMap[user.id],
  }
})

// It take about 144ms
// const result = userInfo.map((user) => {
//   const score = scoreInfo.find(item => item.id === user.id)
//   return {
//     ...user,
//     ...score,
//   }
// })

console.timeEnd('test')
