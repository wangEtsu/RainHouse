am4core.ready(function() {

  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end
  
  // Create chart instance
  var chart = am4core.create("storage-visualization", am4charts.XYChart);
  
  // Add data
  chart.data = [{
    "year": "2010",
    "pop": 4.08,
    "level": 40.15,
  }, {
    "year": "2011",
    "pop": 4.00,
    "level": 59.55,
  }, {
    "year": "2012",
    "pop": 4.25,
    "level": 72.98,
  }, {
    "year": "2013",
    "pop": 4.35,
    "level": 79.39,
  }, {
    "year": "2014",
    "pop": 4.25,
    "level": 76.66,
  }, {
    "year": "2015",
    "pop": 4.53,
    "level": 71.40,
  }, {
    "year": "2016",
    "pop": 4.67,
    "level": 65.35,
  }, {
    "year": "2017",
    "pop": 4.82,
    "level": 66.35,
  }, {
    "year": "2018",
    "pop": 5.00,
    "level": 62.17,
  }, {
    "year": "2019",
    "pop": 5.191,
    "level": 57.03,
  }];

  // Create axes
  var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  dateAxis.renderer.labels.template.fill = am4core.color("#363636");
  //dateAxis.renderer.grid.template.location = 0;
  //dateAxis.renderer.minGridDistance = 30;
  
  var valueAxis1 = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis1.title.text = "Water storage level (%)";
  valueAxis1.renderer.labels.template.fill = am4core.color("#363636");
  
  
  var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis2.title.text = "Population (Million people)";
  valueAxis2.renderer.opposite = true;
  valueAxis2.renderer.grid.template.disabled = true;
  valueAxis2.renderer.labels.template.fill = am4core.color("#363636");
  

  // Create series
  var series1 = chart.series.push(new am4charts.ColumnSeries());
  series1.dataFields.valueY = "level";
  series1.dataFields.dateX = "year";
  series1.yAxis = valueAxis1;
  series1.name = "Water storage level";
  series1.tooltipText = "{name}\n[bold font-size: 30]{valueY}%[/]";
  series1.fill = chart.colors.getIndex(0);
  series1.strokeWidth = 0;
  series1.clustered = false;
  series1.columns.template.width = am4core.percent(40);

  

  
  var series3 = chart.series.push(new am4charts.LineSeries());
  series3.dataFields.valueY = "pop";
  series3.dataFields.dateX = "year";
  series3.name = "Population";
  series3.strokeWidth = 2;
  series3.tensionX = 0.7;
  series3.yAxis = valueAxis2;
  series3.tooltipText = "{name}\n[bold font-size: 30]{valueY}M[/]";
  
  var bullet3 = series3.bullets.push(new am4charts.CircleBullet());
  bullet3.circle.radius = 3;
  bullet3.circle.strokeWidth = 2;
  bullet3.circle.fill = am4core.color("#faebd7");
  

  // Add cursor
  chart.cursor = new am4charts.XYCursor();
  
  // Add legend
  chart.legend = new am4charts.Legend();
  chart.legend.position = "top";
  
  // Add scrollbar
  chart.scrollbarX = new am4charts.XYChartScrollbar();
  chart.scrollbarX.series.push(series1);
  chart.scrollbarX.series.push(series3);
  chart.scrollbarX.parent = chart.bottomAxesContainer;
  
  }); // end am4core.ready()