const questions = [
    {

        question: "What is the capital of India?",

        answers: [
            { text: "Bihar", correct: false },
            { text: "Goa", correct: false },
            { text: "Kolkata", correct: false },
            { text: "New Delhi", correct: true },
        ]

    },

    {
        question: "Who is the current Prime Minister of India?",
        answers: [
            { text: "Narendra Modi", correct: true },
            { text: "Manmohan Singh", correct: false },
            { text: "Rahul Gandhi", correct: false },
            { text: "Jayalalithaa", correct: false },


        ]

    },

    {
        question: " Which country has the longest coastline in the world?",
        answers: [
            { text: "India", correct: false },
            { text: "United States", correct: true },
            { "text": "China", correct: false },
            { "text": "Australia", correct: false },
        ]
    },

    {
        question: "Who heads the RBI?",
        answers: [
            { "text": "Governor", correct: true },
            { "text": "Chief Minister", correct: false },
            { "text": "Prime Minister ", correct: false },
            { "text": "Education Minister", correct: false },

        ]
    },
    {
        question: "What is the capital  of Australia?",
        answers: [
            { text: "Canberra", correct: true },
            { text: "Sydney", correct: false },
            { text: "Melbourne", correct: false },
            { text: "Brisbane", correct: false },
        ]
    },

    {
        question: "Which company introduced the first mobile phone to India?",

        answers: [
            { text: "Nokia", correct: false },
            { text: "Microsoft", correct: false },
            { text: "IBM", correct: false },
            { text: "RIM (Blackberry)", correct: true }
        ]

    },
    {
        question: "Who created Bitcoin?",
        answers: [
            { "text": "Satoshi Nakamoto", correct: true },
            { "text": "Charles H. Bennett", correct: false },
            { "text": "Gavin Andresen", correct: false },
            { "text": "Adrian Pike", "correct": false }
        ]

    },

    {
        question: "Nifty is the index of which Indian stock market?",
        answers: [
            { text: "BSE", correct: false },
            { text: "NSE", correct: true },
            { "text": "BOT", "correct": false },
            { "text": "MCX", "correct": false },


        ]


    },

    {
        question :"what is the height of kanchenjunga peak ?",
        answers:[{text:"8586m",correct:true},
        {text:"8125m",correct:false},
        {text:"7930m",correct:false},
        {text:"8463m",correct:false},
    ]
    
    },

    {
        question: " Which is the longest river in India?",
        answers: [
            { text: "Indus River", correct: false },
            { text: "Yamuna River", correct: false },
            { text: "kosi River", correct: false },
            { text: " Ganga River", correct: true },

        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById('next-btn');
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {

    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}



function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        //    when user clicks on a button, we check if it's correct or not and then move to the next question

        if (answer.correct) {
            button.dataset.correct = answer.correct;

        }
        button.addEventListener("click", selectAnswer);
    });




}
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;



    } 
    else {
        selectedBtn.classList.add("incorrect");

    }
    Array.from(answerButtons.children).forEach((button) => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");


        }
        button.disabled = true;
    });
    nextButton.style.display = "block";


    }

    function showScore() {
        resetState();
        questionElement.innerHTML =`hello Learner your score is ${score *200} out of ${questions.length *200}`;
        nextButton.innerHTML="Reattempt the quiz"
        nextButton.style.display=display="block";

    }
    function handleNextButton() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {

                showQuestion();
            } 
        else {
                showScore();
            }

        }
    
    nextButton.addEventListener("click", () => {
        if(currentQuestionIndex < questions.length)
            handleNextButton();
        else{
            startQuiz();
        }
    }); 
    
startQuiz();




