// Data retrieved from https://en.wikipedia.org/wiki/Winter_Olympic_Games
Highcharts.chart('general2', {

    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
        type: 'spline',

        backgroundColor: 'transparent',
        //marginTop: 60,
        //marginRight: 30
    },
    title: {
        text: 'Динамика основных показателей бюджета',
        align: 'center',
    },
    subtitle: {
        text: null,
        align: 'left'
    },
    xAxis: {
        categories: ['Факт   2024', 'Факт   2025', 'План   2026', 'План   2027', 'План   2028']
    },
    yAxis: [{
        labels: {
            enabled: true,
            align: 'right',
            color: 'white',
            formatter: function() {
                return Highcharts.numberFormat(this.value, 0, ',', ' ');
            }
        },
        title: {
            text: 'Тысяч рублей'
        },
    },{
        labels: {
            enabled: true,
            align: 'left',
            color: 'white',
            formatter: function() {
                return Highcharts.numberFormat(this.value, 0, ',', ' ');
            }
        },
        title: {
            text: 'Тысяч рублей'
        },
        opposite: true
    }],
    
    legend: {
        floating: false,
        align: 'center',
        verticalAlign: 'bottom'
    },
    tooltip: {
        crosshairs: true,
        shared: false,
        formatter: function() {
            return '<b>' + this.x + '</b><br/>' + this.series.name + ': ' + Highcharts.numberFormat(this.y, 2, ',', ' ') + ' млн.руб.';
        }
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#FFFFFF',
                lineWidth: 0.5
            }
        },
        series: {
            events: {
                legendItemClick: function(event) {
                    return false;
                }
            },
            pointWidth: 20
        }

    },
    series: [{
        name: 'Доходы ',
        lineColor: '#544fc5',
        marker: {
            symbol: 'square',
            fillColor: '#544fc5'
        },
        data: [811052.5, 998909.9, 890236.5, 875284.7, 895264.2]
    }, {
        name: 'Расходы ',
        lineColor: '#00e272',
        marker: {
            symbol: 'diamond',
            fillColor: '#00e272'
        },
        data: [814881.9, 994687, 890236.5, 875284.7, 895264.2]
    }, {
        
        name: 'Профицит/Дефицит ',
        lineColor: '#2caffe',
        marker: {
            symbol: 'circle',
            fillColor: '#2caffe'
        },
        yAxis: 1,
        data: [-3829.3, 4300, 0, 0, 0]
    }],
    navigation: {
        buttonOptions: {
            enabled: false
        }
    },
    credits: {
        enabled: false
    }
});
