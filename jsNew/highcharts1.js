// Data retrieved from https://en.wikipedia.org/wiki/Winter_Olympic_Games
Highcharts.chart('general', {

    chart: {
        type: 'column',
        plotBackgroundColor: null,
        backgroundColor: 'transparent',
    },

    title: {
        text: 'Основные характеристики формирования бюджета',
        align: 'center'
    },

    xAxis: {
        categories: ['2024 Факт', '2025 Факт', '2026 План', '2027 План', '2028 План']
    },

    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: 'Тысяч рублей'
        }
    },

    tooltip: {
        format: '<b>{key}</b><br/>{series.name}: {y}<br/>' +
            'Total: {point.stackTotal}'
    },

    plotOptions: {
        column: {
            stacking: 'normal'
        }
    },

    series: [{
        name: 'Дефицит',
        data: [3829.3, 4300, 0, 0, 0],
        stack: 'male'
    }, {
        name: 'Доходы',
        data: [811052.5, 998909.9, 890236.5, 875284.7, 895264.2],
        stack: 'male'
    }, {
        name: 'Расходы',
        data: [814881.9, 994687, 890236.5, 875284.7, 895264.2],
        stack: 'female'
    }]
});
