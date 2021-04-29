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

//define variables///////////////////////////////////////////////////////////////////////////
//keep variables at tippy top//
let startBtn = document.getElementById('start');
let saveScore = document.getElementById('save-score');
let question = document.getElementById('question');
let questionTitle = document.getElementById("question-title");
let choicesDiv = document.getElementById("choices");
let questionIndex = [0];
let timeEl = document.querySelector('#hourglass');
let hourglassInterval;

// functions//////////////////////////////////////////
//start quiz - init
function startQuiz() {
  //start time - doesn't need to be a function btw
  startTimer();
  // find dom element to show the quesion 
  getQuestion();
  // find an area on your html and show the first question there
}

function startTimer() {
  // Sets timer
  hourglassInterval = setInterval(function () {
    secondsLeft--;
    timerElement.textContent = secondsLeft;
    if (secondsLeft >= 0) {
      // Tests if win condition is met
    if (isWin && secondsLeft > 0) {
        // Clears interval and stops timer
      clearInterval(hourglassInterval);
      winGame();
      }
    }
    // Tests if time has run out
    if (secondsLeft === 0) {
      // Clears interval
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}



//get the next question
function getQuestion() {
  //get the current question
  let currentQuestion = myQuestions[questionIndex];
  // show the question
  questionTitle.textContent = currentQuestion.title;
  // loop show the answers(buttons)
  currentQuestion.answers.forEach((answers) => {
    let choiceButton = document.createElement("button");
    choiceButton.textContent = answers;
    choiceButton.setAttribute("value", answers);
    //add event listener for each button created - loop through choices - inside of thefunction bc it's less work
    choiceButton.onclick = checkAns();
    choicesDiv.appendChild(choiceButton);
  });
  //this event listener calls
  //answerCheck();
}

//check user selection
function checkAns() {
  alert(this.value);
  //check the user selection against correct answer
  if (this.value === myQuestions[questionIndex].answers) {
    alert("correct");
    // document.getElementById("right").style.display = "block";
    questionIndex++;
    if (questionIndex < questions.length) {
      getQuestion();
    } else {
      endGame();
    }
  } else {
    alert("incorrect");
    // document.getElementById("wrong").style.display = "block";
    secondsLeft -= 10;
  }
}
  //incorrect answer remove seconds
  //set score - time? 
  //get next question
  //if questions.length



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

//event listeners///////////////////////////////
//start button click
startBtn.addEventListener('click', startQuiz);

// save high score 
//saveScore.addEventListener("click", saveHighScore)
