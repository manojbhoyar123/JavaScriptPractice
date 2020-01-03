var scores, activePlayer, roundScore, dice2 , x;
scores = [0,0];
roundScore = 0;
activePlayer = 0;
/*function getDiceValue(){    dice2 = Math.floor(Math.random() * 6) + 1;    console.log(dice2);}*/
/*
dice = Math.floor(Math.random() * 6) + 1; //later this code was moved to function on line 27
//document.querySelector('#current-0').textContent = getDiceValue(); //always select first element in DOC. Not working as function
//textContent always needs text.
//document.querySelector('#current-0').textContent = dice;  //this is basic methodbundleRenderer.renderToStream
document.querySelector('#current-' + activePlayer).textContent = dice; //*SETTER since we set value*//*JS convert this to current-0 or current-1
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; //inner html needs string

x = document.querySelector('#score-0').textContent; //*GETTER* since we get the value
console.log(x);
document.querySelector('.dice').style.display = 'none';

//document.querySelector('.btn-roll').addEventListener('click',btn()); //simplest way
//declaring function separately is risky, since other module may call it,
//below method is anonymous method to call function and is safer.*/
document.querySelector('.dice').style.display = 'none';
//document.getElementById('score-0').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.querySelector('.btn-roll').addEventListener('click', function() {
    /// 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;
    
    /// 2. Display the result
    // document.querySelector('.dice').style.display = 'block';
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';  //just to make it visible

    diceDOM.src = 'dice' + '-'+ dice + '.png';
    
    // 3. Update the round score only if random number is not equal to 1
    if(dice !== 1)
    {
        roundScore = roundScore + dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        scores.push(roundScore);
        //const arrSum = arr => arr.reduce((a, b) => a + b, 0);
        //document.querySelector('#score-' + activePlayer).textContent = scores;
    }
    else
    {
        //next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        // make current score to 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        // to play with active display panel
        /*
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.add('active');
        */
        document.getElementById('.player-0-panel').classList.toggle('active');
        document.getElementById('.player-1-panel').classList.toggle('active');
        document.getElementById('.dice').style.display = 'none';

    }
    console.log(diceDOM.src);

});


