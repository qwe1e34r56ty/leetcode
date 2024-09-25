class Solution {
public:
    int maximumScore(int a, int b, int c) {
        int ans = 0;
        while(!((a == 0 && b == 0) || (a == 0 && c == 0) || (b == 0 && c == 0))){
            if(a <= b && a <= c){
                b--;
                c--;
            }
            else if(b <= a && b <= c){
                a--;
                c--;
            }
            else{
                a--;
                b--;
            }
            ans++;
        }
        return ans;
    }
};