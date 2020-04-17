<script>
import { Radar } from '../../../portfolio/node_modules/vue-chartjs';

export default {
  name: 'Chart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['Java', 'Ruby', 'RubyOnRails', 'MySQL'],
        datasets: [
          {
            label: 'Bar Dataset',
            data: [1, 1, 1, 1],
            backgroundColor: [
              'rgba(15, 136, 57, 0.25)',
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
    this.renderChart(this.data, this.options)
  }
}

</script>
