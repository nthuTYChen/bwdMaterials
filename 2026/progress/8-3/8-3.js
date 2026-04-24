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

// After the webpage is fully loaded into the browser, try to change the background color
// of each <section> in the <article> element to be "pink"
window.onload = function() {
	// The traditional approach: Using querySelector() to retrieve each <section> element
	// one by one, and then change each <section> element's backgroun color setting.

	/* let section1 = document.querySelector("article > section:first-of-type");
	let section2 = document.querySelector("article > section:nth-of-type(2)");
	let section3 = document.querySelector("article > section:last-of-type");

	section1.style.backgroundColor = "pink";
	section2.style.backgroundColor = "pink";
	section3.style.backgroundColor = "pink"; */

	// Use querySelectorAll() to find all elements that match the CSS selector
	// "article > section" means: every <section> that is a direct child of <article>
	//
	// querySelectorAll() returns a NodeList.
	// A NodeList is a collection of all matched elements
	// It is similar to an array because it can store multiple elements in order,
	// and you can access them with index numbers such as [0], [1], [2], etc.
	//
	// So section_ems does not store just one element
	// It stores all matching <section> elements found in the page
	let section_ems = document.querySelectorAll("article > section");
	 /* console.log(section_ems[0]);
	console.log(section_ems[1]);
	console.log(section_ems[2]);
	// There are only three matches in the array, so the FOURTH entry is undefined.
	console.log(section_ems[3]);
	// If there is no match, querySelectorAll() returns an empty array (length = 0).
	let div_ems = document.querySelectorAll("article > div");
	console.log(div_ems); */

	// With the array, take out each <section> element one by one in forEach(), and then
	// change the background color repeatedly to "pink".
	section_ems.forEach(
		function(section) {
			section.style.backgroundColor = "pink";
		}
	);
};