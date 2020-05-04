
<template>
  <div class="cartBar">
    <div class="btn" @click="checkAll">
      <checkAll class="checked" :check="isSelectAll" />
      <span>全选</span>
    </div>
    <div class="con">
      <span class="price">合计:{{'￥'+totalPrice}}</span>
      <span class="Calculation">去计算({{cartChecked.length}})</span>
    </div>
  </div>
</template>

<script>
import checkAll from "./checkButton";
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },

  components: {
    checkAll
  },

  computed: {
    ...mapGetters({ cartChecked: "cartChecked", cartListGet: "cartListGet" }),
    totalPrice() {
      let result = this.$store.getters.cartChecked;
      return result
        .reduce(
          (preValue, item) => preValue + item.newPrice * item.counter,
          0 //0是第二个参数，reduce方法中传入了两个参数
        )
        .toFixed(2);
    },
    isSelectAll() {
      let res = this.cartListGet.find(item => item.checked === false);
      if (this.cartListGet.length == 0) return false;
      return res == null;
    }
  },

  methods: {
    checkAll() {
      let result = this.cartListGet.filter(item => item.checked === false);
      if (result.length !== 0) {
         for (const item of result) {
        item.checked = true;
      }
      }else{
        for (const item of this.cartListGet) {
          item.checked = false
        }
      }
     
    }
  }
};
</script>
<style scoped>
.cartBar {
  position: fixed;
  bottom: 49px;
  background-color: #eeeeee;
  display: flex;
  width: 100%;
  height: 44px;
}
.btn {
  flex: 1;
  padding: 10px 9px;
}
.con {
  flex: 4;
}
.Calculation {
  float: right;
  background-color: red;
  height: 100%;
  font-size: 16px;
  width: 100px;
  padding: 10px 9px;
}
.price {
  position: relative;
  top: 9px;
}
</style>