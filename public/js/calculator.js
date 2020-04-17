// Quiz Variables
const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const myQuestions = [

  // How many people?
  {
    questionTag: "familyMember",
    question: "How many people lives in your household?",
    activity: "familySize",
    answers: {
      "2": "2",
      "2.5": "3",
      "3.2": "4",
      "3.5": "5 or more",
    },
    tip: "Do you know that a large family actually saves more water? I made this up"
  },

  // Shower set
  {
    questionTag: "showerDuration",
    question: "What is your average shower time?",
    activity: "Shower & Bath",
    answers: {
      "50": "0-5 minute",
      "70": "5-10 minute",
      "120": "10-15 minute",
      "200": "more than 15 minute"
    },
    tip: "Some random fact"
  },

  {
    questionTag: "showerheadEfficiency",
    question: "Does your house have an efficient showerhead(low flow)?",
    activity: "Shower & Bath",
    answers: {
      "0.65": "Yes",
      "1": "No"
    },
    tip: "An AAA rated showerhead can reduce almost half of your shower consumption!"
  },

  {
    questionTag: "showerFrequency",
    question: "How often do you take shower?",
    activity: { "Shower & Bath": "showerFrequency" },
    answers: {
      "30": "Everyday",
      "60": "Twice per day",
      "90": "Three times per day!!"
    },
    tip: "Some random fact"
  },

  {
    questionTag: "bathAmount",
    question: "Do you take bath? If so, how frequent?",
    activity: "Shower & Bath",
    answers: {
      "0": "Never!",
      "412": "Once per week",
      "96": "Only once per month"

    },
    tip: "Some random fact"
  },


  // Toilet set
  {
    questionTag: "toiletAmount",
    question: "Do you have a dual flush toilet?",
    activity: "Toilet",
    answers: {
      "750": "Yes I do",
      "1650": "No, I only got a normal one",
    },
    tip: "Some random fact"
  },

  {
    questionTag: "toiletLeak",
    question: "Do you have leaks in your toilet?",
    activity: "Toilet",
    answers: {
      "1320": "Yes",
      "0": "No",
    },
    tip: "Some random fact"
  },

  // Kitchen set
  {
    questionTag: "kitchenWash",
    question: "How do you wash your utensils?",
    activity: "Kitchen",
    answers: {
      "540": "I love doing dishwashing by hands!",
      "600": "Dishwasher of course!",
    },
    tip: "Some random fact"
  },

  {
    questionTag: "kitchenEfficiency",
    question: "Do you have low flow taps in the kitchen?",
    activity: "Kitchen",
    answers: {
      "0.75": "Yes",
      "1": "No",
    },
    tip: "Some random fact"
  },

  {
    questionTag: "kitchenAmount",
    question: "How long do you keep the facets open in a day?",
    activity: "Kitchen",
    answers: {
      "280": "About 0-5 minutes",
      "540": "About 5-15 minutes",
      "650": "over 15 minutes"
    },
    tip: "Some random fact"
  },

  // Laundry set
  {
    questionTag: "laundryAmount",
    question: "How do you wash your clothes?",
    activity: "Washing",
    answers: {
      "200": "I prefer hand wash",
      "50": "I got a front loading washing machine!",
      "130": "I got a top loading washing machine!"
    },
    tip: "Some random fact"
  },

  {
    questionTag: "laundryFrequency",
    question: "How many laundry loads per week?",
    activity: "Washing",
    answers: {
      "8": "Twice per week",
      "4": "Every week",
      "1": "Once per month"
    },
    tip: "Some random fact"
  },

  // Outdoor set
  {
    questionTag: "outdoorGarden",
    question: "Do you have a garden? If so, do you use sprinklers?",
    activity: "Outdoor",
    answers: {
      "0": "No I don't have one",
      "1000": "Yes, but I prefer to take care of it by myself",
      "3000": "Yes sprinkler cured my depression"
    },
    tip: "Some random fact"
  },

  {
    questionTag: "outdoorCar",
    question: "Do you wash your car by urself?",
    activity: "Outdoor",
    answers: {
      "0": "Never, too time consuming",
      "1000": "Yes, I prefer taking care of my own car"
    },
    tip: "Some random fact"
  },
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
              <input class="userChoice" type="radio" name="question${questionNumber}" value="${usage}"><span class="btn btn-outline-primary">
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
  let kitchenTotal = (result["kitchenWash"] * result["kitchenEfficiency"] + result["kitchenAmount"]) * familyCount;
  let laundryTotal = (result["laundryAmount"] * result["laundryFrequency"]) * familyCount;
  let outdoorTotal = result["outdoorGarden"] + result["outdoorCar"];
  let usageTotal = showerTotal + toiletTotal + kitchenTotal + laundryTotal + outdoorTotal

  // Set up variable to store table element, and then fill in with calculated data
  const showerCell = document.getElementById("shower-consumption");
  const toiletCell = document.getElementById("toilet-consumption");
  const kitchenCell = document.getElementById("kitchen-consumption");
  const laundryCell = document.getElementById("laundry-consumption");
  const gardeningCell = document.getElementById("gardening-consumption");
  const carCell = document.getElementById("car-consumption");

  // Fill in result
  showerCell.innerHTML = showerTotal;
  kitchenCell.innerHTML = kitchenTotal;
  toiletCell.innerHTML = toiletTotal;
  laundryCell.innerHTML = laundryTotal;
  gardeningCell.innerHTML = result["outdoorGarden"];
  carCell.innerHTML = result["outdoorCar"];


  // plot both pie chart
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
      legend: {
        fontFamily: "calibri",
        fontSize: 14,
        itemTextFormatter: function (e) {
          return e.dataPoint.label + ": " + Math.round(e.dataPoint.y / usageTotal * 100) + "%";
        }
      },
      data: [{

        innerRadius: "60%",
        legendMarkerType: "square",
        radius: "100%",
        showInLegend: true,
        startAngle: 90,
        type: "doughnut",
        dataPoints: [
          { y: showerTotal, label: "Shower & Bath" },
          { y: toiletTotal, label: "Toilet" },
          { y: kitchenTotal, label: "Kitchen" },
          { y: laundryTotal, label: "Laundry" },
          { y: outdoorTotal, label: "Outdoor" }
        ]
      }]
    };
    $("#chartContainer-pie").CanvasJSChart(options);

  })

  // Water tank
  // Average victorian family water usage 
  let averageTotal = familyCount * 160 * 30;
  let feedbackMessage = "";

  // $(".water-tank .liquid svg").css("top", "calc(97.5% - 20%)")

  // If user are using less water than average household with same size
  if (averageTotal > usageTotal) {

    feedbackMessage = "You are doing Great!!!";

    // Set up a top water level
    let topLevel = averageTotal * 1.2;

    let avgPercentage = (averageTotal / topLevel) * 100 + "%";
    let userPercentage = (usageTotal / topLevel) * 100 + "%";

    // Activate water tanks
    $("#water-tank-left .liquid svg").css("top", "calc(97.5% - " + userPercentage + ")")
    $("#water-tank-right .liquid svg").css("top", "calc(97.5% - " + avgPercentage + ")")


  } else {

    // If user are using more water than average household with same size
    let topLevel = usageTotal * 1.2;
    feedbackMessage = "Kids in Africa are dying u fucking monster!!!";

    let avgPercentage = (averageTotal / topLevel) * 100 + "%";
    let userPercentage = (usageTotal / topLevel) * 100 + "%";


    // Activate water tanks
    $("#water-tank-left .liquid svg").css("top", "calc(97.5% - " + userPercentage + ")")
    $("#water-tank-right .liquid svg").css("top", "calc(97.5% - " + avgPercentage + ")")


  }

  // Pie chart section feedback
  // Pre-set analysis context
  preSet = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at convallis dolor. Quisque venenatis lectus vel turpis bibendum sodales. Praesent tempor, justo congue rhoncus sodales, risus mi pretium sapien, sed malesuada mauris leo sed elit. Aliquam ullamcorper, est ac convallis gravida, urna quam congue urna, ut iaculis turpis quam ac eros. Nullam nec libero non turpis lacinia sollicitudin eget ut enim. Suspendisse a accumsan lectus, ut tincidunt leo. Praesent vulputate malesuada metus at eleifend. Sed at convallis risus, at bibendum nibh. Aenean lectus augue, tincidunt quis lacus ut, sagittis pharetra risus. Ut dignissim iaculis neque id ultrices."
  // Activate analysis text
  $("#pie-message").append(feedbackMessage);
  $("#pie-analysis").append(preSet);


  // Water tank section feedback
  // Activate analysis text
  $("#water-tank-message").append(feedbackMessage);
  $("#water-tank-analysis").append(preSet);

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

  // Check if the current question is answered, if not, prompt an alert and stop user from continuing
  const answerContainers = quizContainer.querySelectorAll('.answers');
  const currentAnswer = answerContainers[currentSlide];
  const currentSelector = `input[name=question${currentSlide}]:checked`;
  const atLeastOneIsChecked = currentAnswer.querySelector(currentSelector) !== null;

  if (atLeastOneIsChecked) {
    showSlide(currentSlide + 1);
  }
  else {
    alert("plz check")
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
const slides = document.querySelectorAll(".slide");
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

