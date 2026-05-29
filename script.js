const game = document.querySelector('.game');
const cells = document.querySelectorAll('.cell');
const cell = document.querySelector('.cell');
const startBtn = document.querySelector('.start-btn');
const resetBtn = document.querySelector('.reset-btn');

let Gameboard = {
gameboard: [
    
]
};


game.addEventListener('click', function (e) {



   if(e.target.matches('.cell')) {
        
        if( e.target.innerText === 'X') {
            e.target.innerText = 'O'
        } else {
            e.target.innerText = 'X'
        }
   }

})

resetBtn.addEventListener('click', () => {
    cells.forEach(element => {
        element.innerText = ''
    });
}) 

startBtn.addEventListener('click', () => {
    if(e.target.matches('.cell')) {
        e.target.innerText === 'X'
    }
        
}) 



