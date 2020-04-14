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
              <input type="radio" name="question${questionNumber}" value="${usage}">
              ${currentQuestion.answers[usage]}
            </label>`
          ); 
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
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

  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "Do you have a dual flush or normal flush toilet?",
      activity: "Toilet",
      answers: {
        20: "Dual flush",
        50: "Normal flush",
      },
    },
    {
      question: "How long does your shower took",
      activity: "Shower",
      answers: {
        10: "under 10 minutes",
        25: "10 ~ 25 minutes",
        40: "over 25 minutes"
      },
    },
    {
      question: "Do you have a dishwasher",
      activity: "Kitchen",
      answers: {
        100: "Yes",
        50: "No"
      },
    }
  ];


  

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


