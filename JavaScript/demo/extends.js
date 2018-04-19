function createObject(prototype) {
  function F () {}
  F.prototype = prototype
  return new F()
}


function dad(name) {
  this.name = name
}

dad.prototype.sayName = function () {
  console.log(this.name)
}

dad.prototype.run = function () {
  console.log('fast')
}

function son(name, homework) {
  // 调用父类构造函数，设置从父类继承的属性
  dad.call(this, name)

  // 设置子类属性
  this.homework = homework
}

// 创建 dad.prototype 的副本，继承方法
// son.prototype = Object.create(dad.prototype)
son.prototype = createObject(dad.prototype)
// 完善原型
son.prototype.constructor = son
// 添加子类的方法或者重写父类方法
son.prototype.doHomeWork = function () {
  console.log(this.homework)
}
son.prototype.run = function () {
  console.log('slow')
}

var oldman = new dad('heihei')
var boy = new son('haha', 'yuwen')
oldman.sayName()
boy.sayName()
boy.doHomeWork()

oldman.run()
boy.run()