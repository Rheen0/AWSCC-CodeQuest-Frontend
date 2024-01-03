
//
const guessNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
let life = 5;


const mechaAlf = document.getElementById("mecha-alf");
const container = document.querySelector(".container");
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
            bgm.setAttribute("src", "../assets/lowhpbgm.mp3");
            break;
        case 0:
            mechaAlf.setAttribute("src", "../assets/mecha_alf/mecha_alf_complete.webp");
            document.querySelector('.container').classList.add('lowhp');
            break;
    }
}

const backBtn = document.createElement("a");
const retryBtn = document.createElement("a");
backBtn.innerHTML = "Back to main menu";
retryBtn.innerHTML = "Retry";
backBtn.setAttribute("href", "../index.html");
retryBtn.setAttribute("href", "index.html");

let ongoingGame = true;

const userInput = document.getElementsByClassName("number");
for (let i = 0; i < userInput.length; i++) {
    function highlightAnswer() {
        if (ongoingGame === true) {
            userInput[i].style.backgroundColor = "#D0A2F7";
        }
    }

    function checkAnswer() {

        const userGuess = userInput[i].textContent;

        if (userGuess == randomNumber && life > 0) {
            if (ongoingGame === true) {
                message.innerHTML = "Correct!";
                document.getElementById("feedback").appendChild(backBtn);
                document.getElementById("feedback").appendChild(retryBtn);
                ongoingGame = false;
            }
        }
        else if (userGuess > randomNumber && life > 0) {
            if (ongoingGame === true) {
                life--;
                buildMechaAlf();
                message.innerHTML = "Too high";
            }
        }
        else if (userGuess < randomNumber && life > 0) {
            if (ongoingGame === true) {
                life--;
                buildMechaAlf();
                message.innerHTML = "Too low";
            }
        }
        else {
            if (ongoingGame === true) {
                message.innerHTML = "The correct answer is " + randomNumber;
                document.getElementById("feedback").appendChild(backBtn);
                document.getElementById("feedback").appendChild(retryBtn);
                ongoingGame = false;
            }

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
