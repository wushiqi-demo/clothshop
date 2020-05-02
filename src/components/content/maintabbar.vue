<template>
  <div>
    <tabbar id="tab-bar">
      <tabBarItem class="tab-bar-item" path="/home">
        <img slot="icon" src="~assets/img/主页.jpg" />
        <div slot="name">首页</div>
      </tabBarItem>
      <tabBarItem class="tab-bar-item" path="/category" color="red">
        <img slot="icon" src="~assets/img/分类.jpeg" />
        <div slot="name">分类</div>
      </tabBarItem>
      <tabBarItem class="tab-bar-item" path="/cart" color="red">
        <img slot="icon" src="~assets/img/购物车.jpeg" />
        <div slot="name">购物车</div>
      </tabBarItem>
      <tabBarItem class="tab-bar-item" path="/profile" color="red">
        <img slot="icon" src="~assets/img/用户.jpg" />
        <div slot="name">我的</div>
      </tabBarItem>
    </tabbar>
  </div>
</template>
<script>
import tabbar from "components/common/tabbar/tab-bar";
import tabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "maintabbar",
  components: {
    tabbar,
    tabBarItem
  }
};
</script>
<style>
</style>

