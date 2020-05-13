<!--  -->
<template>
  <div class="cate-slide">
    <scroll class="bscroll" ref="scroll">
      <div v-for="(item,index) in cateList" :key="index" @click="slideClick(item.maitKey,index)" class="paper">
        <p :class="{actived: currentIndex===index}">{{item.title}}</p>
      </div>
    </scroll>
  </div>
</template>

<script>
import scroll from "components/common/scroll/Scroll.vue";
export default {
  data() {
    return {
      currentIndex: 0
    };
  },
  props: ["cateList"],
  methods: {
    slideClick(key, index) {
      this.currentIndex = index;
      this.$emit("slideclick", key);
    }
  },
  components: {
    scroll
  }
};
</script>
<style scoped>
.cate-slide {
  height: 100vh;
  width: 20%;
}
.bscroll {
  height: calc(100% - 88px);
  overflow: hidden;
}
.actived {
  color: red;
}
.paper{
 font-size: 16px;
 line-height: 2.0em;
}
</style>