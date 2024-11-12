class Solution {
public:
    string convert(string s, int numRows) {
        string ans = \\;
        for(int i = 0; i < numRows; i++){
            for(int j = 0; i + max(j, 2 * j * (numRows - 1)) < s.length(); j++){
                ans.push_back(s[i + max(j, 2 * j * (numRows - 1))]);
                if(i != 0 && i != numRows - 1 && i + 2 * (j + 1) * (numRows - 1) - 2 * i < s.length())
                    ans.push_back(s[i + 2 * (j + 1) * (numRows - 1) - 2 * i]);
            }
        }
        return ans;
    }
};