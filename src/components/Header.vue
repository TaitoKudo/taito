<template>
  <div id="headerSection">
    <button @click="hamber">
      taaa
    </button>
    <Drawer
      align="left"
      :closeable="true"
      @close="hamber"
    >
      <div v-if="open">
        content here
      </div>
    </Drawer>
  </div>  
</template>

<script>
  import Drawer from "vue-simple-drawer";
  export default {
    name: "App",
    components: {
      Drawer
    },
    data() {
      return {
        open: false
      }
    },
    methods: {
      hamber() {
        this.open = !this.open
      }
    }
  }



</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap-reboot",
  "~bootstrap/scss/buttons";
</style>

<style scoped>
#headerSection {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  width: 800px;
  background-color: #f3f3f3;
}
</style>
