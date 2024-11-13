class Solution {
public:
    int myAtoi(string s) {
        char c;
        int i = 0;
        long long ans = 0;
        int sign = 1;
        int state = 1;
        while(!isdigit(c = s[i++]) && state){
            switch(c){
                case ' ': break;
                case '-': sign = -1; state = 0;
                case '+': state = 0; break;
                default : return 0;
            }
        }
        i--;
        while(isdigit(c = s[i++])){
            ans *= 10;
            ans += c - 48;
            if(sign == 1 && ans > INT_MAX){
                return INT_MAX;
            }
            if(sign == -1 && -ans < INT_MIN){
                return INT_MIN;
            }
        }
        ans *= sign;
        return ans;
    }
};