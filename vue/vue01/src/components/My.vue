<template>
  <div id="name">
    <p id="title">江西软件大学</p>
    <div v-for="index in lists" v-bind:key="index">{{index}}</div>
    <div v-if="isShow">江西省南昌市</div>
    <div v-for="index2 in lists" v-bind:key="index2+6">{{index2}}</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      lists:[1,2,3,4,5,6],
      isShow:true
    }
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
  #name{
      background-color:rgba(212, 0, 255, 0.178);
      #title{
        color: rgba(17, 74, 230, 0.644);
        font-size: 30px;
      }
    }
</style>
