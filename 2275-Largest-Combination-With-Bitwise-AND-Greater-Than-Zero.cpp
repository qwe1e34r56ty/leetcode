class Solution {
public:
    int largestCombination(vector<int>& candidates) {
        int answer = 0;
        for(int i = 0, tmp = 0; i < 30; i++){
            for(auto j : candidates){
                tmp += !!((1 << i) & j);
            }
            answer = max(answer, tmp);
            tmp = 0;
        }
        return answer;;
    }
};