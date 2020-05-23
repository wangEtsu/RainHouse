
var variableJSON = document.getElementById('variableJSON').innerText;

// document.getElementById('variableJSON').remove();

test = JSON.parse(variableJSON);

// for (var i = 0; i < 14; i++) {

//   var keys = Object.keys(json);
// for (var j=0; j < keys.length; j++) {
//    var key = keys[j].replace(/^element_/, "");
//    tmp[key] = json[keys[j]];
// }


//   var keys = Object.keys(test[i].answers)
//   for (var j = 0; j < keys.length; j++) {
//     var key = keys[j].replace('．', ".");
//   }


//   .replace('．', ".")
// }

function fix_key(key) { return key.replace('．', "."); }

for (var i = 0; i < 14; i++) {
console.log(i);
var keys = Object.keys(test[i].answers);
var result = {};

for (j = 0; j < keys.length; j++) {
  var key = keys[j];
  result[fix_key(key)] = (test[i].answers)[key];
}
test[i].answers = result;

}
// // iterate through each question
// for (var i = 0; i < 11; i++) {
//   // !improtant: You need to parse it twice to deal with stringified object
//   console.log(JSON.parse(variableJSON)[i]);
//   test.push(JSON.parse(variableJSON)[i]);
// };



// // Uncomment below
// // Get data that were passed to ejs from app.js (MySQL)
// var variableJSON = document.getElementById('variableJSON').innerText;

// // Remove the ejs element since there is no more use for it
// document.getElementById('variableJSON').remove();

// // set up an array to store result
// let test = [];

// // iterate through each question
// for (var i = 0; i < 13; i++) {
//   // !improtant: You need to parse it twice to deal with stringified object
//   console.log(JSON.parse(JSON.parse(variableJSON)[i]["survey_set"]));
//   test.push(JSON.parse(JSON.parse(variableJSON)[i]["survey_set"]));
// };


// Quiz Variables
const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const myQuestions = test;
// const myQuestions = [

//   // How many people?
//   {
//     questionTag: "familyMember",
//     question: "How many people live in your house?",
//     activity: "familySize",
//     answers: {
//       "1": "1",
//       "1.5": "2",
//       "2.3": "3",
//       "3.1": "4",
//       "4.1": "5"
//     },
//     tip: "Charlesworths family at Sydeny saves thousands of litres of water per year! Lets find out about yours!"
//   },

//   // Shower set
//   {
//     questionTag: "showerDuration",
//     question: "What is the average shower time of your family per person?",
//     activity: "Shower & Bath",
//     answers: {
//       "24": "0-5 mins",
//       "72": "5-10 mins",
//       "120": "10-15 mins",
//       "190": "> 15 mins"
//     },
//     tip: "A minute saved in the shower saves upto 12 litres of water. Challenge yourself to a shower time of your favourite song or under 5 mins."
//   },

//   {
//     questionTag: "showerheadEfficiency",
//     question: "Does your house have an efficient showerhead?",
//     activity: "Shower & Bath",
//     answers: {
//       "1": "No",
//       "0.5": "Yes",
//       "0.75": "Not sure",
//     },
//     tip: "An AAA rated showerhead can reduce almost half of your shower consumption or upto 26 litres of water for a 7 minute shower"
//   },

//   {
//     questionTag: "showerFrequency",
//     question: "How often do you take shower per day?",
//     activity: "Shower & Bath",
//     answers: {
//       "45": "Depends",
//       "30": "1",
//       "60": "2",
//       "120": "3"
      
//     },
//     tip: "You dont have to shower everyday!! As per Studies, bathing too often is actually really bad for your skin"
//   },

//   {
//     questionTag: "bathAmount",
//     question: "Do you fancy taking bath? If so, how frequently?",
//     activity: "Shower & Bath",
//     answers: {
//       "0": "Never",
//       "380": "Once a week",
//       "95": "Once a month"

//     },
//     tip: "If you generally take a shower for more than 20 mins, its advisable to take a bath which will help you save more water"
//   },


