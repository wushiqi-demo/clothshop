import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: [],
    cartLength: 0,
  },
  mutations: {
    addCounter(state, playLoad) {
      playLoad.counter++
      state.cartLength++
    },
    addtoCartList(state, playLoad) {
      playLoad.checked = true //凡是进行状态更改的时候一定要在mutation中更改
      state.cartList.push(playLoad)
      console.log(state.cartList);
    },

  },
  actions: {
    addtoCartList(context, playLoad) {
      ///在开发里面mutations只进行单一的操作
      return new Promise((resolve, reject)=>{
        let oldProduct = context.state.cartList.find(item => item.iid == playLoad.iid)
        if (oldProduct) {
          context.commit('addCounter', oldProduct)
          resolve('商品的数量+1')
        } else {
          context.commit('addtoCartList', playLoad)
          resolve('添加商品成功')
        }
      }) 
        
      
    }
  },
  getters: {
    cartListLength: state => state.cartList.length + state.cartLength,
    cartListGet: state => state.cartList,
    cartChecked: state => state.cartList.filter(item => item.checked == true)
  },
  modules: {}
})