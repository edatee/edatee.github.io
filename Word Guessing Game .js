

const wordToGuess = "washington";

const wordState = [];
//'w', undefined, undefined, undefined, 'i', undefined, 'g', 't', undefined, 'n'

let guessesLeft = 10;

const guessedAlphabets = [];
//'w', 'i', 'g', 't', 'u', 'n'

function displayWordState(state) {
    let output = '';
    // why is state.length instead of wordState.length
    for (let i = 0; i < state.length; i++) {
        const char = state[i];
        output = output + char;
        output = output + ' ';
        // when to use [ ] and ( )
        // if (char != undefined) {
        //     output = output + char;
        // }
        // else {
        //     output = output + '_';
        // }
        // output = output + " ";
    }
    // why is it a container
    const wordStateContainer = document.getElementById('words');
    wordStateContainer.innerHTML = output;

}

function displayAlphabetsGuessed(guessesArray) {
    const list = document.getElementById('past-guesses')
    // to clear the list everytime play submit anything 
    list.innerHTML = "";

    for (i = 0; i < guessesArray.length; i++) {
        const guess = document.createElement('li');
        guess.innerHTML = guessesArray[i];
        list.appendChild(guess)
    }
}

function displayGuessesLeft(num) {
    document.getElementById('guesses-left').innerHTML = num;

}



//takes in words to guess 
function guess(wordToGuess, wordState, currGuess) {
    for (let i = 0; i < wordToGuess.length; i++) {
        // if the currGuess is one of the answer (the alphabet)
        if (wordToGuess[i] == currGuess) {
            wordState[i] = currGuess;
        }
    }
    displayWordState(wordState);
}
// guess(wordToGuess, wordState, 'a')

function checkWon(wordState) {
    let hasBlank = false;
    for (let i = 0; i < wordState.length; i++) {
        // if any part of the wordState has blank, return true
        if (wordState[i] == '_') {
            hasBlank = true;
        }
    }
    return !hasBlank;
}


function setup() {
    for (let i = 0; i < wordToGuess.length; i++) {
        wordState.push("_")
    }
    //make guess
    //update previous guesses
    displayWordState(wordState);
    displayAlphabetsGuessed(guessedAlphabets);
    displayGuessesLeft(guessesLeft);
}


function setupForm() {

    // add form submit handler 
    const form = document.getElementById('player-input')
    const input = document.getElementById('player-guess')


    form.onsubmit = function (event) {
        event.preventDefault();
        const currentInput = input.value.toLowerCase();
        //why input.value instead of input only 
        // toLowerCase() makes the input into lowercase 

        // clear input field
        input.value = '';

        // check if input is valid 
        if (!validateInput(currentInput, guessedAlphabets)) {
            window.alert('Please choose a character from a-z that has not been guessed before')
            return;
        }

        guessedAlphabets.push(currentInput);
        // ^what is push. Add guess to previous guesses 

        guessesLeft = guessesLeft - 1;
        displayGuessesLeft(guessesLeft);
        //^update guesses left

        // guess the alphabets 
        guess(wordToGuess, wordState, currentInput);

        // to check if user has won
        const won = checkWon(wordState)
        if (won) {
            window.alert('You Won!')
        }
        // to check if user has lost
        else if (guessesLeft == 0) {
            window.alert('You lost!')
        }

        // show the alphabets guessed 
        displayAlphabetsGuessed(guessedAlphabets);
        console.log(input.value);
    }
}

// if guess is a valid choice, return true, else return false
function validateInput(guess, guessedAlphabets) {
    // check that guess is only one character and user has not guessed before
    if (guess.length == 1 && guessedAlphabets.indexOf(guess) == -1) {
        return true;
    }
    return false;
}


//to start with empty blank (setup function)


setup();
setupForm(); 