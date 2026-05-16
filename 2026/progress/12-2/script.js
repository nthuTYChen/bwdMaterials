/* The following JavaScript code can do the following things:

	1. Find the <span> element inside <nav>, which includes the hamburger menu symbol.

	2. Add an event listener to the symbol, and a clicking event triggers a function
	   to open the menu by making all <a> elements in <nav> visible.

	This script can only show the menu items and cannot hide them again. But this can
	be done easily, so it is left to you to explore.
*/

// Run this function after the webpage has finished loading, so JavaScript can follow
// the structure of the HTML document to find <span> inside <nav>.
window.onload = function() {
	// Find the <span> element that is a direct child of <nav> 
	// (there's only one match in every HTML document)
	// Save that element in menuIcon
	let menuIcon = document.querySelector("nav > span");
	// Add a click event listener to menuIcon
	// When menuIcon is clicked, this function will run
	menuIcon.addEventListener('click', function() {
		// Find all <a> elements that are direct children of <nav>
		// Save them as an array in menuItems
		let menuItems = document.querySelectorAll("nav > a");
		// Go through each matched <a> element one by one. Every single time,
		// the element is taken out and stored as "item" in the function.
		menuItems.forEach(function(item) {
			// In the CSS settings (see style.css), all <a> elements in <nav>
			// are set to have "display: none;" in a narrow viewport. So,
			// in a narrow viewport, all the menu items are hidden by default.
			// Change each link's display style to "inline" so the links appear.
			// It is "inline" because a hyperlink is by default part of a text line.
			item.style.display = "inline";
		});
	});
};