//   // Toilet set
//   {
//     questionTag: "toiletAmount",
//     question: "Do you have a partial flush or a full flush toilet?",
//     activity: "Toilet",
//     answers: {
//       "540": "Yes",
//       "1440": "No",
//       "1000": "Not Sure"
//     },
//     tip: "Have you got one? if no, thats bad!!. A Dual-flush toilets, by comparison, use much less water and are considered to be environmentally friendly."
//   },

//   {
//     questionTag: "toiletLeak",
//     question: "Do you have any leaks in your toilet?",
//     activity: "Toilet",
//     answers: {
//       "1232": "Yes",
//       "0": "No",
//       "650": "Not Sure"
//     },
//     tip: "Get those leaks fixed ASAP. A leaking toilet hogs upto 308 litres of water a week"
//   },

//   // Kitchen set
//   {
//     questionTag: "kitchenWash",
//     question: "How do you wash your dishes?",
//     activity: "Kitchen",
//     answers: {
//       "60": "By hand",
//       "12": "Dishwasher of course!!",
//     },
//     tip: "An Energy Star certified dishwasher can use as little as 12 litres of water per load, which is only 1/5 of washing in sink"
//   },

//   {


//     questionTag: "dishwashingFrequency",
//     question: "How often do you wash your dishes per week?",
//     activity: "Kitchen",
//     answers: {
//       "12": "3",
//       "20": "5",
//       "32": "7 or more",
//     },

//     tip: " Use a bucket to pre-wash your dishes, it saves more water and also prevents bacteria from growing  "
//   },

//   {
//     questionTag: "kitchenEfficiency",
//     question: "Do you have low flow taps in the kitchen?",
//     activity: "Kitchen",
//     answers: {
//       "0.75": "Yes",
//       "1": "No",
//       "0.9": "Not Sure",
//     },
//     tip: "Get a low flow taps ASAP, it saves not only water but also electricty use"
//   },


//   // Laundry set
//   {
//     questionTag: "laundryAmount",
//     question: "How do you wash your clothes?",
//     activity: "Washing",
//     answers: {
//       "200": "By hand",
//       "50": "Front loading washing machine",
//       "130": "Top loading washing machine"
//     },
//     tip: "An AAA rated washing machine can save your water usage by atleast 50%."
//   },

//   {
//     questionTag: "laundryFrequency",
//     question: "How many laundry loads per week?",
//     activity: "Washing",
//     answers: {
//       "8": "Twice per week",
//       "4": "Every week",
//       "1": "Once per month"
//     },
//     tip: "Clothes are slightly damaged with each wash, an appropriate laundry frequency can help to save both water and electricity use"
//   },

//   // Outdoor set
//   {
//     questionTag: "outdoorGarden",
//     question: "Do you have a garden? If so, do you use sprinklers or drippers?",
//     activity: "Outdoor",
//     answers: {
//       "0": "No I don't have one",
//       "2400": "Yes, I have a dripper system",
//       "3000": "Yes, sprinkler ease my work"
//     },
//     tip: "A well-designed sprinkler system not only saves water but also prevent over-watering"
//   },

//   {
//     questionTag: "outdoorCar",
//     question: "Do you wash your car by yourself",
//     activity: "Outdoor",
//     answers: {
//       "0": "Never",
//       "200": "Yes, I wash my car at home"
//     },
//     tip: "Using a waterless cleaning solution can reduce your water usage to a single cup per car"
//   },
// ];

$("#tanky").hide();
$("#piediv").hide();
$("#pie-and-comparison").hide();
$("#detail-table").hide();
$("#message-to-educate").hide();
$("#submit").click(function () {
  $("#tanky").fadeIn(4000);
  $("#piediv").fadeIn(4000);
  $("#pie-and-comparison").fadeIn(4000);
  $("#detail-table").fadeIn(4000);
  $("#message-to-educate").fadeIn(4000);
});

