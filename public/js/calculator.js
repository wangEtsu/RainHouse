// Create an array to store all questions.
var allQuestions = [];
// Store each question in an object.
allQuestions[0] = {
    question: "How many people lives in your household?",
    choices: ["3", "4", "5"],
    correctAnswer: 2
};
allQuestions[1] = {
    question: "How long shower?",
    choices: ["10-20min", "20-30min", "30-40min"],
    correctAnswer: 1
};
allQuestions[2] = {
    question: "Large garden",
    choices: ["small", "medium", "large"],
    correctAnswer: 0
};

// Display first question
document.getElementById("question").textContent = allQuestions[0].question;

document.getElementById("choice0").textContent = allQuestions[0].choices[0];

document.getElementById("choice1").textContent = allQuestions[0].choices[1];

document.getElementById("choice2").textContent = allQuestions[0].choices[2];

// Create a variable to store the user's score
var userScore = 0;

// Create a variable to store the index of the current question
var questionNum = 0;

// When the NEXT button is clicked, the user's score is updated, the current question is hidden, and the next question is revealed.
  $("#next").click(function() {
   
  // Check if User answered question.
  // If so, update user's score. If not, do not continue quiz until answer is given.
  if($("form input[name=answer]:checked").val() == allQuestions[questionNum].correctAnswer) {
    userScore++;
  }
  
  // If last question, show user's score rather than next question
    if (questionNum == (allQuestions.length - 1)) {
    document.getElementsByTagName("form")[0].style.display = "none";
      
    document.getElementById("question").textContent ="Your score is " + userScore + " out of 3.";
    }
    else {
  
  // Current question is not the last question, so increment the current question index
    questionNum++;
  
  // Replace current question with next question
    console.log(questionNum);
    document.getElementById("question").textContent = allQuestions[questionNum].question;

    document.getElementById("choice0").textContent = allQuestions[questionNum].choices[0];

    document.getElementById("choice1").textContent = allQuestions[questionNum].choices[1];

    document.getElementById("choice2").textContent = allQuestions[questionNum].choices[2];
    }});