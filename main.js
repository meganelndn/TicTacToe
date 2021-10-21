const boxes = document.querySelectorAll(".box");
const text = document.querySelector("#heading");
const result = document.querySelector("#result");
const restartBtn = document.querySelector("#restart");

const spaces = [];
const circle = "O";
const cross = "X";
let currentPlayer = circle;

const drawBoard = () => {
  boxes.forEach((box, i) => {
    let styleString = "";

    if (i < 3) {
      styleString += "border-bottom: 3px solid var(--text);";
    }
    if (i % 3 === 0) {
      styleString += "border-right: 3px solid var(--text);";
    }
    if (i % 3 === 2) {
      styleString += "border-left: 3px solid var(--text);";
    }
    if (i > 5) {
      styleString += "border-top: 3px solid var(--text);";
    }

    box.style = styleString;
    box.addEventListener("click", boxClicked);
  });
};

const boxClicked = (e) => {
  const id = e.target.id;
  //console.log(e);
  if (!spaces[id]) {
    //console.log(spaces[id]);
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;

    if (playerWins()) {
      text.innerText = `Player ${currentPlayer} wins!`;
      return;
    } else if (playerDraw()) {
      return;
    }

    currentPlayer = currentPlayer === circle ? cross : circle;
  }
};

const playerWins = () => {
  if (spaces[0] === currentPlayer) {
    if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
      return true;
    }
    if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
      return true;
    }
    if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
      return true;
    }
  }
  if (spaces[8] === currentPlayer) {
    if (spaces[2] === currentPlayer && spaces[5] === currentPlayer) {
      return true;
    }
    if (spaces[6] === currentPlayer && spaces[7] === currentPlayer) {
      return true;
    }
  }
  if (spaces[4] === currentPlayer) {
    if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
      return true;
    }
    if (spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
      return true;
    }
    if (spaces[2] === currentPlayer && spaces[6] === currentPlayer) {
      return true;
    }
  }
};

const playerDraw = () => {
  let draw = 0;
  spaces.forEach((space, i) => {
    if (spaces[i] !== null) draw++;
  });
  if (draw === 9) {
    text.innerText = `It's a draw!`;
  }
};

/* const restart = () => {
    window.location.reload(true);
};
restartBtn.addEventListener("click", restart); */

restartBtn.addEventListener("click", () => {
    window.location.reload(true);
});

drawBoard();