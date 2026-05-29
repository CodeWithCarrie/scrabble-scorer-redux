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

// TODO: Temporarily test original code that will be replaced to see output

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
    TODO: Define simpleScorer function that returns a score calculated
    using 1 point for each letter in the word
*/

/** VOWEL BONUS SCORER **/

/* 
    TODO: Define vowelBonusScorer function that returns a score calculated
    using 1 point for each consonant and 3 points for each vowel
*/

/** NEW SCRABBLE SCORER **/

/* 
    TODO: Define function to transform old score object and return a new one
*/

/* 
    TODO: Create newPointStructure by calling transform function
*/

/* 
    TODO: Define newScrabbleScorer that returns a score calculated
    using the point values in newPointStructure
*/

/** DATA STRUCTURE TO FACILITATE GAMEPLAY **/

/* 
    TODO: Create a data structure that will make it easy to associate a 
    user's selected scoring mode based on them entering 0, 1, or 2;
    for each mode we also need a name and a short description for 
    presenting options. 
*/

/** USER INPUT VALIDATION HELPER FUNCTIONS **/

/* 
    TODO: Check for valid number that is in range as an index within an array
*/

/* 
    TODO: Check if word is alpha only (without RegEx)
*/

/* 
    TODO: Check if user wants to quit
*/

/* 
    TODO: Check if user wants to switch scoring mode
*/

/* 
    TODO: Check if user wants to see instructions again
*/

/** TASK-BASED HELPER FUNCTIONS */

/*
    TODO: Define a function to give the user instructions. It should be used
    once after the greeting but also be reusable if they want to view it
    again.
*/

/* 
    TODO: Define a function to handle user input for scoring mode selection;
    it should return the scoring mode object (not the validated input)
*/

/* 
    TODO: Define a function to handle user input for word to be scored;
    it should return a word that has only alpha characters
*/

/*
    TODO: Create the primary function to run the entire program. 
    Make use of helper functions where needed.
*/
function runProgram() {
	// TODO: Welcome the user

	// TODO: Display instructions initially

	// TODO: Keep word and scorerObj in scope for all nested mechanisms

	// TODO: Run interactive program lifecycle until user wants to quit
	//      TODO: Ask user for scorer mode selection

	//      TODO: Keep asking for new words until they either quit
	//          or want to switch to a different scoring mode
	//          TODO: Ask user for word

	//          TODO: Check for keywords before scoring
	//              TODO: Break loop if quitting or switching scoring modes
	//              TODO: Display instructions again if asking for help
	//              TODO: Score only if no keyword was entered

	// TODO: Log a friendly signoff after user specifies they want to quit
}

// TODO: Nothing will happen in the console without actually running the program!
runProgram();
