<template>
  <div class="carousel-wrapper">

    <swiper :options="swiperOption" ref="mySwiper" class="my-swiper">
            <swiper-slide class="swiper-item">
                  <img src="@/static/layout/github-open.jpg" alt="">
              </swiper-slide>
            <swiper-slide class="swiper-item"> 
                          111
              </swiper-slide>
           
         </swiper>

    1


  </div>
</template>

<script>
  export default {
    data() {
      return {
        mm: [{
            name: 'hsh'
          },
          {
            name: 'yaang'
          },
          {
            name: 'dmw'
          }

        ],
        swiperOption: {
          slidesPerView: 1,
          loop: true,
          observer: true, // 启动动态检查器(OB/观众/观看者)
          observeParents: true, // 修改swiper的父元素时，自动初始化swiper
          autoplay: {
            delay: 2000,
            disableOnInteraction: false
          },
        }
      }
    }
  }

</script>

<style lang="scss" scoped>
  .carousel-wrapper {
    width: 100%;

    height: 100%;

    .my-swiper{
      width: 100%;
      height: 200px;
      .swiper-item>img{
         width: 100%;
      height: 200px;

      }
    }
   




  }

</style>
