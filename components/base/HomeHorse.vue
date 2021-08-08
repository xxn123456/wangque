<template>
<client-only>
  <div class="ad">
    <swiper :options="swiperOption" ref="mySwiper" class="my-swiper">
            <swiper-slide class="swiper-item">
        我想去纽约
              </swiper-slide>
            <swiper-slide class="swiper-item"> 

        我想说的都在推特
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
    padding-left: 24px;
    padding-right: 24px;
    height: 36px;
    line-height: 36px;
    background-color: #fff;
    font-size: 14px;
    color: #666666;
    

    .my-swiper {
      width: 100%;
      height: 24px;
    }
  }

</style>
