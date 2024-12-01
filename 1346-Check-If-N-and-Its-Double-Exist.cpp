class Solution {
public:
    bool checkIfExist(vector<int>& arr) {
        unordered_set<int> s;
        int zero_c = 0;
        for(auto i : arr){
            s.insert(i);
            zero_c += i == 0;
        }
        if(zero_c > 1){
            return true;
        }
        for(auto i : s){
            if(i != 0 && s.find(i * 2) != s.end()){
                return true;
            }
        }
        return false;
    }
};