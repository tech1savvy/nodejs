function isPalindrome(num) {
    let originalNum = num;
    let reversedNum = 0;

    while (num > 0) {
        let lastDigit = num % 10;
        reversedNum = reversedNum * 10 + lastDigit;
        num = Math.floor(num / 10);
    }

    return originalNum === reversedNum;
}

console.log(isPalindrome(121));