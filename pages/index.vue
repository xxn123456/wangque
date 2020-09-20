<template>
  <div class="home">
    <div class="head">
      <div class="head-cont">
        <head-main></head-main>
      </div>
    </div>
    <div class="cont-wrap">
      <div class="cont">
        <div class="aside-nav">
          <aside-nav></aside-nav>
        </div>
        <div class="content">
          <home-layout></home-layout>
        </div>
        <div class="aside-ad">
          <aside-ad></aside-ad>
        </div>
      </div>

    </div>
    <div class="bg">

    </div>

  </div>
</template>
<script>
  import AsideNav from '@/components/base/AsideNav.vue'
  import HeadMain from '@/components/base/HeadMain.vue'
  import HomeLayout from '@/components/content/HomeLayout.vue'
  import AsideAd from '@/components/base/AsideAd.vue'

  export default {
    data() {
      return {

      }
    },
    components: {
      AsideNav,
      HeadMain,
      HomeLayout,
      AsideAd
    }
  }

</script>

<style lang="scss" scoped>
  .home {
    position: relative;
    .bg{
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;
        background-image: url('../static/layout/bg.gif');
    }
    .head {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 60px;
      z-index: 999;
      background-color: rgba(248,248,248,0.9);
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
    
        height:auto;
        background-color: #eeeeee;
      
      
    
      .cont {
        padding-top: 74px;
        width: 1050px;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        

        .aside-nav {
          width: 160px;
         
         
        }

        .content {
          width: 594px;
         
        
       
        }
     
     

        .aside-ad {
          width: 266px;
        }

      }
    }
      .cont-wrap::-webkit-scrollbar {
    display: none;
}

  }

</style>
