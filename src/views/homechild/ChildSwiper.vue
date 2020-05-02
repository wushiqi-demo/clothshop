<!--  -->
<template>
  <div>
    <Swiper>
      <SwiperItem v-for="items in result" :key="items.id">
        <a :href="items.link">
          <img :src="items.image" @load="swiperLoad" />
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index.js";
export default {
  data() {
    return {
      isLoad: false
    };
  },
  props: {
    result: {
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
  methods: {
    swiperLoad() {
      if (!this.isLoad) {
        this.$emit("swiperLoad");
        // console.log('------------');
        this.isLoad = true;
      }
    }
  }
};
</script>
<style scoped>
</style>