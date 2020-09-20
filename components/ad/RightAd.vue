<template>
  <div class="ad">
    <swiper :options="swiperOption" ref="mySwiper" class="my-swiper">
            <swiper-slide class="swiper-item">
                     <img src="@/static/layout/al.jpg" alt="">
              </swiper-slide>
            <swiper-slide class="swiper-item"> 
                        <img src="@/static/layout/al.jpg" alt="">
              </swiper-slide>
           
         </swiper>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        swiperOption: {
          direction: 'vertical',
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
  .ad {
    width: 266px;
   
    height: 88px;
  
    background-color: #dcdcdc;
  
    color: #fff;

    .my-swiper {
      width: 100%;
      height: 100%;
      .swiper-item{
        img{
          width: 266px;
          height: 88px;
        }
      }
    }
  }

</style>
