<template>
    <div class="artice">
       <div class="my-swiper">
           <home-swiper></home-swiper>
       </div>
       <div class="my-houre">
           <home-horse></home-horse>
       </div>
       <div class="gogle-ad">
            <home-ad></home-ad>
       </div>
       <div class="article-wrap">
           <article-main></article-main>
       </div>
    </div>
</template>
<script>
import HomeSwiper from '@/components/content/compent/HomeSwiper.vue'
import HomeHorse from '@/components/content/compent/HomeHorse.vue'
import HomeAd from '@/components/ad/HomeAd.vue'
import ArticleMain from '@/components/content/compent/Article.vue'
export default {
    data(){
        return{

        }
    },
    components:{
        HomeSwiper,
        HomeHorse,
        HomeAd,
        ArticleMain
    }
}
</script>
<style lang="scss" scoepd>
    .artice{
        width: 100%;
        height: 2600px;
        .my-swiper{
            width: 100%;
            height: 200px;
            margin-bottom: 16px;
          
        
    
        }
        .my-houre{
            width: 100%;
            height: 36px;
            
        }
    }
</style>