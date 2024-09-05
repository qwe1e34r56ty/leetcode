#include<stdlib.h>
#define max(a, b) ((a > b) ? a : b)
#define min(a, b) ((a < b) ? a : b)

int maxProfit(int* prices, int pricesSize){
    int days = 0;
    if(pricesSize == 0){
        return 0;
    }
    int buy = prices[0];
    int sell = prices[pricesSize - 1];
    int tmp = 0;
    int* f_profit = (int *)malloc(sizeof(int) * pricesSize);
    int* b_profit = (int *)malloc(sizeof(int) * pricesSize);
    if(pricesSize == 0){
        return 0;
    }
    for(int i = 0; i < pricesSize; i++){
        buy = min(prices[i], buy);
        tmp = max(max(prices[i] - buy, tmp), 0);   
        f_profit[i] = tmp;
    }
    tmp = 0;
    for(int i = pricesSize - 1; i >= 0; i--){
        sell = max(prices[i], sell);
        tmp = max(max(sell - prices[i], tmp), 0);
        b_profit[i] = tmp;
    }
    for(int i = 0; i < pricesSize - 1; i++){
        tmp = max(f_profit[i] + b_profit[i + 1], tmp);
    }
    free(f_profit);
    free(b_profit);
    return tmp;
}