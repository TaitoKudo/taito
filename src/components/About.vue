<template>
  <div id="aboutSection">
    <div id="aboutTitle">
      AboutMe見出し
    </div>
    <div id="aboutExplain">
      説明文がここに入りますよ〜北海道生まれ・・・aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');

  #aboutSection {
    display: block;
    font-family: 'Noto Sans JP', sans-serif;
    background-color: #f5f5f5;
    width: 100%;
    height: auto;
  }

  #aboutTitle {
    color: #20879f;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    font-size: 18pt;
    text-shadow: -1px -2px 3px #808080;
  }

  #aboutExplain {
    color: #707070;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 12pt;
    word-break: normal;

    /* 問題あり？ */
    line-height: 1.25em;
  }
</style>
