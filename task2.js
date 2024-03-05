function hasIdenticalDigit(arr1, arr2) {
    for (let num1 of arr1) {
        for (let num2 of arr2) {
            const num1Digits = num1.toString().split('');
            const num2Digits = num2.toString().split('');
            for (let digit of num1Digits) {
                if (num2Digits.includes(digit)) {
                    return true;
                }
            }
        }
    }
    return false;
}

// Test cases
console.log(hasIdenticalDigit([1, 2, 3], [4, 5, 6])); // false
console.log(hasIdenticalDigit([1, 2, 3], [4, 5, 3])); // true
console.log(hasIdenticalDigit([1, 2, 3], [4, 8, 9])); // false