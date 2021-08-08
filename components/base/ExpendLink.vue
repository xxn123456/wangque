<template>
  <div class="other-link">
    <ul>
      <li>
        <a href="#"><span class="iconfont icon-shouye Icon"></span><span>四方馆</span><span class="state">hot</span></a>
      </li>

      <li>
        <a href="#"><span class="iconfont icon-shouye Icon"></span><span>云上爆款</span></a>
      </li>

     
      <li>
        <a href="#"><span class="iconfont icon-shouye Icon"></span><span>博客后台</span></a>
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

        li:first-of-type {
            a{
                 color: #fd7515;

            }
         

        }

        li:nth-last-of-type(2) {
            a{
                color: #e1251b;

            }
          

        }

        li:nth-last-of-type(3) {
          a{
               color: #0088f5;
          }
        }

    }
  }

</style>
