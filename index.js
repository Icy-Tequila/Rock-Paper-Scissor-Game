function startTheGame() {
  document.getElementById("startupSection").style.display = "none";
  document.getElementById("rpsGame").style.display = "flex";
  document.getElementById("levelUp").style.display = "none";
}

let playerScore = 0;
let computerScore = 0;

function getPlayerMove(playerMove) {
  const initialMove = document.getElementById("initialMove");
  let selectedMoveSrc;

  if (playerMove === "rock") {
    selectedMoveSrc = "./images/rock-p1-img.png";
  } else if (playerMove === "paper") {
    selectedMoveSrc = "./images/paper-p1-img.png";
  } else if (playerMove === "scissors") {
    selectedMoveSrc = "./images/scissors-p1-img.png";
  }

  initialMove.src = selectedMoveSrc;

  const computerMove = getComputerMove();
  document.getElementById("computerMove").src = computerMove.image;

  gameRound(playerMove, computerMove.move);
}

function getComputerMove() {
  const moves = ["rock", "paper", "scissors"];
  const movesImageSrc = {
    rock: "./images/rock-p2-img.png",
    paper: "./images/paper-p2-img.png",
    scissors: "./images/scissors-p2-img.png",
  };
  const randomChoice = Math.floor(Math.random() * 3);
  const chosenMove = moves[randomChoice];
  return {
    move: chosenMove,
    image: movesImageSrc[chosenMove],
  };
}

function gameRound(playerMove, computerMove) {
  if (playerMove === computerMove) {
    return;
  } else if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper")
  ) {
    setTimeout(() => {
      playerScore++;
      document.getElementById("playerScore").textContent = playerScore;

      if (playerScore === 5) {
        document.getElementById("header").textContent = "Player Wins! 🏆";
        hideMoves();
        document.getElementById("levelUp").style.display = "flex";
      }
    }, 1000);
  } else {
    setTimeout(() => {
      computerScore++;
      document.getElementById("computerScore").textContent = computerScore;

      if (computerScore === 5) {
        document.getElementById("header").textContent = "Computer Wins! 🏆";
        hideMoves();
        document.getElementById("resetGame").style.display = "flex";
      }
    }, 1000);
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;
  document.getElementById("movesDiv").style.display = "flex";
  document.getElementById("resetGame").style.display = "none";
  document.getElementById("header").textContent =
    "Win the game in a best-of-5 to make it more challenging! 🤩";
}

function hideMoves() {
  document.getElementById("movesDiv").style.display = "none";
}

function levelUp() {
  document.getElementById("rpsGame").style.display = "none";
  document.getElementById("minusOneGame").style.display = "flex";
}