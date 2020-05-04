<template>
  <div id="cart">
    <NavBar>
      <div class="nav-home" slot="center">
        购物车(<span>{{cartLength}}</span>)
      </div>
    </NavBar>
    <cartItem />
    <cartBar />
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar.vue";
import cartItem from "./cartChildren/cartItem";
import { mapGetters } from "vuex";
import cartBar from "./cartChildren/cartBar";
export default {
  name: "Cart",
  data() {
    return {};
  },
  components: {
    NavBar,
    cartItem,
    cartBar
  },
  computed: {
    ...mapGetters({ cartLength: "cartListLength" })
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