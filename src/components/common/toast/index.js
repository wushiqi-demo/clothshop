import Toast from './Toast.vue'
const obj = {}
//通过下面的函数构造一个原形，让任何一个组件都可以实现调用Toast中的方法
// Toast是一个组件，用来实现弹窗
obj.install = function (Vue) {
  //组件构造器
  const toastConstructor = Vue.extend(Toast)
  // 声明toast对象
  const toast = new toastConstructor()
  //  手动挂载到div或者一个元素上面
  toast.$mount(document.createElement('div'))
 //将toast挂载到body上才可以完成模板的显示
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast = toast
}
export default obj