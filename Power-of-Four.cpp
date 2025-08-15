class Solution {
public:
    bool isPowerOfFour(int n) {
        if(n == 1){
            return true;
        }
        while(n % 4 == 0 && n >= 1){
            n /= 4;
            if(n == 1){
                return true;
            }
        }
        return false;
    }
};