<!--  -->
<template>
  <div id="detail">
    <detailChildren @titleClick="titleClick" ref="title" />
    <scroll class="content" ref="scroll" @backtopclick="contentScroll" :probeType="3">
      <detailSwiper :Swiperimage="topImage" />
      <detailBaseInfo :goods="goods" />
      <detailShopInfo :shop="shop" />
      <detailShopBase :shopInfo="shopInfo" @imageLoad="loadClick" />
      <detailParam :params="params" ref="params" />
      <detailComment :comment-info="commentInfo" ref="comment" />
      <GoodsList :goods="recommends" ref="recommends" />
    </scroll>
    <detailButtonBar @addtoCart="addtoCart" />
    <backTop @click.native="backTopClick" v-show="isShow" />
    <Toast :message="message" :show="show" />
  </div>
</template>

<script>
import detailChildren from "./detailchildren/detailChildren";
import detailSwiper from "./detailchildren/detailSwiper";

import detailBaseInfo from "./detailchildren/detailBaseInfo";
import detailShopInfo from "./detailchildren/detailShopInfo";
import detailShopBase from "./detailchildren/detailShopBase";
import detailParam from "./detailchildren/detailParam";
import detailComment from "./detailchildren/detailComment";
import detailButtonBar from "./detailchildren/detailButtonBar";

import scroll from "components/common/scroll/Scroll.vue";
import Toast from "components/common/toast/Toast.vue";

import GoodsList from "components/content/GoodsList";

import { getDetail, Shop, goodsInfo, goodsParams } from "network/detail.js";
import { getRecommend } from "network/recommend.js";
import { debounce } from "common/debounce.js";
import { backTopMix } from "common/mixIn.js";

import { mapActions } from "vuex";
export default {
  name: "Detail",
  mixins: [backTopMix],
  data() {
    return {
      iid: null,
      topImage: [],
      shop: {},
      goods: {},
      shopInfo: {},
      params: {},
      commentInfo: {},
      recommends: [],
      imgeLoadListener: null,
      themeTopY: [],
      getScrollY: null,
      counter: 1,
      show: false,
      message: ""
    };
  },
  components: {
    detailChildren,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo,
    detailShopBase,
    scroll,
    detailParam,
    detailComment,
    GoodsList,
    detailButtonBar,
    Toast
  },
  created() {
    this.iid = this.$route.params.iid;
    //拿出相关的详情页的数据
    getDetail(this.iid).then(res => {
      const data = res.result;
      this.topImage = data.itemInfo.topImages;
      // console.log(data);
      // 创建我们的店铺信息
      this.shop = new Shop(data.shopInfo);
      this.goods = new goodsInfo(data.itemInfo, data.columns, data.services);
      this.shopInfo = data.detailInfo;
      this.params = new goodsParams(data.itemParams.info, data.itemParams.rule);
      this.commentInfo = data.rate.list[0];
      // console.log(this.commentInfo);
      //拿到每个导航应当滑动的值
      this.getScrollY = debounce(() => {
        this.themeTopY = [];
        this.themeTopY.push(0);
        this.themeTopY.push(this.$refs.params.$el.offsetTop - 48);
        this.themeTopY.push(this.$refs.comment.$el.offsetTop);
        this.themeTopY.push(this.$refs.recommends.$el.offsetTop);
      }, 100);
    });
    //拿评论页的数据
    getRecommend().then(res => {
      this.recommends = res.data.list;
    });
  },
  deactivated() {
    this.$bus.$off("goodsItemsImageLoad", this.imgeLoadListener);
  },
  mounted() {
    //和首页代码重复的很多，做好用混入 mixIn来封装
    const refresh = debounce(this.$refs.scroll.refresh, 100); //防抖函数的调用
    this.imgeLoadListener = () => {
      refresh(); //刷新，防止图片异步加载过来的时候，滚动的长度不会刷新改变的问题
    };
    this.$bus.$on("goodsItemsImageLoad", this.imgeLoadListener); //监听的函数后，第二个参数是处理函数
  },
  methods: {
    ...mapActions({ addtoCartList: "addtoCartList" }),
    loadClick() {
      this.$refs.scroll.refresh();
      this.getScrollY();
      // this.themeTopY = [];
      // this.themeTopY.push(0);
      // this.themeTopY.push(this.$refs.params.$el.offsetTop);
      // this.themeTopY.push(this.$refs.comment.$el.offsetTop);
      // this.themeTopY.push(this.$refs.recommends.$el.offsetTop);
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopY[index], 1000);
    },
    contentScroll(pops) {
      this.listenShow(pops);
      for (let key = 0; key < this.themeTopY.length; key++) {
        let themeTopY = this.themeTopY;
        const length = themeTopY.length;
        if (
          themeTopY[key] < -pops.y &&
          -pops.y < themeTopY[key + 1] &&
          key < length - 1
        ) {
          this.$refs.title.currentIndex = key;
        } else if (key === length - 1 && -pops.y > themeTopY[key]) {
          this.$refs.title.currentIndex = key;
        }
      }
    },
    addtoCart() {
      const product = {};
      product.iid = this.iid;
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.newPrice = this.goods.realPrice;
      product.image = this.topImage[0];
      product.counter = this.counter;
      // this.$store.cartList.push(product),这种做法不太推荐，在使用vuex时 ，使用mutations来改变state中的值
      // this.$store.dispatch("addtoCartList", product);
      this.addtoCartList(product).then(res => {
        this.message = res;
        this.show = true;
        setTimeout(() => {
          this.show = false;
        }, 1500);
      });
    }
  }
};
</script>
<style scoped>
.content {
  height: calc(100% - 44px);
  overflow: hidden;
  /* calc中的100%是父组件的高度 ，父组件的高度应当是100%*/
}
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
</style>