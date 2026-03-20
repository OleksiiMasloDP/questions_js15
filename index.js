const selectQuestions = document.getElementById("selectQuestions");
const ansInput = document.getElementById("ansInput");
const sendbtn = document.getElementById("btn-start");
const questionText = document.getElementById("questionText");
const quizdiv = document.getElementById("quizDiv");
const totalNum = document.getElementById("qTotal");
const currentNum = document.getElementById("currentNum");

let questions = [];
let questionObj = {};
let current = 0;
let score = 0;

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
  console.log(questionObj);
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
  console.log(current, currentNum)
  currentNum.textContent = current;
}

function review() {
  if (current === questions.length) {
    quizdiv.classList.add("d-none");
    return;
  }

  const userAns = ansInput.value.trim();
  const ans = questions[current].answer.trim();

  if (userAns.toLowerCase() === ans.toLowerCase()) {
    score++;
  }

  showQuestions();
}

init();
