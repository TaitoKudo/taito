<template>
  <div id="skillSection">
    <div id="skillTitle">
      Skill Set
    </div>
    <div id="skillExplain">
      荒野行動８段・・・説明文
    </div>
    <div id="gitHubLabel">
      <a href="https://github.com/TaitoKudo/portfolio">GitHub:https://github.com/TaitoKudo/portfolio</a>
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
        :class="{'dev-change':isDevOpsActive}"
      >
        <li>Linux</li>
        <li>Node</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Firebase</li>
      </ul>
      <hr width="250">
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
    },
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
    color: rgba(181, 26, 26, 0.75);
    display: inline-block;
    padding: 10px;
  }

  #back_end {
    color: rgba(15, 136, 57, 0.75);
    display: inline-block;
    padding: 10px;
  }

  #dev_ops {
    color: rgba(87, 16, 131, 0.75);
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

  #frontEnd {
    color: rgba(181, 26, 26, 0.75);
  }

  #backEnd {
    color: rgba(15, 136, 57, 0.75);
  }

  #devOps {
    color: rgba(87, 16, 131, 0.75);
  }

  #skillGraph {
    margin: 0 auto;
    width: 50%;
    height: auto;
  }

</style>
