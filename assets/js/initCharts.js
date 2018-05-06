//lineChart code
var lineCanvas = document.getElementById("lineChart");
var lineChart = new Chart(lineCanvas, {
  type: 'line',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: 'Total value lost per month.',
      data: [],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
});

//barChart code
var barCanvas = document.getElementById("barChart");
var barChart = new Chart(barCanvas, {
  type: 'bar',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: 'Average value lost per month.',
      data: [],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(26, 31, 22, 0.2)',
        'rgba(197, 33, 132, 0.2)',
        'rgba(51, 32, 42, 0.2)',
        'rgba(138, 234, 146, 0.2)',
        'rgba(25, 23, 22, 0.2)',
        'rgba(61, 52, 139, 0.2)'

      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(26, 31, 22, 1)',
        'rgba(197, 33, 132, 1)',
        'rgba(51, 32, 42, 1)',
        'rgba(138, 234, 146, 1)',
        'rgba(25, 23, 22, 1)',
        'rgba(61, 52, 139, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
});