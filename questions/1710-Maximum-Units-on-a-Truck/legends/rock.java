import java.util.Arrays;

// Method 1: Sort reversely
class Solution {
    public int maximumUnits(int[][] boxTypes, int truckSize) {
        // Arrays.sort(boxTypes, (a, b) -> b[1] - a[1]); // b[1] - a[1] may cause int
        // overflow, credit to @Zudas.
        Arrays.sort(boxTypes, (a, b) -> Integer.compare(b[1], a[1]));
        int boxes = 0;
        for (int[] box : boxTypes) {
            if (truckSize >= box[0]) {
                boxes += box[0] * box[1];
                truckSize -= box[0];
            } else {
                boxes += truckSize * box[1];
                return boxes;
            }
        }
        return boxes;
    }
}

// Method 2: Counting sort
class Solution1 {
    public int maximumUnits(int[][] boxTypes, int truckSize) {
        int[] count = new int[1001];
        for (int[] box : boxTypes) {
            count[box[1]] += box[0];
        }
        int boxes = 0;
        for (int units = 1000; units > 0; --units) {
            if (count[units] > 0) {
                int fitIn = Math.min(count[units], truckSize);
                boxes += units * fitIn;
                truckSize -= fitIn;
                if (truckSize == 0) {
                    return boxes;
                }
            }
        }
        return boxes;
    }
}