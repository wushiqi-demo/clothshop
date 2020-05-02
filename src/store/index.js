import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCounter(state, playLoad) {
      playLoad.counter++
    },
    addtoCartList(state, playLoad) {
      playLoad.checked = true//凡是进行状态更改的时候一定要在mutation中更改
      state.cartList.push(playLoad)
      console.log(state.cartList);
    },

  },
  actions: {
    addtoCartList(context, playLoad) {
      // state.cartList.push(playLoad)
      // console.log( state.cartList);
      ///在开发里面mutations只进行单一的操作
      let oldProduct = context.state.cartList.find(item => item.iid == playLoad.iid)

      if (oldProduct) {
        context.commit('addCounter', oldProduct)
        // oldProduct.counter += 1;
        // oldProduct.title = '这个属性已经被更改'
      } else {
        // state.cartList.push(playLoad)//这个事件放到mutation里面执行
        context.commit('addtoCartList', playLoad)
      }

    }
  },
  getters: {
    cartListLength: state => state.cartList.length,
    cartListGet: state => state.cartList,
  },
  modules: {}
})