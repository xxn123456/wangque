<template>
  <div class="detail">
    <div class="artcle-type">
      讨论
    </div>
    详情界面
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
  .detail {
    padding: 12px 24px;
    width: 100%;
    min-height: 200px;
    background-color: #fff;
    position: relative;
    overflow: hidden;

    .artcle-type {
      position: absolute;
      top: -11px;
      left: -29px;
      transform: rotate(-45deg);
      background-color: rgba(76,175,80,.8);
      width: 84px;
      height: 48px;
      padding-top: 12px;
      line-height: 36px;
      text-align: center;
      text-transform: uppercase;
      transform-origin: center;
      color: #fff;
      font-weight: 700;
      font-size: 12px;
    }
  }

</style>
