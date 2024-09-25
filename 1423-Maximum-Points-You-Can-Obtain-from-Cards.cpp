class Solution {
public:
    int maxScore(vector<int>& cardPoints, int k) {
        int sum = 0;
        for(auto i : cardPoints){
            sum += i;
        }
        int ans = 0;
        int cur = 0;
        auto i = cardPoints.begin(), j = cardPoints.begin();
        if(k == cardPoints.size()){
            return sum;
        }
        k = cardPoints.size() - k;
        while(k > 1){
            cur += *j;
            j++;
            k--;
        }
        for(; j != cardPoints.end(); j++){
            cur += *j;
            ans = max(ans, sum - cur);
            cur -= *i;
            i++;
        }
        return ans;
    }
};