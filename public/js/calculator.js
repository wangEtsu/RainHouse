    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "What is your average shower time?",
        activity: "Shower",
        answers: {
          20: "0-5 minute",
          50: "5-10 minute",
          20: "10-15 minute",
          30: "more than 15 minute"
        },
        tip: "With a dual flush toilet, you can save up to 100L water per day!"
      },
      {
        question: "Does your house have an efficient showerhead(low flow)?",
        activity: "Shower",
        answers: {
          10: "under 10 minutes",
          25: "10 ~ 25 minutes",
          40: "over 25 minutes"
        },
        tip: "A  "
      },
      {
        question: "How often do you take shower?",
        activity: "Shower",
        answers: {
          100: "Yes",
          50: "No"
        },
      }
    ];
  
  
  
  // Functions
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(usage in currentQuestion.answers){

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
          </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }





  function showResults(){


      
    let totalUsage = 0;

    // set up list to collect user input
    let result = {};
    
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // show both user choice and the water cost
      let currentActivity = currentQuestion.activity;
      let currentUsage = userAnswer;


      console.log(currentActivity);
      console.log(currentUsage);


      // push both user choice and cost into result dictionary
      result[currentActivity] = currentUsage;
    });

    // show number of correct answers out of total
    console.log(result);
    console.log("end");
    
    // append result in results section
    $.each(result,function(key,value){
      $('#results').append("<h1>"+key +": "+value+"</h1>")
   
   });
   
   

   $(document).ready(function () {

    var options = {
      title: {
        text: "Your monthly? water consumption"
      },
      subtitles: [{
        text: "Addd"
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
          { y: result["Toilet"], label: "Toilet" },
          { y: result["Shower"], label: "Shower" },
          { y: result["Kitchen"], label: "Kitchen" }
        ]
      }]
    };
    $("#chartContainer").CanvasJSChart(options);
    
    })   

  }


  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
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


  
