<template>
  <client-only>
    <div class="carousel-wrapper">
      <swiper :options="swiperOption" ref="mySwiper" class="my-swiper" @slideChange="bannerChange">
        <swiper-slide
          class="swiper-item"
          v-for="item in picList"
          :key="item.index"
        >
          <img :src="item.pic" alt="" />
          <div class="subtitle" ref="swiperSub">

            {{item.title}}

            

          </div>

          <div class="subtitle-fllt" :style="{width:subtileWidth + 'px'}">

           {{item.title}}

        
          </div>
        </swiper-slide>
      </swiper>

      <div class="pagination">

        <span v-for="(iot,index) in picList" :class="[activeIot==index?'iotActive':'iot']"  :key="iot.index">

        

        </span>
        
      </div>
    </div>
  </client-only>
</template>

<script>
import { getCarousel } from "@/api/home.js";
import qs from "query-string";
import { IMGURL } from "@/utils/webSet.js";
export default {
  data() {
    return {
      picList: [],
      swiperOption: {
        slidesPerView: 1,
        loop: true,
        observer: true, // 启动动态检查器(OB/观众/观看者)
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        // autoplay: {
        //   delay: 2000,
        //   disableOnInteraction: false,
        // }
      },
      activeIot:0
    };
  },
  filters: {
    handleImg(val) {
      return IMGURL + val;
    },
  },
  mounted() {
    this.get_Carousel();
  },
  computed:{

    swiperDom(){
      return this.$refs.mySwiper.swiper
    },
    subtileWidth(){

      if(this.$refs.mySwiper){

        return this.$refs.swiperSub
      }else{
        return 0
      }
      
    }

  },

  methods: {
    get_Carousel() {
      let msg = qs.stringify({
        currentPage: 1,
        pageSize: 5,
      });
      getCarousel(msg).then((res) => {
        let { code, data } = res;
        if (code == "200") {
          this.picList = data.rows;
        }
      });
    },

    bannerChange() {

   

      this.activeIot = this.swiperDom.activeIndex;
      
    
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel-wrapper {
  width: 100%;

  height: 200px;
  overflow: hidden;

  position: relative;

  .my-swiper {
    width: 100%;
    height: 200px;

    .swiper-item > img {
      width: 100%;
      height: 200px;
    }

    .swiper-item > .subtitle{
      position: absolute;
      top: 25px;
      right: 50px;
      padding: 2px 15px;
      background-color: rgba(238, 238, 238, 0.9);
      font-size: 14px;
      color: #0088f5;
      font-weight: bold;
      border-top-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    .swiper-item > .subtitle-fllt{

        position: absolute;
      top: 20px;
      right: 45px;
      padding: 2px 15px;
      background-color: #fff;
      opacity: 0.4;
      font-size: 14px;
      color:#fff;
      font-weight: bold;
      border-radius: 2px;

    }
  }

  .pagination{
    position: absolute;
    z-index: 99;
    width: 200px;
    height: 20px;
    bottom: 5px;
    
    left: 50%;
    margin-left: -100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .iot{

      background-color: rgba(238, 238, 238, 0.5);

      width:10px;
      height: 10px;
      display: inline-block;
      margin-right: 6px;
      border-radius: 50%;

    }
    .iotActive{

       background-color: rgba(238, 238, 238, 0.5);

      width:30px;
      height: 10px;
      display: inline-block;
      margin-right: 6px;
      border-radius: 10px;

      
    }
  }
}
</style>
