class Solution {
public:
    bool canChange(string start, string target) {
        int i = 0;
        int l = 0;
        int r = 0;
        bool c_1;
        bool c_2;
        bool c_3;
        bool c_4;
        for(int i = 0; i < start.length(); i++){
            l += start[i] == 'L';
            l -= target[i] == 'L';
            r += start[i] == 'R';
            r -= target[i] == 'R';
            c_1 = r < 0;
            c_2 = l > 0;
            c_3 = r > 0 && target[i] == 'L';
            c_4 = l < 0 && start[i] == 'R';
            if(c_1 || c_2 || c_3 || c_4) return false;
        }
        return l == r;
    }
};