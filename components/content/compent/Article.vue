<template>
    <div class="article">
        <ul>
            <li>
               <div class="list-item">
                   <div class="pic">
                       <img src="@/static/layout/article-pic.png" alt="">
                   </div>
                   <div class="cont">
                        <div class="title">
                            收到
                        </div>
                        <div class="subTitle">

                        </div>
                        <div class="other">

                        </div>
                   </div>
               </div>
            </li>
            <li>
               <div class="list-item">
                   收到
               </div>
            </li>
        </ul>
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
    .article{
        width: 100%;
        ul{
            padding-left: 0px;
            li{
                list-style: none;
                .list-item{
                    width: 100%;
                    height: 134px;
                    display: flex;
                    flex-direction: row;
                    padding: 8px;
                    background-color: #f8f8f8;
                    margin-top: 16px;
                    .pc{
                        width: 166px;
                        height: 117px;
                        margin-right: 10px;
                    }
                    .cont{
                        width: calc(100% - 176px);
                        height: 117px;
                        
                    }
                }
            }
        }
    }
</style>