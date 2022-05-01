/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
    if (x < 0 || (x !== 0 && x % 10 === 0)) return false;

    let temp = x;
    let reversedX = 0;
    while (temp > 0) {
        reversedX = reversedX * 10 + temp % 10;
        temp = Math.floor(temp / 10);
    }
    // console.log(`x: ${x}; temp: ${temp}; reversedX: ${reversedX}`)
    return reversedX === x;
};

/**
 * Complexity Analysis
 * - Time Complexity: IDK
 * - Space Complexity: IDK
 */

// tests
const test1 = isPalindrome(121); // true
const test2 = isPalindrome(-121); // false
const test3 = isPalindrome(10); // false
const test4 = isPalindrome(2772); // true

const printOutput = (test) => console.log(test)
printOutput(test1);
printOutput(test2);
printOutput(test3);
printOutput(test4);

/**
 * Take test1 as trial:
 * When temp = 121, reversedX = 0 * 10 + 1 = 1, temp = Math.floor(121 / 10) => temp = 12
 * When temp = 12, reversedX = 1 * 10 + 2 = 12, temp = Math.floor(12 / 10) => temp = 1
 * When temp = 1, reversedX = 12 * 10 + 1 = 121, temp = Math.floor(1 / 10) => temp = 0
 * (reversedX === x) => (121 === 121) => true
 */