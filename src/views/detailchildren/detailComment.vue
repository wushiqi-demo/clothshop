<!-- 这是用户的评论的信息 -->
<template>
  <div v-if="Object.keys(commentInfo).length !==0" class="comment-info">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" />
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{new Date(commentInfo.created) | dateFormat('YYYY年-MM月-DD日')}}</span><br>
        <span>{{commentInfo.style}}</span>
      </div>
    </div>
    <div class="info-imgs">
      <img :src="item" v-for="(item,index) in commentInfo.images" :key="index" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters:{
  },
};
</script>
<style scoped>
.comment-info {
  padding: 50px;
  color: #333;
  border-bottom: 5px solid #f2f5f8;
}
.info-header {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 1);
}
.header-title{
float: left;
margin-right: 10px;
font-size: 13px;
}
.info-user{
  padding:10px 0 0px;
  position: relative;
}
.info-user span{
  font-size: 15px;
  margin-left: 10px;
  padding: 0;
  margin: 0;
}
.info-user img{
 width: 20%;
 vertical-align:bottom;
}
.info-detail{
  padding: 0 5px 15px;
}
.info-detail p{
  font-size: 14px;
}
.info-other{
  font: 8px/2em '宋体';
  text-align: right;
}
.info-imgs{
  display: flex;
  flex-wrap: wrap;
}
.info-imgs img{
  width: 20%;
  margin-right: 2px;
}
</style>