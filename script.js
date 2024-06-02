const questions = [
    {
        question: "What should you do if you receive an email from an unknown sender asking for personal information?",
        answers: [
            "Reply with the information",
            "Ignore the email",
            "Click the link in the email",
            "Forward the email to IT"
        ],
        correct: 1,
        explanation: "You should ignore the email. It could be a phishing attempt to steal your personal information."
    },
    {
        question: "What is the safest way to handle a USB drive found in the parking lot?",
        answers: [
            "Plug it into your computer to check its contents",
            "Give it to a colleague",
            "Throw it away",
            "Hand it over to IT"
        ],
        correct: 3,
        explanation: "You should hand it over to IT. It could contain malware that can harm your computer."
    },
    {
        question: "How often should you update your passwords?",
        answers: [
            "Once a year",
            "Every month",
            "Every six months",
            "Only when you forget it"
        ],
        correct: 2,
        explanation: "You should update your passwords every six months to ensure better security."
    },
    {
        question: "What is a common sign of a phishing email?",
        answers: [
            "Contains spelling errors",
            "Is addressed to 'Dear Customer'",
            "Includes a sense of urgency",
            "All of the above"
        ],
        correct: 3,
        explanation: "All of the above are common signs of a phishing email."
    },
    {
        question: "What should you do if you suspect your computer is infected with malware?",
        answers: [
            "Run a full antivirus scan",
            "Ignore it",
            "Unplug your computer",
            "Restart your computer"
        ],
        correct: 0,
        explanation: "You should run a full antivirus scan to detect and remove the malware."
    },
    {
        question: "What is a strong password?",
        answers: [
            "Your birthdate",
            "123456",
            "A random string of characters, including letters, numbers, and symbols",
            "Your pet's name"
        ],
        correct: 2,
        explanation: "A strong password is a random string of characters that includes letters, numbers, and symbols."
    },
    {
        question: "What should you do if you receive a suspicious link in an email?",
        answers: [
            "Click it to see where it leads",
            "Forward it to friends",
            "Report it as phishing",
            "Delete the email"
        ],
        correct: 2,
        explanation: "You should report the email as phishing to help prevent others from falling for the scam."
    },
    {
        question: "Which of the following is a good practice for keeping your software secure?",
        answers: [
            "Disable automatic updates",
            "Install updates regularly",
            "Ignore update notifications",
            "Only update when something breaks"
        ],
        correct: 1,
        explanation: "Installing updates regularly ensures your software has the latest security patches."
    },
    {
        question: "What is two-factor authentication?",
        answers: [
            "Using two passwords",
            "A security process that requires two different authentication factors",
            "Logging in from two devices",
            "Using two different usernames"
        ],
        correct: 1,
        explanation: "Two-factor authentication is a security process that requires two different authentication factors."
    },
    {
        question: "What is the primary purpose of a firewall?",
        answers: [
            "To make your computer run faster",
            "To block unauthorized access to your network",
            "To store your passwords",
            "To boost your internet speed"
        ],
        correct: 1,
        explanation: "The primary purpose of a firewall is to block unauthorized access to your network."
    }
];

let currentQuestionIndex = 0;

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const answers = document.getElementsByClassName('answer-btn');
    const explanationElement = document.getElementById('explanation');
    const progress = document.getElementById('progress');
    
    questionElement.textContent = questions[currentQuestionIndex].question;
    for (let i = 0; i < answers.length; i++) {
        answers[i].textContent = questions[currentQuestionIndex].answers[i];
        answers[i].disabled = false;
    }
    explanationElement.textContent = "";
    document.getElementById('next-btn').style.display = 'none';

    // Update progress bar
    const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
    progress.style.width = progressPercentage + '%';
}

function checkAnswer(answerIndex) {
    const explanationElement = document.getElementById('explanation');
    const answers = document.getElementsByClassName('answer-btn');
    for (let i = 0; i < answers.length; i++) {
        answers[i].disabled = true;
    }
    if (answerIndex === questions[currentQuestionIndex].correct) {
        explanationElement.textContent = "Correct! " + questions[currentQuestionIndex].explanation;
        anime({
            targets: explanationElement,
            backgroundColor: '#d4edda',
            color: '#155724',
            duration: 800
        });
    } else {
        explanationElement.textContent = "Incorrect. " + questions[currentQuestionIndex].explanation;
        anime({
            targets: explanationElement,
            backgroundColor: '#f8d7da',
            color: '#721c24',
            duration: 800
        });
    }
    document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        const questionContainer = document.getElementById('question-container');
        questionContainer.innerHTML = "<p>You've completed the quiz! Great job!</p>";
        document.getElementById('next-btn').style.display = 'none';
    }
}

window
