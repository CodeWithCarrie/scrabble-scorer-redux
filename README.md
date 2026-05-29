<div align="center">
    <img src="public/images/cwc-logo-4-colors.svg" alt="Code with Carrie logo" width="50%" />
    <h1>Scrabble Scorer Redux</h1>
    <p><em>A new twist on a classic graded assignment from LaunchCode in the past!</em></p>
    <a href="http://www.codewithcarrie.com"><img src="https://img.shields.io/badge/by-CodeWithCarrie.com-b03454?style=for-the-badge" alt="badge linking to CodeWithCarrie's website" /></a>
    <img src="https://img.shields.io/badge/JavaScript-F0DB4F?style=for-the-badge&logo=javascript&logoColor=333333" alt="JavaScript" />
    <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=ffffff" alt="npm" />
</div>

---

### INSTRUCTIONS

You will write and interactive console application that provides a fun way for someone to score their Scrabble words quickly!

> [!NOTE]
> I am currently using this project for live mob programming with students at LaunchCode, so there is no public video walkthrough to code along with... but there will be eventually!

#### The Purpose

This exercise is to help you connect the dots between the many fundamental concepts you've learned: data types, data structures, conditionals, loops, functions, and objects. Even more importantly,
you will learn how to plan and execute a more complex application, building your problem-solving skills and teaching you solid patterns like using helper functions and including user input validation. 

#### The Problem

Take a look at `index.js`. So far, this merelly represents a simple program where you enter a word and receive a letter-by-letter report on the point values. The existing code at the top is inefficient and ineffectual.

_Ask yourself: What improvements do you see that could be made?_ 
- User Experience (UX): The user would probably rather just have a total, not a breakdown!
- Code efficiency: Why are we looping twice? Can we improve on the oldPointStructure object to make individual letter score lookup easier?

#### Instructions

Your goal is to build a bigger, more robust, more efficient interactive program. 
1. Read through the Project Requirements below.
2. Follow the TODOs in `index.js` by number (1, 2A, 2B, etc.).

> [!IMPORTANT]
> Now that you have learned about functions, you should no longer think of your code as always running from top to bottom entirely. When a program is heavily composed of functions, all of those code blocks are out of scope of the main file flow until they're needed and called. 
> 
> As a result, **TODOs should be completed by number order**, NOT in the order in which they appear from top to bottom!

#### Project Requirements
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

---

### HOW TO FORK AND CLONE

#### Create Your Own Copy

1. FORK it to your own GitHub account
1. COPY the link from your new repo on GitHub
1. CLONE it to your local machine. Example:

`git clone https://github.com/YourUsername/scrabble-scorer-redux`

#### Practice in Your Own Branches

If you want to update your forked repository from my parent repository when I add or change things to mine in the future, there are instructions below this section.
It will go much easier if you don't ever change the code in `main`. Instead, do the following:

1. From `main`, use the command `git checkout -b new-branch-name` to create your own branch for practicing (example: `practice`).
1. Practice as much as you'd like in your new branch, making commits as you add code.
1. When you are ready to work on something different in another new branch, use the command `git checkout main` to return to `main` and then you can repeat the two steps above.

---

## ABOUT THE AUTHOR

### Caroline "Carrie" Jones 

Front End Engineer and Lead Instructor at [LaunchCode](https://www.launchcode.org) 

[@Carolista](https://github.com/Carolista) - [CodeWithCarrie.com](http://codewithcarrie.com) - [LinkedIn](https://www.linkedin.com/in/carolinerjones)
