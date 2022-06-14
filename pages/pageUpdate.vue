<template>
  <div class="home">
    <div class="head">
      <div class="head-cont">
        <head-main></head-main>
      </div>
    </div>
    <div class="cont-wrap">
      <div class="cont">

        <div class="up-msg">

          <h4>版本开发计划</h4>
          <ul>
            <li><span class="up-state">(√)</span>初始版本x,待定，----构建日期 待定</li>
            <li><span class="up-state">(√)</span>初始版本0.3,新增包含如下功能 文章标签，日志，站点统计，----构建日期 2021-08-20</li>
            <li><span class="up-state">(√)</span>初始版本0.2,新增包含如下功能 背景音乐，会员，评论，资源上传，----构建日期 2021-08-05</li>
            <li><span class="up-state">(√)</span>初始版本0.1,新增包含如下功能 文章,文档归类，图片上传----构建日期 2021-04-20</li>
          </ul>

        </div>

      </div>
    </div>
    <div class="foot">
      <foot-bar></foot-bar>
    </div>


  </div>
</template>
<script>
  import footBar from '@/components/base/footBar.vue'

  import MsgTo from '@/components/base/MsgTo.vue'

  export default {
    data() {
      return {
        canRun: true,
        blogId: this.$route.query.id,
        blog: {
          title: "文章标题",
          content: ""
        }

      }
    },
    components: {

      footBar,

      MsgTo
    },
    mounted() {

    },
    methods: {

    }
  }

</script>

<style lang="scss" scoped>
  .home {
    min-width: 1050px;
    position: relative;
    background-image: url('../static/layout/background.png');
    // background-size: 100% 100%;

    .head {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 60px;
      z-index: 999;
      background-color: rgba(248, 248, 248, 0.6);
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      .head-cont {
        width: 1050px;
        height: 100%;
        margin: 0 auto;
      }
    }

    .cont-wrap {
      width: 100%;
      height: auto;
      background-color: rgba(238, 238, 238, 0.6);

      .cont {
        padding-top: 74px;
        width: 900px;
       
        margin: 0 auto;
        display: flex;
        flex-direction: column;

        .up-msg {
          background-color: #fff;
           min-height: 800px;
           margin-bottom: 30px;
           padding: 20px 30px;

          ul {
            li {
              list-style: none;
              margin-top: 10px;
              width: 100%;
              height: 40px;
              line-height: 40px;
              font-size: 14px;
              color: #666666;

              .up-state {
                padding-left: 12px;
                padding-right: 12px;
              }

            }

          }


        }





      }
    }

    .cont-wrap::-webkit-scrollbar {
      display: none;
    }


    .foot {

      height: 70px;
      background-color: #fff;
      top: 0px;
      left: 0px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;




    }

  }

</style>
