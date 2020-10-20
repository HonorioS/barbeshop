$(document).ready(function() {

    var url = "../php/graphic.php";

    $.ajax({

        method: "GET",
        crossDomain: true,
        cache: false,
        url: url,

        success: function(data) {

            var legend = ['Servicos-Realizado', 'Servicos-Pendente', 'Servicos-Cancelados', 'Total de Marcações-Hoje'];
            var values = [];

            for (var i in data) {

                values.push(data[i].values)

            }
            var dateDimanic = {

                labels: legend,
                datasets: [{
                    label: 'Dados Estatiscos Marcações',
                    backgroundColor: '#DBA901',
                    borderColor: '#DBA901',
                    data: values
                }]
            }

            var ctx = document.getElementById('myChart').getContext('2d');
            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'bar',

                // The data for our dataset
                data: dateDimanic,
                // Configuration options go here
                options: {}
            });
        }

    })


})