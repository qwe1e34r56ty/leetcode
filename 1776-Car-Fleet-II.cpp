class Solution {
public:
    vector<double> getCollisionTimes(vector<vector<int>>& cars) {
        int n = cars.size();
        vector<int> stack;
        vector<double> res(n, -1);
        for(int i = n - 1; i >= 0; i--){
            int p = cars[i][0], s = cars[i][1];
            while(!stack.empty()){
                int j = stack.back();
                int f_p = cars[j][0], f_s = cars[j][1];
                if(s <= f_s || 1.0 * (f_p - p) / (s - f_s) > res[j] && res[j] != -1){
                    stack.pop_back();
                }
                else{
                    break;
                }
            }
            if(!stack.empty()){
                int j = stack.back();
                int f_p = cars[j][0], f_s = cars[j][1];
                res[i] = 1.0 * (f_p - p) / (s - f_s);
            }
            stack.push_back(i);
        }
        return res;
    }
};