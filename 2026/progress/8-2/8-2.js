// An alert message would pop up immediately when the HTML file is opened in a browser
// alert("Embedded!");

// Get the current inner width of the browser window that loads the HTML file
// Store that value in winWidth
var winWidth = window.innerWidth;
// Get the current inner height of the browser window that loads the HTML file
// Store that value in winHeight
var winHeight = window.innerHeight;
// Print the window width to the console
console.log(winWidth);
// Print the window height to the console
console.log(winHeight);

// Change the current page's URL to "https://google.com"
// window = the browser window
// location = the current web address information
// href = the full URL of the target page
// Setting href to a new URL makes the browser go to that page
// We need to mark off this statement, or you will always see Google in your browser
// window.location.href = "https://google.com";

// Run this function after the whole webpage has finished loading
window.onload = function() {
	// alert("Website is ready!");

	// This line is commented out
	// If used, it would print the whole HTML document object to the console
	// console.log(document);

	// Use the querySelector() function of an HTML document object to retrieve
	// ONE HTML element based on a selector.
	let em = document.querySelector("article > h1");
	// console.log(em);
	// Change the background color of that h1 element to pink
	em.style.backgroundColor = "pink";
	// Try to find h3 that is an immediate/direct child of an article, which
	// does not exist in 8-2.html. 
	let em2 = document.querySelector("article > h3");
	// As a consequence, querySelector() returns "null", which means "nothing".
	console.log(em2);
	// Try to find sections that are an immediate child of article. There
	// are multiple matches in 8-2.html, but querySelector() only returns the
	// FIRST match.
	let em3 = document.querySelector("article > section");
	// So, change the first section inside article to have an orange background color.
	em3.style.backgroundColor = "orange";
};