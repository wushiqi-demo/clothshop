<template>
    <div>
      <div  @click="items">
      <slot name="icon"></slot>
     <div :style="ActiveColor"> <slot name="name"></slot></div>
      </div>
    </div>
</template>

<script>
export default {
  name: "tabBarItem",
  props: {
    path: String,
    color:{
      type:String,
      default:'red'
    }
  },
  data() {
    return {
    };
  },
  methods: {
    items() {
 this.$router.push(this.path)
    }
  },
  computed:{
    //判断当前的路径是否为活跃的路径
    isActive(){
      return this.$route.path.indexOf(this.path) !==-1//indexof()会进行检索，如果没有找到会返回-1,用来判断是否活跃
    },
    ActiveColor(){
      return this.isActive ? {color:this.color}:{}//先判断，问好后面是返回的结果值
    }
  }
};
</script>
<style scoped>
</style>