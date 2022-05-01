public class Solution {
    public boolean isPalindrome(int x) {
        if(x < 0) return false;
        int y = x;
        int res = 0;
        while(y != 0) {
            res = res * 10 + y % 10;
            y /= 10;
        }
        return x == res;
    }
}

/**
 * Hi guys. I just don't know why we need to concern the overflow. When the reversed number overflows, it will becomes negative number which will return false when compared with x.
 * Here is my AC code.
 */
