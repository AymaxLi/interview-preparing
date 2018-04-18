// 异步操作
function work(url) {
  return new Promise((resolve, reject) => {
    setTimeout(_ => {
      resolve(url)
    }, Math.random() * 5 * 1000)
  })
}

// 任务列表
let urls = [
  '1 https://fabiaoqing.com/search/search/keyword/%E6%9D%83%E5%BE%8B%E4%BA%8C',
  '2 http://n.sinaimg.cn/ent/4_ori/upload/d411fbc6/20170927/OJ9Z-fymesmq8502845.gif',
  '3 http://www.dachuantuan.com/uploadfile/2017/1211/20171211093255435.jpg',
  '4 http://pic.cr173.com/up/2017-6/2017621172176384.jpg',
  '5 http://moviepic.manmankan.com/yybpic/yanyuan/29095.jpg',
  '6 https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEnuvhLqyDfDDNFb3-nAFeL_4qn3Pz658cnA70xvCET0RXMgz1Eg',
  '7 https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmEtL5FQkyRog2uec9MycO91Oqz2Plwhtd4DtyV3URcHc09YTv'
]

// Promise.resolve()
// .then(_ => {
//   return work(1).then(console.log)
// })
// .then(_ => {
//   return work(2).then(console.log)
// })
// .then(_ => {
//   return work(3).then(console.log)
// })
// .then(_ => {
//   return work(4).then(console.log)
// })
// .then(_ => {
//   return work(5).then(console.log)
// })

// 上面代码等于 ↓

// 串行执行
urls.reduce((prePromise, curUrl) => {
  return prePromise.then(_ => {
    return work(curUrl).then(console.log)
  })
}, Promise.resolve())

// 传值串行执行·
// urls.reduce((prePromise, curUrl) => {
//   return prePromise.then(_ => {
//     console.log(_.slice(0,15))

//     return work(curUrl).then(res => {
//       console.log(res)
//       return res
//     })
//   })
// }, Promise.resolve('123456'))

