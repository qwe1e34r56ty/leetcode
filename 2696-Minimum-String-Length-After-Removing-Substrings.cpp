class Solution {
public:
    int minLength(string s) {
        int ab_i, cd_i;
        while((ab_i = s.find("AB")) != -1 || (cd_i = s.find("CD")) != -1){
            if(ab_i != -1){
                s = s.substr(0, ab_i) + s.substr(ab_i + 2, s.length() - ab_i - 2);
            }
            else{
                s = s.substr(0, cd_i) + s.substr(cd_i + 2, s.length() - cd_i - 2);
            }
        }
        return s.length();
    }
};