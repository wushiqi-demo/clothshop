<!--  -->
<template>
  <div>
    <div class="ckButton" v-show="!check"></div>
    <img src="~assets/cart/check.jpeg" v-show="check" />
    <div clsss="after"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    check: {
      type: Boolean,
      deafault(){
        return true
      }
    }
  }
};
</script>
<style scoped>
.after {
  content: "";
  display: block;
  clear: both;
}
img {
  width: 19px;
  float: left;
}
.ckButton{
   width: 16px;
   height: 16px;
   border: black solid 1.5px;
   border-radius: 50%;
   float: left;
}
</style>