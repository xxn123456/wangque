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
          <div class="artice">

            <div class="my-swiper">
              <home-swiper></home-swiper>
            </div>

            <div class="my-houre">
              <home-horse></home-horse>
            </div>


            <div class="gogle-ad">
              <home-ad></home-ad>
            </div>
            <div class="article-wrap">
              <home-main></home-main>
            </div>
          </div>
        </div>
        <div class="aside-ad">
          <aside-ad></aside-ad>
        </div>
        <div class="msg-btns">
          <msg-to></msg-to>

        </div>
      </div>
    </div>
    <div class="foot">
      <foot-bar></foot-bar>
    </div>
    <share></share>

  </div>
</template>
<script>
  import AsideNav from '@/components/base/AsideNav.vue'
  import HeadMain from '@/components/base/HeadMain.vue'
  import AsideAd from '@/components/ad/AsideAd.vue'
  import HomeSwiper from '@/components/base/HomeSwiper.vue'
  import HomeHorse from '@/components/base/HomeHorse.vue'
  import HomeAd from '@/components/ad/HomeAd.vue'
  import HomeMain from '@/components/content/Home.vue'
  import footBar from '@/components/base/footBar.vue'
  import share from '@/components/concat/share.vue'
  import MsgTo from '@/components/base/MsgTo.vue'
  import {
    mapActions
  } from 'vuex';
  export default {
    data() {
      return {
        canRun: true

      }
    },
    components: {
      AsideNav,
      HeadMain,
      AsideAd,
      HomeSwiper,
      HomeHorse,
      HomeAd,
      HomeMain,
      footBar,
      share,
      MsgTo
    },
    created(){
       this.setCateid(8);
    },
    mounted() {
      this.getScroll();
      this.changeLeft(8);
      
    },
    methods: {
      ...mapActions({
        setScrollTop: 'blog/setScrollTop',
          changeLeft: 'blog/changeLeft',
           setCateid:"blog/setCateName"
      }),
      getScroll() {
        window.addEventListener('scroll', () => {
          let top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
          if (!this.canRun) return;
          this.canRun = false;
          setTimeout(() => {
            this.setScrollTop(top);
            this.canRun = true;
          }, 500);
        })
      }
    }
  }

</script>

<style lang="scss" scoped>
  .home {
    min-width: 1050px;
    position: relative;

    .head {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 60px;
      z-index: 999;
      background-color: #fff;
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
      background-color: rgba(238, 238, 238, 0.5);

      .cont {
        padding-top: 74px;
        width: 1050px;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .artice {
          width: 100%;
          height: 2600px;

          .my-swiper {
            width: 100%;
            height: 200px;
            margin-bottom: 16px;



          }

          .my-houre {
            width: 100%;
            height: 36px;

          }
        }

        .aside-nav {
          width: 160px;

        }

        .content {
          width: 594px;
          height: 2715px;
        }

        .aside-ad {
          width: 266px;
        }

        .msg-btns {
          position: fixed;
          margin-left: 1100px;
          bottom: 180px;


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
