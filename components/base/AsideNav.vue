<template>
  <div class="nav">
    <ul>

      <li v-for="item in cateNames" :key="item.id">
        <nuxt-link :to="item.leftNavUrl" :class="active==item.id?'active':''"><span
            class="iconfont Icon" :class="item.icon"></span><span>{{item.categoryName}}</span></nuxt-link>
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
    mapState,
    mapMutations
  } from 'vuex'
  import {
    getCateName
  } from '@/api/home.js'
  import qs from 'query-string';
  export default {
    data() {
      return {
        cateNames: []

      }
    },
    computed: {
      ...mapState('blog', {
        active: state => state.leftNav,
        menuLists: state => state.menu
      })
    },
    components: {
      ExpendLink
    },
    mounted(){

      this.get_CateName();
    },
    methods: {
      ...mapMutations(
        {
          setMenu:'blog/SETMENUN'
        }
      ),
      get_CateName() {
        if(this.menuLists.length!=0){
              this.cateNames=this.menuLists;
              return false
        };
        let msg = qs.stringify({
          currentPage: 1,
          pageSize: 20,
          categoryName: ""
        })
        getCateName(msg).then((res) => {
          let {
            code,
            articleType
          } = res;
          if (code == "200") {
            this.cateNames = articleType.rows;

            this.setMenu(this.cateNames);

          }
        })

      }
    }
  }

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
  }

</style>
