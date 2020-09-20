<template>
    <div class="ad">
        <div class="search-warp">
              <search></search>
        </div>
        <div class="hot-some">
             <hot-some></hot-some>
        </div>

        <div class="ad-msg">
               <right-ad></right-ad>
        </div>
        <calendar></calendar>
        <div class="art-tag-warp" style="position: sticky; top: 100px;">
                  <article-tag></article-tag>
        </div>

    </div>
</template>
<script>
import Search from '@/components/content/compent/Search.vue'
import HotSome from '@/components/content/compent/HotSome.vue'
import RightAd from '@/components/ad/RightAd.vue'
import calendar from '@/components/base/calendar.vue'
import articleTag from '@/components/base/articleTag.vue'
export default {
    data(){
        return{

        }
    },
    components:{
        Search,
        HotSome,
        RightAd,
        calendar,
        articleTag
    }
}
</script>
<style lang="scss" scoped>
    .ad{
         width: 266px;
         height: 100%;
         .search-warp{
             height: 44px;
             margin-bottom: 16px;
         }
         .hot-some{
             height: 394px;
             margin-bottom: 16px;
         }
         .ad-msg{
             width: 226px;
             height: 90px;
         }
         .art-tag-warp{
             margin-top: 15px;
            
             width: 266px;
            
         }
    }
</style>