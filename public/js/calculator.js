// Variables
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
  {
    question: "What is your average shower time?",
    activity: "Shower",
    answers: {
      1500: "0-5 minute",
      1850: "5-10 minute",
      2400: "10-15 minute",
      3000: "more than 15 minute"
    },
    tip: "With a dual flush toilet, you can save up to 100L water per day!"
  },

  {
    question: "Does your house have an efficient showerhead(low flow)?",
    activity: "Shower",
    answers: {
      10: "Yes",
      0: "No"
    },
    tip: "An AAA rated showerhead can reduce almost half of your shower consumption!"
  },

  {
    question: "How often do you take shower?",
    activity: "Shower",
    answers: {
      100: "Yes",
      50: "No"
    },
    tip: "Some random fact"
  },

  {
    question: "How often do you take shower?",
    activity: "Shower",
    answers: {
      100: "Yes",
      50: "No"
    },
    tip: "Some random fact"
  },

  {
    question: "Do you have a single tank or a dual tank?",
    activity: "Toilet",
    answers: {
      1500: "I have a single tank",
      1850: "I have a dual tank",
    },
    tip: "Some random fact"
  },

  {
    question: "Do you have leaks in your toilet?",
    activity: "Toilet",
    answers: {
      1500: "Yes",
      1850: "No",
    },
    tip: "Some random fact"
  },

  {
    question: "How do you wash your utensils?",
    activity: "Kitchen",
    answers: {
      1000: "Hand wash",
      1850: "Dishwasher",
    },
    tip: "Some random fact"
  },

  {
    question: "Do you have low flow taps in the kitchen?",
    activity: "Kitchen",
    answers: {
      500: "Yes",
      1000: "No",
    },
    tip: "Some random fact"
  },

  {
    question: "How do you wask your clothes",
    activity: "Washing Room",
    answers: {
      200: "Hand wash",
      1000: "Dishwasher",
    },
    tip: "Some random fact"
  }

];



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

        // ...add an HTML radio button
        answers.push(
          `<label>
              <input type="radio" name="question${questionNumber}" value="${usage}"><span class="btn">
              ${currentQuestion.answers[usage]}
            </span></label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"><div class="radio-toolbar"> ${answers.join("")} </div></div>
            <div class="tip"><i class="fas fa-lightbulb"></i> ${currentQuestion.tip} </div>
          </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}





function showResults() {



  let totalUsage = 0;

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

    // show both user choice and the water cost
    let currentActivity = currentQuestion.activity;
    let currentUsage = userAnswer;


    console.log(currentActivity);
    console.log(currentUsage);


    // push both user choice and accumulated cost into result dictionary
    if (result.hasOwnProperty(currentActivity)) {
      result[currentActivity] = parseInt(result[currentActivity]) + parseInt(currentUsage);
    }
    else {
      result[currentActivity] = parseInt(currentUsage);
    }

  });

  // show number of correct answers out of total
  console.log(result);
  console.log("end");

  // append result in results section
  //   $.each(result,function(key,value){
  //     $('#results').append("<h1>"+key +": "+value+"</h1>")

  //  });


  // plot both pir and bar charts
  $(document).ready(function () {

    var options = {
      title: {
        text: "Your monthly water consumption"
      },
      subtitles: [{
        text: "Addd some stuff"
      }],
      animationEnabled: true,
      backgroundColor: "rgba(0,0,0,0)",
      data: [{
        type: "pie",
        startAngle: 40,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints: [
          { y: result["Shower"], label: "Shower" },
          { y: result["Toilet"], label: "Toilet" },
          { y: result["Washing Room"], label: "Washing room" },
          { y: result["Kitchen"], label: "Kitchen" }
        ]
      }]
    };
    $("#chartContainer-pie").CanvasJSChart(options);

  })

  function addSymbols(e) {
    var suffixes = ["", "K", "M", "B"];
    var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);

    if (order > suffixes.length - 1)
      order = suffixes.length - 1;

    var suffix = suffixes[order];
    return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
  }


  // plot both pir and bar charts
  $(document).ready(function () {


    var options = {
      title:{
        text: "A Combination of Column & Line Chart"
      
      },   
      animationEnabled: true,
      backgroundColor: "rgba(0,0,0,0)",
      data: [{        
        type: "column",
        dataPoints: [
        { x: "Shower", y: result["Shower"] },
        { x: "Toilet", y: result["Toilet"]},
        { x: "Washing Room", y: result["Washing Room"] },
        { x: "Kitchen", y: result["Kitchen"] },
        ]
      }
      // {        
      //   type: "line",
      //   dataPoints: [
      //   { x: 10, y: 71 },
      //   { x: 20, y: 55},
      //   { x: 30, y: 50 },
      //   { x: 40, y: 65 },
      //   { x: 50, y: 95 },
      //   { x: 60, y: 68 },
      //   { x: 70, y: 28 },
      //   { x: 80, y: 34 },
      //   { x: 90, y: 14}
      //   ]
      // }
        
      ]};
    
    $("#chartContainer-bar").CanvasJSChart(options);

  })
}


function showSlide(n) {
  slides[currentSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  currentSlide = n;
  if (currentSlide === 0) {
    previousButton.style.display = 'none';
  }
  else {
    previousButton.style.display = 'inline-block';
  }
  if (currentSlide === slides.length - 1) {
    nextButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
  }
  else {
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
  }
}

function showNextSlide() {
  showSlide(currentSlide + 1);
}

function showPreviousSlide() {
  showSlide(currentSlide - 1);
}




// Kick things off
buildQuiz();

// Pagination
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// Show the first slide
showSlide(currentSlide);

// Event listeners
submitButton.addEventListener('click', showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);


