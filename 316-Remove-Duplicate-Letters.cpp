class Solution {
public:
    string removeDuplicateLetters(string s) {
        vector<int> remain(26);
        vector<int> exist(26);
        vector<char> ans;
        for(auto i : s){
            remain[i - 'a']++;
        }
        for(auto i : s){
            while(!ans.empty() && !exist[i - 'a'] && remain[ans.back() - 'a'] != 0 && ans.back() > i){
                exist[ans.back() - 'a'] = 0;
                ans.pop_back();
            }
            if(!exist[i - 'a']){
                ans.push_back(i);
                exist[i - 'a'] = 1;
            }
            remain[i - 'a']--;
        }
        return string(ans.begin(), ans.end());
    }
};