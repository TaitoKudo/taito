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
            label: 'Front-end',
            data: [2, 4, 4, 4, 5],
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
