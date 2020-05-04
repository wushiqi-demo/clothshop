<!-- 购物车列表展示的内容 -->
<template>
  <div>
    <div
      class="li"
      v-for="(item,index) in $store.getters.cartListGet"
      :key="index"
      @click="item.checked=!item.checked"
    >
      <div class="item-selector">
        <checkButton :check="item.checked" />
      </div>
      <div class="cartItem">
        <div class="cartImge">
          <img :src="item.image" />
        </div>
        <div class="cartInfo">
          <p class="title">{{item.title}}</p>
          <p class="desc">{{item.desc}}</p>
          <span class="price">{{item.newPrice}}</span>
          <span class="counter">{{'x'+item.counter}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import checkButton from "./checkButton";
export default {
  data() {
    return {
      checked: false
    };
  },
  methods: {
    itemChange() {
      let result = this.cartList.filter(item => item.checked === true);
      this.checkedAll =
        result.length > 0 && result.length === this.cartList.length;
    }
  },
  components: {
    checkButton
  }
};
</script>
<style scoped>
.cartItem {
  display: flex;
}
.cartImge {
  flex: 1;
}
.cartImge img {
  width: 100%;
}
.cartInfo {
  flex: 1;
  width: 85%;
}
.cartInfo p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0;
  margin: 0;
}
.desc {
  font: 12px/1.5em STKaiti;
}
.title {
  font: 14px/2em "黑体";
}
.price {
  color: red;
  position: relative;
  left: 4px;
}
.counter {
  position: absolute;
  right: 14px;
}
</style>