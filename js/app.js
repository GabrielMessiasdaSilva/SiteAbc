  // Adicione este JavaScript para alternar a visibilidade do menu ao clicar no ícone do menu sanduíche
  document.addEventListener("DOMContentLoaded", function() {
    var check = document.getElementById("check");
    var navbarCollapse = document.getElementById("navbarSupportedContent");
    
    check.addEventListener("change", function() {
        if (check.checked) {
            navbarCollapse.classList.add("show");
        } else {
            navbarCollapse.classList.remove("show");
        }
    });
});




var myChart;

function generateChart() {
  var value1 = parseInt(document.getElementById('inputA').value);
  var value2 = parseInt(document.getElementById('inputB').value);
  var value3 = parseInt(document.getElementById('inputC').value);

  var total = value1 + value2 + value3;

  var ctx = document.getElementById('myChart').getContext('2d');
  myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Eu domino', 'Sei mais ou menos', 'Definitivamente não sei'],
      datasets: [{
        label: 'Valores',
        data: [(value1 / total * 100).toFixed(2), (value2 / total * 100).toFixed(2), (value3 / total * 100).toFixed(2)],
        backgroundColor: [
          'rgba(108, 229, 232, 1)',
          'rgba(47, 95, 152, 1)',
          'rgba(49, 53, 110, 1)'
        ],
        borderColor: [
            'rgba(108, 229, 232, 1)',
            'rgba(47, 95, 152, 1)',
            'rgba(49, 53, 110, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Gráfico de Pizza'
      },
      animation: {
        animateScale: true,
        animateRotate: true
      },
      tooltips: {
        callbacks: {
          label: function(tooltipItem, data) {
            var dataset = data.datasets[tooltipItem.datasetIndex];
            var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
              return previousValue + currentValue;
            });
            var currentValue = dataset.data[tooltipItem.index];
            var percentage = Math.floor(((currentValue / total) * 100) + 0.5);         
            return percentage + "%";
          }
        }
      }
    }
  });
}

function clearChart() {
  document.getElementById('inputA').value = '';
  document.getElementById('inputB').value = '';
  document.getElementById('inputC').value = '';
  if (myChart) {
    myChart.destroy();
  }
}