window.onload = function() {
	// Find the element whose id is "green" by using getElementById()
	// getElementById() looks for an element by its id only
	// So here it finds the element with id="green"
	let green_button = document.getElementById("green");
	// Find the element whose id is "yellow" by using getElementById()
	// Again, this method works directly with an id name
	let yellow_button = document.getElementById("yellow");
	// Find the element whose id is "green" by using querySelector()
	// querySelector() uses a CSS selector
	// #green means "the element with id='green'"
	let green_button2 = document.querySelector("#green");
	// Find the element whose id is "yellow" by using querySelector()
	// #yellow is the CSS selector for id="yellow"
	let yellow_button2 = document.querySelector("#yellow");

	// The same HTML elements are retrieved by the two functions.
	console.log(green_button);
	console.log(green_button2);

	// Add a click event listener to green_button
	// In addEventListener(), you need to define events that the button listens to, such as "click",
	// and you also need to define a function that will run when the events happen to the HTML element
	green_button.addEventListener("click", 
		function() {
			// Find the <section> that is a direct child of <article>
			// If there are multiple matches, querySelector() returns only the first match
			// Save that element in square_em
			let square_em = document.querySelector("article > section");
			// Change the background color of that section to green
			square_em.style.backgroundColor = "green";
		}
	);

	// Add a click event listener to yellow_button
	// When yellow_button is clicked, the function will run
	yellow_button.addEventListener("click", 
		function() {
			// Find the <section> that is a direct child of <article>
			// If there are multiple matches, querySelector() returns only the first match
			// Save that element in square_em
			let square_em = document.querySelector("article > section");
			// Change the background color of that section to yellow
			square_em.style.backgroundColor = "yellow";
		}
	);
};