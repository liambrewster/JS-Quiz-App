

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContain = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - 0.5)
    currentQuestionIndex = 0
    questionContain.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }

}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What is 2 + 2?',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false }
        ]
    },
    {
        question: 'When is Liams Birthday?',
        answers: [
            { text: 'Every Year', correct: true },
            { text: '22nd June', correct: false },
            { text: '3rd May', correct: false },
            { text: '13rd January', correct: false }
        ]
    },
    {
        question: 'What year did the Titanic sink in the Atlantic Ocean on 15 April, on its maiden voyage from Southampton?',
        answers: [
            { text: '1921', correct: false },
            { text: '1908', correct: false },
            { text: '1912', correct: true },
            { text: '1899', correct: false }
        ]
    },
    {
        question: 'What is the name of the biggest technology company in South Korea?',
        answers: [
            { text: 'Nokia', correct: false },
            { text: 'Huawei', correct: false },
            { text: 'Cubot', correct: false },
            { text: 'Samsung', correct: true }
        ]
    },
    {
        question: 'What did Al Capone’s business card state his occupation was?',
        answers: [
            { text: 'A used car salesman', correct: false },
            { text: 'A used furniture salesman', correct: true },
            { text: 'Hitman', correct: false },
            { text: 'Magician', correct: false }
        ]
    },
    {
        question: 'What is the lifespan of a dragonfly?',
        answers: [
            { text: '24 Days', correct: false },
            { text: '24 Minutes', correct: false },
            { text: '24 Hours', correct: true },
            { text: '24 Weeks', correct: false }
        ]
    },
    {
        question: 'What is the chemical symbol for silver?',
        answers: [
            { text: 'au', correct: false },
            { text: 'si', correct: false },
            { text: 'sr', correct: false },
            { text: 'ag', correct: true }
        ]
    },
]