function fibonacci(n) {
	let series = [0,1];
	let previous = 0;
	let current = 1;
	let sum = 1;
	while (sum < n) {
			series.push(sum);
			previous = current;
			current = sum;
			sum = previous + current;

	}
	return series;
}

console.log(fibonacci(10));