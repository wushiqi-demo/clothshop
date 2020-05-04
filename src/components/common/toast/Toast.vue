<!-- 这是文件弹窗 -->
<template>
  <div class="toast" v-show="show">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default() {
        return "";
      }
    },
    show: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(169, 169, 169, 0.75);
}
</style>