const ctx = document.getElementById('myChart');

const data = fetch("./data.json")
  .then((response) => response.json())

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
    datasets: [{

      data: [12, 39, 3, 5, 2, 3, 2],
      borderWidth: 1
    }]
  },
  options: {
    hoverBackgroundColor: "hsl(186, 34%, 60%)",
    backgroundColor: "hsl(10, 79%, 65%)",
    borderRadius: 2,
    responsive: true,
    maintainAspectRatio: false,
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
          callback: function(value) {
            return '$' + value;
          },
          display: false,
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
      }
    }
  }
});