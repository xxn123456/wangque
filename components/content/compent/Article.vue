<template>
    <div class="article">
        <ul>
            <li v-for="item in articles" :key="item.index">
               <div class="list-item">
                   <div class="pic">
                       <img src="@/static/layout/article-pic.png" alt="">
                   </div>
                   <div class="cont">
                        <div class="title">
                            收到
                        </div>
                        <div class="subTitle">
                               如果可以,你也可以种一颗种子,世界不会更糟
                        </div>
                        <div class="other">
                                <div class="other-lable">
                                      <span class="iconfont icon-shijian" style="font-size:12px;"></span>
                                      <span class="des">2020-09-07</span>
                                </div>
                                 <div class="other-lable">
                                      <span class="iconfont icon-kejianxianshi" style="font-size:12px;"></span>
                                      <span class="des">860</span>
                                </div>
                                 <div class="other-lable">
                                      <span class="iconfont icon-xiaoxi" style="font-size:12px;"></span>
                                      <span class="des">0</span>
                                </div>
                                 <div class="other-lable">
                                      <span class="iconfont icon-xihuan" style="font-size:12px;"></span>
                                      <span class="des">17</span>
                                </div>

                                 <div class="other-lable">
                                      <span class="iconfont icon-rongqi" style="font-size:12px;"></span>
                                      <span class="des">宁静寺</span>
                                </div>
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
              articles:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]
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
                    .pic{
                        width: 166px;
                        height: 117px;
                        margin-right: 10px;
                    }
                    .cont{
                        width: calc(100% - 176px);
                        height: 117px;
                        .title{
                             width: 100%;
                            height: 32px;
                            font-size: 14px;
                            font-weight: bold;

                        }
                        .subTitle{
                             width: 100%;
                            height:calc(100% - 54px);
                            overflow: hidden;
                            font-size: 14px;
                            color: #666666;
                        }
                        .other{
                            width: 100%;
                           
                            padding-right: 10px;
                            height: 22px;
                            line-height: 22px;
                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;
                           
                            align-items: center;
                            font-size: 14px;
                            color: #555555;
                            .other-label{
                                 .des{
                                margin-left: 4px;
                            }

                            }
                           
                           
                            
                        }
                        
                    }
                }
            }
        }
    }
</style>