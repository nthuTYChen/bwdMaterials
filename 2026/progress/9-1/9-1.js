window.onload = function() {
	// Find the <a> element inside the last <p> inside a <section>, which is a clickable link intended to
	// show the biography window.
	// Save that link element in open_bio_link
	let open_bio_link = document.querySelector("section > p:last-of-type > a");
	// Add a click event listener to that link
	// When the link is clicked, the function will run
	open_bio_link.addEventListener("click", 
		function() {
			// Find the element whose id is "bio", which is the <article> element with the biography
			// Save that element in article_bio
			let article_bio = document.getElementById("bio");
			// Change its display style to "block", which is the default setting of a block element like <article>.
			// This makes the element appear if it was hidden before
			article_bio.style.display = "block";
		}
	);

	// Find the <a> element inside the first <p> inside an <article> element whose id is "bio" (i.e., the biography window)
	// The <a> element is a clickable link intended to hide the biography window.
	// Save that link element in close_bio_link
	let close_bio_link = document.querySelector("article#bio > p:first-of-type > a");
	// Add a click event listener to that link
	// When the link is clicked, the function will run
	close_bio_link.addEventListener("click", 
		function() {
			// Find the element whose id is "bio", which is the <article> element with the biography
			// Save that element in article_bio
			let article_bio = document.getElementById("bio");
			// Change its display style to "none" to hide it from the webpage.
			article_bio.style.display = "none";
		}
	);
};