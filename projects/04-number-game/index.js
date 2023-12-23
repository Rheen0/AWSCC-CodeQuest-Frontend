const guessNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const randomNumber = Math.floor(Math.random() * guessNumber.length);
console.log(randomNumber);
const message = document.getElementById("feedback-message");

const userInput = document.getElementsByClassName("number");
for (let i = 0; i < userInput.length; i++) {
    function checkAnswer() {
        const userGuess = userInput[i].textContent;
        if (userGuess == randomNumber) {
            message.innerHTML = "Correct!";
        }
        else if (userGuess > randomNumber) {
            message.innerHTML = "Too high";
        }
        else if (userGuess < randomNumber) {
            message.innerHTML = "Too low";
        }
        else {
            message.innerHTML = "Error";
        }
    }
    userInput[i].addEventListener('click', checkAnswer);

}











// console.log(userInput[1].textContent);
// console.log(userInput.value);


// submitInput.addEventListener('click', function () {

// });



// const userInput = document.getElementById("user-input");
//
// const submitInput = document.getElementById("submitInput");
