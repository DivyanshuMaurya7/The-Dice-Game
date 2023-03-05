'using strict'
const player1=document.querySelector('.player--0');
const player2=document.querySelector('.player--1');
const totalScore1=document.querySelector('#score--0');
const totalScore2=document.querySelector('#score--1');
const currentScore1=document.querySelector('#current--0')
const currentScore2=document.querySelector('#current--1')
const one=document.querySelector('.dice1');
const two=document.querySelector('.dice2');
const three=document.querySelector('.dice3');
const four=document.querySelector('.dice4');
const five=document.querySelector('.dice5');
const six=document.querySelector('.dice6');
const player1Name=document.querySelector('#name--0');
const player2Name=document.querySelector('#name--1');
const overlay=document.querySelector('.overlay');
const modal=document.querySelector('.modal');
const closeModal=document.querySelector('.close-modal');
let diceValue;
let player=0;

const curScore1=function(){
        currentScore1.textContent= Number(currentScore1.textContent) + diceValue;
}
const curScore2=function(){
        currentScore2.textContent= Number(currentScore2.textContent) + diceValue;
}

document.querySelector('.btn--roll').addEventListener('click',function(){
    diceValue=Math.trunc(Math.random()*6)+1;
    console.log(diceValue)
    if(player1Name.textContent!=='WON🎉' || player2Name.textContent!=='WON🎉')
    {
        switch(diceValue)
        {

                case 1: one.classList.remove('hidden');
                        two.classList.add('hidden');
                        three.classList.add('hidden');
                        four.classList.add('hidden');
                        five.classList.add('hidden');
                        six.classList.add('hidden');
                        if(player===0)
                        {
                                currentScore1.textContent=0;
                                player1.classList.remove('player--active');
                                player2.classList.add('player--active');

                        }
                        else
                        {
                                currentScore2.textContent=0;
                                player1.classList.add('player--active');
                                player2.classList.remove('player--active');
                        }
                        player===0 ? player=1:player=0;

                        break;
                case 2: one.classList.add('hidden');
                        two.classList.remove('hidden');
                        three.classList.add('hidden');
                        four.classList.add('hidden');
                        five.classList.add('hidden');
                        six.classList.add('hidden');
                        if(player===0)
                        {
                                curScore1();
                        }
                        else
                        {
                                curScore2();
                        }
                        break;
                case 3: one.classList.add('hidden');
                        two.classList.add('hidden');
                        three.classList.remove('hidden');
                        four.classList.add('hidden');
                        five.classList.add('hidden');
                        six.classList.add('hidden');
                        if(player===0)
                        {
                                curScore1();
                        }
                        else
                        {
                                curScore2();
                        }
                        break;  
                case 4: one.classList.add('hidden');
                        two.classList.add('hidden');
                        three.classList.add('hidden');
                        four.classList.remove('hidden');
                        five.classList.add('hidden');
                        six.classList.add('hidden');
                        if(player===0)
                        {
                                curScore1();
                        }
                        else
                        {
                                curScore2();
                        }
                        break;
                case 5: one.classList.add('hidden');
                        two.classList.add('hidden');
                        three.classList.add('hidden');
                        four.classList.add('hidden');
                        five.classList.remove('hidden');
                        six.classList.add('hidden');
                        if(player===0)
                        {
                                curScore1();
                        }
                        else
                        {
                                curScore2();
                        }
                        break;
                case 6: one.classList.add('hidden');
                        two.classList.add('hidden');
                        three.classList.add('hidden');
                        four.classList.add('hidden');
                        five.classList.add('hidden');
                        six.classList.remove('hidden');
                        if(player===0)
                        {
                                curScore1();
                        }
                        else
                        {
                                curScore2();
                        }
                        break;
        }
    }
});

document.querySelector('.btn--hold').addEventListener('click',function()
{       if(player1Name.textContent!=='WON🎉' || player2Name.textContent!=='WON🎉')
        {

                if(player===0)
                {
                        totalScore1.textContent=Number(totalScore1.textContent)+Number(currentScore1.textContent);
                        currentScore1.textContent=0;
                        if(totalScore1.textContent>=100)
                        {
                                player1Name.textContent='WON🎉';
                        }
                        else
                        {
                                player1.classList.remove('player--active');
                                player2.classList.add('player--active');
                                player=1;
                        }
                }
                else
                {
                        totalScore2.textContent=Number(totalScore2.textContent)+Number(currentScore2.textContent);
                        currentScore2.textContent=0;
                        if(totalScore2.textContent>=100)
                        {
                                player2Name.textContent='WON🎉';
                        }
                        else
                        {
                                player1.classList.add('player--active');
                                player2.classList.remove('player--active');
                                player=0;
                        }
                }
        }
});

document.querySelector('.btn--new').addEventListener('click', function()
{
        currentScore1.textContent=0;
        totalScore1.textContent=0;
        currentScore2.textContent=0;
        totalScore2.textContent=0;
        player1.classList.add('player--active');
        player2.classList.remove('player--active');
        six.classList.remove('hidden');
        player1Name.textContent='Player 1';
        player2Name.textContent='Player 2';
        player=0;
});

overlay.addEventListener('click',function()
{
        overlay.classList.add('hidden');
        modal.classList.add('hidden');
});

closeModal.addEventListener('click',function()
{
        overlay.classList.add('hidden');
        modal.classList.add('hidden');
});

document.querySelector('.btn1').addEventListener('click',function()
{
        overlay.classList.remove('hidden');
        modal.classList.remove('hidden');
});