<template>
  <div class="carousel-wrapper">
    <div v-swiper:mySwiper="options">
      <div class="swiper-wrapper">
        <div v-for="i in mm" :key="i.index" class="img-wrapper swiper-slide">
          {{i.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mm:[
        {
          name:'hsh'
        },
         {
          name:'yaang'
        },
         {
          name:'dmw'
        }

      ],
      options: {
        slidesPerView: 1,
        loop: true,
         
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
  padding: 40px;
  height: 300px;
  width: 100%;
  .swiper-wrapper{
    height: 300px;
    .swiper-slide {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .img-wrapper img {
    margin: auto;
    width: 200px;
    height: 100px;
    background-image: linear-gradient(gray 100%, transparent 0);
  }

  }
  
}
</style>