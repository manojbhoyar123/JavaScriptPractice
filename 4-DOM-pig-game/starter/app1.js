var score , roundscore , activeplayer , dice;
score = [0,0];
roundScore = 0;
activePlayer = 0;
function getDiceValue()
{
    dice = Math.floor(Math.random() * 6);
    console.log(dice);
}
document.querySelector('#score-0').textContent = getDiceValue();