class Solution {
public:
    long long pickGifts(vector<int>& gifts, int k) {
        for(int i = 0; i < k ; i++){
            auto it = max_element(gifts.begin(), gifts.end());
            *it = floor(sqrt(*it));
            //cout << *it << endl;
        }
        long long ans = 0;
        for(auto i : gifts){
            ans += i;
        }
        return ans;
    }
};