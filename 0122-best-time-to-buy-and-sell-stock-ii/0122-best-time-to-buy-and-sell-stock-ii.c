#define max(a, b) ((a > b) ? a : b)
#define min(a, b) ((a < b) ? a : b)

int maxProfit(int* prices, int pricesSize){
    int days = 0;
    int buy = prices[0];
    int ans = 0;
    if(pricesSize == 0){
        return 0;
    }
    for(int i = 1; i < pricesSize; i++){
        ans += max(prices[i] - prices[i - 1], 0);
    }
    return ans;
}