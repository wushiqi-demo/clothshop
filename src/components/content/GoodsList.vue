<template>
  <div class="goodslist">
    <!-- 遍历拿到的数据 -->
      <listItems v-for="items in goods" :key="items.id" :goodsitems="items" />
    <!-- <div>{{goods}}</div> -->
  </div>
</template>
<script>
import listItems from "./GoodsListItems.vue";
export default {
  components: {
    listItems
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
};
</script>
<style>
.goodslist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /* width:100%; */
}
</style>