var rainfallJSON = document.getElementById('rainfallJSON').innerText;


suburbs = JSON.parse(rainfallJSON);

console.log(suburbs);


function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}


function findSuburb(targetSuburb) {
    for (var i = 0; i < suburbs.length; i++) {
        if (suburbs[i].Suburb === targetSuburb) {
            return suburbs[i]
        }
    }
};


function locateToData(longitude, latitude) {
  let currentDistance = 0;
  let nearestIndex = 0;
  for (var i = 0; i < suburbs.length; i++) {
    let stationLat = parseFloat(suburbs[i].Latitude);
    let stationLon = parseFloat(suburbs[i].Longitude);
    let distanceThisIter = getDistanceFromLatLonInKm(latitude, longitude, stationLat, stationLon);
    console.log(distanceThisIter, currentDistance);
    if(i === 0){

      currentDistance = distanceThisIter;

    }

    if(distanceThisIter < currentDistance){
      currentDistance = distanceThisIter;
      nearestIndex = i;
    }
  }
  console.log(nearestIndex);
  return suburbs[nearestIndex];
};

// console.log("test");
// console.log(findSuburb("Oakleigh"));

function showResult() {

    // Get user input
    let suburbInput = JSON.parse($( "#user-suburb option:selected" ).val()).suburb;
    let suburbLongitude = parseFloat(JSON.parse($( "#user-suburb option:selected" ).val()).longitude);
    let suburbLatitude = parseFloat(JSON.parse($( "#user-suburb option:selected" ).val()).latitude);
    let roofAreaInput = $( "#user-roof option:selected" ).val();

    // console.log(suburbInput);
    // console.log(roofAreaInput);
    // Store accumulated rainfall amout for the next 12 months
    let accumulatedList = [];
    
    let selectedData = locateToData(suburbLongitude,suburbLatitude);
    // console.log(selectedData);
    console.log(selectedData.Suburb);
  
    // Precalculate here to avoid stack size overflow
    // accumulatedList.push(parseFloat(selectedData.Jun));
    // accumulatedList.push(selectedData.Jun + selectedData.Jul);
    // accumulatedList.push(selectedData.Jun + selectedData.Jul + selectedData.Aug);

    
    am4core.ready(function() {

        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end
        
        // Create chart instance
        var chart = am4core.create("chartdiv", am4charts.XYChart3D);
        
        // Add data
        chart.data = [{
          "country": "June 2020",
          "visits": parseFloat(roofAreaInput) * parseFloat(selectedData.Jun)
        }, {
          "country": "July 2020",
          "visits": parseFloat(roofAreaInput) * (parseFloat(selectedData.Jun) + parseFloat(selectedData.Jul))
        }, {
          "country": "August 2020",
          "visits": parseFloat(roofAreaInput) * (parseFloat(selectedData.Jun) + parseFloat(selectedData.Jul) + parseFloat(selectedData.Aug))
        }, {
          "country": "September 2020",
          "visits": parseFloat(roofAreaInput) * (parseFloat(selectedData.Jun) + parseFloat(selectedData.Jul) + parseFloat(selectedData.Aug) + parseFloat(selectedData.Sep))
        }, {
          "country": "October 2020",
          "visits": parseFloat(roofAreaInput) * (parseFloat(selectedData.Jun) + parseFloat(selectedData.Jul) + parseFloat(selectedData.Aug) + parseFloat(selectedData.Sep) + parseFloat(selectedData.Oct))
        }, {
          "country": "November 2020",
          "visits": parseFloat(roofAreaInput) * (parseFloat(selectedData.Jun) + parseFloat(selectedData.Jul) + parseFloat(selectedData.Aug) + parseFloat(selectedData.Sep) + parseFloat(selectedData.Oct) + parseFloat(selectedData.Nov))
        }, {
          "country": "December 2020",
          "visits": parseFloat(roofAreaInput) * (parseFloat(selectedData.Jun) + parseFloat(selectedData.Jul) + parseFloat(selectedData.Aug) + parseFloat(selectedData.Sep) + parseFloat(selectedData.Oct) + parseFloat(selectedData.Nov) + parseFloat(selectedData.Dec))
        }, {
          "country": "January 2021",
          "visits": parseFloat(roofAreaInput) * (parseFloat(selectedData.Jun) + parseFloat(selectedData.Jul) + parseFloat(selectedData.Aug) + parseFloat(selectedData.Sep) + parseFloat(selectedData.Oct) + parseFloat(selectedData.Nov) + parseFloat(selectedData.Dec) + parseFloat(selectedData.Jan))
        }, {
          "country": "February 2021",
          "visits": parseFloat(roofAreaInput) * (parseFloat(selectedData.Jun) + parseFloat(selectedData.Jul) + parseFloat(selectedData.Aug) + parseFloat(selectedData.Sep) + parseFloat(selectedData.Oct) + parseFloat(selectedData.Nov) + parseFloat(selectedData.Dec) + parseFloat(selectedData.Jan) + parseFloat(selectedData.Feb))
        }, {
          "country": "March 2021",
          "visits": parseFloat(roofAreaInput) * (parseFloat(selectedData.Jun) + parseFloat(selectedData.Jul) + parseFloat(selectedData.Aug) + parseFloat(selectedData.Sep) + parseFloat(selectedData.Oct) + parseFloat(selectedData.Nov) + parseFloat(selectedData.Dec) + parseFloat(selectedData.Jan) + parseFloat(selectedData.Feb) + parseFloat(selectedData.Mar))
        }, {
          "country": "April 2021",
          "visits": parseFloat(roofAreaInput) * (parseFloat(selectedData.Jun) + parseFloat(selectedData.Jul) + parseFloat(selectedData.Aug) + parseFloat(selectedData.Sep) + parseFloat(selectedData.Oct) + parseFloat(selectedData.Nov) + parseFloat(selectedData.Dec) + parseFloat(selectedData.Jan) + parseFloat(selectedData.Feb) + parseFloat(selectedData.Mar) + parseFloat(selectedData.Apr))
        }, {
          "country": "May 2021",
          "visits": parseFloat(roofAreaInput) * (parseFloat(selectedData.Jun) + parseFloat(selectedData.Jul) + parseFloat(selectedData.Aug) + parseFloat(selectedData.Sep) + parseFloat(selectedData.Oct) + parseFloat(selectedData.Nov) + parseFloat(selectedData.Dec) + parseFloat(selectedData.Jan) + parseFloat(selectedData.Feb) + parseFloat(selectedData.Mar) + parseFloat(selectedData.Apr) + parseFloat(selectedData.May))
        }];
        
        // Create axes
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "country";
        categoryAxis.renderer.labels.template.rotation = 270;
        categoryAxis.renderer.labels.template.hideOversized = false;
        categoryAxis.renderer.minGridDistance = 20;
        categoryAxis.renderer.labels.template.horizontalCenter = "right";
        categoryAxis.renderer.labels.template.verticalCenter = "middle";
        categoryAxis.tooltip.label.rotation = 270;
        categoryAxis.tooltip.label.horizontalCenter = "right";
        categoryAxis.tooltip.label.verticalCenter = "middle";
        
        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.title.text = "Water Catchment Estimate (Litres)";
        valueAxis.title.fontWeight = "bold";
        
        // Create series
        var series = chart.series.push(new am4charts.ColumnSeries3D());
        series.dataFields.valueY = "visits";
        series.dataFields.categoryX = "country";
        series.name = "Visits";
        series.tooltipText = "{categoryX}: [bold]{valueY}[/]";
        series.columns.template.fillOpacity = .8;
        
        var columnTemplate = series.columns.template;
        columnTemplate.strokeWidth = 2;
        columnTemplate.strokeOpacity = 1;
        // columnTemplate.stroke = am4core.color("#FFFFFF");
        
        columnTemplate.adapter.add("fill", function(fill, target) {
          return chart.colors.getIndex(target.dataItem.index);
        })
        
        columnTemplate.adapter.add("stroke", function(stroke, target) {
          return chart.colors.getIndex(target.dataItem.index);
        })
        
        chart.cursor = new am4charts.XYCursor();
        chart.cursor.lineX.strokeOpacity = 0;
        chart.cursor.lineY.strokeOpacity = 0;
        
        }); // end am4core.ready()


        

        let totalCatchment = Math.round(parseFloat(roofAreaInput) * (parseFloat(selectedData.Annual)));
        let totalRainfall = Math.round(parseFloat(selectedData.Jun) + parseFloat(selectedData.Jul) + parseFloat(selectedData.Aug) + parseFloat(selectedData.Sep) + parseFloat(selectedData.Oct) + parseFloat(selectedData.Nov) + parseFloat(selectedData.Dec) + parseFloat(selectedData.Jan) + parseFloat(selectedData.Feb) + parseFloat(selectedData.Mar) + parseFloat(selectedData.Apr) + parseFloat(selectedData.May));
        document.getElementById("total-message").innerHTML = `Estimated rainwater saving in next 12 months: <br>  <span style="font-size: 2.2rem; color: cornflowerblue;">${Math.round(totalCatchment)} Litres</span>`;
        
        document.getElementById("total-writeup").innerHTML = `<span style="font-size: 2.2rem; color: cornflowerblue;">${suburbInput}</span> is a wonderful choice!<br> In last year, the average monthly rainfall is <span style="font-size: 2.2rem; color: cornflowerblue;">${Math.round(totalRainfall/12)} millimetre</span>.<br> Estimated Monthly Saving <span style="font-size: 2.2rem; color: cornflowerblue;">${Math.round(totalCatchment/12)} litres</span>.` ;
        
        
        
        let numOfPeople = Math.round(totalCatchment/1350);

        document.getElementById("army-message").innerHTML = `With appropriate treatment, you can feed an Army of <span style="font-size: 5rem; color: darkgoldenrod;">${numOfPeople}</span> for an entire year!`;

        let people = [];

        if (numOfPeople < 40){

          for (var i = 0; i < numOfPeople; i++) {
            if (i % 7 === 0 && i != 0)
            {
              people.push(`<br>`)
            }
            people.push(`<i class="fas fa-male" style="font-size: 3rem; color: cornflowerblue;"></i>`)
          }

        } else {
          for (var i = 0; i < numOfPeople; i++) {
            if (i % 9 === 0 && i != 0)
            {
              people.push(`<br>`)
            }
            people.push(`<i class="fas fa-male" style="font-size: 1.5rem; color: cornflowerblue;"></i>`)
          }
        }
        
        document.getElementById("pictogram-person").innerHTML = people.join('');

        let numOfLoad = Math.round(totalCatchment/100);

        document.getElementById("washing-machine-message").innerHTML = `It means enough water for <span style="font-size: 5rem; color: darkgoldenrod;">${numOfLoad}</span> loads of free laundry!`;

        document.getElementById("shower-message").innerHTML = `It also means you got enough shower water for the next <span style="font-size: 5rem; color: darkgoldenrod;">${Math.round(totalCatchment/600)}</span> days!`

      };



const inputButton = document.getElementById('user-submit');
inputButton.addEventListener('click', showResult);