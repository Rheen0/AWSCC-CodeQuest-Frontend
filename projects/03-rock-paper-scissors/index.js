// // Testing
// const test = document.getElementById("test");
// test.addEventListener('click', function () {
//     player2ChoiceDisplay.appendChild(opponentHand);
// });

// // Opponent


// Step 1: Define the choices available in the game
const choices = ["rock", "paper", "scissors"];

// I allocated the path of the SVGs to the index.
choices[0] = "assets/hand-rock-solid.svg"
choices[1] = "assets/hand-paper-solid.svg"
choices[2] = "assets/hand-scissors-solid.svg"


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

    if (confirm("Confirm Rock")) {
        const currentHand = document.createElement("img");
        currentHand.setAttribute("src", "assets/hand-rock-solid.svg");
        player1ChoiceDisplay.appendChild(currentHand);

        const opponentHand = document.createElement("img");

        const randomIndex = Math.floor(Math.random() * choices.length);
        opponentHand.setAttribute("src", choices[randomIndex]);

        if (opponentHand.getAttribute("src") === "assets/hand-scissors-solid.svg") {
            gameStatusDisplay.innerHTML = "YOU WIN!";
            document.body.style.backgroundColor = "#6dd66d";

            player1ScoreDisplay.innerHTML = "1";
            player2ScoreDisplay.innerHTML = "0";
        }
        else if (opponentHand.getAttribute("src") === "assets/hand-paper-solid.svg") {
            gameStatusDisplay.innerHTML = "YOU LOSE!";
            document.body.style.backgroundColor = "#ff5e5e";
            player1ScoreDisplay.innerHTML = "0";
            player2ScoreDisplay.innerHTML = "1";
        }
        else {
            gameStatusDisplay.innerHTML = "DRAW";
            player1ScoreDisplay.innerHTML = "0";
            player2ScoreDisplay.innerHTML = "0";
        }

        player2ChoiceDisplay.appendChild(opponentHand);

    } else {
        alert("Show your hand to start the game!");
    }

    removeBtns();

});

paperBtn.addEventListener("click", function () {

    if (confirm("Confirm Paper")) {
        const currentHand = document.createElement("img");
        currentHand.setAttribute("src", "assets/hand-paper-solid.svg");
        player1ChoiceDisplay.appendChild(currentHand);

        const opponentHand = document.createElement("img");

        const randomIndex = Math.floor(Math.random() * choices.length);
        opponentHand.setAttribute("src", choices[randomIndex]);

        if (opponentHand.getAttribute("src") === "assets/hand-rock-solid.svg") {
            gameStatusDisplay.innerHTML = "YOU WIN!";
            document.body.style.backgroundColor = "#6dd66d";
            player1ScoreDisplay.innerHTML = "1";
            player2ScoreDisplay.innerHTML = "0";
        }
        else if (opponentHand.getAttribute("src") === "assets/hand-scissors-solid.svg") {
            gameStatusDisplay.innerHTML = "YOU LOSE!";
            document.body.style.backgroundColor = "#ff5e5e";
            player1ScoreDisplay.innerHTML = "0";
            player2ScoreDisplay.innerHTML = "1";
        }
        else {
            gameStatusDisplay.innerHTML = "DRAW";
            player1ScoreDisplay.innerHTML = "0";
            player2ScoreDisplay.innerHTML = "0";
        }

        player2ChoiceDisplay.appendChild(opponentHand);


    } else {
        alert("Show your hand to start the game!");
    }

    removeBtns();
});

scissorsBtn.addEventListener("click", function () {

    if (confirm("Confirm Scissors")) {
        const currentHand = document.createElement("img");
        currentHand.setAttribute("src", "assets/hand-scissors-solid.svg");
        player1ChoiceDisplay.appendChild(currentHand);

        const opponentHand = document.createElement("img");

        const randomIndex = Math.floor(Math.random() * choices.length);
        opponentHand.setAttribute("src", choices[randomIndex]);

        if (opponentHand.getAttribute("src") === "assets/hand-paper-solid.svg") {
            gameStatusDisplay.innerHTML = "YOU WIN!";
            document.body.style.backgroundColor = "#6dd66d";

            player1ScoreDisplay.innerHTML = "1";
            player2ScoreDisplay.innerHTML = "0";
        }
        else if (opponentHand.getAttribute("src") === "assets/hand-rock-solid.svg") {
            gameStatusDisplay.innerHTML = "YOU LOSE!";
            document.body.style.backgroundColor = "#ff5e5e";
            player1ScoreDisplay.innerHTML = "0";
            player2ScoreDisplay.innerHTML = "1";
        }
        else {
            gameStatusDisplay.innerHTML = "DRAW";
            player1ScoreDisplay.innerHTML = "0";
            player2ScoreDisplay.innerHTML = "0";
        }

        player2ChoiceDisplay.appendChild(opponentHand);

    } else {
        alert("Show your hand to start the game!");
    }

    removeBtns();
});

resetGameButton.addEventListener("click", function () {
    location.reload();
});

// Step 4: Define helper functions that will be the actions of the game

function removeBtns() {
    rockBtn.remove();
    paperBtn.remove();
    scissorsBtn.remove();
}
// Step 5: Embrace mistakes as opportunities for learning and improvement, and fuel your curiosity by exploring new the wonders of frontend development. The vast tech world is filled with exciting discoveries waiting for you. Ask when you have the need or want to! Just keep coding!