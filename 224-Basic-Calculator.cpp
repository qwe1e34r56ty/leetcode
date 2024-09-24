class Solution {
public:
    int calculate(string s) {
        int total = 0;
        vector<int> sign(2, 1);
        int s_len = s.size();
        for(int i = 0; i < s_len; i++){
            if(s[i] >= '0'){
                int number = 0;
                while(i < s_len && s[i] >= '0'){
                    number = 10 * number + (s[i++] - '0');
                }
                i--;
                total += sign.back() * number;
                sign.pop_back();
            }
            else if(s[i] == ')'){
                sign.pop_back();
            }
            else if(s[i] != ' '){
                sign.push_back(sign.back() * (s[i] == '-' ? -1 : 1));
            }
        }
        return total;
    }
};