/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    // edge cases (missing in 1st attempt)
    if (s.length === 0) return true;
    if (t.length === 0) return false;

    // pre-test for cases with equal length 
    if (s.length === t.length) {
        if (s === t) return true
    }

    let sIndex = 0;
    for (let tIndex = 0; tIndex < t.length; tIndex++) {
        if (t[tIndex] === s[sIndex]) {
            sIndex++;
        }
        if (sIndex === s.length) return true; // it should not be: sIndex === s.length - 1 (it would fail in test 7)
    }
    return false;
};

/**
 * Complexity Analysis
 * - Time Complexity: IDK
 * - Space Complexity: IDK
 */

// tests
const test1 = isSubsequence("abc", "ahbgdc"); // true
const test2 = isSubsequence("axc", "ahbgdc"); // false
const test3 = isSubsequence("aec", "abcde"); // false
const test4 = isSubsequence("abcde", "abcde"); // true
const test5 = isSubsequence("", "abcde"); // true
const test6 = isSubsequence("abc", ""); // false
const test7 = isSubsequence("b", "c"); // false

const printOutput = (test) => console.log(test)
printOutput(test1);
printOutput(test2);
printOutput(test3);
printOutput(test4);
printOutput(test5);
printOutput(test6);
printOutput(test7);
