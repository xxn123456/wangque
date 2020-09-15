<template>
    <div class="ad">
        <div class="search-warp">
              <search></search>
        </div>
        <div class="hot-some">
             <hot-some></hot-some>
        </div>
    </div>
</template>
<script>
import Search from '@/components/content/compent/Search.vue'
import HotSome from '@/components/content/compent/HotSome.vue'
export default {
    data(){
        return{

        }
    },
    components:{
        Search,
        HotSome
    }
}
</script>
<style lang="scss" scoped>
    .ad{
         width: 266px;
         .search-warp{
             height: 44px;
             margin-bottom: 16px;
         }
         .hot-some{
             height: 394px;
             margin-bottom: 16px;
         }
    }
</style>