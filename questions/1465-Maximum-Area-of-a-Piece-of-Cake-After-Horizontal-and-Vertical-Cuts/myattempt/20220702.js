/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function (h, w, horizontalCuts, verticalCuts) {
    horizontalCuts.sort((a, b) => a - b);
    verticalCuts.sort((a, b) => a - b);

    let maxHeight = horizontalCuts[0], maxWidth = verticalCuts[0];

    for (let i = 0; i < horizontalCuts.length; i++) {
        maxHeight = Math.max((horizontalCuts[i + 1] || h) - horizontalCuts[i], maxHeight);
    }
    for (let j = 0; j < verticalCuts.length; j++) {
        maxWidth = Math.max((verticalCuts[j + 1] || w) - verticalCuts[j], maxWidth);
    }

    const mod = 1000000007n
    return BigInt(maxHeight) * BigInt(maxWidth) % mod;
};

/**
 * Complexity Analysis
 * - Time Complexity: IDK
 * - Space Complexity: IDK
 */

// tests
const test1 = maxArea(5, 4, [1, 2, 4], [1, 3]); // 4
const test2 = maxArea(5, 4, [3, 1], [1]); // 6
const test3 = maxArea(5, 4, [3], [3]); // 9
const test4 = maxArea(1000000000, 1000000000, [2], [2]); // 81
const test5 = maxArea(12, 44, [2, 1, 9, 6, 7], [35, 5, 21, 12, 4, 7, 18, 32, 36, 40, 10, 30, 24, 17, 8, 20, 9, 3, 34, 41, 26, 42, 28, 31, 38, 2, 14, 19, 37, 33, 23, 43, 29, 15, 16, 11]); // 8

const printOutput = (test) => console.log(test)
printOutput(test1);
printOutput(test2);
printOutput(test3);
printOutput(test4);
printOutput(test5);
