<template>
    <div class="head-cont">
         <div class="logo">
                <img src="@/static/layout/logo.svg" alt="">
                <span>历经平凡,向死而生</span>
         </div>
         <div class="player">
              音乐播放
         </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style lang="scss" scoped>
    .head-cont{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .logo{
            width: 406px;
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            img{
                height: 20px;
                margin-right: 48px;
            }
            span{
                height: 18px;
                line-height: 18px;
                color: #0088f5;
                font-size: 12px;
            }
        }
        .player{
            width: 168px;
            height: 100%;
        }
    }
</style>