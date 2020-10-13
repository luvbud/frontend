
// Modal 단어 빈도수 그래프
$(document).ready(function() {
    $('#exampleModalCenter').on('shown.bs.modal', function(e){ 
        var chart = c3.generate({
        bindto: '#chart',
        size: {
            height: 320*0.7,
            width: 466*0.7
        },
        data: {
            x: 'x',
            columns: [
                ['x', '2016', '2017', '2018', '2019', '2020'],
                ['frequency', 50, 100, 70, 120, 200]
            ],
            type: 'spline',
            colors: {
                'frequency': '#ff9500'
            }
        },
        axis: {
            x: {
                type: 'category' // this needed to load string x value
            }
        }
    });
    //   setInterval(function () {
    //     x = Math.random() % 100;
    //     y = Math.random() % 50;
    //     chart.load({
    //         columns: [
    //             ['frequency', x - y, 2*x + 2*y, x + y, x - 2*y, x + 2*y, 3*x - y]
    //         ]
    //     });
    //   }, 100);
        
    });
});
