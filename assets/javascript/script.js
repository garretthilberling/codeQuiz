var generateBtn = document.querySelector("#generate-name");

var submitBtn = document.querySelector("#submit");

var inputName = document.querySelector("#username");

var startQuizBtn = document.querySelector("#start-quiz");

var questionSection = document.querySelector("#insert-question");

var answerSection = document.querySelector("#answer");

var timerSection = document.querySelector("#timer");

// var proceed = document.querySelector(
//   "#answer-1, #answer-2, #answer-3, #answer-4"
// );

var nameWordArray = [
  "leaf",
  "skeleton",
  "goat",
  "thumb",
  "chin",
  "lost",
  "jelly",
  "roob",
  "knowledge",
  "cherry",
  "era",
  "queen",
  "coast",
  "echo",
  "favourite",
  "big-brain",
  "boywonder",
];
var nameColorArray = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "purple",
  "pink",
  "brown",
  "gray",
  "mango",
  "maroon",
  "navy",
  "silver",
  "gold",
  "teal",
  "olive",
  "aqua",
];
var nameNumberArray = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
  "60",
  "61",
  "62",
  "63",
  "64",
  "65",
  "66",
  "67",
  "68",
  "69",
  "70",
  "71",
  "72",
  "73",
  "74",
  "75",
  "76",
  "77",
  "78",
  "79",
  "80",
  "81",
  "82",
  "83",
  "84",
  "85",
  "86",
  "87",
  "88",
  "89",
  "90",
  "91",
  "92",
  "93",
  "94",
  "95",
  "96",
  "97",
  "98",
  "99",
];

var userName = ""; //will be replaced by the username input or by the name made by the generate button if it is accepted.

var formEl = document.querySelector("#username-form");

var nameFormHandler = function (event) {};

// nameFormHandler();

var generateName = function (e) {
  var randomWord =
    nameWordArray[Math.floor(Math.random() * nameWordArray.length)];
  var randomColor =
    nameColorArray[Math.floor(Math.random() * nameColorArray.length)];
  var randomNumber =
    nameNumberArray[Math.floor(Math.random() * nameNumberArray.length)];
  generatedName = randomColor + "-" + randomWord + "-" + randomNumber;
  var randomNameConfirm = window.confirm(
    "Store username as " + "'" + generatedName + "'" + "?"
  );
  if (randomNameConfirm === true) {
    userName = generatedName;
    goodLuckMessage();
    console.log(userName);
  } else {
    return;
  }
};

var goodLuckMessage = function () {
  const goodLuckText = document.createElement("div");
  goodLuckText.className = "answer-parent result";
  goodLuckText.innerHTML = "<p>good luck, " + userName + "!</p>";
  goodLuckText.setAttribute("id", "good-luck");
  answerSection.appendChild(goodLuckText);
  var fade = setInterval(function () {
    if (!goodLuckText.style.opacity) {
      $("#good-luck").fadeOut(4000, function () {
        $(this).remove();
      });
    } else {
      clearInterval(fade);
    }
  });
};

var submitName = function (e) {
  e.preventDefault();
  var nameInput = document.querySelector("input[name='username']").value;
  if (!nameInput) {
    alert("You need to provide a valid name!");
    return false;
  }
  var nameConfirm = confirm("Store username as " + "'" + nameInput + "'" + "?");
  if (nameConfirm === true) {
    userName = nameInput;
    goodLuckMessage();
    console.log(userName);
  } else {
    return;
  }

  formEl.reset();

  var nameDataObj = {
    name: nameInput,
  };
};

var startTimer = function () {
  var timeText = document.querySelector("#timer");
  timeText.innerHTML = "120";
  var countDown = setInterval(displayTimer, 1000, timeText);

  function displayTimer(element) {
    var t = element.innerHTML;
    if (t > 0) {
      element.innerHTML = parseInt(t) - 1;
    } else {
      element.innerHTML = 0;
    }
    window.t = t;
    window.element = element;
  }
};

var correctAnswer = function () {
  const correctText = document.createElement("div");
  correctText.className = "answer-parent result";
  // correctText.firstElementChild
  correctText.innerHTML = "<p>Correct!</p>";
  correctText.setAttribute("id", "correct");
  answerSection.appendChild(correctText);

  var fade = setInterval(function () {
    if (!correctText.style.opacity) {
      $("#correct").fadeOut(2000, function () {
        $(this).remove();
      });
    } else {
      clearInterval(fade);
    }
  });
};

