const words = ["javascript", "html", "css", "lemon", "apple", "tomato", "hat", "shoot", "computer", "lamp", "lights", "science", "trophy", "suffrage"];
let selectedWord = words[Math.floor(Math.random() * words.length)];

let correctLetters = [];
let wrongLetters = [];

const word = document.getElementById('word'); 
const winner = document.querySelector('.winner');
const wrong = document.querySelector('.wrong'); 

let wg = 0; 


function displayWord() {
  let display = selectedWord.split('').map(letter => {
    if (correctLetters.includes(letter)) {
      return letter;
    } else {
      return ' _ ';
    }
  }).join('');
  
  word.innerHTML = display;
  
}

displayWord();

window.addEventListener('keyup', function(e) {
    let guess = e.key;
    if(wg == 10){
      winner.innerHTML = "You Lose - Refresh to try again - The word was " + selectedWord;
    }else{
      if (selectedWord.includes(guess)) {
        if (!correctLetters.includes(guess)) {
          for(let i = 0; i < selectedWord.length; i++){
              if(selectedWord.charAt(i) === guess){
                  correctLetters.push(guess);
              }
          }
          displayWord();
        } 
      } else {
      
        if (!wrongLetters.includes(guess)) {
          wg++; 
          wrongLetters.push(guess);
          wrong.innerHTML = wrong.innerHTML + " " + guess; 
        }
      }
      
      if (correctLetters.length === selectedWord.length) {
          winner.innerHTML = "Winner";
  
      }
    }
    
   
  });