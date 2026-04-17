// alert("Embedded!");

var winWidth = window.innerWidth;
var winHeight = window.innerHeight;
console.log(winWidth);
console.log(winHeight);

// window.location.href = "https://google.com";
// window.location.pathname = "/nosuchpath";

window.onload = function() {
	// alert("Website is ready!");

	// console.log(document);

	let em = document.querySelector("article > h1");
	// console.log(em);
	em.style.backgroundColor = "pink";
	let em2 = document.querySelector("article > h3");
	console.log(em2);
	let em3 = document.querySelector("article > section");
	em3.style.backgroundColor = "orange";
};