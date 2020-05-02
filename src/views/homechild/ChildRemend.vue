<template>
  <div id="recommend">
  <div v-for="items in recommend" :key="items.id" class="recommend-items">
    <a :href="items.link">
      <img :src="items.image">
      <div>{{items.title}}</div>
    </a>
  </div>
  </div>
</template>
<script>
export default {
 props: {
    recommend: {
      type: Array,
      default() {
        return [];
      }
    }
  },
}
</script>
<style>
#recommend{
  display: flex;
  width: 100%;
  text-align:center;
  font-size: 12px;
}
.recommend-items{
flex: 1;
}
.recommend-items img{
  width: 65px;
  height: 65px;
  margin-top: 10px;
}
</style>