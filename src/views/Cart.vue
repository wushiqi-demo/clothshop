<template>
  <div id="cart">
    <NavBar>
      <div class="nav-home" slot="center">购物车({{$store.getters.cartListLength}})</div>
    </NavBar>
    <cartItem/>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar.vue";
import cartItem from './cartChildren/cartItem'
export default {
  name: "Cart",
  data() {
    return {
      
    };
  },
  components: {
    NavBar,
    cartItem,
  },

  methods: {}
};
</script>
<style scoped>
.nav-home {
  background-color: pink;
  color: #ffffff;
  text-align: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
#cart {
  padding-top: 44px;
}
</style>