class Solution {
public:
    bool canChange(string start, string target) {
        int i = 0;
        int l = 0;
        int r = 0;
        char s_top = '_';
        char t_top = '_';
        for(int i = 0; i < start.length(); i++){
            l += start[i] == 'L';
            l -= target[i] == 'L';
            r += start[i] == 'R';
            r -= target[i] == 'R';
            if(r < 0) return false;
            if(l > 0) return false;
            if(r > 0 && target[i] == 'L') return false;
            if(l < 0 && start[i] == 'R') return false;
        }
        return l == r;
    }
};