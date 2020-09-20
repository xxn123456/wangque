<template>
  <div class="art-tags">
    <div class="art-tag" v-for="tag in artTags" :key="tag.index">
      <div class="pic">
        <span class="iconfont icon-shouye"></span>
      </div>
      <div class="des">
        {{tag.value}}
      </div>

    </div>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        artTags: [{
            value: "数学"
          },
          {
            value: "计算机"
          },
          {
            value: "诗和远方"
          },
          {
            value: "网络"
          },
          {
            value: "javascript"
          }
        ]
      }
    }
  }

</script>
<style lang="scss" scoped>
  .art-tags {
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: #fff;

    .art-tag {
        display: inline-flex;
     
         margin-bottom: 10px;
         margin-right: 8px;
      

      .pic {
        width: 24px;
        height: 24px;
        background-color: #e8e8e8;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
       
    
      }

      .des {
        font-size: 12px;
        height: 24px;
        line-height: 24px;
        padding-left: 8px;
        padding-right: 8px;
        background-color: #dfdfdf;
      
      

      }

    }


  }

</style>
