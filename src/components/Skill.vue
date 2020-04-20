<template>
  <div id="skillSection">
    <div id="skillTitle">
      Skill Set
    </div>
    <div id="skillExplain">
      スキルをまとめました。特にFront-endはポートフォリオの実装を通して力を身につきました。
      DevOpsは新入社員研修における環境構築や、大学時代の研究活動で使用しました。
      今後は広く基礎知識を身につけて土台を固めます。
    </div>
    <div id="gitHubLabel">
      GitHub:
      <a href="https://github.com/TaitoKudo/portfolio">https://github.com/TaitoKudo/portfolio</a>
    </div>
    <div id="skillList">
      <div
        id="front_end"
        @click="setCurrentChart('front')"
      >
        Front-end
      </div>
      <div
        id="back_end"
        @click="setCurrentChart('back')"
      >
        Back-end
      </div>
      <div
        id="dev_ops"
        @click="setCurrentChart('devOps')"
      >
        DevOps
      </div>
      <dev id="skillslist">
        <ul
          id="frontEnd"
          :class="{'front-change':isFrontActive}"
        >
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>SCSS</li>
          <li>Vue</li>
        </ul>
        <ul
          id="backEnd"
          :class="{'back-change':isBackActive}"
        >
          <li>Java</li>
          <li>Ruby</li>
          <li>RubyOnRails</li>
          <li>MySQL</li>
        </ul>
        <ul
          id="devOps"
          :class="{'dev-change':isDevActive}"
        >
          <li>Linux</li>
          <li>Node</li>
          <li>Git</li>
          <li>GitHub</li>
          <li>Firebase</li>
        </ul>
      </dev>
      <hr width="600">
      <div id="skillGraph">
        <div v-if="isFrontActive">
          <FrontChart />
        </div>
        <div v-if="isBackActive">
          <BackChart />
        </div>
        <div v-if="isDevActive">
          <DevChart />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FrontChart from './FrontChart.vue'
import BackChart from './BackChart.vue'
import DevChart from './DevChart.vue'
export default {
  components: {
    FrontChart,
    BackChart,
    DevChart
  },
  data(){
    return{
      currentChart:'front'
    }
  },
  computed: {
    isFrontActive(){
      return this.currentChart=='front';
    },
    isBackActive(){
      return this.currentChart=='back';
    },
    isDevActive(){
      return this.currentChart=='devOps';
    }
  },
  methods: {
    setCurrentChart(chart){
      this.currentChart = chart;
    }
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
    padding: 10px 30px 30px 30px;
  }

  #skillTitle {
    color: #20879f;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    font-size: 18pt;
    text-shadow: -2px 2px 3px #808080;
  }

  #skillExplain {
    color: #707070;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 12pt;
    word-break: o-all;
    width: 90%;
    padding-left: 10%;
    padding-bottom: 5px;
    line-height: 1.25em;
  }

  #gitHubLabel {
    color: #20879f;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 12pt;
  }

  a {
    color: #20879f;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 12pt;
  }

  #skillList {
    font-weight: bold;
    margin-left: -40px;
  }

  #front_end {
    color: rgba(181, 26, 26, 0.75);
    display: inline-block;
    padding: 10px;
    cursor: pointer;
  }

  #front_end:hover {
    text-decoration: underline;
  }

  #back_end {
    color: rgba(15, 136, 57, 0.75);
    display: inline-block;
    padding: 10px;
    cursor: pointer;
  }

  #back_end:hover {
    text-decoration: underline;
  }

  #dev_ops {
    color: rgba(87, 16, 131, 0.75);
    display: inline-block;
    padding: 10px;
    cursor: pointer;
  }

  #dev_ops:hover {
    text-decoration: underline;
  }

  #skillslist {
    margin-left: -30px;
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

  #frontEnd {
    color: rgba(181, 26, 26, 0.75);
  }

  #backEnd {
    color: rgba(15, 136, 57, 0.75);
  }

  #devOps {
    color: rgba(87, 16, 131, 0.75);
  }

  ul.front-change li {
    background-color: rgba(181, 26, 26, 0.25);
  }

  ul.back-change li {
    background-color: rgba(15, 136, 57, 0.25);
  }

  ul.dev-change li {
    background-color: rgba(87, 16, 131, 0.25);
  }

  #skillGraph {
    margin: 0 auto;
    width: 50%;
    height: auto;
  }

</style>
