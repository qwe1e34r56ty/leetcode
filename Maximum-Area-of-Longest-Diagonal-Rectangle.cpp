class Solution {
public:
    int areaOfMaxDiagonal(vector<vector<int>>& dimensions) {
        int ret = 0;
        double maxDiagonal = 0;
        for(int i = 0; i < dimensions.size(); i++){
            double curDiagonal = sqrt(pow(dimensions[i][0], 2) + pow(dimensions[i][1], 2));
            if(curDiagonal > maxDiagonal){
                ret = dimensions[i][0] * dimensions[i][1];
                maxDiagonal = curDiagonal;
            }
            if(curDiagonal == maxDiagonal){
                ret = max(ret, dimensions[i][0] * dimensions[i][1]);
            }
        }
        return ret;
    }
};