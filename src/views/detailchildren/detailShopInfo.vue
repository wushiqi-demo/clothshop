<!--  -->
<template>
  <div>
    <div class="shop-logo">
      <img :src="shop.logo" />
      <span class="shop-name">{{shop.name}}</span>
      <span class="borderRight">
        <div class="shop-score" v-for="item in shop.score" :key="item.id">
          <span>{{item.name+":"}}</span>
          <span>{{item.score}}</span>
        </div>
      </span>
    </div>
    <div class="shop-cell">
      <div class="S-number">
        <span>
          {{sells}}
          <br />
          <span>销量</span>
        </span>
      </div>

      <div class="G-number">
        <span>
          {{shop.goodsCount}}
          <br />
          <span>全部宝贝</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    sells() {
      let num = 0;
      if (this.shop.sells >= 10000) {
        num = this.shop.sells / 10000;
        return num.toFixed(1) + "万";
      } else {
        num = this.shop.sells;
        return num;
      }
    }
  }
};
</script>
<style scoped>
.after {
  content: "";
  display: block;
  clear: both;
}
.shop-logo {
 margin-top: 6px;
  position: relative;
}
.shop-logo img {
  height: 88px;
  width: 88px;
}
.shop-name {
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #000000;
  position: absolute;
  top: 38px;
  font-weight: bold;
}

.G-number {
  position: absolute;
  left: 53.2px;
  top: 0px;
  border-left: 2px solid green;
  padding-left: 7px;
}
.shop-cell {
  position: relative;
   box-shadow: 1px 1px 1px #808080 ;
}
.borderRight {
  margin-right: 12px;
}
</style>