// amstrong : num = sum of its digits raised to the power of number of digits

function isArmstrongNumber(num) {
    const numStr = num.toString();
    const len = numStr.length;
    let sum = 0;

    for (let i = 0; i < len; i++) {
        sum += parseInt(numStr[i]) ** len;
    }

    return sum === num;
}

console.log(isArmstrongNumber(153));


