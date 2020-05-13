<template>
  <div>
    <NavBar class="top">
      <div class="nav-home" slot="center">商品分类</div>
    </NavBar>
    <div class="lay">
    <CategorySlide :cate-list="categoryList" @slideclick="slideclick" class="slide"/>
     <SubCategory :subList="subList" class="sub" /> 
     </div>
  </div>
</template>
<script>
import { getCategory, getSubcategory } from "network/category";
import NavBar from "components/common/navbar/NavBar.vue";
import CategorySlide from "./categoryChildren/CategorySlide";
import SubCategory from "./categoryChildren/SubCategory";
export default {
  name: "Category",
  data() {
    return {
      categoryList: [],
      subList: [],
      key: ""
    };
  },
  components: {
    NavBar,
    CategorySlide,
    SubCategory
  },
  created() {
    this.getCategory();
  },
  methods: {
    getCategory() {
      getCategory().then(res => {
        this.categoryList = res.data.category.list;
        this.getSubcategory(  this.categoryList[0].maitKey); //在拿到列表的同时对做一个展示分类详情的初始化
      });
    },
    getSubcategory(maitKey) {
      getSubcategory(maitKey).then(res => {
        this.subList = res.data;
        console.log(this.subList);
      });
    },
    slideclick(key) {
      this.key = key;
      console.log(key);
      this.getSubcategory(this.key);
    }
  }
};
</script>
<style scoped>
.top {
  margin-bottom: 44px;
}
.nav-home {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  text-align: center;
  font-size: 20px;
  background-color: pink;
  color: #ffffff;
}
.lay{
  display: flex;
  position: fixed;
  top: 44px;
}
.slide{
  flex: 1;
}
.sub{
  flex: 4;
}
</style>

  

