class Solution {
public:
    vector<int> finalPrices(vector<int>& prices) {
        int size = prices.size();
        for(int i = 0, j = 0; j < size || i < size; j++){
            if(j == size){
                i++;
                j = i;
                continue;
            }
            if(j > i && prices[j] <= prices[i]){
                prices[i] -= prices[j];
                i++;
                j = i;
            }
        }
        return prices;
    }
};