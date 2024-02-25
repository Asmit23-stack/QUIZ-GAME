// const questionElement =document.getElementById("question")
// Starting the function

let ele = document.querySelector(".timer");
let printer;
let printera;
// let clockReset;
const startButton = document.getElementById("start-btn");
let nextButton = document.getElementById("next-btn");
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion();
    updateQuestionCount()
    // onNextButtonClick();
//     // clearInterval(printer)
//     // timerc=timerc+30;
//     // timerc--;
//     // ele.innerHTML = "00:" + timerc;
//     //     clearInterval(printer);
//     // for (let i = 0; i > 30; i++) {
//     //     return timerc =i+timerc ;

//     // }
//     // timerc = 0+timerc  ;
//     // timerc++;

//     //     // // ele.innerHTML = "00:" + (timerc < 10 ? "0" + timerc : timerc);

//     //     printera = setInterval(printNumber, 1000);
})
// Naming
const questionElement = document.querySelector(".question");
const questionc = document.querySelector(".Questionc");
const container = document.querySelector("#container");
const containerAni = document.querySelector(".containerAni");
const box = document.querySelector(".box");
const clock = document.querySelector(".clock");
const btnHi =document.querySelector("#highScore-btn");



// declaring Question and answer
const answerButtonsElement = document.getElementById("answer-buttons");


// shuffling the equestion
let shuffledQuestions;
let currentQuestionIndex;

// function clockReset() {
//     currentQuestionIndex++
//     setNextQuestion()
// timerc = 30;
// ele.innerHTML = "00:" + timerc;
// timerc--;
// }
function startGame() {
    // startTimer();
    console.log("started");

    // CLOCK
    let timerc = null;

    function printNumber() {

    //     if (timerc == 0) {

    //         // // clearInterval(printer);
    //         currentQuestionIndex++
    //         setNextQuestion()
    //         // timerc = 0 ;
    //         // ele.innerHTML = "00:" + timerc;
    //         // timerc++;
    //         //    watchReset()
    //         //    watchStop()
    //         // clockReset();
    //         let user = confirm("Want to continue?");
    //         if (user == 1) {
    //             console.log("OK");
    //         }
    //         else if (user == 0) {
    //             console.log("CANCEL");
    //             // startButton.innerText = "Restart"
    //         }
    //     }

    //     
            timerc++;
            ele.innerHTML = "00:" + timerc;
            // ele.innerHTML = "00:" + (timerc < 10 ? "0" + timerc : timerc);
    //    

    }

    
    printer = setInterval(printNumber, 1000);


// BACKGROUND COLOR CHANGE

document.body.style.backgroundColor = ` --hue:var(--hue-neutron);`

// REMOVING HIDE

questionc.classList.remove("hide");
ele.classList.remove("hide");
clock.classList.remove("hide");

// ADDING HIDE

btnHi.classList.add("hide");
startButton.classList.add("hide");
containerAni.classList.add("hide");
box.classList.add("hide");
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
// container.style.backgroundColor="blueviolet";border="2px solid aqua";

setNextQuestion()
};


function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
};

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach((answer) => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
};

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButtons = e.target
    const correct = selectedButtons.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "Restart the game"
        startButton.classList.remove("hide")
        

    }
};




function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
   
};

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
    // currentQuestionIndex++
    // setNextQuestion();
}

// const questions = [
//     {
//         question: "What is 2  + 2 ?",
//         answers: [
//             { text: "4", correct: true },
//             { text: "14", correct: false }
//         ]
//     }



