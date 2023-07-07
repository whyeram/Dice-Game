const randomNumber1 = Math.floor(Math.random() * 6 + 1);
const randomNumber2 = Math.floor(Math.random() * 6 + 1);


function chooseDice(randomNumber){
    return "./images/dice"+randomNumber+".png";
}

const img1 = document.getElementById("img1");
const dice1 = chooseDice(randomNumber1);
img1.setAttribute("src", dice1);

const img2 = document.getElementById("img2");
const dice2 = chooseDice(randomNumber2);
img2.setAttribute("src", dice2);

const outcome=document.getElementById("result");

if(dice1 > dice2){
   outcome.innerHTML = "Player1 Wins! 🚩";
}
else if(dice2 > dice1){
    outcome.innerHTML = "Player2 Wins! 🚩";
 }
else{
    outcome.innerHTML = "Draw!";
}