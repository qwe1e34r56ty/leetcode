class Solution {
public:
    vector<int> dailyTemperatures(vector<int>& t) {
        int len = t.size();
        vector<int> s;
        vector<int> ans(len, 0);
        for(int i = 0; i < len; i++){
            while(!s.empty()){
                if(t[s.back()] < t[i]){
                    ans[s.back()] = i - s.back();
                    s.pop_back();
                }
                else{
                    break;
                }
            }
            s.push_back(i);
        }
        return ans;
    }
};