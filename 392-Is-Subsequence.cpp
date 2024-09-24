class Solution {
public:
    bool isSubsequence(string s, string t) {
        auto i = s.begin();
        auto j = t.begin();
        if(!s.size()){
            return true;
        }
        if(!t.size()){
            return false;
        }
        do{
            if(*i == *j){
                i++;
            }
            if(i == s.end()){
                return true;
            }
        }while(++j != t.end());
        return false;
    }
};