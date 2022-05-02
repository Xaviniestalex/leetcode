/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

};

/**
 * Complexity Analysis
 * - Time Complexity: O(N)
 * - Space Complexity: O(N)
 */

// tests
const test1 = longestCommonPrefix(); // 
const test2 = longestCommonPrefix(); // 
const test3 = longestCommonPrefix(); // 

const printOutput = (test) => console.log(test)
printOutput(test1);
printOutput(test2);
printOutput(test3);

/**
 * Take test1 as trial:
 * When i = 0, complement = 9 - 2 = 7, map.set(2, 0) => map = [[0, 2]]
 * When i = 1, complement = 9 - 7 = 2, map.has(2) === true, [map.get(2), 1] => [0, 1]
 */