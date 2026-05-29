// Runs the function after the webpage is ready.
// This makes sure the HTML elements have already been loaded
// before jQuery tries to select or control them.
$(window).ready(function() {
	// Selects the first <p> element that is a direct child of <nav>.
    //
    // nav > p means:
    // Select <p> elements that are directly inside a <nav> element.
    //
    // :first-of-type means:
    // Select the first <p> among the <p> elements inside the same parent (the hamburger menu icon).
    //
    // .on("click", function() { ... }) adds a click event listener.
    // When this first <p> inside <nav> is clicked, the function below runs.
	$("nav > p:first-of-type").on("click", function() {
		// First attempt:
		//

		// $(this) would refer to the clicked <p> element (the hamberger menu icon).
        //
        // .siblings() would select all sibling elements of the clicked <p>,
        // meaning all other elements that share the same parent <nav> (all menu items).
        //
        // .slideToggle() would show hidden menu items or hide visible menu items
        // with a sliding animation.
        //
        // Since no time value is given, jQuery would use its default animation speed,
        // and all menu items (dis)appear at the same speed.

		/* $(this).siblings().slideToggle(); */

		// Second attempt:

		// $(this) refers to the clicked <p> element (the hamberger menu icon).
        //
        // .siblings() selects all sibling elements of that clicked <p>.
        // In this case, it selects the other elements inside the same <nav> (all menu items.
        //
        // .each(function(index) { ... }) loops through those sibling elements
        // one by one.
        //
        // index represents the position number of the current sibling
        // in the selected group.
        //
        // Important:
        // index starts from 0, not 1.
        // So the first sibling has index 0,
        // the second sibling has index 1,
        // the third sibling has index 2, and so on.
		$(this).siblings().each(function(index) {
			// Inside this .each() function, $(this) refers to the current menu item
            // being processed, not the originally clicked <p> (the hamburger menu icon).
            //
            // .slideToggle(...) shows the element if it is hidden,
            // or hides the element if it is visible.
            //
            // The change happens with a sliding animation.
            //
            // (index + 1) * 500 controls the animation duration.
            //
            // Because index starts from 0:
            //
            // first sibling:  (0 + 1) * 500 = 500 milliseconds
            // second sibling: (1 + 1) * 500 = 1000 milliseconds
            // third sibling:  (2 + 1) * 500 = 1500 milliseconds
            //
            // As a result, different menu items slide open or closed
            // at different speeds, and it looks like one menu item (dis)appears
            // after the previous menu item (dis)appears.
			$(this).slideToggle((index + 1) * 500);
		});
	});
});