//ami-check.js

//amicable #: factors add up to each other ex: 220 and 284

var inputOne;
var inputTwo;
var factorOne = [];
var factorTwo = [];


/* FUNCTIONS */

//returns true if x divides evenly into y
function isFactor(factor, input){
	return(input % factor == 0);
}

//bool, check if number is even using remainder
function isEven(num){
	return (num % 2 == 0);
}