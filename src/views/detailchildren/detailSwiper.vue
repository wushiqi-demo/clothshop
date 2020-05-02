<!-- 这是详情页的轮播图 -->
<template>
  <Swiper class="detail">
    <SwiperItem v-for="item in Swiperimage" :key="item">
      <img :src="item"  @load="imgLoad"/>
    </SwiperItem>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index.js";
export default {
  data() {
    return {};
  },
  props: {
    Swiperimage: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },

  // computed: {},

  // mounted: {},

   methods: {
     imgLoad(){
       
     }
   }
};
</script>
<style scoped>
.detail {
  overflow: hidden;
  height: 300px;
  width: 100%;
}
</style>