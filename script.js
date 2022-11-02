'use strict'

const scoreEl_0 = document.querySelector('.score_0');
const scoreEl_1 = document.querySelector('.score_1');
const RollDiceButton = document.querySelector('.Roll');
let DiceRandomNumber_Image = document.getElementById('dice_image');
const current_0 = document.querySelector('.total-0');
const current_1 = document.querySelector('.total-1');
const NewGame = document.querySelector('.NewGame');
//Hold Button
const HoldButton = document.querySelector('.Hold');
//player1
const player_0 = document.querySelector('.player-0');
//player2
const player_1= document.querySelector('.player-1');
//First Hide the Image 
DiceRandomNumber_Image.classList.add('hidden');
scoreEl_0.textContent= 0;
scoreEl_1.textContent= 0;
//When RollDice click
RollDiceButton.addEventListener('click',GenerateNumber);

let Current_score,active_palyer,playing,score;

const init = function(){
  Current_score=0;
  active_palyer=0;
  score =[0,0];
  playing=true;
  DiceRandomNumber_Image.classList.add('hidden');
  scoreEl_0.textContent= 0;
  scoreEl_1.textContent= 0;
  current_0.textContent=0;
  current_1.textContent=0;
  
 player_0.classList.remove('winner');
 player_1.classList.remove('winner');
 player_0.classList.add('active');
 player_1.classList.remove('active');
}
init();

function switchPlayer() { 
  document.querySelector(`.total-${active_palyer}`).textContent=0;
  Current_score=0;
    
    active_palyer= active_palyer==0 ? 1: 0;
     player_0.classList.toggle('active');
     player_1.classList.toggle('active');
 }

function GenerateNumber () {

if(playing){
    //generate DiceNumber
    const DiceNumber =Math.floor(Math.random() *6) +1;
   //display DiceNumber
    DiceRandomNumber_Image.classList.remove('hidden');
  //put the image according to random number
    DiceRandomNumber_Image.src =`dice-${DiceNumber}.jpg`;

    //if DiceNumber ==1 switch to next palyer
    if(DiceNumber!==1)
    {
     Current_score+=DiceNumber;
    
     document.querySelector(`.total-${active_palyer}`).textContent=Current_score;
    
    }
    else{
        //switch to the next player
        //reassign active player
    switchPlayer();
  }
}
  }


  HoldButton.addEventListener('click',CalculateScore);

  function CalculateScore(){
    if(playing){

   
   // 1.Add current score to the active player
  score[active_palyer]+=Current_score;
  document.getElementById(`score-${active_palyer}`).textContent=score[active_palyer];
   // 2.chech if current score>=100
 if(score[active_palyer]>=100)
 {
  DiceRandomNumber_Image.classList.add('hidden');

  playing=false;
  document.querySelector(`.player-${active_palyer}`).classList.add('winner')
 }
    //2.3 else{ switch player} 
    switchPlayer();
  }
  }
  NewGame.addEventListener('click',RestGame)
  function RestGame () {
    init();
   
    }






