<script>
import { Radar } from '../../../portfolio/node_modules/vue-chartjs';

export default {
  name: 'Chart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['HTML', 'CSS', 'Javascript', 'SCSS','Vue'],
        datasets: [
          {
            label: '',
            data: [3, 3, 3, 1, 3],
            backgroundColor: [
              'rgba(181, 26, 26, 0.25)',
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
  mounted () {
    this.renderChart(this.data, this.options)
  }
}

</script>
