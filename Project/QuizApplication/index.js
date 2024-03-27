const quizData = [
    {
        question: "What is the capital of France?",
        options: ["London", "Paris", "Berlin", "Madrid"],
        correct: "Paris"
    },
    {
        question: "What is 10 * 5?",
        options: ["25", "50", "75", "100"],
        correct: "50"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correct: "Mars"
    },
    {
        question: "What is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippo"],
        correct: "Blue Whale"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Michelangelo", "Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh"],
        correct: "Leonardo da Vinci"
    },
    {
        question: "What is the tallest mountain in the world?",
        options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
        correct: "Mount Everest"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
        correct: "Pacific Ocean"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
        correct: "William Shakespeare"
    },
    {
        question: "Which country won the FIFA World Cup in 2018?",
        options: ["Germany", "Brazil", "France", "Spain"],
        correct: "France"
    },
    {
        question: "What is the capital of Japan?",
        options: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"],
        correct: "Tokyo"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answerElements = document.querySelectorAll('.answer');
const optionLabels = document.querySelectorAll('label');

function showQuestion() {
    const quiz = quizData[currentQuestion];
    questionElement.innerText = quiz.question;
    quiz.options.forEach((option, index) => {
        optionLabels[index].innerText = option;
    });
}

function checkAnswer(answer) {
    if (answer === quizData[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        alert(`Quiz completed! Your score is ${score}/${quizData.length}`);
    }
}

showQuestion();

answerElements.forEach((answerElement, index) => {
    answerElement.addEventListener('click', () => {
        checkAnswer(optionLabels[index].innerText);
    });
});
