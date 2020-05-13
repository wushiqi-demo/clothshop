<template>
  <div class="gooditem" @click="detailClick">
    <!-- 将拿到的数据拆分展示 -->
    <img :src="showImage" @load="goodsItemsImage" />
    <!----load是vue中封装好的，用来检测图片是否加载完成--->
    <div class="good-info">
      <p>
        <nobr>{{goodsitems.title}}</nobr>
      </p>
      <span class="price">{{goodsitems.price}}</span>
      <span>{{goodsitems.cfav}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    goodsitems: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    goodsItemsImage() {
      //利用路由来选择发出的事件，路由是根据不同的页面发射不同的事件
      // if (this.$route.path.indexOf('/home')) {
      //    this.$bus.$emit("goodsItemsImageLoad"); //事件总线，所有的vue组件都可以监听这个时间总线
      // }else if (this.$route.path.indexOf('/detail')) {
      //   this.$bus.$emit("recommendImageLoad");
      // }
      //时间总线很重要，这个可以和向父组件发送请求不同，他可以往全局发送时间
      this.$bus.$emit("goodsItemsImageLoad"); //可以分别在首页，详情页处理，不用改动封装好的组件。让组件的实用性更强
    },
    detailClick() {
      this.$router.push("/detail/" + this.goodsitems.iid);//跳转的路由，加上参数
    }
  },
  computed: {
    showImage() {
      if (this.goodsitems.image) {
        return this.goodsitems.image;
      } else {
        return this.goodsitems.show.img;
      }
      // return this.goodsitems.image || this.goodsitem
      s.show.img; //||是或的逻辑关系，如果前面的为空，去后面的值
    }
  }
};
</script>
<style>
/* .after {
  content: "";
  display: block;
  clear: both;
} */
.gooditem {
  position: relative;
  padding-bottom: 40px;
  width: 48%;
}
.gooditem img {
  width: 100%;
  margin-bottom: 10px;
  padding: 2px;
  border-radius: 5px;
}
.good-info {
  position: absolute;
  bottom: 4px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
  font-size: 12px;
}
.good-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.price {
  margin-right: 20px;
}
</style>