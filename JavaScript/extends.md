# JavaScript 中的继承
- [JavaScript 中的继承](#javascript-%E4%B8%AD%E7%9A%84%E7%BB%A7%E6%89%BF)
  - [组合继承 combination inheritance](#%E7%BB%84%E5%90%88%E7%BB%A7%E6%89%BF-combination-inheritance)
  - [改善](#%E6%94%B9%E5%96%84)

## 组合继承 combination inheritance
将**原型链**和**借用构造函数**的技术结合起来
``` javascript
function dad(name) {
  this.name = name
}

dad.prototype.sayName = function () {
  return this.name
}

function son(name, homework) {
  // 调用父类构造函数，设置从父类继承的属性
  dad.call(this, name)  // 第一次调用父类构造函数

  // 设置子类属性
  this.homework = homework
}

// 继承方法
son.prototype = new dad() // 第二次调用父类构造函数
// 完善原型
son.prototype.constructor = son
// 添加子类的方法或者重写父类方法
son.prototype.doHomeWork = function () {
  return this.homework
}

var oldman = new dad('heihei')
var boy = new son('haha', 'yuwen')
oldman.sayName()
boy.sayName()
boy.doHomeWork()
```
组合继承**利用原型链继承父类方法**，**借用构造函数继承父类属性**，弥补了各自的缺陷。然而还是第二次调用父类构造函数构造子类的 `prototype` 时，子类的 `prototype` 上**会有父类的属性**，这些属性会**被实例上的属性所覆盖**，这无疑造成了资源空间的浪费。

## 改善
``` javascript
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
son.prototype = Object.create(dad.prototype)
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

oldman.run() // fast
boy.run() // slow
```
**使用父类原型的副本作为子类原型**，这样子子类原型上便不会有多余的父类属性，专注于父类方法的继承。

*若担心 Object.create 兼容性问题可使用下面函数代替*
``` javascript
function createObject(prototype) {
  function F () {}
  F.prototype = prototype
  return new F()
}
```
