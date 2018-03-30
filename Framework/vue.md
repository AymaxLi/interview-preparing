# vue 响应式原理


## 追踪变化
  - 利用 `Object.defineProperty`，把我们传给 Vue 实例的 `data` 中的属性全部转为 `getter/setter`
  - 每个组件实例都有相应的 `watcher` 实例对象，它会**在组件渲染的过程中把属性记录为依赖，之后当依赖项的 `setter` 被调用时，会通知 `watcher` 重新计算**，从而致使它关联的组件得以更新。
  ![响应式原理](./images/vue-responsive.png)