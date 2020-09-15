<!-- The ref attr used to find the swiper instance -->
<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide><img src="https://placehold.jp/500x500.png">I'm Slide 1</swiper-slide>
    <swiper-slide><img src="https://placehold.jp/500x500.png">I'm Slide 2</swiper-slide>
    <swiper-slide><img src="https://placehold.jp/500x500.png">I'm Slide 3</swiper-slide>
    <swiper-slide><img src="https://placehold.jp/500x500.png">I'm Slide 4</swiper-slide>
    <swiper-slide><img src="https://placehold.jp/500x500.png">I'm Slide 5</swiper-slide>
    <swiper-slide><img src="https://placehold.jp/500x500.png">I'm Slide 6</swiper-slide>
    <swiper-slide><img src="https://placehold.jp/500x500.png">I'm Slide 7</swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 3,
           autoplay: {
            delay: 2000,
            disableOnInteraction: false
          },
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true,
          },
          navigation: { //前へ・次へのナビ設定
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    computed: {
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.mySwiper)
      //this.swiper.slideTo(2, 1000, false)
    }
  }
</script>