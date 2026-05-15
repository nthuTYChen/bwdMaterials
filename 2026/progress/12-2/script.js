window.onload = function() {
	let menuIcon = document.querySelector("nav > span");
	menuIcon.addEventListener('click', function() {
		/* */
		let menuItems = document.querySelectorAll("nav > a");
		//console.log(menuItems);
		menuItems.forEach(function(item) {
			item.style.display = "inline";
		});
	});
};