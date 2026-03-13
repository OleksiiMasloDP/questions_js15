const selectQuestions = document.getElementById("selectQuestions");
const ansInput = document.getElementById("ansInput");
const sendbtn = document.getElementById("sendBtn");
const questionText = document.getElementById("questionText");
const count = document.getElementById("questionCount");
const quizdiv = document.getElementById("quizDiv");
const totalNum = document.getElementById("qTotal");
const currentNum = document.getElementById("qCurr");

let questions = [];
let questionObj = {};
let summ = 0;
let current = 0;

async function init() {
  const questionShi = await fetch("questions.json");
  questionObj = await questionShi.json();

  chooseQuestions();
}

function chooseQuestions() {
  Object.keys(questionObj).forEach((question) => {
    const option = document.createElement("option");
    option.value = question;
    option.textContent = question;
    selectQuestions.appendChild(option);
  });
}

function startQuiz() {
  const choosenPerson = selectQuestions.value;
  questions = questionObj[choosenPerson];
  console.log(questions);
  current = 0;

  quizdiv.classList.remove("d-none");
  showQuestions();
}

function showQuestions() {
  const q = questions[current];
  questionText.textContent = q.question;
  current++;
  ansInput.value = "";
  totalNum.textContent = questions.length;
  currentNum.textContent = current;
}

init();
