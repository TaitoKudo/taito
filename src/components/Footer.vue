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
    <img src="">
  </div>
</template>
<script>
export default {
  methods: {
    clickSmoothScroll () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#headerSection'),
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
    height: auto;
  }

  #footerCopyright {
    color: rgb(8, 8, 8);
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 18pt;

    /* 影のサイズ考える */
    text-shadow: -1px -2px 3px #808080;
  }

  #arrow {
    top: -20px;
    position: relative;
    width: 40px;
    height: 40px;
  }
</style>
