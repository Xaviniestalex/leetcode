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
 * - Time Complexity: IDK
 * - Space Complexity: IDK
 */

// tests
const test1 = longestCommonPrefix(["flower", "flow", "flight"]); // "fl"
const test2 = longestCommonPrefix(["dog", "racecar", "car"]); // ""
const test3 = longestCommonPrefix(["qwertyuiop", "qwertyuio", "qwerertyui", "qwetyurtyui"]); // "qwe"

const printOutput = (test) => console.log(test)
printOutput(test1);
printOutput(test2);
printOutput(test3);
