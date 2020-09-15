<template>
    <div class="nav">
        <ul>
            <li>
               <a href="#" class="active"><span class="iconfont icon-shouye Icon"></span><span>主页</span></a>
            </li>

             <li>
               <a href="#"><span class="iconfont icon-shouye Icon"></span><span>粉巷</span></a>
            </li>

              <li>
               <a href="#"><span class="iconfont icon-shouye Icon"></span><span>天涯</span></a>
            </li>
             <li>
               <a href="#"><span class="iconfont icon-shouye Icon"></span><span>天涯</span></a>
            </li>
            <li>
               <a href="#"><span class="iconfont icon-shouye Icon"></span><span>主页</span></a>
            </li>

             <li>
               <a href="#"><span class="iconfont icon-shouye Icon"></span><span>粉巷</span></a>
            </li>

              <li>
               <a href="#"><span class="iconfont icon-shouye Icon"></span><span>天涯</span></a>
            </li>
             <li>
               <a href="#"><span class="iconfont icon-shouye Icon"></span><span>天涯</span></a>
            </li>
        </ul>
        <expend-link></expend-link>
    </div>
</template>
<script>
import '@/assets/icon/iconfont.css'
import '@/static/fonts/DinRegular.css'
import ExpendLink from '@/components/base/ExpendLink.vue'
export default {
    data(){
        return{

        }
    },
    components:{
        ExpendLink
    }
}
</script>
<style lang="scss" scoped>
    .nav{
        width: 160px;
        position: fixed;
    
        ul{
            padding-left: 0px;
            li{
                width: 100%;
                list-style: none;
                display: flex;
                flex-direction: row;
                justify-content:center;
                align-items: center;
                font-size: 14px;
                a{
                    display: block;
                    width: 160px;
                    height: 42px;
                    line-height: 42px;
                    margin-bottom: 8px;
                    text-decoration: none;
                    color: #6d6d6d;
                    font-family:'normal-1';

                    .Icon{
                        margin-right: 12px;
                        margin-left: 30px;
                    }
                }
                  .active{
                background-color: #f8f8f8;
                color: #0088f5;
                font-weight: bold;
            }
            }
          
        }
    }
</style>