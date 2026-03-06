const selectQuestions = document.getElementById("selectQuestions");
//const ansInput = document.getElementById("inputAns");
let questionObj = {};

async function init() {
  const questionShi = await fetch("questions.json");
  questionObj = await questionShi.json();
  console.log(questionObj);

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
  console.log(questionObj[choosenPerson]);
}

init();
value;
