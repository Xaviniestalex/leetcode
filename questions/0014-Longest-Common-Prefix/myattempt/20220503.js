/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";
    let prefix = "";
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 0; j < strs.length - 1; j++) {
            if (strs[j][i] !== strs[j + 1][i]) return prefix;
        }
        prefix += strs[0][i];
    }
    return prefix;
};

/**
 * Complexity Analysis
 * - Time Complexity: O(N)
 * - Space Complexity: O(N)
 */

// tests
const test1 = longestCommonPrefix(["flower", "flow", "flight"]); // "fl"
const test2 = longestCommonPrefix(["dog", "racecar", "car"]); // ""
const test3 = longestCommonPrefix(["qwertyuiop", "qwertyuio", "qwerertyui", "qwetyurtyui"]); // "qwe"

const printOutput = (test) => console.log(test)
printOutput(test1);
printOutput(test2);
printOutput(test3);

/**
 * Take test1 as trial:
 * When i = 0, complement = 9 - 2 = 7, map.set(2, 0) => map = [[0, 2]]
 * When i = 1, complement = 9 - 7 = 2, map.has(2) === true, [map.get(2), 1] => [0, 1]
 */