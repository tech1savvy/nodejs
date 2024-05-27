function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// first n
let series = [];
let n = 10;
for(let i = 0; i < n; i++){
    series.push(fibonacci(i));
}
console.log(series);

// till n
series = [];
n = 10;
let i = 0;
while(fibonacci(i)<n){
    series.push(fibonacci(i));
    i++;
}
console.log(series);