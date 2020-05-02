//混入简单点来讲就是把相同可以复用的代码进行抽离，一般设计复用组件时推荐使用，或者有大量复用的代码
import backTop from "components/common/backtop/backTop.vue";
export const backTopMix = {
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0, 1000);
    },
    listenShow(pops) {
      this.isShow = -pops.y > 667;
    }
  },
  components:{
    backTop
  }
}