// var a = {}

// Object.defineProperty(a, 'name', {
//   get: val => {
//     console.log('get')
//     return val
//   },
//   set: newVal => {
//     console.log(`name change to ${newVal}`)
//   }
// })

// a.name
// a.name = 5
// console.log(a.name)

function aVue (data) {
  this.data = data

  let descriptor = (data, key) => ({
    get: _ => {
      console.log(`get ${key}`)
      return data['_' + key]
    },
    set: newVal => {
      console.log(`set ${key}`)
      data['_' + key] = newVal
    }
  })

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      this.data['_' + key] = this.data[key]
      Object.defineProperty(this.data, key, descriptor(this.data, key))
    }
  }

}

var b = new aVue({name: 'haha', age: 2})

console.log(b.data.name) // 触发 getter
console.log('---')
b.data.name = 'heihei' // 触发 setter
console.log('---')
console.log(b.data.name)
