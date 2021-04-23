//GIVEN I am taking a code quiz
//WHEN I click the start button
//THEN a timer starts and I am presented with a question
//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and my score

//FROM CLASS 4/20//
//define variables///////////////////////////////////////////////////////////////////////////
//keep variables at tippy top//
let startBtn = document.getElementById('start');
let saveScore = document.getElementById('save-score');
let questionTitle = document.getElementById("question-title");
let choicesDiv = document.getElementById("choices");
let questionIndex = [0];


// functions//////////////////////////////////////////
//start quick - init
function startQuiz() {
  //start time - doesn't need to be a function btw
  // find dom element to show the quesion 
  getQuestion();

  // find an area on your html and show the first question there
}

//get the next question
function getQuestion() {
  //get the current question
  let currentQuestion = questions[questionIndex];
  // show the question
  questionTitle.textContent = currentQuestion.title;
  // loop show the choices(buttons)
  currentQuestion.choices.forEach(choice => {
    let choiceButton = document.createElement("button");
    choiceButton.textContent = choice;
    choiceButton.setAttribute("value", choice);
  //add event listener for each button created - loop through choices - inside of thefunction bc it's less work
    choiceButton.onclick = answerCheck();
    choicesDiv.appendChild(choiceButton);
  })

    //this event listener calls 
  //answerCheck();
}

//check user selection
function answerCheck() {
  alert(this.value);
  //check the user selection against correct answer
  //incorrect answer remove seconds
  //set score - time? 
  //get next question
  getQuestion();
    //if questions.length
  endGame();
}

//end game
function endGame() {
  //set their score
  //show end screen
  //clear out timer
}

//save high score
function saveHighScore() {
  //prompt for initials
  //save that to variable
  //if empty, we don't do anyhting 
  //save score to local storage
}

// See mini project for start point

//function buildQuiz() {}

//function showResults() {}

// display quiz right away
//buildQuiz();

// on submit, show results
//submitButton.addEventListener("click", showResults);


// const quizContainer = document.getElementById("quiz");
// const resultsContainer = document.getElementById("results");
// const submitButton = document.getElementById("submit");

//1. setting up the game
var index = 0;


//start fx display instruction and startbn


function checkAns() {
  //onclick to evaluate the choice & update the index++;

  // document.querySelectorAll("#userbtn").addEventListener("click", checkAns);
   // console.log(this.getAttribute("id"));
  //alert("clicked");
    //get the uservalue 
    //compare that to the correctans
    //if same tell them right
    //if wrong tell them wrong
    //move to the next card
        //index++;
        //call renderCard()
}

//fx rendercard
function renderCard() {
    //IF shows more than one Q at once, clear the content first then display data
 
  //questions a and choices,
  console.log(myQuestions[index].question);
  console.log(myQuestions[index].answers.a);
  console.log(myQuestions[index].answers.b);
  console.log(myQuestions[index].answers.c);
  console.log(myQuestions[index].correctAnswer);
  //display dynamically on page
  document.querySelector("#question").textContent = myQuestions[index].question;
  var btn1 = document.createElement("button");
  btn1.setAttribute("id", "userbtn");
  btn1.setAttribute("data-val", myQuestions[index].answers.a);
  btn1.textContent = myQuestions[index].answers.a;
  btn1.setAttribute("onclick", "checkAns()");

  document.querySelector("#choices").appendChild(btn1);

  var btn2 = document.createElement("button");
  btn2.setAttribute("id", "userbtn");
  btn2.setAttribute("data-val", myQuestions[index].answers.b);
  btn2.textContent = myQuestions[index].answers.b;
  btn2.setAttribute("onclick", "checkAns()");

  var btn3 = document.createElement("button");
  btn3.setAttribute("id", "userbtn");
  btn3.setAttribute("data-val", myQuestions[index].answers.c);
  btn3.textContent = myQuestions[index].answers.c;
  btn3.setAttribute("onclick", "checkAns()");


  document.querySelector("#choices").appendChild(btn2);

  document.querySelector("#results").textContent =
    myQuestions[index].correctAnswer;

  document.querySelector("#choices").appendChild(btn3);
  //#choices
  /*
     <button id="userbtn" data-val="Choic1e">Choice1</button>;
     */

}


//endgame fx

//2. set up time
//fx addscore



//3. set up localstraoge

//function seeallscore












renderCard();
//event listeners///////////////////////////////
//start button click
startBtn.addEventListener('click', startQuiz);

// save high score 
saveScore.addEventListener("click", saveHighScore)
