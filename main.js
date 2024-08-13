let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset');
let winner = document.querySelector('.win-msg')
let turnO = true;
const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener('click',() =>{
        if(turnO){
            box.innerHTML='O'
            turnO = false;
        }
        else{
            box.innerHTML = 'X'
            turnO = true;
        }
        box.disabled = true;
        checkWinner()
    })
})

const disableGame = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableGame = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText= '';
    }
}

const showWinner = (w) => {
    winner.innerText = `Congrats, the winner is ${w}`;
    winner.classList.remove('hide')
    disableGame()
}

const checkWinner = () =>{
    for(let pattern of winPattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1!='' && pos2!='' && pos3!=''){
            if(pos1 == pos2 && pos2 == pos3){
            showWinner(pos1)
        }
       
    }

    
    }
}

const resetGame = () => {
    turnO = true;
    enableGame()
}

resetBtn.addEventListener('click',resetGame)