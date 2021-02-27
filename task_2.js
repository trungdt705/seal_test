function sortAscending() {
	let input = [1, 25, 7, -7, -3, 12, -22, 0];
	return input.sort((a, b) => a - b);
}

function sortAscendingWithAbsoluteValue() {
	let input = [1, 25, 7, -7, -3, 12, -22, 0];
	let temp;
	for (let i = 0; i < input.length; i++) {
		for (j = i + 1; j < input.length; j++) {
			if (Math.abs(input[i]) >= Math.abs(input[j])) {
				temp = input[j];
				input[j] = input[i];
				input[i] = temp;
			}
		}
	}
	return input;
}

console.log(sortAscending());
console.log(sortAscendingWithAbsoluteValue());