const questions = [
    // Math Questions
    {
        question: "What is the value of π (pi) to two decimal places?",
        answers: [
            { text: "3.14", correct: true },
            { text: "2.71", correct: false },
            { text: "1.62", correct: false },
            { text: "4.20", correct: false }
        ]
    },
    {
        question: "Solve for x: 3x + 5 = 20",
        answers: [
            { text: "5", correct: true},
            { text: "4", correct: false },
            { text: "3", correct: false },
            { text: "2", correct: false }
        ]
    },
    {
        question: "What is the square root of 81?",
        answers: [
            { text: "9", correct: true },
            { text: "8", correct: false },
            { text: "7", correct: false },
            { text: "10", correct: false }
        ]
    },
    // Science Questions
    {
        question: "Which gas do plants absorb during photosynthesis?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: true },
            { text: "Nitrogen", correct: false },
            { text: "Hydrogen", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { text: "H2O", correct: true },
            { text: "CO2", correct: false },
            { text: "O2", correct: false },
            { text: "NaCl", correct: false }
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false },
            { text: "Mars", correct: false }
        ]
    },
    // General Knowledge Questions
    {
        question: "Who is the Prime Minister of India as of 2024?",
        answers: [
            { text: "Narendra Modi", correct: true },
            { text: "Rahul Gandhi", correct: false },
            { text: "Amit Shah", correct: false },
            { text: "Arvind Kejriwal", correct: false }
        ]
    },
    {
        question: "Which river is the longest in the world?",
        answers: [
            { text: "Nile", correct: true },
            { text: "Amazon", correct: false },
            { text: "Ganges", correct: false },
            { text: "Yangtze", correct: false }
        ]
    },
    {
        question: "In which year did India gain independence?",
        answers: [
            { text: "1942", correct: false },
            { text: "1947", correct: true },
            { text: "1950", correct: false },
            { text: "1962", correct: false }
        ]
    },

    // More Math Questions
    {
        question: "If a triangle has angles 90°, 45°, and 45°, what type of triangle is it?",
        answers: [
            { text: "Equilateral", correct: false },
            { text: "Scalene", correct: false },
            { text: "Isosceles", correct: false },
            { text: "Right-angled", correct: true }
        ]
    },
    {
        question: "What is the area of a rectangle with length 8 units and width 5 units?",
        answers: [
            { text: "13 square units", correct: false },
            { text: "40 square units", correct: true },
            { text: "26 square units", correct: false },
            { text: "10 square units", correct: false }
        ]
    },
    {
        question: "If a = 4 and b = 6, what is the value of a² + b²?",
        answers: [
            { text: "20", correct: false },
            { text: "32", correct: true },
            { text: "40", correct: false },
            { text: "52", correct: false }
        ]
    },

    // More Science Questions
    {
        question: "What is the powerhouse of the cell?",
        answers: [
            { text: "Nucleus", correct: false },
            { text: "Mitochondria", correct: true },
            { text: "Endoplasmic Reticulum", correct: false },
            { text: "Cell Membrane", correct: false }
        ]
    },
    {
        question: "Which gas is responsible for the green color of plants?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: false },
            { text: "Methane", correct: false },
            { text: "Chlorophyll", correct: true }
        ]
    },
    {
        question: "What is the main function of the lungs?",
        answers: [
            { text: "Digestion", correct: false },
            { text: "Respiration", correct: true },
            { text: "Circulation", correct: false },
            { text: "Excretion", correct: false }
        ]
    },

    // More General Knowledge Questions
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Mars", correct: true },
            { text: "Venus", correct: false },
            { text: "Jupiter", correct: false },
            { text: "Mercury", correct: false }
        ]
    },
    {
        question: "Who wrote the Indian National Anthem?",
        answers: [
            { text: "Rabindranath Tagore", correct: true },
            { text: "Mahatma Gandhi", correct: false },
            { text: "Jawaharlal Nehru", correct: false },
            { text: "Sardar Patel", correct: false }
        ]
    },
    {
        question: "Which is the largest mammal in the world?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Giraffe", correct: false },
            { text: "Hippopotamus", correct: false }
        ]
    },
    // More Math Questions
    {
        question: "If the sum of three consecutive integers is 45, what are the integers?",
        answers: [
            { text: "13, 14, 15", correct: false },
            { text: "14, 15, 16", correct: true },
            { text: "15, 16, 17", correct: false },
            { text: "16, 17, 18", correct: false }
        ]
    },
    {
        question: "Simplify: 2/3 + 1/4",
        answers: [
            { text: "5/12", correct: false },
            { text: "11/12", correct: true },
            { text: "7/12", correct: false },
            { text: "3/7", correct: false }
        ]
    },
    {
        question: "What is the value of 5! (5 factorial)?",
        answers: [
            { text: "120", correct: true },
            { text: "60", correct: false },
            { text: "24", correct: false },
            { text: "720", correct: false }
        ]
    },

    // More Science Questions
    {
        question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Venus", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { text: "Au", correct: true },
            { text: "Ag", correct: false },
            { text: "Fe", correct: false },
            { text: "Cu", correct: false }
        ]
    },
    {
        question: "What is the process by which plants make their own food?",
        answers: [
            { text: "Respiration", correct: false },
            { text: "Photosynthesis", correct: true },
            { text: "Fermentation", correct: false },
            { text: "Transpiration", correct: false }
        ]
    },

    // More General Knowledge Questions
    {
        question: "Who is known as the 'Father of the Nation' in India?",
        answers: [
            { text: "Bhagat Singh", correct: false },
            { text: "Subhas Chandra Bose", correct: false },
            { text: "Mahatma Gandhi", correct: true },
            { text: "Jawaharlal Nehru", correct: false }
        ]
    },
    {
        question: "Which mountain range separates Europe and Asia?",
        answers: [
            { text: "Rocky Mountains", correct: false },
            { text: "Himalayas", correct: false },
            { text: "Urals", correct: true },
            { text: "Andes", correct: false }
        ]
    },
    {
        question: "Who invented the telephone?",
        answers: [
            { text: "Thomas Edison", correct: false },
            { text: "Alexander Graham Bell", correct: true },
            { text: "Nikola Tesla", correct: false },
            { text: "Marie Curie", correct: false }
        ]
    },
    // More Math Questions
    {
        question: "If the perimeter of a rectangle is 30 units and its length is 8 units, what is the width?",
        answers: [
            { text: "6 units", correct: false },
            { text: "7 units", correct: false },
            { text: "9 units", correct: false },
            { text: "5 units", correct: true }
        ]
    },
    {
        question: "What is the value of 2⁴ (2 to the power of 4)?",
        answers: [
            { text: "8", correct: false },
            { text: "16", correct: true },
            { text: "32", correct: false },
            { text: "64", correct: false }
        ]
    },
    {
        question: "If a square has a side length of 10 units, what is its area?",
        answers: [
            { text: "50 square units", correct: false },
            { text: "100 square units", correct: true },
            { text: "64 square units", correct: false },
            { text: "25 square units", correct: false }
        ]
    },

    // More Science Questions
    {
        question: "What is the function of the nucleus in a cell?",
        answers: [
            { text: "Energy production", correct: false },
            { text: "Cell division", correct: false },
            { text: "Genetic information storage", correct: true },
            { text: "Protein synthesis", correct: false }
        ]
    },
    {
        question: "Which gas is responsible for the greenhouse effect on Earth?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: true },
            { text: "Nitrogen", correct: false },
            { text: "Methane", correct: false }
        ]
    },
    {
        question: "What is the largest organ in the human body?",
        answers: [
            { text: "Heart", correct: false },
            { text: "Brain", correct: false },
            { text: "Liver", correct: false },
            { text: "Skin", correct: true }
        ]
    },

    // More General Knowledge Questions
    {
        question: "Which famous Indian leader is known for his role in the Salt March?",
        answers: [
            { text: "Sardar Patel", correct: false },
            { text: "Jawaharlal Nehru", correct: false },
            { text: "Subhas Chandra Bose", correct: false },
            { text: "Mahatma Gandhi", correct: true }
        ]
    },
    {
        question: "Which river is considered sacred in Hinduism and is known as the 'Ganges'?",
        answers: [
            { text: "Yamuna", correct: false },
            { text: "Brahmaputra", correct: false },
            { text: "Indus", correct: false },
            { text: "Ganga", correct: true }
        ]
    },
    {
        question: "Who wrote the famous play 'Merchant of Venice'?",
        answers: [
            { text: "William Shakespeare", correct: true },
            { text: "Charles Dickens", correct: false },
            { text: "Jane Austen", correct: false },
            { text: "Leo Tolstoy", correct: false }
        ]
    },

    // More Math Questions
    {
        question: "If a square has a perimeter of 20 units, what is the length of each side?",
        answers: [
            { text: "3 units", correct: false },
            { text: "4 units", correct: true },
            { text: "5 units", correct: false },
            { text: "6 units", correct: false }
        ]
    },
    {
        question: "Solve for x: 2x - 7 = 11",
        answers: [
            { text: "9", correct: false },
            { text: "8", correct: true },
            { text: "7", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "What is the value of 12 ÷ 4?",
        answers: [
            { text: "2", correct: false },
            { text: "3", correct: true },
            { text: "4", correct: false },
            { text: "5", correct: false }
        ]
    },

    // More Science Questions
    {
        question: "Which gas makes up the majority of Earth's atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: true },
            { text: "Carbon Dioxide", correct: false },
            { text: "Argon", correct: false }
        ]
    },
    {
        question: "What is the powerhouse of a plant cell?",
        answers: [
            { text: "Mitochondria", correct: false },
            { text: "Chloroplast", correct: true },
            { text: "Nucleus", correct: false },
            { text: "Endoplasmic Reticulum", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for sodium?",
        answers: [
            { text: "Na", correct: true },
            { text: "S", correct: false },
            { text: "So", correct: false },
            { text: "N", correct: false }
        ]
    },

    // More General Knowledge Questions
    {
        question: "Which ocean is the largest?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Southern Ocean", correct: false },
            { text: "Pacific Ocean", correct: true }
        ]
    },
    {
        question: "Who is known as the 'Iron Man of India'?",
        answers: [
            { text: "Sardar Patel", correct: true },
            { text: "Jawaharlal Nehru", correct: false },
            { text: "Subhas Chandra Bose", correct: false },
            { text: "Bhagat Singh", correct: false }
        ]
    },
    {
        question: "What is the capital city of Australia?",
        answers: [
            { text: "Sydney", correct: false },
            { text: "Melbourne", correct: false },
            { text: "Canberra", correct: true },
            { text: "Brisbane", correct: false }
        ]
    },
    // More Math Questions
    {
        question: "If the sum of two angles in a triangle is 90 degrees, what is the measure of the third angle?",
        answers: [
            { text: "45 degrees", correct: true },
            { text: "60 degrees", correct: false },
            { text: "30 degrees", correct: false },
            { text: "75 degrees", correct: false }
        ]
    },
    {
        question: "Simplify: 5/8 + 3/4",
        answers: [
            { text: "1 3/8", correct: false },
            { text: "1 1/2", correct: true },
            { text: "1 1/4", correct: false },
            { text: "1 5/8", correct: false }
        ]
    },
    {
        question: "What is the value of 3² + 4²?",
        answers: [
            { text: "7", correct: false },
            { text: "25", correct: false },
            { text: "9", correct: false },
            { text: "25", correct: true }
        ]
    },

    // More Science Questions
    {
        question: "Which planet is known as the 'Blue Planet'?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Earth", correct: true },
            { text: "Mars", correct: false },
            { text: "Neptune", correct: false }
        ]
    },
    {
        question: "What is the process by which plants release water vapor into the atmosphere?",
        answers: [
            { text: "Photosynthesis", correct: false },
            { text: "Transpiration", correct: true },
            { text: "Respiration", correct: false },
            { text: "Condensation", correct: false }
        ]
    },
    {
        question: "Which metal is a liquid at room temperature?",
        answers: [
            { text: "Gold", correct: false },
            { text: "Copper", correct: false },
            { text: "Mercury", correct: true },
            { text: "Aluminum", correct: false }
        ]
    },

    // More General Knowledge Questions
    {
        question: "In which year did the Titanic sink?",
        answers: [
            { text: "1912", correct: true },
            { text: "1905", correct: false },
            { text: "1920", correct: false },
            { text: "1931", correct: false }
        ]
    },
    {
        question: "Who is the author of 'To Kill a Mockingbird'?",
        answers: [
            { text: "George Orwell", correct: false },
            { text: "Harper Lee", correct: true },
            { text: "J.K. Rowling", correct: false },
            { text: "Mark Twain", correct: false }
        ]
    },
    {
        question: "What is the currency of Japan?",
        answers: [
            { text: "Yuan", correct: false },
            { text: "Won", correct: false },
            { text: "Yen", correct: true },
            { text: "Ringgit", correct: false }
        ]
    },


    // More Math Questions
    {
        question: "If the area of a rectangle is 24 square units and its length is 6 units, what is the width?",
        answers: [
            { text: "4 units", correct: false },
            { text: "5 units", correct: false },
            { text: "2 units", correct: false },
            { text: "8 units", correct: true }
        ]
    },
    {
        question: "Solve for x: 3(x - 2) = 15",
        answers: [
            { text: "4", correct: false },
            { text: "6", correct: false },
            { text: "5", correct: true },
            { text: "7", correct: false }
        ]
    },
    {
        question: "What is the value of 5³ (5 to the power of 3)?",
        answers: [
            { text: "125", correct: true },
            { text: "75", correct: false },
            { text: "150", correct: false },
            { text: "100", correct: false }
        ]
    },

    // More Science Questions
    {
        question: "Which gas is responsible for the Earth's ozone layer?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: false },
            { text: "Ozone", correct: true },
            { text: "Methane", correct: false }
        ]
    },
    {
        question: "What is the smallest bone in the human body?",
        answers: [
            { text: "Stapes", correct: true },
            { text: "Femur", correct: false },
            { text: "Radius", correct: false },
            { text: "Tibia", correct: false }
        ]
    },
    {
        question: "Which gas do humans primarily exhale during respiration?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: true },
            { text: "Nitrogen", correct: false },
            { text: "Hydrogen", correct: false }
        ]
    },

    // More General Knowledge Questions
    {
        question: "Who was the first President of the United States?",
        answers: [
            { text: "John Adams", correct: false },
            { text: "George Washington", correct: true },
            { text: "Thomas Jefferson", correct: false },
            { text: "Abraham Lincoln", correct: false }
        ]
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answers: [
            { text: "Mars", correct: true },
            { text: "Venus", correct: false },
            { text: "Jupiter", correct: false },
            { text: "Mercury", correct: false }
        ]
    },
    {
        question: "What is the largest mammal on land?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
            { text: "Hippopotamus", correct: false },
            { text: "African Elephant", correct: true }
        ]
    },
    // More Math Questions
    {
        question: "If a triangle has sides of lengths 3, 4, and 5 units, what type of triangle is it?",
        answers: [
            { text: "Equilateral", correct: false },
            { text: "Scalene", correct: false },
            { text: "Isosceles", correct: true },
            { text: "Right-angled", correct: false }
        ]
    },
    {
        question: "What is the value of 7! (7 factorial)?",
        answers: [
            { text: "5040", correct: true },
            { text: "720", correct: false },
            { text: "120", correct: false },
            { text: "144", correct: false }
        ]
    },
    {
        question: "If the hypotenuse of a right-angled triangle is 10 units and one leg is 6 units, what is the length of the other leg?",
        answers: [
            { text: "8 units", correct: true },
            { text: "4 units", correct: false },
            { text: "7 units", correct: false },
            { text: "5 units", correct: false }
        ]
    },

    // More Science Questions
    {
        question: "What is the largest organ in the human body?",
        answers: [
            { text: "Brain", correct: false },
            { text: "Heart", correct: false },
            { text: "Skin", correct: true },
            { text: "Liver", correct: false }
        ]
    },
    {
        question: "Which gas is essential for photosynthesis to occur?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: true },
            { text: "Nitrogen", correct: false },
            { text: "Hydrogen", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for iron?",
        answers: [
            { text: "I", correct: false },
            { text: "Fe", correct: true },
            { text: "Ir", correct: false },
            { text: "In", correct: false }
        ]
    },

    // More General Knowledge Questions
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
            { text: "Charles Dickens", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "Jane Austen", correct: false },
            { text: "Leo Tolstoy", correct: false }
        ]
    },
    {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        answers: [
            { text: "China", correct: false },
            { text: "Japan", correct: true },
            { text: "South Korea", correct: false },
            { text: "Thailand", correct: false }
        ]
    },
    {
        question: "Who is known as the 'Father of Modern Physics'?",
        answers: [
            { text: "Isaac Newton", correct: false },
            { text: "Niels Bohr", correct: false },
            { text: "Albert Einstein", correct: true },
            { text: "Galileo Galilei", correct: false }
        ]
    },
    // More Math Questions
    {
        question: "What is the value of 2⁵ (2 to the power of 5)?",
        answers: [
            { text: "32", correct: true },
            { text: "64", correct: false },
            { text: "16", correct: false },
            { text: "128", correct: false }
        ]
    },
    {
        question: "If a circle has a radius of 5 units, what is its circumference?",
        answers: [
            { text: "10π units", correct: false },
            { text: "15π units", correct: false },
            { text: "20π units", correct: true },
            { text: "25π units", correct: false }
        ]
    },
    {
        question: "Solve for x: 2x + 7 = 15",
        answers: [
            { text: "4", correct: false },
            { text: "5", correct: true },
            { text: "6", correct: false },
            { text: "8", correct: false }
        ]
    },

    // More Science Questions
    {
        question: "Which planet is known as the 'Ringed Planet'?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Saturn", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Uranus", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for hydrogen?",
        answers: [
            { text: "Hg", correct: false },
            { text: "He", correct: false },
            { text: "H", correct: true },
            { text: "H2", correct: false }
        ]
    },
    {
        question: "What is the speed of light in a vacuum?",
        answers: [
            { text: "300,000 km/s", correct: true },
            { text: "150,000 km/s", correct: false },
            { text: "500,000 km/s", correct: false },
            { text: "1,000,000 km/s", correct: false }
        ]
    },

    // More General Knowledge Questions
    {
        question: "Who is the author of the Harry Potter book series?",
        answers: [
            { text: "J.R.R. Tolkien", correct: false },
            { text: "J.K. Rowling", correct: true },
            { text: "George R.R. Martin", correct: false },
            { text: "C.S. Lewis", correct: false }
        ]
    },
    {
        question: "Which continent is known as the 'Dark Continent'?",
        answers: [
            { text: "Australia", correct: false },
            { text: "Africa", correct: true },
            { text: "South America", correct: false },
            { text: "Antarctica", correct: false }
        ]
    },
    {
        question: "In which year did the World War II end?",
        answers: [
            { text: "1943", correct: false },
            { text: "1945", correct: true },
            { text: "1947", correct: false },
            { text: "1950", correct: false }
        ]
    },

    {
        question: "If a square has an area of 49 square units, what is the length of each side?",
        answers: [
            { text: "6 units", correct: false },
            { text: "7 units", correct: true },
            { text: "8 units", correct: false },
            { text: "9 units", correct: false }
        ]
    },
    {
        question: "What is the sum of the interior angles of a hexagon?",
        answers: [
            { text: "180 degrees", correct: false },
            { text: "360 degrees", correct: true },
            { text: "540 degrees", correct: false },
            { text: "720 degrees", correct: false }
        ]
    },
    {
        question: "Solve for x: 4x - 9 = 15",
        answers: [
            { text: "6", correct: true },
            { text: "7", correct: false },
            { text: "8", correct: false },
            { text: "9", correct: false }
        ]
    },

    // More Science Questions
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false },
            { text: "Mars", correct: false }
        ]
    },
    {
        question: "Which gas is responsible for the smell of rotten eggs?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Methane", correct: false },
            { text: "Sulfur dioxide", correct: true },
            { text: "Nitrogen", correct: false }
        ]
    },
    {
        question: "What is the chemical formula for water?",
        answers: [
            { text: "H2O2", correct: false },
            { text: "CO2", correct: false },
            { text: "H2O", correct: true },
            { text: "CH4", correct: false }
        ]
    },

    // More General Knowledge Questions
    {
        question: "Who was the first woman to win a Nobel Prize?",
        answers: [
            { text: "Marie Curie", correct: true },
            { text: "Rosa Parks", correct: false },
            { text: "Mother Teresa", correct: false },
            { text: "Amelia Earhart", correct: false }
        ]
    },
    {
        question: "Which river is the longest in the world?",
        answers: [
            { text: "Amazon", correct: false },
            { text: "Nile", correct: true },
            { text: "Yangtze", correct: false },
            { text: "Mississippi", correct: false }
        ]
    },
    {
        question: "Who is the author of 'Pride and Prejudice'?",
        answers: [
            { text: "Charlotte Brontë", correct: false },
            { text: "Jane Austen", correct: true },
            { text: "Emily Brontë", correct: false },
            { text: "Charles Dickens", correct: false }
        ]
    },


    // More Math Questions
    {
        question: "If a rectangle has a length of 12 units and a width of 8 units, what is its perimeter?",
        answers: [
            { text: "32 units", correct: false },
            { text: "40 units", correct: true },
            { text: "48 units", correct: false },
            { text: "56 units", correct: false }
        ]
    },
    {
        question: "What is the value of π (pi) to two decimal places?",
        answers: [
            { text: "3.14", correct: true },
            { text: "3.16", correct: false },
            { text: "3.12", correct: false },
            { text: "3.18", correct: false }
        ]
    },
    {
        question: "Simplify: 2/5 * 3/8",
        answers: [
            { text: "3/20", correct: false },
            { text: "3/10", correct: false },
            { text: "3/40", correct: true },
            { text: "3/15", correct: false }
        ]
    },

    // More Science Questions
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { text: "Au", correct: true },
            { text: "Ag", correct: false },
            { text: "Fe", correct: false },
            { text: "Cu", correct: false }
        ]
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answers: [
            { text: "Mars", correct: true },
            { text: "Venus", correct: false },
            { text: "Jupiter", correct: false },
            { text: "Mercury", correct: false }
        ]
    },
    {
        question: "What is the process by which plants make their own food?",
        answers: [
            { text: "Respiration", correct: false },
            { text: "Photosynthesis", correct: true },
            { text: "Fermentation", correct: false },
            { text: "Transpiration", correct: false }
        ]
    },

    // More General Knowledge Questions
    {
        question: "Who is known as the 'Father of the Computer'?",
        answers: [
            { text: "Charles Babbage", correct: true },
            { text: "Alan Turing", correct: false },
            { text: "Steve Jobs", correct: false },
            { text: "Bill Gates", correct: false }
        ]
    },
    {
        question: "Which element is essential for all living organisms?",
        answers: [
            { text: "Gold", correct: false },
            { text: "Carbon", correct: true },
            { text: "Iron", correct: false },
            { text: "Silver", correct: false }
        ]
    },
    {
        question: "Who wrote 'The Great Gatsby'?",
        answers: [
            { text: "F. Scott Fitzgerald", correct: true },
            { text: "Ernest Hemingway", correct: false },
            { text: "J.K. Rowling", correct: false },
            { text: "Jane Austen", correct: false }
        ]
    },
    // More Math Questions
    {
        question: "If the perimeter of a square is 20 units, what is the length of each side?",
        answers: [
            { text: "4 units", correct: true },
            { text: "5 units", correct: false },
            { text: "6 units", correct: false },
            { text: "7 units", correct: false }
        ]
    },
    {
        question: "What is the product of 9 and 7?",
        answers: [
            { text: "56", correct: false },
            { text: "63", correct: true },
            { text: "72", correct: false },
            { text: "81", correct: false }
        ]
    },
    {
        question: "Simplify: (2 + 5) * 3",
        answers: [
            { text: "21", correct: true },
            { text: "18", correct: false },
            { text: "27", correct: false },
            { text: "15", correct: false }
        ]
    },

    // More Science Questions
    {
        question: "What is the chemical symbol for oxygen?",
        answers: [
            { text: "O2", correct: false },
            { text: "O", correct: true },
            { text: "O3", correct: false },
            { text: "O+", correct: false }
        ]
    },
    {
        question: "Which planet is known as the 'Blue Planet'?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Earth", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Venus", correct: false }
        ]
    },
    {
        question: "What is the powerhouse of the cell?",
        answers: [
            { text: "Nucleus", correct: false },
            { text: "Mitochondria", correct: true },
            { text: "Endoplasmic Reticulum", correct: false },
            { text: "Chloroplast", correct: false }
        ]
    },

    // More General Knowledge Questions
    {
        question: "Who discovered penicillin?",
        answers: [
            { text: "Marie Curie", correct: false },
            { text: "Alexander Fleming", correct: true },
            { text: "Louis Pasteur", correct: false },
            { text: "Jonas Salk", correct: false }
        ]
    },
    {
        question: "Which is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Southern Ocean", correct: false },
            { text: "Pacific Ocean", correct: true }
        ]
    },
    {
        question: "Who wrote '1984'?",
        answers: [
            { text: "George Orwell", correct: true },
            { text: "Aldous Huxley", correct: false },
            { text: "Ray Bradbury", correct: false },
            { text: "J.K. Rowling", correct: false }
        ]
    },
    // More Math Questions
    {
        question: "If a train travels at a speed of 60 km/h for 3 hours, how far does it travel?",
        answers: [
            { text: "150 km", correct: false },
            { text: "180 km", correct: false },
            { text: "200 km", correct: false },
            { text: "180 km", correct: true }
        ]
    },
    {
        question: "What is the value of 4² - 3³?",
        answers: [
            { text: "-37", correct: false },
            { text: "-19", correct: false },
            { text: "1", correct: true },
            { text: "25", correct: false }
        ]
    },
    {
        question: "If a right-angled triangle has legs of lengths 3 units and 4 units, what is the length of the hypotenuse?",
        answers: [
            { text: "5 units", correct: true },
            { text: "6 units", correct: false },
            { text: "7 units", correct: false },
            { text: "8 units", correct: false }
        ]
    },

    // More Science Questions
    {
        question: "What is the chemical symbol for sodium?",
        answers: [
            { text: "S", correct: false },
            { text: "So", correct: false },
            { text: "Na", correct: true },
            { text: "N", correct: false }
        ]
    },
    {
        question: "What is the main function of the lungs?",
        answers: [
            { text: "Digestion", correct: false },
            { text: "Circulation", correct: false },
            { text: "Respiration", correct: true },
            { text: "Excretion", correct: false }
        ]
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answers: [
            { text: "Mars", correct: true },
            { text: "Venus", correct: false },
            { text: "Jupiter", correct: false },
            { text: "Mercury", correct: false }
        ]
    },

    // More General Knowledge Questions
    {
        question: "Who was the first woman to win a Nobel Prize?",
        answers: [
            { text: "Marie Curie", correct: true },
            { text: "Rosa Parks", correct: false },
            { text: "Mother Teresa", correct: false },
            { text: "Amelia Earhart", correct: false }
        ]
    },
    {
        question: "In which year did the Titanic sink?",
        answers: [
            { text: "1912", correct: true },
            { text: "1905", correct: false },
            { text: "1920", correct: false },
            { text: "1931", correct: false }
        ]
    },
    {
        question: "Who is known as the 'Father of Computer Science'?",
        answers: [
            { text: "Alan Turing", correct: true },
            { text: "Charles Babbage", correct: false },
            { text: "Ada Lovelace", correct: false },
            { text: "Bill Gates", correct: false }
        ]
    },
    // More Math Questions
    {
        question: "If the average of three numbers is 15, and two of the numbers are 10 and 20, what is the third number?",
        answers: [
            { text: "5", correct: false },
            { text: "15", correct: false },
            { text: "25", correct: true },
            { text: "30", correct: false }
        ]
    },
    {
        question: "Solve for x: 2x + 8 = 16",
        answers: [
            { text: "4", correct: true },
            { text: "6", correct: false },
            { text: "8", correct: false },
            { text: "10", correct: false }
        ]
    },
    {
        question: "What is the area of a triangle with a base of 6 units and a height of 8 units?",
        answers: [
            { text: "24 square units", correct: false },
            { text: "32 square units", correct: true },
            { text: "40 square units", correct: false },
            { text: "48 square units", correct: false }
        ]
    },

    // More Science Questions
    {
        question: "What is the process by which plants convert light energy into chemical energy?",
        answers: [
            { text: "Transpiration", correct: false },
            { text: "Photosynthesis", correct: true },
            { text: "Respiration", correct: false },
            { text: "Fermentation", correct: false }
        ]
    },
    {
        question: "Which gas do plants primarily release during photosynthesis?",
        answers: [
            { text: "Oxygen", correct: true },
            { text: "Carbon Dioxide", correct: false },
            { text: "Nitrogen", correct: false },
            { text: "Hydrogen", correct: false }
        ]
    },
    {
        question: "What is the largest mammal on Earth?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Giraffe", correct: false },
            { text: "Hippopotamus", correct: false }
        ]
    },

    // More General Knowledge Questions
    {
        question: "Who is the current Prime Minister of India?",
        answers: [
            { text: "Narendra Modi", correct: true },
            { text: "Rahul Gandhi", correct: false },
            { text: "Amit Shah", correct: false },
            { text: "Manmohan Singh", correct: false }
        ]
    },
    {
        question: "What is the currency of Brazil?",
        answers: [
            { text: "Peso", correct: false },
            { text: "Real", correct: true },
            { text: "Baht", correct: false },
            { text: "Rand", correct: false }
        ]
    },
    {
        question: "Who wrote the play 'Hamlet'?",
        answers: [
            { text: "William Shakespeare", correct: true },
            { text: "Charles Dickens", correct: false },
            { text: "Jane Austen", correct: false },
            { text: "Leo Tolstoy", correct: false }
        ]
    },
    // More Math Questions
    {
        question: "If a rectangle has a length of 15 units and a width of 8 units, what is its area?",
        answers: [
            { text: "120 square units", correct: false },
            { text: "108 square units", correct: false },
            { text: "112 square units", correct: true },
            { text: "96 square units", correct: false }
        ]
    },
    {
        question: "What is the value of 5! (5 factorial)?",
        answers: [
            { text: "120", correct: true },
            { text: "60", correct: false },
            { text: "240", correct: false },
            { text: "30", correct: false }
        ]
    },
    {
        question: "Solve for x: 3x + 7 = 22",
        answers: [
            { text: "5", correct: false },
            { text: "4", correct: false },
            { text: "5.67", correct: true },
            { text: "6", correct: false }
        ]
    },

    // More Science Questions
    {
        question: "What is the chemical symbol for carbon?",
        answers: [
            { text: "C", correct: true },
            { text: "Co", correct: false },
            { text: "Ca", correct: false },
            { text: "Cu", correct: false }
        ]
    },
    {
        question: "Which planet is known as the 'Giant of the Solar System'?",
        answers: [
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false },
            { text: "Uranus", correct: false },
            { text: "Neptune", correct: false }
        ]
    },
    {
        question: "What is the smallest prime number?",
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "3", correct: false },
            { text: "4", correct: false }
        ]
    },

    // More General Knowledge Questions
    {
        question: "Who is the author of 'To Kill a Mockingbird'?",
        answers: [
            { text: "Harper Lee", correct: true },
            { text: "Mark Twain", correct: false },
            { text: "J.K. Rowling", correct: false },
            { text: "George Orwell", correct: false }
        ]
    },
    {
        question: "What is the capital of Canada?",
        answers: [
            { text: "Toronto", correct: false },
            { text: "Montreal", correct: false },
            { text: "Vancouver", correct: false },
            { text: "Ottawa", correct: true }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Vincent van Gogh", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Pablo Picasso", correct: false },
            { text: "Claude Monet", correct: false }
        ]
    },

];