var incorrectAnswer = function () {
  const incorrectText = document.createElement("div");
  incorrectText.className = "answer-parent result";
  // incorrectText.firstElementChild
  incorrectText.innerHTML = '<p class="incorrect">Incorrect</p>';
  incorrectText.setAttribute("id", "incorrect");
  answerSection.appendChild(incorrectText);
  var fade = setInterval(function () {
    if (!incorrectText.style.opacity) {
      $("#incorrect").fadeOut(2000, function () {
        $(this).remove();
      });
    } else {
      clearInterval(fade);
    }
  });
  element.innerHTML = parseInt(t) - 10;
};

var startQuiz = function (e) {
  if (userName === "") {
    window.alert("You need to provide a valid name to proceed!");
    return false;
  } else {
    startTimer();
  }
  var firstPage = document.getElementById("question");
  firstPage.remove();
  var deleteGoodLuck = document.getElementById("good-luck");
  var deleteForm = document.getElementById("username-form");

  deleteGoodLuck.remove();
  deleteForm.remove();
  startQuizBtn.remove();

  const questionOne = document.createElement("span");
  questionOne.setAttribute("id", "question");
  questionOne.innerHTML = "<p>1. Commonly used data types do <span class='emphasis'>NOT</span> include:</p>";
  questionSection.appendChild(questionOne);
  window.questionOne = questionOne;

  const questionOneAnswers = document.createElement("span");
  questionOneAnswers.setAttribute("id", "answer");
  questionOneAnswers.innerHTML =
    '<div id="answer-parent" class="answer-parent"><button id="answer-1" class="answer-container">A. Strings</button></div> <div id="answer-parent" class="answer-parent"><button id="answer-2" class="answer-container">B. Booleans</button></div> <div id="answer-parent" class="answer-parent"><button id="answer-3" class="answer-container">C. Alerts</button></div> <div id="answer-parent" class="answer-parent"><button id="answer-4" class="answer-container">D. Numbers</button></div>';
  answerSection.appendChild(questionOneAnswers);
  window.questionOneAnswers = questionOneAnswers;

  var questionOneCorrect = document.querySelector("#answer-3");
  var questionOneIncorrect = document.querySelector(
    "#answer-1, #answer-2, #answer-4"
  );

  questionOneCorrect.addEventListener("click", correctAnswer);
  questionOneCorrect.addEventListener("click", questionTwoStart);
  questionOneIncorrect.addEventListener("click", incorrectAnswer);
  questionOneIncorrect.addEventListener("click", questionTwoStart);
};

