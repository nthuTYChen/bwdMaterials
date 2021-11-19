window.onload = function () {
	if(false) {
		//alert('true!');
	}
	else {
		//alert('false!');
	}

	// Real conditions
	if(1 === 2) {
		//alert('true!');
	}
	/*else { // 'else' is optional
		alert('false!');
	}*/

	// !== means 'not equivalent to'
	if(1 !== 2) {
		//alert('true!');
	}

	// Multiple separate conditions
	if(2 === '2') {
		//alert('Condition 1 is true!');
	}
	else if('a' === 'a') {
		//alert('Condition 2 is true!');
	}
	else {
		//alert('Neither is true QQ.');
	}

	// AND vs. OR in the same line
	if(2 === 2 && 15 === 10) {	// && means AND
		alert('Condition 1 is true.');
	}
	else if(2 !== 2 || 15 === 10) {	// || means OR
		alert('Condition 2 is true.');
	}
	else {
		alert('Neither is true.');
	}
};