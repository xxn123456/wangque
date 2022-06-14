<template>
<client-only>
  <div class="ad">
    <swiper :options="swiperOption" ref="mySwiper" class="my-swiper">
            <swiper-slide class="swiper-item">
                  努力！奋斗！
              </swiper-slide>
            <swiper-slide class="swiper-item"> 

                 另一个我
              </swiper-slide>
           
         </swiper>
  </div>
</client-only>
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
    width: 100%;
    padding-left: 36px;
    padding-right: 36px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    font-size: 14px;
    color: #666666;
    background-image: url('/layout/up.png');
    background-repeat: no-repeat;
    

    .my-swiper {
      width: calc(100% - 10px);
      height: 40px;
      margin-left: 8px;

    }
  }

</style>
