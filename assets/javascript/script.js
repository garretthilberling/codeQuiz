var generateBtn = document.querySelector("#generate-name");

var submitBtn = document.querySelector("#submit");

var inputName = document.querySelector("#username");

var startQuizBtn = document.querySelector("#start-quiz");

var questionSection = document.querySelector("#insert-question");

var answerSection = document.querySelector("#answer");

var resultSection = document.querySelector("#result");

var timerSection = document.querySelector("#timer");

var clearQuestionSection = document.querySelector("#question-section");

var titleSection = document.querySelector("#title");

var replaceTitleSection = document.querySelector("#replace-title");

var seeHighScoreBtn = document.querySelector("#high-score-btn");

var clearScoreBoardBtn = document.querySelector("#hs-btn-2");

var tryAgainBtn = document.querySelector("#hs-btn-1");

var highScoreBoardSection = document.querySelector("#high-score-board");

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
  "orange",
  "purple",
  "pink",
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

var seeHighScore = 0;

var userName = ""; //will be replaced by the username input or by the name made by the generate button if it is accepted.

var t = "";

var formEl = document.querySelector("#username-form");

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
  var replaceMessage = 0;
  const goodLuckText = document.createElement("li");
  goodLuckText.className = "result";
  goodLuckText.innerHTML =
    "<p class='answer-container'>good luck, " + userName + "!</p>";
  goodLuckText.setAttribute("id", "good-luck");
  resultSection.insertBefore(goodLuckText, resultSection.firstChild);
  var fade = setInterval(function () {
    if (!goodLuckText.style.opacity) {
      $("#good-luck").fadeOut(3000, function () {
        $(this).remove();
      });
      replaceMessage = 1;
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
};

var startTimer = function () {
  var timeText = document.querySelector("#timer");
  timeText.innerHTML = "100";
  var countDown = setInterval(displayTimer, 1000, timeText);
  window.countDown = countDown; // I use this trick often to make the local variable global

  function displayTimer(element) {
    t = element.innerHTML;
    if (t > 0) {
      element.innerHTML = parseInt(t) - 1;
    } else {
      clearInterval(countDown);
      endQuiz();
    }
  }
};

var correctAnswer = function () {
  const correctText = document.createElement("li");
  correctText.className = "result";
  correctText.innerHTML = "<p class='answer-container'>Correct!</p>";
  correctText.setAttribute("id", "correct");
  resultSection.appendChild(correctText);

  var fade = setInterval(function () {
    if (!correctText.style.opacity) {
      $("#correct").fadeOut(700, function () {
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
  incorrectText.innerHTML = '<p class="incorrect">Incorrect</p>';
  incorrectText.setAttribute("id", "incorrect");
  answerSection.appendChild(incorrectText);
  var fade = setInterval(function () {
    if (!incorrectText.style.opacity) {
      $("#incorrect").fadeOut(500, function () {
        $(this).remove();
      });
    } else {
      clearInterval(fade);
    }
  });
  element.innerHTML = parseInt(t) - 10;
  console.log(t - 10);
};

var removePageOne = function () {
  var firstPage = document.getElementById("question");
  firstPage.remove();
  var deleteForm = document.getElementById("username-form");

  deleteForm.remove();
  startQuizBtn.remove();
};

var startQuiz = function (e) {
  if (userName === "") {
    window.alert("You need to provide a valid name to proceed!");
    return false;
  } else {
    startTimer();
    removePageOne();
  }
  const questionOne = document.createElement("span");
  questionOne.setAttribute("id", "question");
  questionOne.innerHTML =
    "<p>1. Commonly used data types do <span class='emphasis'>NOT</span> include:</p>";
  questionSection.appendChild(questionOne);
  window.questionOne = questionOne;

  const questionOneAnswers = document.createElement("span");
  questionOneAnswers.setAttribute("id", "answer");
  questionOneAnswers.innerHTML =
    '<ul id="answer-parent" class="answer-parent"><li><button id="q-1-answer-1" class="answer-container">A. Strings</button></li> <li><button id="q-1-answer-2" class="answer-container">B. Booleans</button></li> <li><button id="q-1-answer-3" class="answer-container">C. Alerts</button></li> <li><button id="q-1-answer-4" class="answer-container">D. Numbers</button></li></ul>';
  answerSection.appendChild(questionOneAnswers);
  window.questionOneAnswers = questionOneAnswers;

  var questionOneCorrect = document.querySelector("#q-1-answer-3");
  var questionOneIncorrect = document.querySelector(
    "#q-1-answer-1, #q-1-answer-2, #q-1-answer-4"
  );

  questionOneCorrect.addEventListener("click", questionTwoStart);
  questionOneIncorrect.addEventListener("click", questionTwoStart);
  questionOneCorrect.addEventListener("click", correctAnswer);
  questionOneIncorrect.addEventListener("click", incorrectAnswer);
};

var questionTwoStart = function (e) {
  questionOne.remove();
  questionOneAnswers.remove();
  const questionTwo = document.createElement("span");

  questionTwo.setAttribute("id", "question");
  questionTwo.innerHTML =
    "<p>2. The condition of an if / else statement is enclosed with ____________.</p>";
  questionSection.appendChild(questionTwo);
  window.questionTwo = questionTwo;

  const questionTwoAnswers = document.createElement("span");
  questionTwoAnswers.setAttribute("id", "answer");
  questionTwoAnswers.innerHTML =
    '<ul id="answer-parent" class="answer-parent"><li><button id="q-2-answer-1" class="answer-container">A. Parenthesis</button></li> <li><button id="q-2-answer-2" class="answer-container">B. Quotes</button></li> <li><button id="q-2-answer-3" class="answer-container">C. Curly brackets</button></li> <li><button id="q-2-answer-4" class="answer-container">D. Square Brackets</button></li></ul>';
  answerSection.appendChild(questionTwoAnswers);
  window.questionTwoAnswers = questionTwoAnswers;

  var questionTwoCorrect = document.querySelector("#q-2-answer-1");
  var questionTwoIncorrect = document.querySelector(
    "#q-2-answer-2, #q-2-answer-3, #q-2-answer-4"
  );

  questionTwoCorrect.addEventListener("click", questionThreeStart);
  questionTwoIncorrect.addEventListener("click", questionThreeStart);
  questionTwoCorrect.addEventListener("click", correctAnswer);
  questionTwoIncorrect.addEventListener("click", incorrectAnswer);
};
var questionThreeStart = function (e) {
  questionTwo.remove();
  questionTwoAnswers.remove();
  const questionThree = document.createElement("span");

  questionThree.setAttribute("id", "question");
  questionThree.innerHTML =
    "<p>3. Arrays in JavaScript can be used to store _________.</p>";
  questionSection.appendChild(questionThree);
  window.questionThree = questionThree;

  const questionThreeAnswers = document.createElement("span");
  questionThreeAnswers.setAttribute("id", "answer");
  questionThreeAnswers.innerHTML =
    '<ul id="answer-parent" class="answer-parent"><li><button id="q-3-answer-1" class="answer-container">A. Numbers and strings</button></li> <li><button id="q-3-answer-2" class="answer-container">B. Other arrays</button></li> <li><button id="q-3-answer-3" class="answer-container">C. Booleans</button></li> <li><button id="q-3-answer-4" class="answer-container">D. All of the above!</button></li></ul>';
  answerSection.appendChild(questionThreeAnswers);
  window.questionThreeAnswers = questionThreeAnswers;

  var questionThreeCorrect = document.querySelector("#q-3-answer-4");
  var questionThreeIncorrect = document.querySelector(
    "#q-3-answer-1, #q-3-answer-2, #q-3-answer-3"
  );

  questionThreeCorrect.addEventListener("click", questionFourStart);
  questionThreeIncorrect.addEventListener("click", questionFourStart);
  questionThreeCorrect.addEventListener("click", correctAnswer);
  questionThreeIncorrect.addEventListener("click", incorrectAnswer);
};
var questionFourStart = function (e) {
  questionThree.remove();
  questionThreeAnswers.remove();
  const questionFour = document.createElement("span");

  questionFour.setAttribute("id", "question");
  questionFour.innerHTML =
    "<p>4. String values must be enclosed within __________ when being assigned to variables.</p>";
  questionSection.appendChild(questionFour);
  window.questionFour = questionFour;

  const questionFourAnswers = document.createElement("span");
  questionFourAnswers.setAttribute("id", "answer");
  questionFourAnswers.innerHTML =
    '<ul id="answer-parent" class="answer-parent"><li><button id="q-4-answer-1" class="answer-container">A. Commas</button></li> <li><button id="q-4-answer-2" class="answer-container">B. Quotes</button></li> <li><button id="q-4-answer-3" class="answer-container">C. Parenthesis</button></li> <li><button id="q-4-answer-4" class="answer-container">D. Curly brackets</button></li></ul>';
  answerSection.appendChild(questionFourAnswers);
  window.questionFourAnswers = questionFourAnswers;

  var questionFourCorrect = document.querySelector("#q-4-answer-4");
  var questionFourIncorrect = document.querySelector(
    "#q-4-answer-1, #q-4-answer-2, #q-4-answer-3"
  );

  questionFourCorrect.addEventListener("click", correctAnswer);
  questionFourIncorrect.addEventListener("click", questionFiveStart);
  questionFourCorrect.addEventListener("click", questionFiveStart);
  questionFourIncorrect.addEventListener("click", incorrectAnswer);
};
var questionFiveStart = function (e) {
  questionFour.remove();
  questionFourAnswers.remove();
  const questionFive = document.createElement("span");

  questionFive.setAttribute("id", "question");
  questionFive.innerHTML =
    "<p>5. A very useful tool used during development and debugging for printing content to the debugger is:</p>";
  questionSection.appendChild(questionFive);
  window.questionFive = questionFive;

  const questionFiveAnswers = document.createElement("span");
  questionFiveAnswers.setAttribute("id", "answer");
  questionFiveAnswers.innerHTML =
    '<ul id="answer-parent" class="answer-parent"><li><button id="q-5-answer-1" class="answer-container">A. JavaScript</button></li> <li><button id="q-5-answer-2" class="answer-container">B. Terminal/bash</button></li> <li><button id="q-5-answer-3" class="answer-container">C. For loops</button></li> <li><button id="q-5-answer-4" class="answer-container">D. Console log</button></li></ul>';
  answerSection.appendChild(questionFiveAnswers);
  window.questionFiveAnswers = questionFiveAnswers;

  var questionFiveCorrect = document.querySelector("#q-5-answer-4");
  var questionFiveIncorrect = document.querySelector(
    "#q-5-answer-1, #q-5-answer-2, #q-5-sanswer-3"
  );

  questionFiveCorrect.addEventListener("click", endQuiz);
  questionFiveIncorrect.addEventListener("click", endQuiz);
  questionFiveCorrect.addEventListener("click", correctAnswer);
  questionFiveIncorrect.addEventListener("click", incorrectAnswer);
};

var endQuiz = function () {
  const highScores = JSON.parse(localStorage.getItem("highScores")) || []; //the values from scores will be pushed into this array. I use || to tell JavaScript if nothing has been pushed into highScores, then create the empty array.
  const scores = {
    score: t,
    name: userName,
  };

  if (seeHighScore > 0) {
    removePageOne();
  } else if (seeHighScore < 0) {
    console.log("score was not saved.")
  } else {
    clearInterval(countDown);

    highScores.push(scores);
    highScores.sort((a, b) => b.score - a.score); //a cool way to sort from largest to smallest, using the value of scores and the built in sort function. in an array of [1,2,3] 2 would correspond to b.
    highScores.splice(10); //only displays 10 scores at a time (and only keeps 10 scores in the array)
    localStorage.setItem("highScores", JSON.stringify(highScores)); //save as a string.
    console.log(highScores, scores);
  }
  clearQuestionSection.remove();
  answerSection.remove();
  titleSection.remove();
  resultSection.remove();

  const highScoreTitle = document.createElement("div");
  highScoreTitle.className = "high-score-container";
  highScoreTitle.innerHTML =
    "<header class='hs-continue-bg margin-zero'><ul class='highscore-timer-parent margin-zero'><li class='high-score-container high-scores margin-zero'><button id='hs-btn-1' class='high-score-button margin-zero' onclick='tryAgain();'>Try again</button></li><li><h1>High Scores</h1></li><li class='high-score-container high-scores margin-zero'><button id='hs-btn-2' class='high-score-button margin-zero' onclick='clearScoreBoard();'>Clear scoreboard</button></li></ul>";
  highScoreTitle.setAttribute("id", "high-score-title");
  replaceTitleSection.appendChild(highScoreTitle);

  const highScoreBoard = document.createElement("ul");
  highScoreBoard.className = "high-score-board";
  highScoreBoard.innerHTML = highScores
    .map((scores) => {
      return `<li class="high-score-board margin-zero"> ${scores.name} : <span class='emphasis'>${scores.score}</span></li>`;
    })
    .join("");
  highScoreBoard.setAttribute("id", "high-score-board");
  highScoreBoardSection.appendChild(highScoreBoard);

  document.body.style.backgroundImage =
    "url('./assets/images/8-bit-space.jpg')";
};

var openScoreboard = function (e) {
  if (t) {
    seeHighScore = -1;
  } else {
    seeHighScore = 1;
  }
};

var clearScoreBoard = function (e) {
  window.localStorage.clear();
  highScoreBoardSection.remove();
};

var tryAgain = function (e) {
  window.location.reload();
};

generateBtn.addEventListener("click", generateName);

submitBtn.addEventListener("click", submitName);

startQuizBtn.addEventListener("click", startQuiz);

seeHighScoreBtn.addEventListener("click", openScoreboard);

seeHighScoreBtn.addEventListener("click", endQuiz);

if (tryAgainBtn) {
  tryAgainBtn.addEventListener("click", tryAgain);
}

if (clearScoreBoardBtn) {
  clearScoreBoardBtn.addEventListener("click", clearScoreBoard);
}
