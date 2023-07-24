//global variables : time, 
let startTime = 120; 
let clockEl = document.querySelector("#timer")
console.log(clockEl)
let gameOverMessage = document.querySelector(".game-over")

// try making arrays and then if then:add eventListner
let questions=[{
    question: "What is JavaScript useful for?",
    answers: ["Make the webpage more interactive, Change the design and text, Make changes to the console in chrome dev tools, All of the above",]
    correctAnswer: "All of the above", 
}
    {question: "True or False: JavaScript and Java are similar programming languages",
    answers: ["True, False"]
    correctAnswer: "False"
}
]


//if wanting to change time clockEl.innerText=123

// minute counter and seconds counter as separate variables. write if between 60-120 seconds, write if 59-0 calling out each variable


//start timer 
function countdown(startTime) {
    let timeLeft = startTime
  
    
    let timeInterval = setInterval (function() {
      if (timeLeft > 1) {
        clockEl.textContent = timeLeft + ' seconds remaining';   
        timeLeft--;
      } else if (timeLeft === 1) {
            clockEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
      } else {
            clockEl.textContent = '';
            clearInterval(timeInterval);
      }}, 1000)
}  

countdown(startTime)

function finale(startTime) {
    let timeLeft = startTime
    if (timeLeft =< 0) {
        document.getElementsByClassName(.hidden)[0]

    }
}

//load first question

//if question wrong subtract time

//if question correct don't subtract time

//any button clicked goes to question 2

//if last question display game over 



