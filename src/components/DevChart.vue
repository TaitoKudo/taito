<script>
import { Radar } from '../../../portfolio/node_modules/vue-chartjs';

export default {
  name: 'DevChart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: [],
        datasets: [
          {
            label: 'Bar Dataset',
            data: [],
            backgroundColor: [],
            borderColor: [
              'rgba(87, 16, 131, 0.75)',
              'rgba(87, 16, 131, 0.75)',
              'rgba(87, 16, 131, 0.75)',
              'rgba(87, 16, 131, 0.75)',
              'rgba(87, 16, 131, 0.75)'
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
  mounted () {
    this.getSkillName()
    this.getSkillScore()
    this.getBGColor()
    this.renderChart(this.data, this.options)
  },
  methods:{
    getSkillName(){
      const names = this.$store.getters.skillNameD
      this.data.labels = names
    },
    getSkillScore(){
      const scores = this.$store.getters.skillScoreD
      this.data.datasets[0].data = scores
    },
    getBGColor(){
      const backgroundColors = this.$store.getters.skillBackgroundColorD
      this.data.datasets[0].backgroundColor = backgroundColors
    }
  }
}

</script>
