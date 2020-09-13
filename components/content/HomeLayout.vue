<template>
    <div class="artice">
       <div class="my-swiper">
           <home-swiper></home-swiper>
       </div>
       <div class="my-houre">
           <home-horse></home-horse>
       </div>
    </div>
</template>
<script>
import HomeSwiper from '@/components/content/compent/HomeSwiper.vue'
import HomeHorse from '@/components/content/compent/HomeHorse.vue'
export default {
    data(){
        return{

        }
    },
    components:{
        HomeSwiper,
        HomeHorse
    }
}
</script>
<style lang="scss" scoepd>
    .artice{
        width: 100%;
        height: 2600px;
        .my-swiper{
            width: 100%;
            height: 230px;
        }
        .my-houre{
            width: 100%;
            height: 36px;
        }
    }
</style>