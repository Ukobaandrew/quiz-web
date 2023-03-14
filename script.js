let startbtn = document.querySelector(".startbtn");
let come = document.querySelector("#continue");
let tex = document.querySelector(".tex");
let questions = document.querySelector(".questions");
let display = document.querySelector(".display");
let quest = document.querySelector(".quest");
let answers = document.querySelector(".answers");

let choices = Array.from(document.querySelectorAll(".options"));
let iterations = 0;
let acceptingAnswers = true;

let availableQuestions = [];
let currentQuestion = {};
startbtn.onclick = function () {
  if (display.style.display == "none") {
    startbtn.style.display = "none";
    display.style.display = "block";
  } else {
    display.style.display = "none";
  }
};
startbtn.style.display = "block";
questlist = [
  {
    questions: "1. What does Html stand for?",
    choice1: "a. Hyper Text Mark-up Language",
    choice2: "b. Hyper Test Make-up Language",
    choice3: "c. Hint Text Mark-up Location",
    choice4: "d. Hype Text Make-up Language",
  },

  {
    questions: "2. What is the full meaning of css in web development?",
    choice1: "a. cascading sheet sheet",
    choice2: "b. cascade style still",
    choice3: "c. Hint Text Mark-up Location",
    choice4: "d. Hype Text Make-up Language",
  },
  {
    questions: "3. what is use of Html in web development",
    choice1: "a. for skeletal website framework",
    choice2: "b. Hyper Test Make-up Language",
    choice3: "c. Hint Text Mark-up Location",
    choice4: "d. Hype Text Make-up Language",
  },
  {
    questions: "4. what does Css add in web development",
    choice1: "a. add framework integration,",
    choice2: "b. add functionality ",
    choice3: "c. for networking ",
    choice4: "d. adds new set of effects",
  },
];

function continueFunction() {
  display.style.display = "block";
  tex.style.display = "none";
  quest.innerHTML = questlist[iterations];
  questions.style.display = "block";
}

// function nextFunction() {
//   iterations += 1;
//   quest.innerHTML = questlist[iterations];
// }
// let deadline = new Date(" 10:00:10").getTime();
// let x = setInterval(function () {
//   let now = new Date().getTime();
//   let t = deadline - now;
//   let seconds = Math.floor((t % (1000 * 60)) / 1000);
//   document.getElementById("demo").innerHTML = seconds + "s";
//   if (t < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "Expired";
//   }
// }, 1000);
