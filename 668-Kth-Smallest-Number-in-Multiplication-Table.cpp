class Solution {
public:
    int count(int m, int n, int k){
        int ans = 0;
        for(int i = 1; i <= m; i++){
            ans += min(k / i, n);
        }
        return ans;
    }
    int findKthNumber(int m, int n, int k) {
        int l = 1;
        int r = m * n;
        while(l < r){
            int mid = (l + r) >> 1;
            if(count(m, n, mid) < k){
                l = mid + 1;
            }
            else{
                r = mid;
            }
        }
        return l;
    }
};