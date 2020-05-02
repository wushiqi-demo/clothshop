<!--  -->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      dafault: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },

  components: {},

  computed: {},

  mounted() {
    // 这种方法document.querySelectorAll方法不是较好的方法，不要直接用class来获取，应当通过ref
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });
    this.scroll.on("scroll", pops => {
      this.$emit("backtopclick", pops);
      // console.log(pops);
    });
    this.scroll.on("pullingUp", () => {
      // console.log("上拉加载更多");
      this.$emit("pullUp");
    });
  },

  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      // console.log("-----------");
      this.scroll && this.scroll.refresh();
    },
    getScrollY() {
      return this.scroll.y ? this.scroll.y : 0;//scroll属性y是当时的y轴的值，既是纵向的位置
    }
  }
};
</script>
<style scoped>
</style>
