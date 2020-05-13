<!-- 不同类别的的详情 -->
<template>
  <div class="sub-category">
    <Bscroll class="bscroll">
    <div class="category-detail">
      <div v-for="(item,index) in subList.list" :key="index" class="category-detail-item">
        <div>
          <a :href="item.link">
            <div class="box">
              <img :src="item.image" alt="分类" />
              {{item.title}}
            </div>
          </a>
        </div>
      </div>
    </div>
    </Bscroll>
  </div>
</template>

<script>
import Bscroll from "components/common/scroll/Scroll.vue";
export default {
  props: ["subList"],
  components: {
    Bscroll
  },
};
</script>
<style scoped>
.sub-category{
  height: 100vh;
}
.category-detail {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-left: 13px;
}
.category-detail-item {
  margin-bottom: 3px;
}
.box {
  text-align: center;
  width: 70px;
  font-size: 16px;
}
.box img {
  width: 65px;
  margin-bottom: 7px;
}
  .bscroll {
  height: calc(100% - 90px);
  overflow: hidden;
  margin-top: 1px;
}
</style>