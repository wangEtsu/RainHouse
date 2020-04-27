am4core.ready(function() {

  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end
  
  // Create chart instance
  var chart = am4core.create("storage-visualization", am4charts.XYChart);
  
  // Add data
  chart.data = [{
    "year": "2010",
    "market1": 4.08,
    "sales1": 40.15,
  }, {
    "year": "2011",
    "market1": 4.00,
    "sales1": 59.55,
  }, {
    "year": "2012",
    "market1": 4.25,
    "sales1": 72.98,
  }, {
    "year": "2013",
    "market1": 4.35,
    "sales1": 79.39,
  }, {
    "year": "2014",
    "market1": 4.25,
    "sales1": 76.66,
  }, {
    "year": "2015",
    "market1": 4.53,
    "sales1": 71.40,
  }, {
    "year": "2016",
    "market1": 4.67,
    "sales1": 65.35,
  }, {
    "year": "2017",
    "market1": 4.82,
    "sales1": 66.35,
  }, {
    "year": "2018",
    "market1": 5.00,
    "sales1": 62.17,
  }, {
    "year": "2019",
    "market1": 5.191,
    "sales1": 57.03,
  }];
  
  // Create axes
  var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  //dateAxis.renderer.grid.template.location = 0;
  //dateAxis.renderer.minGridDistance = 30;
  
  var valueAxis1 = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis1.title.text = "Water storage level (%)";
  
  
  var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis2.title.text = "Population (Million people)";
  valueAxis2.renderer.opposite = true;
  valueAxis2.renderer.grid.template.disabled = true;
  
  // Create series
  var series1 = chart.series.push(new am4charts.ColumnSeries());
  series1.dataFields.valueY = "sales1";
  series1.dataFields.dateX = "year";
  series1.yAxis = valueAxis1;
  series1.name = "Water storage level";
  series1.tooltipText = "{name}\n[bold font-size: 20]{valueY}%[/]";
  series1.fill = chart.colors.getIndex(0);
  series1.strokeWidth = 0;
  series1.clustered = false;
  series1.columns.template.width = am4core.percent(40);
  

  
  var series3 = chart.series.push(new am4charts.LineSeries());
  series3.dataFields.valueY = "market1";
  series3.dataFields.dateX = "year";
  series3.name = "Population";
  series3.strokeWidth = 2;
  series3.tensionX = 0.7;
  series3.yAxis = valueAxis2;
  series3.tooltipText = "{name}\n[bold font-size: 20]{valueY}M[/]";
  
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