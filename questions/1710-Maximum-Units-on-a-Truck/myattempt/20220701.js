/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
    let maxUnits = 0;
    let arr = [];
    for (let i = 0; i < boxTypes.length; i++) {
        arr.push(boxTypes[i][1]);
    }

    while (truckSize && arr.length) {
        let curMax = Math.max(...arr);
        let curIndex = arr.indexOf(curMax);
        let curNumber = boxTypes[curIndex][0];
        if (truckSize < curNumber) {
            curNumber = truckSize;
        }
        maxUnits += (curNumber * curMax);
        truckSize -= curNumber;

        arr.splice(curIndex, 1);
        boxTypes.splice(curIndex, 1);
    }
    return maxUnits;
};

/**
 * Complexity Analysis
 * - Time Complexity: IDK
 * - Space Complexity: IDK
 */

// tests
const test1 = maximumUnits([[1, 3], [2, 2], [3, 1]], 4); // 8
const test2 = maximumUnits([[5, 10], [2, 5], [4, 7], [3, 9]], 10); // 91
const test3 = maximumUnits([[1, 3], [5, 5], [2, 5], [4, 2], [4, 1], [3, 1], [2, 2], [1, 3], [2, 5], [3, 2]], 35); // 76

const printOutput = (test) => console.log(test)
printOutput(test1);
printOutput(test2);
printOutput(test3);
