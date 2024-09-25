class Solution {
public:
    int minSetSize(vector<int>& arr) {
        vector<int> count(100001, 0);
        for(auto i : arr){
            count[i]++;
        }
        sort(count.begin(), count.end(), [](int a, int b){return b < a;});
        int tmp = 0, ans = 0;
        for(auto i : count){
            tmp += i;
            ans++;
            if(tmp * 2 >= arr.size()){
                return ans;
            }
        }
        return ans;
    }
};