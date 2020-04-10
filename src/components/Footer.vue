<template>
  <div id="footerSection">
    <div id="footerCopyright">
      ©Seattleconsulting
    </div>
    <img src="">
    <a
      href="#"
      @click="clickSmoothScroll()"
    >飛ばし先</a>
    <div id="hoge">
      飛び先
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  methods: {
    clickSmoothScroll () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#hoge'),
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
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');

  #footerSection {
    display: block;
    background: linear-gradient(#80e1f7, #06c1e6);
    width: 100%;
    height: auto;
  }

  #footerCopyright {
    color: #fff;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 18pt;

    /* 影のサイズ考える */
    text-shadow: -1px -2px 3px #808080;
  }
</style>