// Functions
function buildQuiz() {
  // variable to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for (usage in currentQuestion.answers) {
        console.log(usage)
        // ...add an HTML radio button
        answers.push(
          `<label>
              <input class="userChoice" type="radio" name="question${questionNumber}" value="${usage}"><span class="btn btn-outline-primary">
              ${currentQuestion.answers[usage]}
            </span></label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="quiz-slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"><div class="radio-toolbar"> ${answers.join("")} </div></div>
            <div style="font-size:1.2rem"><i class="fas fa-lightbulb" style="font-size:1.5rem;"></i> ${currentQuestion.tip} </div>
          </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}









function showResults() {

  // set up list to collect user input
  let result = {};

  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // for each question...
  myQuestions.forEach((currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // Define activity, tag, and answer for each question
    let currentActivity = currentQuestion.activity;
    let currentTag = currentQuestion.questionTag;
    let currentUsage = userAnswer;

    // Store tag and usage as key value pairs for further calculation
    result[currentTag] = parseFloat(currentUsage);


  });

  // show number of correct answers out of total
  console.log(result);
  console.log("end");

  // append result in results section
  //   $.each(result,function(key,value){
  //     $('#results').append("<h1>"+key +": "+value+"</h1>")

  //  });

  let familyCount = result["familyMember"]
  let showerTotal = (result["showerDuration"] * result["showerheadEfficiency"] * result["showerFrequency"] + result["bathAmount"]) * familyCount;
  let toiletTotal = (result["toiletAmount"] + result["toiletLeak"]) * familyCount;
  let kitchenTotal = (result["kitchenWash"] * result["dishwashingFrequency"] * result["kitchenEfficiency"]) * familyCount;
  let laundryTotal = (result["laundryAmount"] * result["laundryFrequency"]) * familyCount;
  let outdoorTotal = result["outdoorGarden"] + result["outdoorCar"];
  let usageTotal = showerTotal + toiletTotal + kitchenTotal + laundryTotal + outdoorTotal

  window.localStorage;
  localStorage.setItem("totalUsage", usageTotal);




  // // Set up variable to store table element, and then fill in with calculated data
  // const showerCell = document.getElementById("shower-consumption");
  // const toiletCell = document.getElementById("toilet-consumption");
  // const kitchenCell = document.getElementById("kitchen-consumption");
  // const laundryCell = document.getElementById("laundry-consumption");
  // const gardeningCell = document.getElementById("gardening-consumption");
  // const carCell = document.getElementById("car-consumption");

  // // Fill in result
  // showerCell.innerHTML = showerTotal;
  // kitchenCell.innerHTML = kitchenTotal;
  // toiletCell.innerHTML = toiletTotal;
  // laundryCell.innerHTML = laundryTotal;
  // gardeningCell.innerHTML = result["outdoorGarden"];
  // carCell.innerHTML = result["outdoorCar"];


  //pie chart
  am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("piediv", am4charts.PieChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
    
    chart.data = [
      {
        activity: "Shower & Bath",
        value: showerTotal
      },
      {
        activity: "Toilet",
        value: toiletTotal
      },
      {
        activity: "Kitchen",
        value: kitchenTotal
      },
      {
        activity: "Laundry",
        value: laundryTotal
      },
      {
        activity: "Outdoor",
        value: outdoorTotal
      },
    ];
    chart.radius = am4core.percent(70);
    chart.innerRadius = am4core.percent(40);
    chart.startAngle = 180;
    chart.endAngle = 360;  
    
    var series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "value";
    series.dataFields.category = "activity";
    
    series.slices.template.cornerRadius = 10;
    series.slices.template.innerCornerRadius = 7;
    series.slices.template.draggable = true;
    series.slices.template.inert = true;
    // Disable ticks and labels
    series.labels.template.disabled = true;
    series.ticks.template.disabled = true;
    series.alignLabels = false;
    
    series.hiddenState.properties.startAngle = 90;
    series.hiddenState.properties.endAngle = 90;
    

    
    chart.legend = new am4charts.Legend();
    
    }); // end am4core.ready()



  // Water tank
  // Average victorian family water usage 
  let averageTotal = familyCount * 160 * 30;
  let tankFeedbackMessage = "";





  // $(".water-tank .liquid svg").css("top", "calc(97.5% - 20%)")

  // If user are using less water than average household with same size
  if (averageTotal > usageTotal) {



    // Set up a top water level
    let topLevel = averageTotal * 1.2;

    let avgPercentage = (averageTotal / topLevel) * 100 + "%";
    let userPercentage = (usageTotal / topLevel) * 100 + "%";


    // Calculate how much less user are using than average victorian family of the same size
    let howMuchLess = Math.round((100 - (usageTotal / averageTotal) * 100)) + "%";

    tankFeedbackMessage = `<h1 style="color: goldenrod;"> Good Work! </h1> <p class="activity-indicator"> Your family is using </p> <h1 class="percentage"> ${Math.round(usageTotal/30)} Litres</h1> <p class="activity-indicator"> of water each day, which is </p> <h1 class="percentage"> ${howMuchLess} </h1> <p class="activity-indicator"> less than an average Victorian family of </p> <h1 id="family-size"> ${Math.ceil(familyCount)} </h1>`

    // Activate water tanks
    $("#water-tank-left .liquid svg").css("top", "calc(97.5% - " + userPercentage + ")")
    $("#water-tank-right .liquid svg").css("top", "calc(97.5% - " + avgPercentage + ")")


  } else {

    // If user are using more water than average household with same size


    let topLevel = usageTotal * 1.2;


    let avgPercentage = (averageTotal / topLevel) * 100 + "%";
    let userPercentage = (usageTotal / topLevel) * 100 + "%";


    let howMuchMore = Math.round((usageTotal / averageTotal) * 100 - 100) + "%";


    tankFeedbackMessage = `<h1 style="color: coral;"> Stop right there! </h1> <p class="activity-indicator"> Your family is using </p> <h1 class="percentage"> ${Math.round(usageTotal/30)} Litres</h1> <p class="activity-indicator"> of water each day, which is </p> <h1 class="percentage"> ${howMuchMore} </h1> <p class="activity-indicator"> more than an average Victorian family of </p> <h1 id="family-size"> ${Math.ceil(familyCount)} </h1>`
      ;


    // Activate water tanks
    $("#water-tank-left .liquid svg").css("top", "calc(97.5% - " + userPercentage + ")")
    $("#water-tank-right .liquid svg").css("top", "calc(97.5% - " + avgPercentage + ")")


  }



  // Pie 
  let pieFeedbackMessage = "";
  let avgShower = familyCount * 1650;
  let avgToilet = familyCount * 1092;
  let avgKitchen = familyCount * 525;
  let avgLaundry = familyCount * 429;
  let avgOutdoor = 450 + 200;

  let compareSet = {
    "Shower & Bath": "Normal",
    "Toilet": "Normal",
    "Kitchen": "Normal",
    "Laundry": "Normal",
    "Outdoor": "Normal",
  }


  // Find out if user is doing good / bad in shower and bath
  if (showerTotal > avgShower * 1.5) {
    compareSet["Shower & Bath"] = "Bad"
  }

  if (showerTotal < avgShower * 0.8) {
    compareSet["Shower & Bath"] = "Good"
  }

  // Find out if user is doing good / bad in toilet
  if (toiletTotal > avgToilet * 1.5) {
    compareSet["Toilet"] = "Bad"
  }

  if (toiletTotal < avgToilet * 0.8) {
    compareSet["Toilet"] = "Good"
  }

  // Find out if user is doing good / bad in kitchen
  if (kitchenTotal > avgKitchen * 1.5) {
    compareSet["Kitchen"] = "Bad"
  }

  if (kitchenTotal < avgKitchen * 0.8) {
    compareSet["Kitchen"] = "Good"
  }

  // Find out if user is doing good / bad in kitchen
  if (laundryTotal > avgLaundry * 1.5) {
    compareSet["Laundry"] = "Bad"
  }

  if (laundryTotal < avgLaundry * 0.8) {
    compareSet["Laundry"] = "Good"
  }

  // Find out if user is doing good / bad in kitchen
  if (outdoorTotal > avgOutdoor * 1.5) {
    compareSet["Outdoor"] = "Bad"
  }

  if (outdoorTotal < avgOutdoor * 0.8) {
    compareSet["Outdoor"] = "Good"
  }

  goodSet = [];
  badSet = [];


  // Push result to both sets
  for (let key in compareSet) {
    if (compareSet[key] === "Good") {
      goodSet.push(key);
    }
    if (compareSet[key] === "Bad") {
      badSet.push(key);
    }

  }

  var goodStr = '';
  var badStr = '';

  goodSet.forEach(function (goodie) {
    goodStr += '<p class="activity-indicator">' + goodie + '</p>';
  });

  badSet.forEach(function (badie) {
    badStr += '<p class="activity-indicator">' + badie + '</p>';
  });


  $("#good-activity").html(goodStr);
  $("#bad-activity").html(badStr);

  // pieFeedbackMessage = `You are doing great in: ${goodSet} You are doing bad in ${badSet}`

  // Water tank section feedback
  // Pre-set analysis context
  tankPreSet = "We use a lot of water, but how we use it is much more important than the amount of water we drink every day. Studies carried out by many Australian government bodies indicate that we use up to 35% of the water to irrigate our gardens, while 19% of the water is flushed down the toilet. An average toilet uses up to 12 litres of water per flush, while an average garden sprinkler uses up to 1,000 litres of water per hour."
  // Activate analysis text
  $("#water-tank-message").html(tankFeedbackMessage);
  $("#water-tank-analysis").html(tankPreSet);

  // Pie chart section feedback
  // Pre-set analysis context
  piePreSet = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at convallis dolor. Quisque venenatis lectus vel turpis bibendum sodales. Praesent tempor, justo congue rhoncus sodales, risus mi pretium sapien, sed malesuada mauris leo sed elit. Aliquam ullamcorper, est ac convallis gravida, urna quam congue urna, ut iaculis turpis quam ac eros. Nullam nec libero non turpis lacinia sollicitudin eget ut enim. Suspendisse a accumsan lectus, ut tincidunt leo. Praesent vulputate malesuada metus at eleifend. Sed at convallis risus, at bibendum nibh. Aenean lectus augue, tincidunt quis lacus ut, sagittis pharetra risus. Ut dignissim iaculis neque id ultrices."
  // Activate analysis text
  $("#pie-message").html(pieFeedbackMessage);
  $("#pie-analysis").html(piePreSet);



  // Amchart bar
  am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end




    var chart = am4core.create('chartdiv', am4charts.XYChart)
    chart.colors.step = 2;

    chart.legend = new am4charts.Legend()
    chart.legend.position = 'top'
    chart.legend.paddingBottom = 20
    chart.legend.labels.template.maxWidth = 95

    var xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    xAxis.dataFields.category = 'category'
    xAxis.renderer.cellStartLocation = 0.1
    xAxis.renderer.cellEndLocation = 0.9
    xAxis.renderer.grid.template.location = 0;
    var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 0;
    yAxis.title.text = "Litres of water"
    function createSeries(value, name) {
      var series = chart.series.push(new am4charts.ColumnSeries())
      series.dataFields.valueY = value
      series.dataFields.categoryX = 'category'
      series.name = name

      series.events.on("hidden", arrangeColumns);
      series.events.on("shown", arrangeColumns);

      var bullet = series.bullets.push(new am4charts.LabelBullet())
      bullet.interactionsEnabled = false
      bullet.dy = -20;
      bullet.label.text = '{valueY}'
      bullet.label.fill = am4core.color('#120136')


      return series;
    }

    chart.data = [
      {
        category: 'Shower & Bath',
        You: showerTotal,
        Average: avgShower,
      },
      {
        category: 'Toilet',
        You: toiletTotal,
        Average: avgToilet,
      },
      {
        category: 'Kitchen',
        You: kitchenTotal,
        Average: avgKitchen,
      },
      {
        category: 'Laundry',
        You: laundryTotal,
        Average: avgLaundry,
      },
      {
        category: 'Outdoor',
        You: outdoorTotal,
        Average: avgOutdoor,
      }

    ]


    createSeries('You', 'Yours');
    createSeries('Average', 'Average');

    function arrangeColumns() {

      var series = chart.series.getIndex(0);

      var w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
      if (series.dataItems.length > 1) {
        var x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
        var x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
        var delta = ((x1 - x0) / chart.series.length) * w;
        if (am4core.isNumber(delta)) {
          var middle = chart.series.length / 2;

          var newIndex = 0;
          chart.series.each(function (series) {
            if (!series.isHidden && !series.isHiding) {
              series.dummyData = newIndex;
              newIndex++;
            }
            else {
              series.dummyData = chart.series.indexOf(series);
            }
          })
          var visibleCount = newIndex;
          var newMiddle = visibleCount / 2;

          chart.series.each(function (series) {
            var trueIndex = chart.series.indexOf(series);
            var newIndex = series.dummyData;

            var dx = (newIndex - trueIndex + middle - newMiddle) * delta

            series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
            series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
          })
        }
      }
    }

  }); // end am4core.ready()


}


function showSlide(n) {
  slides[currentSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  currentSlide = n;


  const answerContainers = quizContainer.querySelectorAll('.answers');  
  const lastAnswer = answerContainers[13];
  const currentSelector = `input[name=question${13}]:checked`;
  const atLeastOneIsChecked = lastAnswer.querySelector(currentSelector) !== null;

  if (currentSlide === 0) {
    previousButton.style.display = 'none';
  }
  else {
    previousButton.style.display = 'inline-block';
  }
  if (currentSlide === slides.length - 1 && atLeastOneIsChecked) {
    
    nextButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
  }
  else {
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
  }
}

function showNextSlide() {

  // Check if the current question is answered, if not, prompt an alert and stop user from continuing
  const answerContainers = quizContainer.querySelectorAll('.answers');
  const currentAnswer = answerContainers[currentSlide];
  const currentSelector = `input[name=question${currentSlide}]:checked`;
  const atLeastOneIsChecked = currentAnswer.querySelector(currentSelector) !== null;

  if (atLeastOneIsChecked) {
    showSlide(currentSlide + 1);
  }
  else {
    // Shake the radio toolbar if user click next with out answering any  
    $(".radio-toolbar").addClass("shake");
      
      var delay = setTimeout(function(){
        $(".shake").removeClass("shake");
      }, 3000)
  }

}

function showPreviousSlide() {
  showSlide(currentSlide - 1);
}




// Kick things off
buildQuiz();

// Pagination
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".quiz-slide");
const choiceButtons = document.querySelectorAll(".userChoice")
let currentSlide = 0;

// Show the first slide
showSlide(currentSlide);

// Event listeners
// When user go to the last lide, re-selecting should not trigger showNextSlide, thus length - 2
for (var i = 0; i < choiceButtons.length - 2; i++) {
  choiceButtons[i].addEventListener("click", showNextSlide);
};

for (var i = 0; i < choiceButtons.length; i++) {
  choiceButtons[i].addEventListener("click", activateStepper);
};

// Add event listener to the last TWO OPTIONS, only when they are clicked, submitted where appear
choiceButtons[44].addEventListener("click", showSubmitButton);
choiceButtons[45].addEventListener("click", showSubmitButton);

function showSubmitButton() {
    nextButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
}



function activateStepper() {
  // find out which question user are currently in
  if (currentSlide >= 5) {
    $("#progressbar li").eq(1).addClass("active");
  };

  if (currentSlide >= 7) {
    $("#progressbar li").eq(2).addClass("active");
  };

  if (currentSlide >= 10) {
    $("#progressbar li").eq(3).addClass("active");
  };

  if (currentSlide >= 12) {
    $("#progressbar li").eq(4).addClass("active");
  };




  // then activate step accordingly
}

submitButton.addEventListener('click', showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

// sampleJsonSchema = 
// {
//   qid: 01,
//   questionTag: "toiletConsumption",
//   question: "Do you have a dual-flush toilet?",
//   activity: "Toilet",
//   answers: {
//     "Yes, I do": "750",
//     "No, I only have a normal one": "No, I only got a single-flush one",
//   },
//   tip: "A dual flush toilet can save up to 50% water!"
// }