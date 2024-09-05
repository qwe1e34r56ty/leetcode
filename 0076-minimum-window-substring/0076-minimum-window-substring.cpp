class Solution {
public:
    string minWindow(string s, string t) {
        vector<int> count(128, 0);
        vector<int> goal(128, 0);
        for(auto i : t){
            goal[i]++;
        }
        int ans_s = 0;
        int ans_len = s.size() + 1;
        int cur = 0;
        int k = t.size();
        for(auto i = s.begin(), j = s.begin(); j != s.end(); j++){
            count[*j]++;
            if(count[*j] == goal[*j]){
                cur += goal[*j];
            }
            std::cout << cur << endl;
            if(cur == k){
                while(count[*i] > goal[*i]){
                    count[*i]--;
                    i++;
                }
                if(ans_len > (j - i + 1)){
                    ans_s = i - s.begin();
                    ans_len = (j - i + 1);
                }
            }
        }
        //std::cout << ans_s << " " << ans_len;
        if(ans_len == s.size() + 1){
            ans_len = 0;
        }
        return string(s.begin() + ans_s, s.begin() + ans_s + ans_len);
    }
};