// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: 
// b) Verify and explain: 

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: .length returns number of characters in string including spaces (10)

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: "o"
// b) Verify and explain: returns character in index position 4 ("o")

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: returns value at index position 1 (the string "Ruby")

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: SATURDAY, SUNDAY
// b) Verify and explain: terminal retured TypeError: weekendDays.toUpperCase is not a function

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: returns "number" because the .length method returns the length of the array (4) and typeof method returns the data type of 4

// I used this space to run tests on my example array I used for the interview questions.
var californiaNwslClubs = ["Angel City FC", "San Diego Wave FC", "Bay FC"]
console.log(californiaNwslClubs[1])
