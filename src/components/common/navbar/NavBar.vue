<!--  -->
<template>
  <div class="NavBar ">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  // components: {},

  // computed: {},

  // mounted: {},

  // methods: {}
}

</script>
<style scoped>
.NavBar{
  line-height: 44px;
  display: flex;
  font-size: 14px;
}
.left{
  flex: 1;
}
.right{
  flex: 1;
}
.center{
  flex: 4;
}
</style>