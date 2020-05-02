<!-- 显示商品的详情 -->
<template>
  <div v-if="Object.keys(shopInfo).length !== 0" class="goodsInfo">
    <div>
      <div class="desc">{{shopInfo.desc}}</div>
    </div>
    <div class="info-key">{{shopInfo.detailImage[0].key}}</div>
    <div>
      <img
        v-for="(items, index) in shopInfo.detailImage[0].list"
        :key="index"
        :src="items"
        class="info-image"
        @load="detailLoadImage"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {
          imgeLength: 0
        };
      }
    }
  },
  methods: {
    detailLoadImage() {
      let counter = 0;
       this.$emit("imageLoad");
      // if (++counter === this.imgeLength) {
      //   this.$emit("imageLoad");
      // }
    }
  },
  watch: {
    detailImage() {
      this.imgeLength = this.shopInfo.detailImage[0].list.length;
    }
  }
};
</script>
<style scoped>
.info-image {
  width: 100%;
}
.desc {
  font:  16px/1.5em arial, verdana;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>