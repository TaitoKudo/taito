<template>
  <div id="footerSection">
    <a
      href="#"
      @click="clickSmoothScroll()"
    ><img
      id="arrow"
      src="../assets/vector.png"
      alt="矢印"
    ></a>

    <div id="footerCopyright">
      ©Seattleconsulting
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    clickSmoothScroll () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#mainSection'),
        400,
        null,
        null,
        'y'
      )
    }
  }
}
</script>

<style scoped>


  #footerSection {
    display: block;
    background: linear-gradient(#80e1f7, #06c1e6);
    width: 100%;
    height: 100%;
  }

  #footerCopyright {
    color: rgb(252, 252, 252);
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 18pt;
    text-shadow: -1px -2px 3px #808080;
    padding-bottom: 20px;
  }

  #arrow {
    top: -20px;
    position: relative;
    width: 40px;
    height: 40px;
  }
</style>
