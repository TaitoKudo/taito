<template>
  <div id="skillSection">
    <div id="skillTitle">
      SkillSet見出し
    </div>
    <div id="skillExplain">
      荒野行動８段・・・説明文
    </div>
    <div id="gitHubLabel">
      <a href="https://github.com/TaitoKudo/portfolio">GitHub:https://github.com/TaitoKudo/portfolio</a>
    </div>
    <div id="skillList">
      <!-- Link Category-->
      <div id="front_end">
        Front-end
      </div>
      <div id="back_end">
        Back-end
      </div>
      <div id="dev_ops">
        DevOps
      </div>
      <ul class="frontEnd">
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>SCSS</li>
        <li>Vue</li>
      </ul>
      <ul class="backEnd">
        <li>Java</li>
        <li>Ruby</li>
        <li>RubyOnRails</li>
        <li>MySQL</li>
      </ul>
      <ul class="devOps">
        <li>Linux</li>
        <li>Node</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>FireBase</li>
      </ul>
    </div>
    <hr width="250">
    <div id="skillGraph">
      <chart />
    </div>
  </div>
</template>

<script>
import Chart from './Chart.vue';
export default {
  components: {
    Chart
  }
}
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');

  #skillSection {
    display: block;
    background-color: #fff;
    width: 100%;
    height: auto;
    font-family: 'Noto Sans JP', sans-serif;
    padding: 30px;
  }

  #skillTitle {
    color: #20879f;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    font-size: 18pt;
    text-shadow: -1px -2px 3px #808080;
  }

  #skillExplain {
    color: #707070;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 12pt;
    word-break: normal;

    /* 問題あり？ */
    line-height: 1.25em;
  }

  #gitHubLabel {
    color: #20879f;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 12pt;
  }

  #skillList {
    font-weight: bold;
  }

  #front_end {
    color: rgba(255, 0, 0, 0.75);
    display: inline-block;
    padding: 10px;
  }

  #back_end {
    color: rgba(0, 255, 0, 0.75);
    display: inline-block;
    padding: 10px;
  }

  #dev_ops {
    color: rgba(0, 0, 255, 0.75);
    display: inline-block;
    padding: 10px;
  }

  li {
    display: inline;
    font-family: 'Noto Sans JP', sans-serif;
    list-style: none;
    padding: 0 10px;
    margin: 3px;
    font-weight: bold;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.32);
  }

  .frontEnd {
    color: rgba(255, 0, 0, 0.75);
  }

  .backEnd {
    color: rgba(0, 255, 0, 0.75);
  }

  .devOps {
    color: rgba(0, 0, 255, 0.75);
  }

  #skillGraph {
    margin: 0 auto;
    width: 50%;
  }

</style>
