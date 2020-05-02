
<template>
  <div v-if="Object.keys(goods) !== 0">
    <div class="info-title">{{goods.title}}</div>
    <span class="n-price">{{goods.newPrice}}</span> 
       <span class="o-price">{{goods.oldPrice}}</span> 
       <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
       <br>
    <div class="info-other" v-if="goods.columns">
    <span>{{goods.columns[0]}}</span>
     <span>{{goods.columns[1]}}</span>
     <span>{{goods.columns[2]}}</span>
  </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
    };
  },
  props:{
    goods:{
      type:Object,
      deafalt(){
        return {}
      }
    }
  }
}

</script>
<style scoped>
.info-title{
  margin-bottom: 10px;
  font-size: 14px;
}
.n-price{
  font-size: 14px;
  margin-right: 5px;
}
.o-price{
  font-size: 10px;
 text-decoration:line-through;
  margin-right: 5px;
}
.discount{
  border-width: 2px;
  border-radius: 10px;
  background-color: pink;
  font-size: 12px;
}
.info-other{
  padding-right: 10px;
  font-size: 10px;
  font-style:inherit;
  margin-top: 10px;
  display: flex;
}
.info-other span{
  flex: 1;
}
</style>