<!-- 购物车列表展示的内容 -->
<template>
  <div>
    <ul>
      <li class="li" v-for="(item,index) in $store.getters.cartListGet" :key="index">
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
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  // components: {},

  // computed: {},

  // mounted: {},

  // methods: {}
}

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
.price{
  color: red;
  position: relative;
  left: 4px;
}
.counter{
  position: absolute;
  right: 14px;
}
</style>