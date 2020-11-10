<template>
  <div class="search">
    <div class="start-group">
      <input type="text" class="start-input" placeholder="向外探索,向内觉知">
      <button class="start">搜</button>
    </div>

    <a href="#" class="go">all</a>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    }
  }

</script>
<style lang="scss" scoped>
  .search {
    width: 100%;
  
    padding: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #f8f8f8;

    .start-group{
         width: 200px;
         height: 30px;
         display: flex;
         flex-direction: row;

         .start-input{
            width: 170px;
            height: 100%;
            padding: 6px;
            border: 0px;
            background-color: #dfdfdf;
            color: #757575;
         }
         .start{
             width: 30px;
             height: 30px;
             padding: 0px;
            border: 0px;
            background-color: #c3c3c3;
         }
    }
    .go{
        display: inline-block;
        width: 40px;
        text-align: center;
        height: 30px;
        line-height: 30px;
        text-decoration: none;
        background-color: #dfdfdf;
        color: #757575;
    }
  }

</style>
