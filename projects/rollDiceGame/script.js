let dice1 = document.querySelector(".dice1");
let dice2 = document.querySelector(".dice2");
let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");

let instructions = document.querySelector(".instructions");
let player1Score = document.querySelector(".player1-score");
let player2Score = document.querySelector(".player2-score");

let rollDice = document.querySelector(".rollDice");
let currentClass1 = "";
let currentClass2 = "";
let count = 0;
let doubleDiceSelected = false;

function doubleDice() {
  dice2.style.display = "block";
  doubleDiceSelected = true;
  instructions.innerHTML =
    "Instructions: <br>First Player to reach a sum of 50 wins.";
}

function getDiceNumber() {
  return Math.floor(Math.random() * (7 - 1) + 1);
}

function resetDiceClass() {
  if (currentClass1 || currentClass2) {
    dice1.classList.remove(currentClass1);
    dice2.classList.remove(currentClass2);
  }
}

function showWinner(winner, winnerScore) {
  winner.style.border = "2px solid #00ff00";
  winnerScore.innerHTML = "<span style='color:#00ff00'>wins</span>";
}

function checkScore(score, goal, player, playerScore) {
  playerScore.textContent = parseInt(playerScore.textContent) + score;

  if (parseInt(playerScore.textContent) >= goal) {
    showWinner(player, playerScore);
    rollDice.disabled = true;
  }
}

function currentPlayer(activePlayer) {
  let player = activePlayer == player1 ? player1 : player2;
  let dice = activePlayer == player1 ? dice1 : dice2;

  player.style.border = "2px solid #0000ff";
  dice.classList.replace("diceAnimate2", "diceAnimate1");
}

function nextPlayer(inactivePlayer) {
  let player = inactivePlayer == player1 ? player1 : player2;
  let dice = inactivePlayer == player1 ? dice1 : dice2;

  player.style.border = "2px solid #aaa";
  dice.classList.replace("diceAnimate1", "diceAnimate2");
}

function roll() {
  let result1 = getDiceNumber();
  let result2 = getDiceNumber();

  let diceNumber1 = "show-" + result1;
  let diceNumber2 = "show-" + result2;

  resetDiceClass();

  if (count % 2 == 0) {
    currentPlayer(player1);
    nextPlayer(player2);

    if (doubleDiceSelected) {
      checkScore(result1 + result2, 50, player1, player1Score);
    } else {
      checkScore(result1, 30, player1, player1Score);
    }
  } else {
    currentPlayer(player2);
    nextPlayer(player1);
    if (doubleDiceSelected) {
      checkScore(result1 + result2, 50, player2, player2Score);
    } else {
      checkScore(result2, 30, player2, player2Score);
    }
  }

  dice1.classList.add(diceNumber1);
  dice2.classList.add(diceNumber2);
  currentClass1 = diceNumber1;
  currentClass2 = diceNumber2;
  count++;
}
