const gameBoard = ["", "", "", "", "", "", "", "", ""];

// create gameboard factory or module?
// newBoard
// resetBoard
// checkIfWin() -> returns string winning piece, or returns bool, called after every move?
// makeMove(piece, position) -> bool -> checkValidMove(position)

// totalMoves
// state = playing, won

function createPlayer(name, icon) {
  // name
  // piece / icon
  // wins
  // losses
}

///

function updateBoardInfo() {
  // update the html of the game info
  // current player to move..
  // current move..
  // etc.
}

function makeMove(player) {
  const move = getMove(player);
  gameBoard.makeMove(player.piece, move);
  updateBoardInfo();
  // return true if game won with this move.
  if (gameBoard.state === "won") return true;
  return false;
}

function getMove(player) {
  // validates and return the move...
}

function gameLoop() {
  if (makeMove(playerOne)) return;
  if (makeMove(playerTwo)) return;
}

function startGame() {
  while (gameBoard.state === "playing") {
    gameLoop();
  }
}
