window.onload = function() {
	let open_bio_link = document.querySelector("section > p:last-of-type > a");
	open_bio_link.addEventListener("click", 
		function() {
			let article_bio = document.getElementById("bio");
			article_bio.style.display = "block";
		}
	);

	let close_bio_link = document.querySelector("article#bio > p:first-of-type > a");
	close_bio_link.addEventListener("click", 
		function() {
			let article_bio = document.getElementById("bio");
			article_bio.style.display = "none";
		}
	);
};