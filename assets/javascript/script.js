var generateBtn = document.querySelector("#generate-name");

var submitBtn = document.querySelector("#submit");

var inputName = document.querySelector("#username");

var startQuizBtn = document.querySelector("#start-quiz");

var questionSection = document.querySelector("#insert-question");

var answerSection = document.querySelector("#answer");

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
      $("#good-luck").fadeOut(8000, function () {
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

var startQuiz = function (e) {
  if (generateName === false || submitName === false) {
    window.alert("You need to provide a valid name to proceed!");
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
  questionOne.innerHTML = "<p>In CSS, what does '!important' do?</p>";
  questionSection.appendChild(questionOne);
  // var questionOne = document.createElement("span");
  // questionOne.innerHTML = "<p>Good luck, " + userName + "!";
};

generateBtn.addEventListener("click", generateName);

submitBtn.addEventListener("click", submitName);

startQuizBtn.addEventListener("click", startQuiz);
