am4core.useTheme(am4themes_animated);

// Create chart instance
var chart = am4core.create("chart2", am4charts.XYChart);

// Add data
chart.data = [{
  "date": new Date(2024, 0, 0),
  "value": 450,
  "value2": 162,
  "value3": 1100
}, {
  "date": new Date(2025, 0, 0),
  "value": 669,
  "value2": 262,
  "value3": 841
}, {
  "date": new Date(2026, 0, 0),
  "value": 1200,
  "value2": 62,
  "value3": 199
}, {
  "date": new Date(2027, 0, 0),
  "value": 1200,
  "value2": 562,
  "value3": 199
}];

// Create axes
var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.renderer.grid.template.location = 0;
dateAxis.renderer.minGridDistance = 30;

// First value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "тысяч рублей";

// Second value axis
var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis2.title.text = "Дефицит/Профицит\nтысяч рублей";
valueAxis2.renderer.opposite = true;

// First series
function createSeries(field, name) {
  var series = chart.series.push(new am4charts.LineSeries());
  series.dataFields.valueY = field;
  series.dataFields.dateX = "date";
  series.name = name;
  series.tooltipText = "{name}: [b]{valueY}[/]";
  series.strokeWidth = 2;
  
  series.smoothing = "monotoneX";
  
  var bullet = series.bullets.push(new am4charts.CircleBullet());
  bullet.circle.stroke = am4core.color("#fff");
  bullet.circle.strokeWidth = 2;

  
  
  return series;
}

createSeries("value", "Доходы");
createSeries("value2", "Расходы");

// Second series
var series2 = chart.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "value3";
series2.dataFields.dateX = "date";
series2.name = "Дефицит/Профицит";
series2.tooltipText = "{name}: [bold]{valueY}[/]";
series2.strokeWidth = 3;
series2.yAxis = valueAxis2;
series2.smoothing = "monotoneX";

var bullet2 = series2.bullets.push(new am4charts.CircleBullet());
bullet2.circle.stroke = am4core.color("#fff");
bullet2.circle.strokeWidth = 2;



// Add legend
chart.legend = new am4charts.Legend();

// Add cursor
chart.cursor = new am4charts.XYCursor();