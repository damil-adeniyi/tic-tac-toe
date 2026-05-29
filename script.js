const game = document.querySelector('.game');
const cells = document.querySelectorAll('.cell');
const statusText = document.querySelector('#statusText')
const cell = document.querySelector('.cell');
const startBtn = document.querySelector('.start-btn');
const resetBtn = document.querySelector('.reset-btn');
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let options =  ["", "","", "", "", "", "", "", "" ];
let currentPlayer = "X";
let running = false;

// const game = (() => {

//     const intalizeGame = () => {
//         cells.forEach(cell => cell.addEventListener("click", cellClicked))
//     };

//     const cellClicked = () => {

//     };

//     const updateCell = (cell, index) => {

//     };

//     const changePlayer = () => {

//     };

//     const checkWinner = () => {

//     };

//     const restartGame = () => {

//     };

//     return {
//         intalizeGame, cellClicked, updateCell, changePlayer, checkWinner, restartGame
//     }

// }) ();

intializeGame();

function intializeGame () {
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    resetBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
}

function cellClicked () {
    const cellIndex = this.getAttribute("cellIndex");

    if (options[cellIndex] != "" || !running) {
        return;
    } 
        updateCell(this, cellIndex);
        checkWinner();

        console.log(cellIndex);
        
}

function updateCell (cell, index) {
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

function changePlayer () {
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`
}

function checkWinner () {
    let roundWon = false;

    for (let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if (cellA == cellB && cellB == cellC) {
            roundWon = true;
            break
        }
        
    }

    if (roundWon) {
        statusText.textContent = `${currentPlayer} wins!`
        running = false;
    } else if (!options.includes("")) {
        statusText.textContent = `it's a Tie`;
        running = false;
    }else {
        changePlayer();
    }
}

function restartGame () {
    currentPlayer = "X";
    options =  ["", "","", "", "", "", "", "", "" ];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;

}



