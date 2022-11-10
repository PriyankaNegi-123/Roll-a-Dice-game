'use strict'
let player0El = document.getElementById("player-0");
let player1El = document.getElementById("player-1");
let score0El = document.getElementById("score-0");
let score1El = document.getElementById("score-1");
let current0El = document.getElementById("current-0");
let current1El = document.getElementById("current-1");
let diceEl = document.getElementById("dice");
let btnNewEl = document.getElementById("btn-new");
let btnRollEl = document.getElementById("btn-roll");
let btnHoldEl = document.getElementById("btn-hold");

let dice, currentScore,  activePlayer,  scores;

const init = function(){
    currentScore = 0;
    activePlayer = 0;
    scores = [0, 0];
    score0El.textContent = 0; 
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    diceEl.classList.add("hidden");
    player0El.classList.add("player-active");
    player1El.classList.remove("player-active");
    btnRollEl.classList.remove("hidden");
    btnHoldEl.classList.remove("hidden");
    player0El.classList.remove("player-winner");
    player1El.classList.remove("player-winner");
}

const switchPlayer = function(){
    document.getElementById(`current-${activePlayer}`).textContent = 0;
    currentScore = 0;

    // if(activePlayer===0){
    //     activePlayer = 1;
    // }else if(activePlayer===1){
    //     activePlayer = 0;
    // }

    activePlayer = activePlayer === 0 ? 1 : 0;

    player0El.classList.toggle("player-active");
    player1El.classList.toggle("player-active");
    diceEl.classList.add("hidden");
}

btnRollEl.addEventListener("click", ()=>{
    dice = Math.trunc(Math.random()*6)+1;
    diceEl.classList.remove("hidden");
    diceEl.src = `./assets/dice-${dice}.png`;
    if(dice !== 1){
        currentScore += dice;
        document.getElementById(`current-${activePlayer}`).textContent = currentScore;
    }else{
        switchPlayer();
    }
});

btnHoldEl.addEventListener("click", ()=>{
    scores[activePlayer] += currentScore;
    document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];

    if(scores[activePlayer]>=25){
        diceEl.classList.add("hidden");
        document.getElementById(`player-${activePlayer}`).classList.add("player-winner");
        document.getElementById(`player-${activePlayer}`).classList.remove("player-active");
        btnRollEl.classList.add("hidden");
        btnHoldEl.classList.add("hidden");
    }else{
        switchPlayer();
    }
});

btnNewEl.addEventListener("click", ()=>{
    init();
})

init();













