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
var myQuestions = [
  {
    question: "From which continent do Hippopotamuses originate?",
    answers: {
      a: "South America",
      b: "Africa",
      c: "Australia",
    },
    correctAnswer: "Africa",
  },
  // update answers to reflect actual answer, not a b or c
  {
    question:
      "Which cartel kingpin introduced hippos into Columbia as part of his personal zoo?",
    answers: {
      a: "Pablo Escobar",
      b: "El Chapo",
      c: "Griselda Blanco",
    },
    correctAnswer: "Pablo Escobar",
  },
  {
    question:
      "What started as 1 male and 3 female hippos in the 1970s have now become the largest herd (called a bloat) outside of Africa. How many hippos are there estimated to be in Columbia today?",
    answers: {
      a: "10-20",
      b: "50-75",
      c: "90-120",
    },
    correctAnswer: "90-120",
  },
  {
    question:
      "If the Columbian government doesn’t address the “cocaine hippo problem”, how many hippos do scientists estimate will be in the country by 2034?",
    answers: {
      a: "500",
      b: "1,000",
      c: "1,400",
    },
    correctAnswer: "1,400",
  },
  {
    question:
      "As a management plan, the Columbian government has considered relocation, castration, and extermination, all of which can be very expensive and/or very sad. About how much does it cost to castrate a single hippo?",
    answers: {
      a: "$10,000",
      b: "$20,000",
      c: "$50,000",
    },
    correctAnswer: "$50,000",
  },
  {
    question:
      "How many hippos would need to be castrated/sterilized each year in Columbia to prevent further population growth?",
    answers: {
      a: "10 (aka $500,000/yr)",
      b: "30 (aka ($1.5 mil/yr)",
      c: "60 (aka $3 mil/yr)",
    },
    correctAnswer: "30 (aka ($1.5 mil/yr)",
  },
  {
    question:
      "Hippos are one of the deadliest land-mammals on Earth. About how many human deaths are hippos responsible for annually?",
    answers: {
      a: "250",
      b: "500",
      c: "1,000",
    },
    correctAnswer: "500",
  },
  {
    question: "How big was the largest hippo ever recorded?",
    answers: {
      a: "6,000 lbs.",
      b: "8,000 lbs.",
      c: "10,000 lbs.",
    },
    correctAnswer: "10,000 lbs.",
  },
];

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