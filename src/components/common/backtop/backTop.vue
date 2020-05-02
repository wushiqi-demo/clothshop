<!--  -->
<template>
  <div class="backTop">
    <img src="~assets/common/top.png" @click="backTopclick">
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  methods: {
    backTopclick(){
      this.$emit('backTopclick')
    }
  },
}

</script>
<style scoped>
.backTop{
  position: fixed;
  right: 8px;
  bottom: 60px;
}
.backTop img{
  height: 49px;
  width: 49px;
}
</style>