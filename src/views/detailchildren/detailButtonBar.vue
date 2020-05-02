<!-- 这是详情页底部的工具栏 -->
<template>
  <div class="bottom-bar">
    <div class="barItem barLeft">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="barItem barRight">
      <div class="cart" @click="addtoCart">加入购物车</div>
      <div class="buy">立即购买</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    addtoCart() {
      this.$emit("addtoCart");
    }
  }
};
</script>
<style scoped>
.bottom-bar {
  position: relative;
  z-index: 9;
  height: 49px;
  bottom: 49px;
  display: flex;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
}
.barItem {
  flex: 1;
}
.barLeft {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.barRight {
  display: flex;
}
.cart {
  position: relative;
  background-color: yellow;
  flex: 1;
  padding: 5px 3px;
}
.buy {
  background-color: salmon;
  flex: 1;
  padding: 5px 3px;
}
</style>