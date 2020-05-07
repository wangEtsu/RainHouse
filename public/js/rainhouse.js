var rainfallJSON = document.getElementById('rainfallJSON').innerText;


suburbs = JSON.parse(rainfallJSON);

console.log(suburbs);



function findSuburb(targetSuburb) {
    for (var i = 0; i < suburbs.length; i++) {
        if (suburbs[i].Suburb === targetSuburb) {
            return suburbs[i]
        }
    }
};

console.log("test");
console.log(findSuburb("Oakleigh"));

function showAccumulation() {

    // Find the selected suburb
    let selectedSuburb = document.getElementById('selectedSuburb').innerText;
    let selectedData = findSuburb(selectedSuburb);

    // Store accumulated rainfall amout for the next 12 months
    let accumulatedList = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200];
    
    for (var i = 0; i < 12; i++) {
        
    }

    


    am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart
    var chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.paddingRight = 20;

    chart.data = [
        {
            date: new Date(2020, 5),
            visits: accumulatedList[0]
        },

        {
            date: new Date(2020, 6),
            visits: accumulatedList[1]
        },

        {
            date: new Date(2020, 7),
            visits: accumulatedList[2]
        },

        {
            date: new Date(2020, 8),
            visits: accumulatedList[3]
        },

        {
            date: new Date(2020, 9),
            visits: accumulatedList[4]
        },

        {
            date: new Date(2020, 10),
            visits: accumulatedList[5]
        },

        {
            date: new Date(2020, 11),
            visits: accumulatedList[6]
        },

        {
            date: new Date(2021, 0),
            visits: accumulatedList[7]
        },

        {
            date: new Date(2021, 1),
            visits: accumulatedList[8]
        },

        {
            date: new Date(2021, 2),
            visits: accumulatedList[9]
        },

        {
            date: new Date(2021, 3),
            visits: accumulatedList[10]
        },

        {
            date: new Date(2021, 4),
            visits: accumulatedList[11]
        },
    ];
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.baseInterval = {
    "timeUnit": "month",
    "count": 1
    };
    dateAxis.tooltipDateFormat = "YYYY MMMM";

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.title.text = "Water Catchment Estimate (Litres)";

    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "visits";
    series.tooltipText = "Visits: [bold]{valueY}[/]";
    series.fillOpacity = 0.3;


    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineY.opacity = 0;
    chart.scrollbarX = new am4charts.XYChartScrollbar();
    chart.scrollbarX.series.push(series);


    dateAxis.start = 0.8;
    dateAxis.keepSelection = true;



    function generateChartData() {
        var chartData = [];
        // current date
        var firstDate = new Date();
        // now set 500 minutes back
        firstDate.setMinutes(firstDate.getDate() - 500);

        // and generate 500 data items
        var visits = 500;
        for (var i = 0; i < 500; i++) {
            var newDate = new Date(firstDate);
            // each time we add one minute
            newDate.setMinutes(newDate.getMinutes() + i);
            // some random number
            visits += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
            // add data item to the array
            chartData.push({
                date: newDate,
                visits: visits
            });
        }
        return chartData;
    }

    }); // end am4core.ready()

};

showAccumulation();