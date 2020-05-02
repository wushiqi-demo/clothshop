<template>
  <div id="detail-nav">
    <NavBar>
      <div class="detailImg" slot="left" @click="backClick">
        <img src="~assets/common/back.svg">
      </div>
      <div class="title" slot="center">
        <div v-for="(items,index) in title" 
        :key="index" 
        class="items" 
        @click="DetailClick(index)"
        :class="{'active':currentIndex===index}">
          {{items}}
        </div>
      </div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    DetailClick(index) {
      this.currentIndex = index;
      this.$emit('titleClick',index)
    },
    backClick(){
      this.$router.back()
    }
  },
  components: {
    NavBar
  }
};
</script>
<style scoped>
#detail-nav{
  position: relative;
  z-index: 10;
  background-color: #ffffff;
}
.title {
  display: flex;
}
.items {
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.active{
  color: red;
}
.items span {
  border-bottom: 1px solid;
}
</style>