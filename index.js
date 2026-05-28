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

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

// TODO: Task 1 (Modify in Task 2);
function initialPrompt() {
	console.log("Let's play some scrabble!\n");
	let word = input.question('Enter a word to score: ');
	return word;
}

// TODO: Task 2 - Define function
let simpleScorer = function (word) {
	return word.length;
};

// TODO: Task 2 - Define function
let vowelBonusScorer = function (word) {
	let score = 0;
	let vowels = 'aeiou';
	for (let i = 0; i < word.length; i++) {
		if (vowels.includes(word[i].toLowerCase())) {
			score += 3;
		} else {
			score += 1;
		}
	}
	return score;
};

// TODO: Task 4 (Move above scrabbleScorer to put it in scope)
let newPointStructure = transform(oldPointStructure);

// Bonus mission 2 - doesn't make unit test fail if it's done here
newPointStructure[' '] = 0;

let scrabbleScorer = function (word) {
	let score = 0;
	for (let i = 0; i < word.length; i++) {
		score += newPointStructure[word[i].toLowerCase()];
	}
	return score;
};

// TODO: Task 2 (Update in Task 4)
const scoringAlgorithms = [
	// Object 1 - Simple Score
	{
		name: 'Simple',
		description: 'Each letter is worth 1 point.',
		scorerFunction: simpleScorer,
	},
	// Object 2 - Bonus Vowels
	{
		name: 'Bonus Vowels',
		description: 'Vowels are 3 points, consonants are 1 point.',
		scorerFunction: vowelBonusScorer,
	},
	// Object 3 - Scrabble
	{
		name: 'Scrabble',
		description: 'The traditional scoring algorithm.',
		scorerFunction: scrabbleScorer,
	},
];

// TODO: Task 2
function scorerPrompt() {
	console.log('Which scoring algorithm would you like to use?\n');
	let optionsText = '';
	for (let i = 0; i < scoringAlgorithms.length; i++) {
		optionsText += `\n${i} - ${scoringAlgorithms[i].name}: ${scoringAlgorithms[i].description}`;
	}
	let choice = input.question(optionsText + '\nEnter a number: ');
	// Bonus mission 1 - validate
	while (isNaN(choice) || choice < 0 || choice > 2) {
		choice = input.question('Please enter 0, 1, or 2: ');
	}
	return scoringAlgorithms[choice];
}

// TODO: Task 4
function transform(oldStructure) {
	let newStructure = {};
	for (let pointValue in oldStructure) {
		for (let i = 0; i < oldStructure[pointValue].length; i++) {
			let letter = oldStructure[pointValue][i];
			newStructure[letter.toLowerCase()] = Number(pointValue);
		}
	}
	return newStructure;
}

// TODO: Task 2
function runProgram() {
	let word = initialPrompt();
	let scorer = scorerPrompt();
	let score = scorer.scorerFunction(word);
	console.log(`Score for '${word}': ${score}`);
}
