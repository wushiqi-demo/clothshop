<template>
  <div id="home">
    <div class="top">
      <NavBar>
        <div class="nav-home" slot="center">购物街</div>
      </NavBar>
    </div>

    <tabControl
      class="tabcontrol"
      :title="['流行','新款','精选']"
      @tabclick="tabcilck"
      v-show="isTabFixed"
      ref="tabcontrolcopy"
    />

    <Bscroll
      class="bscroll"
      ref="scroll"
      @contentScroll="contentScroll"
      :probeType="3"
      :pull-up-load="true"
      @pullUp="pullUp"
    >
      <div>
        <ChildSwiper :result="result" @swiperLoad="swiperLoad"></ChildSwiper>
      </div>
      <div>
        <ChildRecommend :recommend="recommend"></ChildRecommend>
      </div>
      <div>
        <Feature />
      </div>
      <div>
        <tabControl
          :title="['流行','新款','精选']"
          @tabclick="tabcilck"
          ref="tabControl"
          v-show="!isTabFixed"
        />
      </div>
      <div>
        <GoodsList :goods="goods[type].list" />
      </div>
    </Bscroll>
    <backTop @backTopclick="backTop" v-show="isShow" />
  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from "components/common/navbar/NavBar.vue";
import Bscroll from "components/common/scroll/Scroll.vue";
import backTop from "components/common/backtop/backTop.vue";

import tabControl from "components/content/tabControl.vue";
import GoodsList from "components/content/GoodsList.vue";
import { getHomeMultidata, getHomeGoodsdata } from "network/home.js";

import { debounce } from "common/debounce.js";

import ChildSwiper from "./homechild/ChildSwiper.vue";
import ChildRecommend from "./homechild/ChildRemend.vue";
import Feature from "./homechild/Feature.vue";
export default {
  data() {
    return {
      result: null,
      recommend: null,
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      type: "pop", //这是tabcontrol里面的实时的type属性
      isShow: false,
      taCoffsetTop: 0,
      isTabFixed: false,
      scrollY: 0,
      imgeLoadListener: null
    };
  },
  inject: ["reload"],
  components: {
    NavBar,
    ChildSwiper,
    ChildRecommend,
    Feature,
    tabControl,
    GoodsList,
    Bscroll,
    backTop,
    // // Swiper,
    // // SwiperItem
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoodsdata("pop");
    this.getHomeGoodsdata("new");
    this.getHomeGoodsdata("sell");
    // console.log( this.getHomeGoodsdata("sell"));
  },
  activated() {
    // this.$refs.scroll.scrollTo(0,this.scrollY,0)
    this.$refs.scroll.scrollTo(0, this.scrollY);
    // console.log(this.scrollY);

    this.$refs.scroll.refresh();
  },
  updated() {
    const reload = debounce(this.reload,150)
    reload()
  },
  deactivated() {
    this.scrollY = this.$refs.scroll.getScrollY();
    // console.log(this.scrollY);
    //离开时销毁发来的全局事件，当再次加入的时候，声明周期函数会再次处理发来的图片加载事件
    this.$bus.$off("goodsItemsImageLoad", this.imgeLoadListener);
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 100); //防抖函数的调用
    this.imgeLoadListener = () => {
      refresh(); //刷新，防止图片异步加载过来的时候，滚动的长度不会刷新改变的问题
    };
    this.$bus.$on("goodsItemsImageLoad", this.imgeLoadListener);
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.result = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getHomeGoodsdata(type) {
      const page = this.goods[type].page + 1;
      getHomeGoodsdata(type, page).then(res => {
        //  console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // console.log(this.goods['new'].list);
      });
    },
    tabcilck(index) {
      // console.log(index);

      switch (index) {
        case 0:
          this.type = "pop";
          break;
        case 1:
          this.type = "new";
          break;
        case 2:
          this.type = "sell";
          break;

        default:
          "pop";
          break;
      }
      this.$refs.tabcontrolcopy.indexcurrent = index;
      this.$refs.tabControl.indexcurrent = index;
      //保证吸顶效果的不影响后面内容的显示
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(pops) {
      // console.log(pops);
      this.isShow = -pops.y > 1000; //向下滚动时，y轴的值时负的，这是应当先转换为正值然后比较
      this.isTabFixed = -pops.y > this.taCoffsetTop - 44;
    },
    pullUp() {
      this.getHomeGoodsdata(this.type); //让首页拿到下一页的数据
      this.$refs.scroll.finishPullUp(); //支持多次的上滑加载，如果不用finishPullUp()方法只加载一次
    },
    swiperLoad() {
      // console.log(this.$refs.tabControl.$el.offsetTop);
      this.taCoffsetTop = this.$refs.tabControl.$el.offsetTop;
    }
  }
};
</script>
<style scoped>
.top {
  margin-bottom: 44px;
}
.nav-home {
  background-color: pink;
  color: #ffffff;
  text-align: center;
  /* 下面的属性是在用浏览器原生滚动的时候 */
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
#home {
  /* padding-top: 44px; */
  height: 100vh;
}
.tabcontrol {
  position: relative;
  z-index: 9;
}
.bscroll {
  height: calc(100% - 44px);
  overflow: hidden;
  margin-top: 1px;
}
</style>
