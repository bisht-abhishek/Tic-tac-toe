let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let new_game = document.querySelector("#new-game");
let win = document.querySelector(".winner");
let show = document.querySelector(".win");
let draw = document.querySelector(".draw");
// reset.addEventListener("click",() => {
    
// });

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame = () => {
    turnx = true;
    enableboxes();
    show.classList.add("hide");
    draw.classList.add("draw");
}
let turnx = true;
boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        if(turnx){
            box.innerText = "X";
            turnx = false;
        }
        else{
            box.innerText = "O";
            turnx = true;
        }
        box.disabled = true;
        checkwinner();
    });
});
const disableboxes = () => {
    for(let val of boxes){
        val.disabled= true;
    }
}
const enableboxes = () => {
    for(let val of boxes){
        val.disabled= false;
        val.innerText = "";
    }
}
const showwinner =(winner) => {
    win.innerText = ` Congratulations, The winner is ${winner}`;
    show.classList.remove("hide");
    disableboxes();
}
const checkwinner = () => {
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

    if(pos1 != "" && pos2!= "" && pos3!=""){
        if(pos1 === pos2 && pos2 === pos3){
            console.log("Winner is ", pos1);
            showwinner(pos1);
            return;
        }
    }
}
if_draw();
}

const showP = () => {
    draw.classList.remove("draw");
}
const if_draw = () => {
    for(let val of boxes){
        if(val.innerText === ""){
            return;
        }
    }
    showP();
}

reset.addEventListener("click" , resetGame);
new_game.addEventListener("click" , resetGame);