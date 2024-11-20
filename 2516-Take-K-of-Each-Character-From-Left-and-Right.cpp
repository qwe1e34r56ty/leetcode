class Solution {
public:
    int takeCharacters(string s, int k) {
        int ans = s.size();
        int l = 0;
        int r = 0;
        vector<int> table(128, 0);
        for(auto c : s){
            table[c]++;
        }
        if(table['a'] < k || table['b'] < k || table['c'] < k){
            return -1;
        }
        while(l < s.size()){
            while(table[s[r]] > k || l > r){
                table[s[r]]--;
                r++;
            }
            if(table['a'] >= k && table['b'] >= k && table['c'] >= k){
                ans = min(ans, int(s.length()) - (r - l));
            }
            table[s[l]]++;
            l++;
        }
        return ans;
    }
};