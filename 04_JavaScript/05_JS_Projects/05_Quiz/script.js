document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");

  const questions = [
    {
      question: "What does CSS stand for?",
      choices: [
        "Cascading Style Sheet",
        "Colorful Style Sheet",
        "Computer Style Sheet",
        "Creative Style Syntax",
      ],
      answer: "Cascading Style Sheet",
    },
    {
      question: "Which HTML tag is used to define a paragraph?",
      choices: ["<p>", "<para>", "<paragraph>", "<text>"],
      answer: "<p>",
    },
    {
      question: "Which property is used to change the background color in CSS?",
      choices: ["color", "bg-color", "background-color", "background"],
      answer: "background-color",
    },
    {
      question: "How do you make text bold in HTML?",
      choices: ["<strong>", "<bold>", "<bld>", "<text-bold>"],
      answer: "<strong>",
    },
    {
      question: "Which CSS property controls the text size?",
      choices: ["font-size", "text-style", "text-size", "font-style"],
      answer: "font-size",
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  startBtn.addEventListener("click", startQuiz);

  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });

  restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    startQuiz();
  });

  function startQuiz() {
    startBtn.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();
  }

  function showQuestion() {
    nextBtn.classList.add("hidden");
    questionText.textContent = questions[currentQuestionIndex].question;
    choicesList.innerHTML = ""; // Clear previous choices
    questions[currentQuestionIndex].choices.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => selectAnswer(choice));
      choicesList.appendChild(li);
    });
  }

  function selectAnswer(choice) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (choice === correctAnswer) {
      score++;
    }
    nextBtn.classList.remove("hidden");
  }

  function showResult() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreDisplay.textContent = `${score} out of ${questions.length}`;
  }
});
