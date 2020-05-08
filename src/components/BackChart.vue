<script>
import { Radar } from '../../../portfolio/node_modules/vue-chartjs';

export default {
  name: 'BackChart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['Java', 'Ruby', 'RubyOnRails', 'MySQL'],
        datasets: [
          {
            label: 'Bar Dataset',
            data: [],
            backgroundColor: [
              'rgba(15, 136, 57, 0.25)'
            ],
            borderColor: [
              'rgba(15, 136, 57, 0.75)',
              'rgba(15, 136, 57, 0.75)',
              'rgba(15, 136, 57, 0.75)',
              'rgba(15, 136, 57, 0.75)'
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
    this.renderChart(this.data, this.options)
  },
  methods:{
    getSkillName(){
      const names = this.$store.getters.skillNameB
      this.data.labels = names
    },
    getSkillScore(){
      const scores = this.$store.getters.skillScoreB
      this.data.datasets[0].data = scores
    }
  }
}

</script>
