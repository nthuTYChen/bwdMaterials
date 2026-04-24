window.onload = function() {
	let green_button = document.getElementById("green");
	let yellow_button = document.getElementById("yellow");
	let green_button2 = document.querySelector("#green");
	let yellow_button2 = document.querySelector("#yellow");

	console.log(green_button);
	console.log(green_button2);

	green_button.addEventListener("click", 
		function() {
			// alert("You just clicked the Green! button!");
			let square_em = document.querySelector("article > section");
			square_em.style.backgroundColor = "green";
		}
	);

	yellow_button.addEventListener("click", 
		function() {
			let square_em = document.querySelector("article > section");
			square_em.style.backgroundColor = "yellow";
		}
	);
};