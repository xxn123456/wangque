<template>
  <div class="search">
    <div class="title">
      <span class="Icon">火</span>
      <span>群贤必至</span>
    </div>
    <div class="hot-article">
      <ul>
        <li><a href="#"><span class="hot">1</span><span>基于nuxt实现的ssr应用</span></a></li>
        <li><a href="#"><span class="hot">2</span><span>基于nuxt实现的ssr应用</span></a></li>
        <li><a href="#"><span class="hot">3</span><span>基于nuxt实现的ssr应用</span></a></li>
        <li><a href="#"><span class="hot">4</span><span>基于nuxt实现的ssr应用</span></a></li>
        <li><a href="#"><span class="hot">5</span><span>基于nuxt实现的ssr应用</span></a></li>

          <li><a href="#"><span class="hot">1</span><span>基于nuxt实现的ssr应用</span></a></li>
        <li><a href="#"><span class="hot">2</span><span>基于nuxt实现的ssr应用</span></a></li>
        <li><a href="#"><span class="hot">3</span><span>基于nuxt实现的ssr应用</span></a></li>
        <li><a href="#"><span class="hot">4</span><span>基于nuxt实现的ssr应用</span></a></li>
        <li><a href="#"><span class="hot">5</span><span>基于nuxt实现的ssr应用</span></a></li>
      </ul>
    </div>
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

      ul {
        padding-left: 0px;

        li {
         
          
          list-style: none;
          font-size: 13px;
          padding-left: 12px;
          padding-right: 12px;
          padding-bottom: 7.4px;

          a {
              display: inline-block;
                height: 26.6px;
            text-decoration: none;
            color: #555555;
            font-weight: normal;

            .hot {
              display: inline-block;
              width: 20px;
              height: 20px;
              line-height: 20px;
              text-align: center;
              font-weight: bold;
              background-color: #7cc0f7;
              color: #fff;
              margin-right: 10px;
            }
          }
        }
      }
    }
  }

</style>
