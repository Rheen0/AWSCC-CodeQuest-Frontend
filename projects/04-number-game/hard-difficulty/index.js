
//
const guessNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
let life = 5;


const mechaAlf = document.getElementById("mecha-alf");

const randomNumber = Math.floor(Math.random() * guessNumber.length);
console.log(randomNumber);
const message = document.getElementById("feedback-message");
const answer = document.getElementById("answer");


function buildMechaAlf() {
    switch (life) {
        case 4:
            mechaAlf.setAttribute("src", "../assets/mecha_alf/mecha_alf_legs.webp");
            break;
        case 3:
            mechaAlf.setAttribute("src", "../assets/mecha_alf/mecha_alf_body.webp");
            break;
        case 2:
            mechaAlf.setAttribute("src", "../assets/mecha_alf/mecha_alf_arms.webp");
            break;
        case 1:
            mechaAlf.setAttribute("src", "../assets/mecha_alf/mecha_alf_head.webp");
            break;
        case 0:
            mechaAlf.setAttribute("src", "../assets/mecha_alf/mecha_alf_complete.webp");
            break;
    }
}

const backBtn = document.createElement("a");
backBtn.innerHTML = "Back to main menu";
backBtn.setAttribute("href", "../index.html");

const userInput = document.getElementsByClassName("number");
for (let i = 0; i < userInput.length; i++) {
    function highlightAnswer() {
        userInput[i].style.backgroundColor = "#D0A2F7";
    }

    function checkAnswer() {
        const userGuess = userInput[i].textContent;

        if (userGuess == randomNumber) {
            message.innerHTML = "Correct!";
            document.getElementById("feedback").appendChild(backBtn);
        }
        else if (userGuess > randomNumber && life > 0) {
            life--;
            buildMechaAlf();
            message.innerHTML = "Too high";
        }
        else if (userGuess < randomNumber && life > 0) {
            life--;
            buildMechaAlf();
            message.innerHTML = "Too low";
        }
        else {
            message.innerHTML = "Game Over!";
            answer.innerHTML = "The correct answer is " + randomNumber;
            document.getElementById("feedback").appendChild(backBtn);
        }
    }

    userInput[i].addEventListener('click', checkAnswer);
    userInput[i].addEventListener('click', highlightAnswer);


}











// console.log(userInput[1].textContent);
// console.log(userInput.value);


// submitInput.addEventListener('click', function () {

// });



// const userInput = document.getElementById("user-input");
//
// const submitInput = document.getElementById("submitInput");
