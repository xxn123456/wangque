<template>
  <div class="other-link">
    <ul>
      <li>
        <a href="#" class="link" style=" color: #fd7515;"><span
            class="iconfont icon-shouye Icon"></span><span>友情链接</span><span class="state">hot</span></a>
      </li>

      <li>
        <nuxt-link to="/pageUpdate" style=" color: #e1251b;">
          <span class="iconfont icon-shouye Icon"></span><span>更新日志</span>
        </nuxt-link>
      </li>


      <li>

        <a href="http://shutiaogege.top/wangque_admin/#/login" target="_blank" class="link" style="color: #0088f5;"><span
            class="iconfont icon-shouye Icon"></span><span>博客后台</span></a>
      </li>

    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    }
  }

</script>
<style lang="scss" scoped>
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

</style>
