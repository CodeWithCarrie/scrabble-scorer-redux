const input = require('readline-sync');

// New point structure is now derived from this
const oldPointStructure = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z'],
};

// No longer in use; remains only for comparison
function oldScrabbleScorer(word) {
    word = word.toUpperCase();
    let letterPoints = '';

    for (let i = 0; i < word.length; i++) {
        for (const pointValue in oldPointStructure) {
            if (oldPointStructure[pointValue].includes(word[i])) {
                letterPoints += `Points for '${word[i]}': ${pointValue}\n`;
            }
        }
    }
    return letterPoints;
}

// Temporary visualization of original code that needed to be replaced
// console.log(oldScrabbleScorer("JavaScript"));
// console.log(oldScrabbleScorer("rutabaga"));

/* 
    New requirements met by the code below:
        - A new Scrabble points object by writing logic to transform the old one
        - A new Scrabble Scorer function to return a total score without logging it
        - Two additional scoring modes: 
            - Simple Scorer (1pt for every letter)
            - Vowel Bonus Scorer (1 pt for consonants, 3 pts for vowels)
        - A data structure with objects for all three modes that have name and 
          description properties as well as a method that points to the specific
          scoring function for that mode
        - A primary runProgram() function that will handle the interactions 
          with the user and the general flow
        - Helper functions for input validation and safeguards (like case insensitivity)
        - Program should be loopable until the user asks to end program
        - After they select a scoring mode, they should be able to submit multiple
          words for scoring until they want to switch scoring mode or end program
        - Instructions should be displayed once at the start but be available
          to display again at any time if the user requests it
*/

/** SIMPLE SCORER **/

/* 
    Returns a score calculated using 1 point for each letter in the word
*/
const simpleScorer = word => word.length;

/** VOWEL BONUS SCORER **/

/* 
    Returns a score calculated using 1 point per consonant and 3 points per vowel
*/
const vowelBonusScorer = word => {
    let score = 0;
    let vowels = 'aeiou';
    for (let letter of word) {
        if (vowels.includes(letter.toLowerCase())) {
            score += 3;
        } else {
            score++;
        }
    }
    return score;
};

/** NEW SCRABBLE SCORER **/

/* 
    Transforms old score object and returns a new one
*/
function transformScrabblePointStructure() {
    let newStructure = {};
    for (let pointValue in oldPointStructure) {
        for (let letter of oldPointStructure[pointValue]) {
            newStructure[letter.toLowerCase()] = Number(pointValue);
        }
    }
    return newStructure;
}

/* 
    New, more efficient data structure for point lookup
*/
const newPointStructure = transformScrabblePointStructure();

/* 
    Returns a score calculated using newPointStructure
*/
const newScrabbleScorer = word => {
    let score = 0;
    for (let letter of word) {
        score += newPointStructure[letter.toLowerCase()];
    }
    return score;
};

/** DATA STRUCTURE TO FACILITATE GAMEPLAY **/

/* 
    Makes it easy to access a user's selected scoring mode based on 
    them entering 0-2; associates name and a short description with
    method pointing to specific scoring functions 
*/
const scoringModes = [
    {
        name: 'Simple',
        description: 'Each letter is worth 1 point.',
        scoreWord: simpleScorer,
    },
    {
        name: 'Bonus Vowels',
        description: 'Vowels are 3 points, consonants are 1 point.',
        scoreWord: vowelBonusScorer,
    },
    {
        name: 'Scrabble',
        description: 'Traditional Scrabble points.',
        scoreWord: newScrabbleScorer,
    },
];

/** USER INPUT VALIDATION HELPER FUNCTIONS **/

function isValidIndex(index, array) {
    index = Number(index);
    return !isNaN(index) && index >= 0 && index < array.length;
}

function isValidWord(word) {
    if (word.trim().length === 0) return false;
    const allowed = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let letter of word) {
        if (!allowed.includes(letter)) return false;
    }
    return true;
}

function shouldQuit(word) {
    return word.toUpperCase().trim() === 'QUIT';
}

function shouldSwitchMode(word) {
    return word.toUpperCase().trim() === 'SWITCH';
}

function shouldDisplayInstructions(word) {
    return word.toUpperCase().trim() === 'HELP';
}

/** TASK-BASED HELPER FUNCTIONS */

/*
    Gives the user instructions; reusable if they need a reminder
*/
function displayInstructions() {
    console.log('\nSelect from one of three scoring modes:');
    for (let mode of scoringModes) {
        console.log(`  ${mode.name}: ${mode.description}`);
    }
    console.log(`
You may enter any word as long as it contains only alphabetical characters.
  - Enter 'QUIT' instead to end the program. 
  - Enter 'SWITCH' to switch scoring modes.
  - Enter 'HELP' to view these instructions again.

Have fun!`);
}

/* 
    Handles full sequence for asking for and retrieving user input for 
    scoring mode selection, validating input (numeric index in range), and
    returning the scoring mode object using the input as an index
*/
function getScoringModeFromUser() {
    
    console.log('\nWhich scoring mode would you like to use?');
    let optionsText = '';
    for (let i = 0; i < scoringModes.length; i++) {
        let option = scoringModes[i];
        optionsText += `\n${i} - ${option.name}: ${option.description}`;
    }
    let selection = input.question(optionsText + '\n\nEnter a number: ');

    while (!isValidIndex(selection, scoringModes)) {
        selection = input.question('\nPlease enter a valid number from the options presented: ');
    }

    return scoringModes[selection];
}

/* 
    Handles full sequence for asking for and retrieving user input 
    for word to be scored, validating the input (alpha only), and 
    returning the input
*/
function getWordFromUser() {
    let word = input.question('\nEnter a word to score: \n');
    while (!isValidWord(word)) {
        word = input.question(
            '\nInvalid word. \nPlease enter a word with no spaces, numbers, symbols, or punctuation. \n',
        );
    }
    return word;
}

/*
    The primary function to run the entire program. Is not concerned with
    details of subroutines, just handles flow of program lifecycle
*/
function runProgram() {

    console.log('\nWELCOME TO SCRABBLE SCORER!');

    displayInstructions();

    let scorerObj;
    let word;

    do {
        scorerObj = getScoringModeFromUser();

        while (true) {
            word = getWordFromUser();

            if (shouldQuit(word) || shouldSwitchMode(word)) break;
            if (shouldDisplayInstructions(word)) {
                displayInstructions();
            } else {
                let score = scorerObj.scoreWord(word);
                console.log(`Score for '${word}': ${score}`);
            }
        }
    } while (!shouldQuit(word));

    console.log('\n\nThanks for playing!\n');
}

// Aaaaaand... go!
runProgram();
