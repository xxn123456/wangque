<template>
    <div class="msg">
           <span>1</span>
           <span>2</span>
           <span>3</span>
           <span>4</span>
           <span>5</span>
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
<style lang="scss" scoped>
.msg{
    width: 42px;
    height: 210px;
    display: flex;
    flex-direction: column;
    color: #555555;
    background-color: #fff;
    text-align: center;
    span{
        width: 42px;
        height: 42px;
    }
}

</style>