<template>
  <div id="visionSection">
    <div id="visionTitle">
      Vision
    </div>
    <div id="visionExplain">
      IT技術の活用で、日常に潜む不便やニーズを解消して生活をより豊かにできる力を身につけたいと考えています。AIやブロックチェーン、クラウドなどに興味があり先端技術を駆使してお客様の課題を解決したいです。
      また、世の中にTeamTechを浸透させてイキイキ働く人を増やすこと、生産性を上げることを目指しています。
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
    padding: 10px 30px 30px 30px;
  }

  #visionTitle {
    color: #20879f;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    font-size: 18pt;
    text-shadow: -2px 2px 3px #808080;
  }

  #visionExplain {
    color: #707070;
    font-size: 12pt;
    word-break: normal;
    width: 90%;
    padding-left: 10%;

    /* 問題あり？ */
    line-height: 1.25em;
  }

</style>
