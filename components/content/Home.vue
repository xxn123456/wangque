<template>
  <div class="article">
    <div v-if="emty == true" class="emty">╭(●｀∀´●)╯,暂无数据</div>

    <div class="article-list" v-else>
      <ul class="has-list" v-if="!load">
        <li v-for="item in articles" :key="item.index">
          <a @click="to_detail(item)" class="to-detail">
            <div class="list-item">
              <div class="pic">
                <img :src="item.book|handleEmtyImg" alt="" />
              </div>
              <div class="cont">
                <div class="title">
                  {{ item.title }}
                </div>
                <div class="subTitle">
                  {{ item.subTitle }}
                </div>
                <div class="other">
                  <div class="other-lable">
                    <span
                      class="iconfont icon-shijian"
                      style="font-size: 12px"
                    ></span>
                    <span class="des">{{ item.createdAt }}</span>
                  </div>
                  <div class="other-lable">
                    <span
                      class="iconfont icon-kejianxianshi"
                      style="font-size: 12px"
                    ></span>
                    <span class="des">{{ item.visitNum }}</span>
                  </div>
                  <div class="other-lable">
                    <span
                      class="iconfont icon-xiaoxi"
                      style="font-size: 12px"
                    ></span>
                    <span class="des">0</span>
                  </div>
                  <div class="other-lable">
                    <span
                      class="iconfont icon-xihuan"
                      style="font-size: 12px"
                    ></span>
                    <span class="des">0</span>
                  </div>

                  <div class="other-lable">
                    <span
                      class="iconfont icon-rongqi"
                      style="font-size: 12px"
                    ></span>
                    <span class="des">{{ item.categoryName }}</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>

      <ul class="load-list" v-else>
        <li v-for="item in articles" :key="item.index">
          <a class="to-detail">
            <div class="list-item">
              <div class="pic">
                <!-- <img :src="item.book" alt="" /> -->
              </div>
              <div class="cont">
                <div class="title"></div>
                <div class="subTitle"></div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>

    <div class="page-nav">
      <div class="prev">
        <span class="go-nav">
          共计：{{ this.total }}条,第{{ this.page }}页,页码15
        </span>
        <span @click="prev">上一页</span>
      </div>
      <div class="next" @click="next">下一页</div>
    </div>
  </div>
</template>
<script>
import { getBlogList, updataBlogSee } from "@/api/home.js";
import { IMGURL } from "@/utils/webSet.js";
import qs from "query-string";
import { mapState } from "vuex";
export default {
  data() {
    return {
      articles: [],
      page: 1,
      emty: true,
      total: null,
      pageSize: 5,
      load: true,
    };
  },
  computed: {
    ...mapState({
      cateNameId: (state) => state.blog.cateNameId,
    }),
    activeLeft() {
      return this.$store.state.blog.leftNav;
    },
  },
  mounted() {
    this.get_Blog();
  },
  filters: {
    handleEmtyImg(val) {

      if(val=='/images/book/article-pic.png'||!val){

        return require('@/static/error/404.jpeg')

      }else{
        return val
      }
       
    },
  },
  methods: {
    prev() {
      this.page -= 1;

      this.get_Blog();
    },
    next() {
      this.page += 1;
      this.get_Blog();
    },
    to_detail(item) {
      let openUrl = this.$router.resolve({
        path: "/detail?id=" + item.id,
      });
      window.open(openUrl.href, "_blank");
    },
    get_Blog() {
      return new Promise((resolve, reject) => {
        let msg = qs.stringify({
          currentPage: this.page,
          pageSize: 5,
          categoryId: this.activeLeft,
        });

        this.load = true;

        getBlogList(msg).then((res) => {
          let { code, data } = res;
          if (code == "200") {
            setTimeout(() => {
              this.load = false;
            }, 500);
            if (data.rows.length != 0) {
              let blogs = data.rows;

              this.total = data.count;

              this.articles = blogs.map((el, index) => {
                let new_subTitle =
                  el.content.length > 80
                    ? el.content.substring(0, 80) + "    详情"
                    : el.content;

                let new_categname;

                if (el.articleType == null) {
                  new_categname = "暂未归类";
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
                  categoryName: new_categname,
                };
              });

              resolve("请求成功");

              if (this.articles.length > 0) {
                this.emty = false;
              }

              document.documentElement.scrollTop = 0;
            } else {
              this.emty = true;
              this.articles = [];
            }
          }
        });
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.article {
  width: 100%;

  .emty {
    width: 100%;
    height: 100px;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    margin-top: 10px;
    color: #666666;
  }

  .article-list {
    .has-list {
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
              overflow: hidden;

              img {
                width: 166px;
                height: 117px;
                border-radius: 4px;
              }
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

    .load-list {
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
              overflow: hidden;

              background-color: #ededed;
              background: linear-gradient(
                  120deg,
                  rgba(255, 255, 255, 0) 40%,
                  rgba(255, 255, 255, 0.5) 50%,
                  rgba(255, 255, 255, 0) 60%
                )
                #ededed;
              background-size: 200% 100%;
              background-position-x: 180%;
              animation: 0.5s loading ease-in-out infinite;
              border-radius: 4px;

              img {
                width: 166px;
                height: 117px;
                border-radius: 4px;
              }
            }

            .cont {
              width: calc(100% - 176px);
              height: 117px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;

              .title {
                width: 100%;
                height: 32px;
                font-size: 14px;
                font-weight: 600;
                color: #333333;

                background-color: #ededed;
                background: linear-gradient(
                    120deg,
                    rgba(255, 255, 255, 0) 40%,
                    rgba(255, 255, 255, 0.5) 50%,
                    rgba(255, 255, 255, 0) 60%
                  )
                  #ededed;
                background-size: 200% 100%;
                background-position-x: 180%;
                animation: 0.5s loading ease-in-out infinite;
                border-radius: 4px;
              }

              .subTitle {
                width: 100%;
                height: 63px;
                overflow: hidden;
                font-size: 14px;
                color: #666666;
                background-color: #ededed;
                background: linear-gradient(
                    120deg,
                    rgba(255, 255, 255, 0) 40%,
                    rgba(255, 255, 255, 0.5) 50%,
                    rgba(255, 255, 255, 0) 60%
                  )
                  #ededed;
                background-size: 200% 100%;
                background-position-x: 180%;
                animation: 0.5s loading ease-in-out infinite;
                border-radius: 4px;
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

                background-color: #ededed;
                background: linear-gradient(
                    120deg,
                    rgba(255, 255, 255, 0) 40%,
                    rgba(255, 255, 255, 0.5) 50%,
                    rgba(255, 255, 255, 0) 60%
                  )
                  #ededed;
                background-size: 200% 100%;
                background-position-x: 180%;
                animation: 0.5s loading ease-in-out infinite;
                border-radius: 4px;

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

  .page-nav {
    margin-top: 10px;
    width: 100%;
    height: 40px;
    line-height: 40px;

    background-image: url("/layout/up-2.png");
    background-size: 100% 40px;
    background-position: left;

    .prev {
      background-repeat: no-repeat;
      padding-left: 60px;
      float: left;
      color: #333333;
      cursor: pointer;

      .go-nav {
        font-size: 12px;
        margin-right: 20px;
      }
    }

    .next {
      background-repeat: no-repeat;
      width: 130px;
      float: right;
      text-align: right;
      padding-right: 20px;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>
