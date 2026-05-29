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

// TODO #1: Temporarily test original code to see output

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

    NOTE: You should no longer think of programs as running from top to bottom entirely. 
    When a program is heavily composed of functions, all of those code blocks are out of 
    scope of the main file flow until they're needed and called. As a result, TODOs should 
    be completed by number order, NOT in the order in which they appear from top to bottom.
*/

/** SIMPLE SCORER **/

/* 
    TODO #2A: Define simpleScorer function that returns a score calculated
    using 1 point for each letter in the word
*/

// TODO #2B: Manually test simpleScorer with a few words

/** VOWEL BONUS SCORER **/

/* 
    TODO #3A: Define vowelBonusScorer function that returns a score calculated
    using 1 point for each consonant and 3 points for each vowel
*/

// TODO #3B: Manually test vowelBonusScorer with mixed-case words

/** NEW SCRABBLE SCORER **/

/* 
    TODO #4A: Define function to transform old score object and return a new one
*/

// TODO #4B: Temporarily log the transformed object to inspect shape

/* 
    TODO #4C: Create newPointStructure by calling transform function
*/

/* 
    TODO #5A: Define newScrabbleScorer that returns a score calculated
    using the point values in newPointStructure
*/

// TODO #5B: Manually test newScrabbleScorer with known words

/** DATA STRUCTURE TO FACILITATE GAMEPLAY **/

/* 
    TODO #6A: Create a data structure that will make it easy to associate a 
    user's selected scoring mode based on them entering 0, 1, or 2;
    for each mode we also need a name and a short description for 
    presenting options. 
*/

// TODO #6B: Temporarily verify each scoring mode calls the expected scoring function

/** USER INPUT VALIDATION HELPER FUNCTIONS (ADD WHEN NEEDED) **/

/* 
    TODO #9B: Define helper to check for valid number in index range
    (Utilize this when finalizing scoring mode selection flow)
*/

/* 
    TODO #10B: Define helper to check if word is alpha only (without RegEx)
    (Utilize this when finalizing word input flow)
*/

/* 
    TODO #11A: Define helper to check if user wants to quit
    (Utilize this when handling keyword commands)
*/

/* 
    TODO #11B: Define helper to check if user wants to switch scoring mode
    (Utilize this when handling keyword commands)
*/

/* 
    TODO #12A: Define helper to check if user wants to see instructions again
    (Utilize this when handling keyword commands)
*/

/** TASK-BASED HELPER FUNCTIONS */

/*
    TODO #8A: Define a function to give the user instructions. It should be used
    once after the greeting but also be reusable if they want to view it
    again.
*/

/* 
    TODO #9A: Define a function to handle user input for scoring mode selection;
    it should return the scoring mode object (not the validated input)
*/

/* 
    TODO #10A: Define a function to handle user input for word to be scored;
    it should return a word that has only alpha characters
*/

/*
    This is the primary function that will run the entire program. 
    Make use of helper functions to define reusable subroutines.
    Design control flow mechanisms to meet requirements for program lifecycle.
*/
function runProgram() {
	// TODO #7A: Welcome the user

	// TODO #8B: Display instructions initially

	// TODO #9C: Declare scorerObj (do not initialize)
	// TODO #10C: Declare word (do not initialize)

	// TODO #11C: Run iterative program lifecycle until user wants to quit
	//      TODO #9D: Ask user for scorer mode selection
	//      TODO #9E: Temporarily log scorerObj to see result and test various inputs

	//      TODO #11D: Keep asking for new words until they enter QUIT or SWITCH
	//          TODO #10D: Ask user for word
    
	//          TODO #11E: Check for keywords before scoring; break loop if QUIT or SWITCH 
    //          TODO #12B: Display instructions again if asking for help
    //          TODO #12C: Ensure scoring happens only if no keyword was given
    //          TODO #10E: Get score; display word & its score 

	// TODO #13: Log a friendly signoff after outer loop exits
}

// TODO #7B: Call the primary function to run its code block

// TODO #14: Perform rigorous testing of all possible paths (scoring mode, words, HELP, SWITCH, QUIT)
