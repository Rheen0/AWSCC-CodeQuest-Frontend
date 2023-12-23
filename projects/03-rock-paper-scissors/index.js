// // Testing
// const test = document.getElementById("test");
// test.addEventListener('click', function () {
//     player2ChoiceDisplay.appendChild(opponentHand);
// });

// // Opponent




// Step 1: Define the choices available in the game
const choices = ["rock", "paper", "scissors"];

// Step 2: Get references to HTML elements
const player1ChoiceDisplay = document.getElementById("player1-choice-display");
const player1ScoreDisplay = document.getElementById("player1-score");
const player2ChoiceDisplay = document.getElementById("player2-choice-display");
const player2ScoreDisplay = document.getElementById("player2-score");

const gameStatusDisplay = document.getElementById("game-status");
const resetGameButton = document.getElementById("reset-game-btn");

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

// Step 3: Add event listeners to the buttons
rockBtn.addEventListener("click", function () {



    // Prompt kung g
    if (confirm("Confirm Rock")) {

        rockBtn.remove();
        paperBtn.remove();
        scissorsBtn.remove();

        const currentHand = document.createElement("img");
        currentHand.setAttribute("src", "assets/hand-rock-solid.svg");
        player1ChoiceDisplay.appendChild(currentHand);

        const opponentHand = document.createElement("img");
        opponentHand.setAttribute("src", "assets/hand-paper-solid.svg");
        player2ChoiceDisplay.appendChild(opponentHand);

        gameStatusDisplay.innerHTML = "YOU LOSE!";

        player1ScoreDisplay.innerHTML = "0";
        player2ScoreDisplay.innerHTML = "1";


    } else {
        alert("Show your hand to start the game!");
    }



});

paperBtn.addEventListener("click", function () {



    // Prompt kung g
    if (confirm("Confirm Paper")) {

        rockBtn.remove();
        paperBtn.remove();
        scissorsBtn.remove();

        const currentHand = document.createElement("img");
        currentHand.setAttribute("src", "assets/hand-paper-solid.svg");
        player1ChoiceDisplay.appendChild(currentHand);

        const opponentHand = document.createElement("img");
        opponentHand.setAttribute("src", "assets/hand-scissors-solid.svg");
        player2ChoiceDisplay.appendChild(opponentHand);

        gameStatusDisplay.innerHTML = "YOU LOSE!";

        player1ScoreDisplay.innerHTML = "0";
        player2ScoreDisplay.innerHTML = "1";

    } else {
        alert("Show your hand to start the game!");
    }
});

scissorsBtn.addEventListener("click", function () {


    // Prompt kung g
    if (confirm("Confirm Scissors")) {

        rockBtn.remove();
        paperBtn.remove();
        scissorsBtn.remove();

        const currentHand = document.createElement("img");
        currentHand.setAttribute("src", "assets/hand-scissors-solid.svg");
        player1ChoiceDisplay.appendChild(currentHand);

        const opponentHand = document.createElement("img");
        opponentHand.setAttribute("src", "assets/hand-rock-solid.svg");
        player2ChoiceDisplay.appendChild(opponentHand);

        gameStatusDisplay.innerHTML = "YOU LOSE!";

        player1ScoreDisplay.innerHTML = "0";
        player2ScoreDisplay.innerHTML = "1";

    } else {
        alert("Show your hand to start the game!");
    }
});

resetGameButton.addEventListener("click", function () {
    location.reload();
});


// if

// const currentHand = document.createElement("img");
// currentHand.setAttribute("src", "assets/hand-scissors-solid.svg");
// player1ChoiceDisplay.appendChild(currentHand);
// Step 4: Define helper functions that will be the actions of the game

// Step 5: Embrace mistakes as opportunities for learning and improvement, and fuel your curiosity by exploring new the wonders of frontend development. The vast tech world is filled with exciting discoveries waiting for you. Ask when you have the need or want to! Just keep coding!