//global variables : time,
let startTime = 120;
let clockEl = document.querySelector("#timer");
console.log(clockEl);
let gameOverMessage = document.querySelector(".game-over");
let quizSection = document.querySelector(".quiz");

// try making arrays and then if then:add eventListner
let questionList = [
  {
    question: "What is JavaScript useful for?",
    answers: [
      "Make the webpage more interactive",
      "Change the design and text",
      "Make changes to the console in chrome dev tools",
      "All of the above",
    ],
    correctAnswer: "All of the above",
  },
  {
    question:
      "True or False: JavaScript and Java are similar programming languages",
    answers: ["True", "False"],
    correctAnswer: "False",
  },
  {
    question: "True or False: JavaScript uses dynamic typing",
    answers: ["True", "False"],
    correctAnswer: "True",
  },
];

// minute counter and seconds counter as separate variables. write if between 60-120 seconds, write if 59-0 calling out each variable

//start timer
function countdown(startTime) {
  let timeLeft = startTime;

  let timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      clockEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      clockEl.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      clockEl.textContent = "";
      clearInterval(timeInterval);
    }
  }, 1000);
}

countdown(startTime);

function finale(startTime) {
  let timeLeft = startTime;
  if (timeLeft <= 0) {
    document.querySelector(".hidden").style.display = "block";
  }
}

function renderQuestion(questionIndex) {
  console.log("questionIndex: ", questionIndex);

  quizSection.innerHTML = `
      <div class="question">
          <h2>Question</h2>
          <p>${questionList[questionIndex].question}</p>
          <ul>
              ${questionList[questionIndex].answers
                .map((answer) => {
                  return `
                      <li><button>${answer}</button></li>
                  `;
                })
                .join("")}
          </ul>
      </div>
  `;

  const buttons = document.querySelectorAll("button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = (e) => {
      const button = e.target;
      console.log(button.innerText);
      // Render the next question...
      renderQuestion(questionIndex + 1);
    };
  }
}

renderQuestion(0);

// ---------------------------------------------

// let x = 1;
// console.log("result: ", x + 1);
// console.log("x: ", x);

//if question wrong subtract time
//if timer reaches 0, game over populate with initials

//if question correct don't subtract time

//if last question display game over, game over populate with initials

//correctly store data after quiz is over. store initials store when timer ends at end of quiz.
