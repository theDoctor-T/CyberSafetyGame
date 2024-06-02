const questions = [
    {
        question: "What is a strong password?",
        image: "images/password.jpg",
        answers: [
            { text: "123456", correct: false, explanation: "This is a very common password and easy to guess." },
            { text: "password", correct: false, explanation: "This is another common and easily guessed password." },
            { text: "A1b2C3d4!", correct: true, explanation: "This password is strong because it includes a mix of letters, numbers, and symbols." },
            { text: "qwerty", correct: false, explanation: "This is a common pattern on keyboards and easy to guess." }
        ]
    },
    {
        question: "What should you do if you receive a suspicious email?",
        image: "images/email.jpg",
        answers: [
            { text: "Ignore it", correct: false, explanation: "Ignoring it might not be enough; it could be a phishing attempt." },
            { text: "Click on the link to see what it is", correct: false, explanation: "Never click on links in suspicious emails as they could lead to malicious sites." },
            { text: "Report it to your IT department", correct: true, explanation: "Reporting it helps your IT department to take necessary actions and keep others safe." },
            { text: "Reply to the sender asking if it is legitimate", correct: false, explanation: "Replying could give the sender more information about you." }
        ]
    },
    // Add 8 more questions following the same structure
];

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const questionImage = document.getElementById('question-image');

let currentQuestionIndex = 0;

function startGame() {
    nextButton.classList.add('hide');
    currentQuestionIndex = 0;
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    questionImage.src = question.image;
    answerButtonsElement.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
        if (button === selectedButton) {
            button.innerText += correct ? "\nCorrect!" : "\nIncorrect!";
            button.innerText += "\n" + questions[currentQuestionIndex].answers.find(a => a.text === button.innerText.split("\n")[0]).explanation;
        }
    });
    if (questions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        nextButton.innerText = 'Restart';
        nextButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function handleNextButton() {
    currentQuestionIndex++;
    showQuestion(questions[currentQuestionIndex]);
}

nextButton.addEventListener('click', () => {
    if (questions.length > currentQuestionIndex + 1) {
        handleNextButton();
    } else {
        startGame();
    }
});

startGame();
