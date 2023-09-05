// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"

// Pseudo code:
// function name: boilingTemp
// input: numbers, temps 1-3
// output: string that indicates if the temp is above, below, or at boiling point
// process: conditional, string interpolation

// const boilingTemp = (temp) => {
//     if (temp > 212) {
//         return `${temp} is above boiling point`
//     } else if (temp === 212) {
//         return "212 is at boiling point"
//     } else {
//         return `${temp} is below boiling point`
//     }
// }
// console.log(boilingTemp(temperature1))
// // output: 42 is below boiling point
// console.log(boilingTemp(temperature2))
// // output: 350 is above boiling point
// console.log(boilingTemp(temperature3))
// output: 212 is at boiling point


// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Pseudo code:
// input: arrays
// output: length of array
// process: built in method concatation and length

// const arr3 = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)

// console.log(arr3.length)
// output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "Foxtrot 2023"
// Expected output: "3202 tortxoF"

// Pseudo code:
// input: string, currentCohort
// output: string reversed
// process: built in methods .split, .reverse, and .join

// var cohortArr = currentCohort.split("")
// console.log(cohortArr)
// output: 'F', 'o', 'x', 't',
//   'r', 'o', 't', ' ',
//   '2', '0', '2', '3'
// var revArr = cohortArr.reverse()
// console.log(revArr)
// output: 
// '3', '2', '0', '2',
// ' ', 't', 'o', 'r',
// 't', 'x', 'o', 'F'
// var revStr = revArr.join("")
// console.log(revStr)
// output: "3202 tortxoF"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

// Pseudo code:
// input: number values
// output: number, last index of given value
// process: built-in method .lastIndexOf

// console.log(numberOfConnections.lastIndexOf(givenValue1))
// output: 7
// console.log(numberOfConnections.lastIndexOf(givenValue2))
// output: 8