var scores , roundScore , activePlayer , dice , dice2 , x;
scores = [0,0];
roundScore = 0;
activePlayer = 0;
function getDiceValue()
{
    dice2 = Math.floor(Math.random() * 6) + 1;
    console.log(dice2);
}
dice = Math.floor(Math.random() * 6) + 1; //later this code was moved to function on line 27
//document.querySelector('#current-0').textContent = getDiceValue(); //always select first element in DOC. Not working as function
//textContent always needs text.
//document.querySelector('#current-0').textContent = dice;  //this is basic methodbundleRenderer.renderToStream
document.querySelector('#current-' + activePlayer).textContent = dice; //*SETTER since we set value*//JS convert this to current-0 or current-1
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; //inner html needs string

x = document.querySelector('#score-0').textContent; //*GETTER* since we get the value
console.log(x);
document.querySelector('.dice').style.display = 'none';
function btn(){
    console.log("buttonCalled");
}
btn();
//document.querySelector('.btn-roll').addEventListener('click',btn()); //simplest way
//declaring function separately is risky, since other module may call it,
//below method is anonymous method to call function and is safer.
document.querySelector('.btn-roll').addEventListener('click', function() {
    // 1. Random number
    dice = Math.floor(Math.random() * 6) + 1;
    document.querySelector('#current-' + activePlayer).textContent = dice;
    if (dice != 1)
    {
        roundScore = roundScore + dice;
    }
    else
    {
    roundScore = dice;
    }
    // 2. Display the result
    // 3. Update the round score only if random number is not equal to 1
    
    console.log("buttonCalled ANONYNOUS function");
});


