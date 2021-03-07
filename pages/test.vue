<template>
  <div id="test">
    <client-only>
      <vue-baberrage :isShow="barrageIsShow" :barrageList="barrageList" :loop="barrageLoop">
      </vue-baberrage>
    </client-only>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        msg: 'Hello vue-baberrage',
        barrageIsShow: true,
        currentId: 0,
        barrageLoop: false,
        barrageList: []
      }
    },
    mounted() {
      setInterval(() => {
        this.addToList();
      }, 1000);
    },
    methods: {
      addToList() {
        this.barrageList.push({
          id: ++this.currentId,
          avatar: "./static/avatar.jpg",
          msg: this.msg,
          time: 5
        })
      }
    }
  }

</script>
