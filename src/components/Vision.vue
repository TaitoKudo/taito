<template>
  <div id="visionSection">
    <div id="visionTitle">
      Vision
    </div>
    <div id="visionExplain">
      説明文
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');

  #visionSection {
    display: block;
    background-color: #f5f5f5;
    width: 100%;
    height: auto;
    font-family: 'Noto Sans JP', sans-serif;
  }

  #visionTitle {
    color: #20879f;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    font-size: 18pt;
    text-shadow: -1px -2px 3px #808080;
  }

  #visionExplain {
    color: #707070;
    font-size: 12pt;
    word-break: normal;

    /* 問題あり？ */
    line-height: 1.25em;
  }

</style>
