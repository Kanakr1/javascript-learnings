// // callback-practice.js

// // forEach iterates over an input and applies a function to each element 
// var forEach = function (input, func) {
// 	// check for empty arrays or null input
// 	if (input.length === 0 || input === null) {
// 		return input;
// 	}
// 	// if array 
// 	if (Array.isArray(input)) {
// 		// create testCounter array for logging when testing
// 		var testCounter = [];
// 		for (var i = 0; i < input.length; i++) {
// 			testCounter.push(func(input[i]));
// 		}
// 		// return testCounter for test mode only - forEach should not actually return anything 
// 		return testCounter;
// 	}
// 	// if object literal 
// 	else if (typeof input === "object") {  // checks to make sure input is not a function 
// 		// do something else
// 		var testCounter = {};
// 		for (var key in input) {
// 			testCounter[key] = func(input[key]);	
// 		}
// 		return testCounter;
// 	} else {
// 		return "wut";
// 	}
// };


var testArray = [1,2,3,4,5];
var testObject = {1: 1, 2: 2};
var emptyObject = {};
var emptyArray = [];
var testFunc = function (n) {
	return (n + 1);
};


// console.log(forEach( function (n) { return 1}, testFunc));
// console.log(forEach(0, testFunc));
// console.log(forEach(testArray, testFunc));
// console.log(forEach(testObject, testFunc));
// console.log(forEach(emptyObject, testFunc));
// console.log(forEach(emptyArray, testFunc));


var forEach = function (input, func) {
	if (input.length === 0 || input == null) {
		return input;
	}
	if (Array.isArray(input)) {
		for (var i = 0; i < input.length; i++) {
			func(input[i]);
		}
	}
	else if (typeof input === "object") {
		for (var key in input) {
			func(input[key]);
		}
	} else {
		return "wut";
	}
};

// map iterates over an input, applies a function to each element, and returns an array of the mapped elements
var map = function (input, func) {
	var mapped = [];
	var newFunc = function(element) {
		var mappedElement = func(element);
		mapped.push(mappedElement);
	}
	forEach(input, newFunc);
	return mapped;
};




console.log(map(testArray, testFunc));
console.log(map(testObject, testFunc));
console.log(map([], testFunc));
console.log(map({}, testFunc));
console.log(map("hi", testFunc));
console.log(map(0, testFunc));