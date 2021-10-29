// This is a code block
{
	var num = 1; // A numeric variable
}
console.log(num); // No problem, you will get 1.

// This is another code block
{
	let str = 'This is a string.'; // A local variable created with 'let'
	console.log(str); // The target string.
}
console.log(str); // Error: str is undefined.