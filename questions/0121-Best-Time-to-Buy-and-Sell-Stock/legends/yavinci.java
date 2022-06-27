// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/discuss/39039/Sharing-my-simple-and-clear-C%2B%2B-solution

// Very nice solution! But it still can be optimized. We only need to calculate either maxProfit or minPrice not both in every loop. Running time can be dropped by 33% percent.

public int maxProfit(int[] prices) {
    if(prices == null || prices.length < 2) return 0;      
    int maxProfit = 0, minPrice = prices[0];
    
    for(int i = 1; i < prices.length; i++) {
        if(prices[i] > prices[i - 1]) {
            maxProfit = Math.max(maxProfit, prices[i] - minPrice);       
        } else {
             minPrice = Math.min(minPrice, prices[i]);
        }
    }

    return maxProfit;
}