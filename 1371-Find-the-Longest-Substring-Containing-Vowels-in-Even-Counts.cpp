class Solution {
public:
    int findTheLongestSubstring(string s) {
        vector<int> occur(1 << 5, -1);
        vector<char> vowel = {'a', 'e', 'i', 'o', 'u'};
        vector<int> shift(26, -1);
        for(int i = 0; i < 5; i++){
            shift[vowel[i] - 'a'] = i;
        }
        int ans = 0;
        int cur = 0;
        int s_len = s.size();
        for(int i = 0; i < s_len; i++){
            if(shift[s[i] - 'a'] != -1){
               cur ^= (1 << shift[s[i] - 'a']); 
            }
            if(!cur){
                ans = i + 1;
                continue;
            }
            if(occur[cur] != - 1){
                ans = max(ans, i - occur[cur]);
            }
            else{
                occur[cur] = i;
            }
        }
        return ans;
    }
};