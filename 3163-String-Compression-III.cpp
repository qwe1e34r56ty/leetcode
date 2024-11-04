class Solution {
public:
    string compressedString(string word) {
        string ret{};
        char last = word[0];
        int count =  1;
        for(auto i = word.begin() + 1; i != word.end(); i++){
            if(last != *i || count == 9){
                ret += 48 + count;
                ret += last;
                count = 0;
            }
            last = *i;
            count++;
        }
        ret += 48 + count;
        ret += last;
        return ret;
    }
};