<template>
  <div class="nav">
    <ul>
      <li>
        <a href="#" class="active"><span class="iconfont icon-shouye Icon"></span><span>明殿</span></a>
      </li>

      <li>
        <a href="#"><span class="iconfont icon-xin Icon"></span><span>梨园</span></a>
      </li>

      <li>
        <a href="#"><span class="iconfont icon-icon Icon"></span><span>狂浪生</span></a>
      </li>
      <li>
        <a href="#"><span class="iconfont icon-cheliang Icon"></span><span>天涯</span></a>
      </li>
      <li>
        <a href="#"><span class="iconfont icon-taolun Icon"></span><span>树洞</span></a>
      </li>

      <li>
        <a href="#"><span class="iconfont icon-idea Icon"></span><span>向往</span></a>
      </li>

      <li>
        <a href="#"><span class="iconfont icon-jihua Icon"></span><span>规划</span></a>
      </li>
      <li>
        <a href="#"><span class="iconfont icon-daima Icon"></span><span>代码</span></a>
      </li>

      <li>
        <a href="#"><span class="iconfont icon-yishu Icon"></span><span>得道</span></a>
      </li>



      <li>
        <a href="#"><span class="iconfont icon-liuyanban-05 Icon"></span><span>留言板</span></a>
      </li>

      <li>
        <a href="#"><span class="iconfont icon-houtai Icon"></span><span>站点后台</span></a>
      </li>


    </ul>
    <expend-link></expend-link>
  </div>
</template>
<script>
  import '@/assets/icon/iconfont.css'
  import '@/static/fonts/DinRegular.css'
  import ExpendLink from '@/components/base/ExpendLink.vue'
  import {
    getCateName
  } from '@/api/home.js'
  import qs from 'query-string';
  export default {
    data() {
      return {

      }
    },
    components: {
      ExpendLink
    },
    mounted(){
        this.get_CateName();

    },
    methods: {
      get_CateName() {
        let msg = qs.stringify({
          currentPage: 1,
          pageSize:20,
          categoryName: ""
        })
        getCateName(msg).then((res) => {
            console.log("请求得到数据")

        })

      }
    }
  }

</script>
<style lang="scss" scoped>
  .nav {
    width: 160px;
    position: fixed;
    font-weight: 600;

    ul {
      padding-left: 0px;

      li {
        width: 100%;
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 14px;

        a {
          display: block;
          width: 160px;
          height: 42px;
          line-height: 42px;
          margin-bottom: 8px;
          text-decoration: none;
          color: #555555;
          font-family: 'normal-1';

          .Icon {
            margin-right: 12px;
            margin-left: 30px;
          }
        }

        .active {
          background-color: #f8f8f8;
          color: #0088f5;
          font-weight: bold;
        }
      }

    }
  }

</style>
