<script>
import { Radar } from '../../../portfolio/node_modules/vue-chartjs';

export default {
  name: 'Chart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: [],
        datasets: [
          {
            label: [],
            data: [],
            backgroundColor: [
              'rgba(181, 26, 26, 0.25'
            ],
            borderColor: [
              'rgba(181, 26, 26, 0.75)',
              'rgba(181, 26, 26, 0.75)',
              'rgba(181, 26, 26, 0.75)',
              'rgba(181, 26, 26, 0.75)',
              'rgba(181, 26, 26, 0.75)',
            ],
            borderWidth: 1
          },
        ]
      },
      options: {
        scale: {
          pointLabels: {
            fontSize: 22,
          },
          ticks:{
            stepSize: 1,
            beginAtZero: true,
            max:5,
            min:0,
          }
        },
        legend: {
          display: false,

        }
      }
    }
  },
  /* 動作をしてくださいの指令*/
  mounted () {
    this.getSkillName()
    this.getSkillScore()
    this.renderChart(this.data, this.options)
  },
  /*計算式何をするのか*/
  methods:{
    getSkillName(){
      const names = this.$store.getters.skillName
      this.data.labels = names
    },
    getSkillScore(){
      const scores = this.$store.getters.skillScore
      this.data.datasets[0].data = scores
    }
  }
}



</script>
