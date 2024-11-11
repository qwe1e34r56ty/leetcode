class Solution {
public:
    int getLessPrime(vector<bool>& prime, int n){
        for(int i = prime.size() - 1; i >= 0; i--){
            if(prime[i] == true && i < n){
                return i;
            }
        }
        return -1;
    }
    bool primeSubOperation(vector<int>& nums) {
        vector<bool> prime(1000, true);
        prime[0] = false;
        prime[1] = false;
        for(int i = 2; i < 1000; i++)
            for(int j = 2; j < i; j++)
                if((i % j) == 0)
                    prime[i] = false;
        int prev = 0;
        int tmp = 0;
        for(int i = 0; i < nums.size(); i++){
            if(i == 0){
                prev = 0;
            }else{
                prev = nums[i - 1];
            }
            tmp = getLessPrime(prime, nums[i] - prev);
            if(tmp == -1 && nums[i] <= prev){
                return false;
            }
            else{
                if(tmp != -1)
                    nums[i] -= tmp;
            }
        }
        return true;
    }
};