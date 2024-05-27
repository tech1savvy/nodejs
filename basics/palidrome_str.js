function isPalindrome(str) {
    const cleanStr = str.toLowerCase();
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
}

console.log(isPalindrome('madam'));