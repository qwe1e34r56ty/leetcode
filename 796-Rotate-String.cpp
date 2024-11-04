class Solution {
public:
    bool rotateString(string s, string goal) {
        for(int i = 0; i < s.length(); i++){
            if(strcmp((s.substr(i, s.length()) + s.substr(0, i)).c_str(), goal.c_str()) == 0){
                return true;
            }
        }
        return false;
    }
};