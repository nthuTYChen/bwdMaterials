// alert("Embedded!");

// Make an array called num_array
// An array is a list that can store multiple values in one variable
// Here, the array stores five numbers: 100, 50, 3, 6, and 9
var num_array = [100, 50, 3, 6, 9];

// Print the whole array to the console
console.log(num_array);
// Print the value at index 0
// Arrays use index numbers starting from 0, not 1
// So index 0 is the first value: 100
console.log(num_array[0]);
// Print the value at index 1
// Index 1 is the second value: 50
console.log(num_array[1]);
// Try to print the value at index 6
// This array does not have a value at index 6
// Its indexes are 0, 1, 2, 3, and 4
// So this prints "undefined"
console.log(num_array[6]);
// Every array is also an OBJECT, and here we can try to retrieve its
// "length" key. Length means the total number of items in the array
// This array has 5 items
console.log(num_array.length);

// An array object comes with a forEach() function.
// That is, "for each" value in the array, do something.
// forEach goes through each value in the array one by one,
// and pass each value one by one to another function defined
// within forEach().
num_array.forEach(
	// When each value is passed to this function within forEach(),
	// it is mapped to a variable "num"
	function(num) {
		// Print each value
		console.log(num);
	}
);