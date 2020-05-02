<!--  -->
<template>
  <div id="tab-control">
    <div
      v-for="(items,index) in title"
      :key="index"
      class="tabcontrol-items"
      :class="{active:index===indexcurrent}"
      @click="actions(index)"
    >
      <span>{{items}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      indexcurrent: 0
    };
  },
  methods: {
    actions(index) {
      this.indexcurrent = index;
      this.$emit('tabclick',index)
    }
  }
};
</script>
<style scoped>
#tab-control {
  display: flex;
  background-color: #ffffff;
}
.tabcontrol-items {
  text-align: center;
  line-height: 40px;
  height: 44px;
  font-size: 14px;
  flex: 1;
}
.active {
  color: red;
}
.tabcontrol-items span{
  border-bottom: 1px solid ;
}
</style>