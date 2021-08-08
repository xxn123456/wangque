<template>
  <div class="search">
    <div class="title">
      <span class="Icon"> <span class="iconfont icon-huo Icon"></span></span>
      <span>群贤必至</span>
    </div>
    <div class="hot-article">
      <ul>
        <li v-for="(hot,index) in hots" :key="hot.index">
          <nuxt-link :to="'/detail?id='+hot.id">
            <span class="hot">{{index+1}}</span><span>{{hot.title}}</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {
    getBlog
  } from '@/api/home.js'
  import qs from 'query-string';
  export default {
    data() {
      return {
        hots: []
      }
    },
    mounted() {
      this.get_Blog();
    },
    methods: {
      get_Blog() {
        let msg = qs.stringify({
          currentPage: 1,
          pageSize: 15,
          categoryName: ""
        })
        getBlog(msg).then((res) => {
          let {
            code,
            data
          } = res;
          if (code == "200") {
            this.hots = data.rows;
          }
          console.log("请求得到数据")

        })

      }
    }
  }

</script>
<style lang="scss" scoped>
  .search {
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-weight: bold;
    color: #555555;
    background-color: #f8f8f8;

    .title {
      height: 40px;
      padding-left: 12px;
      padding-right: 12px;
      line-height: 40px;
      border-bottom: 1px dashed #dadada;

      .Icon {
        margin-right: 10px;
      }

    }

    .hot-article {
      width: 100%;

      height: 332px;
      padding-top: 8px;
      font-weight: 500;

      ul {
        padding-left: 0px;

        li {


          list-style: none;
          font-size: 14px;
          padding-left: 12px;
          padding-right: 12px;
          padding-bottom: 8px;

          a {
            display: inline-block;
            height: 26px;
            text-decoration: none;
            color: #333333;
            font-weight: normal;

            .hot {
              display: inline-block;
              width: 20px;
              font-size: 12px;
              height: 20px;
              line-height: 20px;
              text-align: center;

              background-color: #e8e8e8;
              color: #666666;


              margin-right: 10px;
            }

          }
        }

        li:first-of-type {
          .hot {
            background-color: #7cc0f7;
            color: #fff;
          }

        }

        li:nth-of-type(2) {
          .hot {
            background-color: rgba(76, 175, 80, .6);
            color: #fff;
          }


        }
         li:nth-of-type(3){
                 .hot{
                   background-color: rgba(255,87,34,.6);
                   color: #fff;
                 }
      }
      }
    }
  }

</style>
