class Solution {
public:
    int maximum69Number (int num) {
        int result = num;
        stack<pair<int, int>> stack = {};
        bool changed = false;
        int nextPush = 0;
        int digit = 0;
        while(num > 0){
            nextPush = num % 10;
            num /= 10;
            if(nextPush == 6)
                stack.push({nextPush, digit});
            digit += 1;
        }
        if(!stack.empty()){
            result += 3 * pow(10, stack.top().second);
        }
        return result;
    }
};