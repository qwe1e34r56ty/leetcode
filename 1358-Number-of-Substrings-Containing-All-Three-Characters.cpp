class Solution {
public:
    int all(const string& s, int k){
        unordered_map<char, int> count;
        int ans = 0;
        int len = s.size();
        int i = 0;
        int j = 0;
        for(; j < len; j++){
            if(!count[s[j]]++){
                k--;
            }
            while(k < 0){
                if(!--count[s[i]]){
                    k++;
                }
                i++;
            }
            ans += j - i + 1;
        }
        return ans;
    }
    int numberOfSubstrings(string s) {
        return all(s, 3) - all(s, 2);
    }
};