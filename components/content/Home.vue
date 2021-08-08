<template>
  <div class="article">
    <ul>
      <li v-for="item in articles" :key="item.index">
        <a @click="to_detail(item)" class="to-detail">
          <div class="list-item">
            <div class="pic">
              <img :src="item.book|handleImg" alt="">
            </div>
            <div class="cont">
              <div class="title">
                {{item.title}}
              </div>
              <div class="subTitle">
                {{item.subTitle}}
              </div>
              <div class="other">
                <div class="other-lable">
                  <span class="iconfont icon-shijian" style="font-size:12px;"></span>
                  <span class="des">{{item.createdAt}}</span>
                </div>
                <div class="other-lable">
                  <span class="iconfont icon-kejianxianshi" style="font-size:12px;"></span>
                  <span class="des">{{item.visitNum}}</span>
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
                  <span class="des">{{item.categoryName}}</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </li>
    
    </ul>
  </div>
</template>
<script>
  import {
    getBlog
  } from '@/api/home.js'
  import {
    IMGURL
  } from '@/utils/webSet.js'
  import qs from 'query-string';

  import {
    mapState
  } from 'vuex'



  export default {
    data() {
      return {
        articles: []
      }
    },
    computed: {
      ...mapState({
        cateNameId: state => state.blog.cateNameId
      }),
    },
    mounted() {
      this.get_Blog();
    },
    filters: {
      handleImg(val) {
        return IMGURL + val
      }

    },
    methods: {
      to_detail(item) {
        let openUrl = this.$router.resolve({
          path: '/detail?id=' + item.id
        });
        window.open(openUrl.href, '_blank');

      },
      get_Blog() {
        let msg = qs.stringify({
          currentPage: 1,
          pageSize: 15,
          categoryId: this.cateNameId
        })
        getBlog(msg).then((res) => {
          let {
            code,
            data
          } = res;
          if (code == "200") {
            let blogs = data.rows;
            this.articles = blogs.map((el, index) => {
              let new_subTitle = el.content.length > 100 ? el.content.substring(0, 100) : el.content;
           
              let new_categname;

              if (el.articleType == null) {
                new_categname = "暂未归类"
              } else {
                new_categname = el.articleType.categoryName;

              }
              return {
                id: el.id,
                title: el.title,
                book: el.book,
                subTitle: new_subTitle,
                createdAt: el.createdAt,
                visitNum: el.visitNum,
                categoryName: new_categname

              }



            });

          }
         

        })

      }
    }
  }

</script>
<style lang="scss" scoped>
  .article {
    width: 100%;

    ul {
      padding-left: 0px;

      li {
        list-style: none;
        cursor: pointer;

        .to-detail {
          text-decoration: none;

          .list-item {
            width: 100%;
            height: 134px;
            display: flex;
            flex-direction: row;
            padding: 8px;
            background-color: #f8f8f8;
            margin-top: 16px;

            .pic {
              width: 166px;
              height: 117px;
              margin-right: 10px;
            }

            .cont {
              width: calc(100% - 176px);
              height: 117px;

              .title {
                width: 100%;
                height: 32px;
                font-size: 14px;
                font-weight: 600;
                color: #333333;


              }

              .subTitle {
                width: 100%;
                height: calc(100% - 54px);
                overflow: hidden;
                font-size: 14px;
                color: #666666;
              }

              .other {
                width: 100%;

                padding-right: 10px;
                height: 22px;
                line-height: 22px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                align-items: center;
                font-size: 12px;
                color: #666666;

                .other-label {
                  .des {
                    margin-left: 4px;
                    font-size: 12px;
                  }

                }



              }

            }
          }

        }


      }
    }
  }

</style>
