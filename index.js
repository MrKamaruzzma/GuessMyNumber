'use strict';

// ------------------------------Random Number Generator------------------------

let randomNumber = Math.floor(Math.random() * 20 )+1;
let score = 20;
let highscore = 0;
// ------------------------------Implementing functionality------------------------------

 document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);

    //  When the input field is empty

    if(!guess){
        document.querySelector('.message').textContent = 'No Number! 💀';
    }
     //  When the number is correct

    else if(guess === randomNumber)
    {
        document.querySelector('.message').textContent = 'Congratulations! 🏆 😂';
        document.querySelector('.number').textContent = randomNumber;
        alert('Congratulations! 🏆 😂');
        document.querySelector('.container').style.backgroundColor = 'MediumSeaGreen';
        if(score > highscore)
        {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    }
     //  When the number is high

    else if(guess > randomNumber)
    {
        if(score>1)
        {
        document.querySelector('.message').textContent = 'Too High ⚡';
        score--;
        document.querySelector('.score').textContent = score;
        }
        else{
            alert('You Lost the game 😢!')
            document.querySelector('.message').textContent = 'You lost the game 😢!';
            document.querySelector('.score').textContent = 0;
            document.querySelector('.container').style.backgroundColor = 'red';
        }
    }

    //  When the number is low

    else if(guess < randomNumber)
    {
        if(score>1)
        {
        document.querySelector('.message').textContent = 'Too Low 👇';
        score--;
        document.querySelector('.score').textContent = score;
    }
    else{
        alert('You Lost the game 😢!')
        document.querySelector('.message').textContent = 'You Lost the game 😢!';
        document.querySelector('.score').textContent = 0;
        document.querySelector('.container').style.backgroundColor = 'red';
     }
    }
} );

// ------------------------------Implementing the functionality of reset game (Again)------------------------

document.querySelector('.again').addEventListener('click',function(){
   score =20;
   randomNumber = Math.floor(Math.random() * 20 )+1;
   highscore = 0;

   document.querySelector('.message').textContent = 'Start Guessing 🤔🤔🤔'
   document.querySelector('.score').textContent = score;
   document.querySelector('.number').textContent = '?';
   document.querySelector('.guess').value = '';
//    document.querySelector('.highscore').textContent = 0;
   document.querySelector('.container').style.backgroundColor = '#2b50e2'
   
} );
