class Solution {
public:
    bool isPalindrome(int x) {
        if(x < 0) return false;
        vector<int> v;
        while(x){
            v.push_back(x % 10);
            x /= 10;
        }
        vector<int> tmp = v;
        reverse(v.begin(), v.end());
        for(int i = 0; i < v.size(); i++)
            if(v[i] != tmp[i]) return false;
        return true;
    }
};