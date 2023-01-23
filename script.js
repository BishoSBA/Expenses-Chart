const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
    datasets: [{
      data: [12, 19, 3, 5, 2, 3, 2],
      borderWidth: 1
    }]
  },
  options: {
    hoverBackgroundColor: "hsl(186, 34%, 60%)",
    backgroundColor: "hsl(10, 79%, 65%)",
    borderRadius: 2,
    scales: {
      x: {
        grid: {
          display: false
        },
        border: {
          display: false
        }
      },
      y: {
        ticks: {
          display: false
        },
        grid: {
          display: false
        },
        border: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    }
  }
});