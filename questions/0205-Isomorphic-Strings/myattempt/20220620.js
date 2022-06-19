/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    return (transform(s) === transform(t)) ? true : false;
};

function transform(string) {
    const indexMapping = new Map();
    let result = [];
    for (i = 0; i < string.length; i++) {
        if (!indexMapping.has(string[i])) {
            indexMapping.set(string[i], i);
        }
        result.push(indexMapping.get(string[i]));
    }
    return result.join();
}

/**
 * Complexity Analysis
 * - Time Complexity: IDK
 * - Space Complexity: IDK
 */

// tests
const test1 = isIsomorphic("egg", "add"); // true
const test2 = isIsomorphic("foo", "bar"); // false
const test3 = isIsomorphic("paper", "title"); // true

const printOutput = (test) => console.log(test)
printOutput(test1);
printOutput(test2);
printOutput(test3);
