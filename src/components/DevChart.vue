<script>
import { Radar } from '../../../portfolio/node_modules/vue-chartjs';

export default {
  name: 'Chart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['Linux', 'Node', 'Git', 'GitHub', 'Firebase'],
        datasets: [
          {
            label: 'Bar Dataset',
            data: [2, 4, 4, 4, 3],
            backgroundColor: [
              'rgba(87, 16, 131, 0.25)',
            ],
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
          ticks:{
            stepSize: 1,
            beginAtZero: true,
            max:5,
            min:0,
          }
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}

</script>
