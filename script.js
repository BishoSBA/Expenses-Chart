const ctx = document.getElementById('myChart');

const data = fetch("./data.json")
  .then((response) => response.json())
  .then(data => {
    const days = data.map(x => x.day)
    const amounts = data.map(x => x.amount)


    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: days,
        datasets: [{

          data: amounts,
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
          },
          tooltip: {
            displayColors: false,
            callbacks: {
              title: (value) => '',
              label: (value) => '$' + value.parsed.y,
            }
          },
        }
      }
    });
  });

