// always starts with 0,1
// next element is the sum of prevoius two

function fibonacci(n) {
	let series = [0,1];
	let previous = 0;
	let current = 1;
	let sum = 1;
	for (let i=0;i < n;i++) {
			series.push(sum);
			previous = current;
			current = sum;
			sum = previous + current;
	}
	return series;
}

console.log(fibonacci(10));