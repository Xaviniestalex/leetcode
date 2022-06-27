/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let length = 0;
    let pairingCentre = new Map();

    for (let i = 0; i < s.length; i++) {
        if (pairingCentre.has(s[i])) {
            length += 2; // two letters are paired up
            pairingCentre.delete(s[i]); // remove the paired letter from hashmap
        } else {
            pairingCentre.set(s[i], i); // add new unpaired letter to hashmap
        }
    }

    if (pairingCentre.size) length++ // there is one or more unpaired letters served as the middle letter of the palindrome

    return length;
};

/**
 * Complexity Analysis
 * - Time Complexity: IDK
 * - Space Complexity: IDK
 */

// tests
const test1 = longestPalindrome("abccccdd"); // 7
const test2 = longestPalindrome("a"); // 1
const test3 = longestPalindrome("aabbccccdd"); // 10

const printOutput = (test) => console.log(test)
printOutput(test1);
printOutput(test2);
printOutput(test3);

/**
 * Remark 1: 
 * ```
 * let pairingCentre = new Map();
 * ```
 * Set would be better than Map, because it is unnecessary to store value for keys.
 * Hence, the better way would be:
 * ```
 * let pairingCentre = new Set();
 * ```
 */
