

const wordToGuess = "washington";

const wordState = [];
//'w', undefined, undefined, undefined, 'i', undefined, 'g', 't', undefined, 'n'

let guessesLeft = 8;

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
        const currentInput = input.value;
        //why input.value instead of input only 
        guessedAlphabets.push(currentInput);
        // ^what is push. Add guess to previous guesses 

        guessesLeft = guessesLeft - 1;
        displayGuessesLeft(guessesLeft);
        //^update guesses left

        // guess the alphabets 
        guess(wordToGuess, wordState, currentInput);
        // show the alphabets guessed 
        displayAlphabetsGuessed(guessedAlphabets);
        console.log(input.value);
    }
} 


//to start with empty blank (setup function)


setup();
setupForm(); 