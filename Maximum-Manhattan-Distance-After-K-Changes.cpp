#include<cmath>
class Solution {
public:
    int maxDistance(string s, int k) {
        int x = 0;
        int y = 0;
        int ret = 0;
        int N = 0;
        int W = 0;
        int E = 0;
        int S = 0;
        for(int i = 0; i < s.length(); i++){
            switch(s[i]){
                case 'N': y++; N++; break;
                case 'W': x--; W++; break;
                case 'E': x++; E++; break;
                case 'S': y--; S++; break;
            }
            int tmpret = abs(x) + abs(y);
            int under = min(N, S);
            int tmpk = k;
            tmpret += min(tmpk, under) * 2;
            tmpk -= under;
            under = min(W, E);
            if(tmpk > 0){
                tmpret += min(tmpk, under) * 2;
            }
            ret = max(ret, tmpret);
        }
        return ret;
    }
};