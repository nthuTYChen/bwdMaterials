// alert("Embedded!");

var num_array = [100, 50, 3, 6, 9];

console.log(num_array);
console.log(num_array[0]);
console.log(num_array[1]);
console.log(num_array[6]);

console.log(num_array.length);

num_array.forEach(
	function(num) {
		console.log(num);
	}
);