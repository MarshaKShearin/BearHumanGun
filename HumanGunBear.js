function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'bear' || userInput === 'human' || userInput === 'gun') {
        return userInput;
    } else {
        return 'Please enter a valid choice';
    }
}

function getComputerChoice() {
   var randomNumber = Math.floor(Math.random()*3);
   if (randomNumber === 0){
       return 'bear';
   }
   else if (randomNumber === 1){
       return 'human';
   } else { 
        return 'gun';
   }
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice){
        return 'TIE';
    }
    if (userChoice === 'human'){
        if (computerChoice === 'bear'){
            return 'You were mauled by a bear';
        } else {
            return 'You disarmed the gun';
        }
    }

    if (userChoice === 'bear'){
        if (computerChoice === 'gun'){
            return 'Your bear was killed by a gun';
        } else {
            return 'Your bear mauled the human';
        }
    }

     if (userChoice === 'gun'){
        if (computerChoice === 'human'){
            return 'Your gun has been disarmed';
        } else {
            return 'You shot and killed the bear';
        }
    }
}

function playGame(){
    var promptUserChoice = prompt('Please select a bear, human or gun');
    var userChoice = getUserChoice(promptUserChoice);
    var computerChoice = getComputerChoice();

    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();


