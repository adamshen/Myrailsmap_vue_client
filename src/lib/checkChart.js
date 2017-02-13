export default {
  setting(data) {
    return {
      type: 'bar',
      data: {
        labels: ['日常减重', '日常学习'],
        datasets: [{
          label: '完成天数',
          data: data.achieve,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)'
          ],
          borderWidth: 1
        }, {
          label: '总打卡数',
          data: data.all,
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    }
  }
}
