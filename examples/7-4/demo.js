var math1 = 2 + 5; // + Adding
var math2 = 3 * 4.5; // * Multiplying
var math3 = 1 - 5; // - Substracting
var math4 = 20 / 5; // / Dividing

var math5 = 1 - 5 * 20; // Multiply first
//console.log(math5);

var calc = math4 + math5; // Add math4 to math5 and store the result in the variable 'calc'
//console.log(calc);

var msg = 'The result of calculation is: ' + calc; // Combine a numeric value with a string as a string
//console.log(msg);

var notANumber = '0' + '100'; // These are strings, not numbers!
//console.log(notANumber);

// Mixing math calculations with string combination
var test1 = 'Result: ' + 5 + 10;
var test2 = 'Result: ' + 5 * 10;
//console.log(test1);
//console.log(test2);

var newString = 'I do not need the word DUMB.' - 'DUMB'; // Strings can only be added with +
//console.log(newString); // NaN = Not a Number