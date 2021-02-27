function sumOfOneToN(n) {
	if (n <= 1) {
		return n;
	}
	return n + sumOfOneToN(n - 1);
}

function main() {
	if (!process.argv[2]) {
		console.log("You must pass argument!!!");
		return;
	}
	if (isNaN(+process.argv[2])) {
		console.log("Argument must be number type!!!");
		return;
	}
	const input = +process.argv[2];
	const result = sumOfOneToN(input);
	console.log(result);
}

main();
