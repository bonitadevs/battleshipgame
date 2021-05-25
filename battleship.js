let randomLoc = Math.floor(Math.random() * 5) 
let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;

let guess;
let numHits = 0;
let numGuess = 0;

let isSunk = false;

while (isSunk == false) {
  let guess = prompt("Ready! Aim! Fire! Enter a number from 0-6.");
    if (guess < 0 || guess > 6) {
      prompt("Invalid Guess! Input a number from 0 to 6.");
    } else {
      numGuess = numGuess + 1;
    }
  if  (guess == location1 || guess == location2 || guess == location3) {
    numHits = numHits + 1;
    alert("You hit my battleship!");
  } else if (guess !== location1 || guess !== location2 || guess !== location3) {
    alert("Missed! Try again!")
  }

 if (numHits == 3) {
    isSunk == true;
    alert("GOOD JOB! You sunk my battleship!");
    break;
  } 
}
 let stats = `You took ${numGuess} guesses to sink the battle ship! Which means your shooting accuracy was ${3/numGuess}.`;
 alert(stats);

 
