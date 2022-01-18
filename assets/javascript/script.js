var generateBtn = document.querySelector("#generate-name");

var submitBtn = document.querySelector("#submit");

var inputName = document.querySelector("#username");

var startQuizBtn = document.querySelector("#start-quiz");

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
var nameFinalArray = []; //other arrays will be push into this array randomly, generating username

var userName = ""; //will be replaced by the username input or by the name made by the generate button if it is accepted.

var formEl = document.querySelector("#username-form");

var nameFormHandler = function (event) {};

// nameFormHandler();

var generateName = function (event) {
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
    var successMessage = getElementById("answer")
    var userNameSuccess = document.createElement("div");
    userNameSuccess.className = "result"
    userNameSuccess.innerHTML = "<p>good luck, " + userName + "!</p>"
    console.log(userName);
  } else {
    return;
  }
};

var submitName = function (event) {
  event.preventDefault();
  var nameInput = document.querySelector("input[name='username']").value;
  if (!nameInput) {
    alert("You need to provide a valid name!");
    return false;
  }
  var nameConfirm = confirm("Store username as " + "'" + nameInput + "'" + "?");
  if (nameConfirm === true) {
    userName = nameInput;
    console.log(userName);
  } else {
    return;
  }

  formEl.reset();

  var nameDataObj = {
    name: nameInput,
  };
};

var startQuiz = function (event) {
  var firstPage = document.getElementById("question");
  firstPage.remove();
  // var questionOne = document.createElement("span");
  // questionOne.innerHTML = "<p>Good luck, " + userName + "!";
};

generateBtn.addEventListener("click", generateName);

submitBtn.addEventListener("click", submitName);

startQuizBtn.addEventListener("click", startQuiz);
