<template>
    <div class="head-cont">
         <div class="logo">
                <img src="@/static/layout/logo.svg" alt="">
                <span>年轻依旧</span>
         </div>
         <div class="player">
            在你能做大事之前，你必须对自己有远大的期望。
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
            width: 500px;
            padding-bottom: 10px;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-end;
           
            color: #0088f5;
            font-size: 12px;
           
            
            
        }
    }
</style>