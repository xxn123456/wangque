<template>
    <div class="head-cont">
         <div class="logo">
                <img src="@/static/layout/logo.svg" alt="">
                <span>年轻依旧</span>
         </div>
         <div class="player">
              <div class="handle-btns">
                         <span class="iconfont icon-houtui Icon"></span>
                          <span class="iconfont icon-zanting Icon"></span>
                          <span class="iconfont icon-qianjin Icon"></span>
                           <span class="iconfont icon-jingyin Icon"></span>
              </div>
              <div class="music-des">
                  我也幻想改变过去的遗憾
              </div>
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
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #333333;
            opacity: 0.8;
            cursor: pointer;
            .handle-btns{
                width: 100%;
                height: 22px;
                display: flex;
                flex-direction: row;
              
                span{
                 
                    font-size: 12px;
                    margin-right: 15px;
                }
            }
           .music-des{
               width: 100%;
               height: 16px;
               font-size: 12px;
              
           }
        }
    }
</style>