<template>
  <div>
    <keep-alive exclude="Detail">
      <router-view v-if="isRouterAlive" />
    </keep-alive>
    <maintabbar />
  </div>
</template>
<script>
import maintabbar from "components/content/maintabbar";
export default {
  components: {
    maintabbar
  },
  data() {
    return {
      isRouterAlive: true
    };
  },
  provide() {
    return {
      reload: this.reload
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true; 
      });
    }
  }
};
</script>
<style>
@import "assets/css/base.css";
</style>
