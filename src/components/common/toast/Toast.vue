<!-- 这是文件弹窗 -->
<template>
  <div class="toast" v-show="show">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  // props: {
  //   message: {
  //     type: String,
  //     default() {
  //       return "";
  //     }
  //   },
  //   show: {
  //     type: Boolean,
  //     default: false
  //   }
  // },
  data() {
    return {
      message: "",
      show: false
    };
  },
  methods: {
    showToast(message, during=1000) {
      this.message = message;
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, during);
    }
  }
};
</script>
<style scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 999;
  transform: translate(-50%, -50%);
  background: rgba(169, 169, 169, 0.75);
}
</style>