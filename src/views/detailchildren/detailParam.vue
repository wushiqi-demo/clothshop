<!-- 这是详情页商品的参数信息 -->
<template>
  <div v-if="Object.keys(params).length !== 0">
    <div>
      <table>
        <tr v-for="items in params.infos" :key="items.key">
          <td class="small-td">{{items.key}}</td>
          <td class="big-td">{{items.value}}</td>
        </tr>
        <tr v-for="(items,index) in params.size[0]" :key="index">
          <td class="small-td">{{items[0]}}</td>
          <td class="big-td">{{items[1]}}</td>
        </tr>
      </table>
    </div>
    <div v-if="params.image">
      <img :src="params.image" class="info-image"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    params: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style scoped>
.small-td {
  font: 12px/1.5em;
  border: 1px solid;
  width: 30%;
}
.big-td{
  font: 12px/1.5em;
  border: 1px solid;
  width: 70%;
}
table {
  margin-top: 5px;
  box-shadow: 0px -2px 20px 2px rgba(0, 0, 0, 0.5);
  border-collapse: collapse;
}
.info-image{
  width: 100%;
}
</style>