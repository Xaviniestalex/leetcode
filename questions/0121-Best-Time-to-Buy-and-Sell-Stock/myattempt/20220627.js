/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length === 1) return 0;

    let maxCurrent = 0;
    let maxFinal = 0;

    for (let i = 1; i < prices.length; i++) {
        maxCurrent = Math.max(0, maxCurrent += (prices[i] - prices[i - 1]));
        maxFinal = Math.max(maxCurrent, maxFinal);
    }
    return maxFinal;
};

/**
 * Complexity Analysis
 * - Time Complexity: IDK
 * - Space Complexity: IDK
 */

// tests
const test1 = maxProfit(); // 
const test2 = maxProfit(); // 
const test3 = maxProfit(); // 

const printOutput = (test) => console.log(test)
printOutput(test1);
printOutput(test2);
printOutput(test3);
