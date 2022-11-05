<template>
  <div class="nav">
    <ul v-if="currentPath !='/search'">
      <li v-for="item in cateNames" :key="item.id" @click="activeNav(item.id)">
        <nuxt-link
          :to="item.leftNavUrl"
          :class="currentPath == item.leftNavUrl ? 'active' : ''"
          ><span class="iconfont Icon" :class="item.icon"></span
          ><span>{{ item.categoryName }}</span></nuxt-link
        >
      </li>
    </ul>
     <ul v-else>
      <li>
        <nuxt-link
          :to="'/'"
          class="active"
         
          ><span class="iconfont Icon icon-shouye"></span
          ><span>返回主页</span></nuxt-link
        >
      </li>
    </ul>

    <div class="other-link">
      <ul>
        <li>
          <a href="/pageUpdate" class="link" style="color: #fd7515"
            ><span class="iconfont icon-shouye Icon"></span><span>跟新日志</span
            ><span class="state">hot</span></a
          >
        </li>

        <li>
          <a
            href="http://shutiaogege.top/wangque_admin/#/login"
            target="_blank"
            class="link"
            style="color: #0088f5"
            ><span class="iconfont icon-shouye Icon"></span
            ><span>博客后台</span></a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import "@/assets/icon/iconfont.css";
import "@/static/fonts/DinRegular.css";
import { mapState, mapMutations } from "vuex";
import { getCateName } from "@/api/home.js";
import {Text} from "@/utils/clickText.js";
import qs from "query-string";
export default {
  data() {
    return {
      cateNames: [],
    };
  },
  computed: {
    ...mapState("blog", {
      active: (state) => state.leftNav,
      menuLists: (state) => state.menu,
    }),

    currentPath() {
      return this.$route.path;
    },
  },
  mounted() {

    this.initText();

    if (this.menuLists.length == 0) {
      this.get_CateName();
    } else {
      this.cateNames = this.menuLists;
    }
  },
  methods: {
    ...mapMutations({
      setMenu: "blog/SETMENUN",
      changeLeft: "blog/CHANGLEFT",
    }),
    initText() {
      window.addEventListener("load", function () {
        let body = document.body;
        let content = [
         "自由",
         "民主",
         "富强",
         "和谐",
         "友善"
        ]; //自定义内容的数组
        body.addEventListener("click", function (e) {
          let x = e.pageX;
          let y = e.pageY; //当前坐标
          let randContent = Math.ceil(Math.random() * content.length);

          
          let text = new Text(x, y, randContent,content);
          let span = document.createElement("span");
          span.style.color = text.getRandom();

          
          text.create(span);
          setTimeout(function () {
            text.out(span);
          }, 1900);
        });
      });
    },

    get_CateName() {
      if (this.menuLists.length != 0) {
        this.cateNames = this.menuLists;
        return false;
      }
      let msg = qs.stringify({
        currentPage: 1,
        pageSize: 20,
        categoryName: "",
      });
      getCateName(msg).then((res) => {
        let { code, articleType } = res;
        if (code == "200") {
          this.cateNames = articleType.rows;

          this.setMenu(this.cateNames);
        }
      });
    },

    activeNav(id){

      this.changeLeft(id)



    }
  },
};
</script>
<style lang="scss" scoped>
.nav {
  width: 160px;
  position: fixed;

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
        color: #333333;

        .Icon {
          margin-right: 12px;
          margin-left: 30px;
        }
      }

      .active {
        background-color: #fff;
        color: #0088f5;
      }
    }
  }

  .other-link {
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
        border-top: 1px dashed #dadada;

        a {
          display: block;
          width: 160px;
          height: 42px;
          line-height: 42px;
          margin-bottom: 8px;
          text-decoration: none;

          font-weight: 600;

          .Icon {
            margin-right: 12px;
            margin-left: 30px;
          }

          .state {
            font-size: 8px;
            margin-left: 8px;
          }
        }
      }
    }
  }
}
</style>
