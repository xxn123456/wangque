<template>
  <client-only>
    <div class="carousel-wrapper">

      <swiper :options="swiperOption" ref="mySwiper" class="my-swiper">
              <swiper-slide class="swiper-item" v-for="item in picList" :key="item.index">
                         <img :src="item.pic|handleImg" alt="">
                </swiper-slide>
            
        <div class="swiper-pagination"></div>
             
           
      </swiper>






    </div>
  </client-only>
</template>

<script>
  import {
    getCarousel
  } from '@/api/home.js';
  import qs from 'query-string';
  import {IMGURL} from '@/utils/webSet.js'
  export default {
    data() {
      return {
        picList:[],
        swiperOption: {
          slidesPerView: 1,
          loop: true,
          observer: true, // 启动动态检查器(OB/观众/观看者)
          observeParents: true, // 修改swiper的父元素时，自动初始化swiper
          autoplay: {
            delay: 2000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
          }
        }
      }
    },
      filters:{
      handleImg(val){
        return IMGURL + val
      }

    },
    mounted(){
      this.get_Carousel();
    },
    
    methods: {

      get_Carousel() {
        let msg = qs.stringify({
          currentPage: 1,
          pageSize: 5
        });
        getCarousel(msg).then((res) => {
          let {
            code,
            data
          } = res;
          if (code == "200") {
            this.picList=data.rows;
           
          }

        })

      }
    }
  }

</script>

<style lang="scss" scoped>
  .carousel-wrapper {
    width: 100%;

    height: 200px;
    overflow: hidden;

    .my-swiper {
      width: 100%;
      height: 200px;

      .swiper-item>img {
        width: 100%;
        height: 200px;

      }
    }





  }

</style>
