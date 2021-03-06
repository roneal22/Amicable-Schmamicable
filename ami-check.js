//ami-check.js

//amicable #: factors add up to each other ex: 220 and 284

var inputOne;
var inputTwo;
var factorOne = [];
var factorTwo = [];
var sumOne;
var sumTwo;
var result = document.getElementById("result");

function main(){
	inputOne = document.getElementById('input1').value;
	console.log("input1");
	inputTwo = document.getElementById('input2').value;
	console.log("input2");
	sumOne = factor(inputOne, factorOne);
	sumTwo = factor(inputTwo, factorTwo);
	console.log("factored");
	result.innerHTML = genText();
}

/* FUNCTIONS */

//returns true if x divides evenly into y
function isFactor(factor, input){
	return(input % factor == 0);
}


//alters passed array and returns sum of factors
function factor(num, array){
	var sum = 0;
	for (var fac = 1; fac < num; fac ++){
		if (isFactor(fac, num)){
			array.push(fac);
			sum += fac;
		}
	}
	return sum;
}

//bool, returns true if AND
function isAmicable(i1,i2, s1, s2){
	//sum of one is 
	return (i1 == s2 && i2 == s1);
}

function genText(){
	var response;
	response = "The numbers: " + inputOne + " and " + inputTwo
+ " are ";
	if(!isAmicable(inputOne, inputTwo, sumOne, sumTwo)){
		response += "not ";
	}
	response += "amicable";

	return response;
}

function finalDisplay(){
	alert("First factors: " + factorOne + 
"\n Second factors: " + factorTwo); 
}
