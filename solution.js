const input = require('readline-sync');

const oldPointStructure = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z'],
};

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

// Temporary visualization of original code that needs to be replaced
// console.log(oldScrabbleScorer("JavaScript"));
// console.log(oldScrabbleScorer("rutabaga"));

/* 
    The code above represents a simple program where you enter a word and receive
    a letter-by-letter report on the point values.

    What improvements do you see that could be made? 
        - UX: The user would probably rather just have a total, not a breakdown!
        - Code efficiency: Why are we looping twice? Can we improve on the 
          oldPointStructure object to make individual letter score lookup easier?

    Here are the new requirements:
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
/* 
    Checks for valid number that is in range as an index within an array
*/
function isValidIndex(index, array) {
    index = Number(index);
    return !isNaN(index) && index >= 0 && index < array.length;
}

/* 
    Checks if word is alpha only (without RegEx)
*/
function isValidWord(word) {
    const allowed = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let letter of word) {
        if (!allowed.includes(letter)) return false;
    }
    return true;
}

/* 
    Checks if user wants to quit
*/
function shouldQuit(word) {
    return word.toUpperCase().trim() === 'QUIT';
}

/* 
    Checks if user wants to switch scoring mode
*/
function shouldSwitchMode(word) {
    return word.toUpperCase().trim() === 'SWITCH';
}

/* 
    Checks if user wants to see instructions again
*/
function shouldDisplayInstructions(word) {
    return word.toUpperCase().trim() === 'HELP';
}

/** TASK-BASED HELPER FUNCTIONS */

/*
    Gives the user instructions; reusable if they need a reminder
*/
function displayInstructions() {
    // Explain how to play, how to quit, and how to switch modes
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
    // Display options and ask user to select a scoring mode
    console.log('\nWhich scoring mode would you like to use?');
    let optionsText = '';
    for (let i = 0; i < scoringModes.length; i++) {
        let option = scoringModes[i];
        optionsText += `\n${i} - ${option.name}: ${option.description}`;
    }
    let selection = input.question(optionsText + '\n\nEnter a number: ');

    // Validate user input using a more specific message if needed
    while (!isValidIndex(selection, scoringModes)) {
        selection = input.question('\nPlease enter 0, 1, or 2: ');
    }
    // Return the object associated with their selection
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
    // Welcome the user
    console.log('\nWELCOME TO SCRABBLE SCORER!');

    // Display instructions initially
    displayInstructions();

    // Keep word and scorerObj in scope for all nested mechanisms
    let word = '';
    let scorerObj;

    // Run interactive program lifecycle until user wants to quit
    do {
        // Ask user for scorer mode selection
        scorerObj = getScoringModeFromUser();

        // Keep asking for new words until they either quit
        // or want to switch to a different scoring mode
        while (true) {
            // Ask user for word
            word = getWordFromUser();

            // Check for keywords that generate actions without scoring
            if (shouldQuit(word) || shouldSwitch(word)) break;
            if (shouldDisplayInstructions(word)) {
                displayInstructions();
            } else {
                // Score only if no keyword was entered
                let score = scorerObj.scoreWord(word);
                console.log(`Score for '${word}': ${score}`);
            }
        }
    } while (!shouldQuit(word));

    // Log a friendly signoff after user specifies they want to quit
    console.log('\n\nThanks for playing!\n');
}

// Nothing will happen in the console without actually running the program!
runProgram();
