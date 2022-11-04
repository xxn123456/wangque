<template>
  <div class="home">
     <div class="head">
        <div class="head-cont">
          <head-main></head-main>
        </div>
      </div>
      <div class="cont-wrap">
        <div class="cont">
           <detail-main :blog="blog"></detail-main>
        </div>
      </div>
      <div class="foot">
         <foot-bar></foot-bar>
      </div>
    
  </div>
</template>
<script>
  import AsideNav from '@/components/base/AsideNav.vue'
  import HeadMain from '@/components/base/Banner.vue'
  import AsideAd from '@/components/ad/AsideAd.vue'
  import footBar from '@/components/base/footBar.vue'
  import DetailMain from '@/components/content/ArticleDetail.vue'
  import MsgTo from '@/components/base/MsgTo.vue'
  import {
    mapActions
  } from 'vuex';

  import {
    getBlogDetail
  } from '@/api/home.js'

   import qs from 'query-string';

  export default {
    data() {
      return {
        canRun: true,
        blogId:this.$route.query.id,
        blog:{
          title:"文章标题",
          content:""
        }

      }
    },
    components: {
      AsideNav,
      HeadMain,
      AsideAd,
      footBar,
      DetailMain,
      MsgTo 
    },
    mounted() {
      this.getScroll();
      this.get_BlogDetail();
    },
    methods: {
      ...mapActions({
        setScrollTop: 'blog/setScrollTop'
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
      },
      get_BlogDetail(){
        let msg=qs.stringify({
          id: this.blogId,
        });
        getBlogDetail(msg).then((res)=>{
          let {code,data}=res;
          if(code=="200"){
            this.blog=data
          }

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
      background: #fff;
     

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
        width: 900px;
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
         .msg-btns{
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
