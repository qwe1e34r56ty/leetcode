class Solution {
public:
    bool checkInclusion(string s1, string s2) {
        vector<int> s1_t(26, 0);
        vector<int> s2_t(26, 0);
        if(s1.length() > s2.length()) return false;
        for(int i = 0; i < s1.length(); i++){
            s1_t[s1[i] - 97]++;
            s2_t[s2[i] - 97]++;
        }
        s2_t[s2[s1.length() - 1] - 97]--;
        for(int i = 0; i < s2.length() - s1.length() + 1; i++){
            int tmp = true;
            s2_t[s2[i + s1.length() - 1] - 97]++;
            for(int i = 0; i < 26; i++)
                if(s1_t[i] > s2_t[i]){
                    tmp = false;
                    break;
                }
            if(tmp == true) {
                return true;
            }
            s2_t[s2[i] - 97]--;
        }
        return false;
    }
};