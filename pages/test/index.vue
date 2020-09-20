<template>
    <div class="test-warp">
       <div class="one">
11
       </div>
       <div class="two">
22
       </div>
       <div class="three">
11
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style>
.test-warp{
    width: 100%;
    height: 100vh;
  
}

  .one{
        width: 100%;
        height: 400px;
         position: relative;
    }
    .two{
        width: 100%;
        height: 200px;
        position: sticky;
        top: 100px;
        background: red;
    }
    .three{
        width: 100%;
        height: 1600px;
    }
    
</style>