var questionTwoStart = function (e) {
  questionOne.remove();
  questionOneAnswers.remove();
  const questionTwo = document.createElement("span");

  questionTwo.setAttribute("id", "question");
  questionTwo.innerHTML = "<p>2. The condition of an if / else statement is enclosed with ____________.</p>";
  questionSection.appendChild(questionTwo);
  window.questionTwo = questionTwo;

  const questionTwoAnswers = document.createElement("span");
  questionTwoAnswers.setAttribute("id", "answer");
  questionTwoAnswers.innerHTML =
    '<div id="answer-parent" class="answer-parent"><button id="answer-1" class="answer-container">A. Parenthesis</button></div> <div id="answer-parent" class="answer-parent"><button id="answer-2" class="answer-container">B. Quotes</button></div> <div id="answer-parent" class="answer-parent"><button id="answer-3" class="answer-container">C. Curly brackets</button></div> <div id="answer-parent" class="answer-parent"><button id="answer-4" class="answer-container">D. Square Brackets</button></div>';
  answerSection.appendChild(questionTwoAnswers);
  window.questionTwoAnswers = questionTwoAnswers;

  var questionTwoCorrect = document.querySelector("#answer-1");
  var questionTwoIncorrect = document.querySelector(
    "#answer-2, #answer-3, #answer-4"
  );

  questionTwoCorrect.addEventListener("click", correctAnswer);
  questionTwoCorrect.addEventListener("click", questionThreeStart);
  questionTwoIncorrect.addEventListener("click", incorrectAnswer);
  questionTwoCorrect.addEventListener("click", questionThreeStart);
};
var questionThreeStart = function (e) {
  questionTwo.remove();
  questionTwoAnswers.remove();
  const questionThree = document.createElement("span");

  questionThree.setAttribute("id", "question");
  questionThree.innerHTML = "<p>3. Arrays in JavaScript can be used to store _________.</p>";
  questionSection.appendChild(questionThree);
  window.questionThree = questionThree;

  const questionThreeAnswers = document.createElement("span");
  questionThreeAnswers.setAttribute("id", "answer");
  questionThreeAnswers.innerHTML =
    '<div id="answer-parent" class="answer-parent"><button id="answer-1" class="answer-container">A. Numbers and strings</button></div> <div id="answer-parent" class="answer-parent"><button id="answer-2" class="answer-container">B. Other arrays</button></div> <div id="answer-parent" class="answer-parent"><button id="answer-3" class="answer-container">C. Booleans</button></div> <div id="answer-parent" class="answer-parent"><button id="answer-4" class="answer-container">D. All of the above!</button></div>';
  answerSection.appendChild(questionThreeAnswers);
  window.questionThreeAnswers = questionThreeAnswers;

  var questionThreeCorrect = document.querySelector("#answer-4");
  var questionThreeIncorrect = document.querySelector(
    "#answer-1, #answer-2, #answer-3"
  );

  questionThreeCorrect.addEventListener("click", correctAnswer);
  questionThreeCorrect.addEventListener("click", questionFourStart);
  questionThreeIncorrect.addEventListener("click", incorrectAnswer);
  questionThreeIncorrect.addEventListener("click", questionFourStart);
};
var questionFourStart = function (e) {
  questionThree.remove();
  questionThreeAnswers.remove();
  const questionFour = document.createElement("span");

  questionFour.setAttribute("id", "question");
  questionFour.innerHTML = "<p>4. String values must be enclosed within __________ when being assigned to variables.</p>";
  questionSection.appendChild(questionFour);
  window.questionFour = questionFour;

  const questionFourAnswers = document.createElement("span");
  questionFourAnswers.setAttribute("id", "answer");
  questionFourAnswers.innerHTML =
    '<div id="answer-parent" class="answer-parent"><button id="answer-1" class="answer-container">A. Commas</button></div> <div id="answer-parent" class="answer-parent"><button id="answer-2" class="answer-container">B. Quotes</button></div> <div id="answer-parent" class="answer-parent"><button id="answer-3" class="answer-container">C. Parenthesis</button></div> <div id="answer-parent" class="answer-parent"><button id="answer-4" class="answer-container">D. Curly brackets</button></div>';
  answerSection.appendChild(questionFourAnswers);
  window.questionFourAnswers = questionFourAnswers;

  var questionFourCorrect = document.querySelector("#answer-4");
  var questionFourIncorrect = document.querySelector(
    "#answer-1, #answer-2, #answer-3"
  );

  questionFourCorrect.addEventListener("click", correctAnswer);
  questionFourCorrect.addEventListener("click", questionFiveStart);
  questionFourIncorrect.addEventListener("click", incorrectAnswer);
  questionFourIncorrect.addEventListener("click", questionFiveStart);
};
var questionFiveStart = function (e) {
  questionFour.remove();
  questionFourAnswers.remove();
  const questionFive = document.createElement("span");

  questionFive.setAttribute("id", "question");
  questionFive.innerHTML = "<p>5. A very useful tool used during development and debugging for printing content to the debugger is:</p>";
  questionSection.appendChild(questionFive);
  window.questionFive = questionFive;

  const questionFiveAnswers = document.createElement("span");
  questionFiveAnswers.setAttribute("id", "answer");
  questionFiveAnswers.innerHTML =
    '<div id="answer-parent" class="answer-parent"><button id="answer-1" class="answer-container">A. JavaScript</button></div> <div id="answer-parent" class="answer-parent"><button id="answer-2" class="answer-container">B. Terminal/bash</button></div> <div id="answer-parent" class="answer-parent"><button id="answer-3" class="answer-container">C. For loops</button></div> <div id="answer-parent" class="answer-parent"><button id="answer-4" class="answer-container">D. Console log</button></div>';
  answerSection.appendChild(questionFiveAnswers);
  window.questionFiveAnswers = questionFiveAnswers;

  var questionFiveCorrect = document.querySelector("#answer-4");
  var questionFiveIncorrect = document.querySelector(
    "#answer-1, #answer-2, #answer-3"
  );

  questionFiveCorrect.addEventListener("click", correctAnswer);
  // questionFiveCorrect.addEventListener("click", endQuiz);
  questionFiveIncorrect.addEventListener("click", incorrectAnswer);
  // questionFiveIncorrect.addEventListener("click", endQuiz);
};

var endQuiz = function() {
  t = t;

}

generateBtn.addEventListener("click", generateName);

submitBtn.addEventListener("click", submitName);

startQuizBtn.addEventListener("click", startQuiz);


// 
// 
// proceed.addEventListener("click", questionFive);
// proceed.addEventListener("click", questionSix);
// proceed.addEventListener("click", questionSeven);
// proceed.addEventListener("click", questionEight);
// proceed.addEventListener("click", questionNine);
// proceed.addEventListener("click", questionTen);
