class Solution {
public:
    int minAddToMakeValid(string s) {
        int open = 0;
        int ret = 0;
        for(auto c : s)
            c == '(' ? open++ : open > 0 ? open-- : ret++; 
        return open + ret;
    }
};