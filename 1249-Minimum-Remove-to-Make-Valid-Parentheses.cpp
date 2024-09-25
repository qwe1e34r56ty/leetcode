class Solution {
public:
    string minRemoveToMakeValid(string s) {
        int cur = 0;
        int front = 0;
        vector<char> p(s.begin(), s.end());
        vector<char> tmp;
        string ans;
        for(auto i : p){
            if(i == '('){
                front++;
                cur++;
                tmp.push_back(i);
            }
            else if(i == ')'){
                if(cur > 0){
                    tmp.push_back(i);
                    cur--;
                }
            }
            else{
                tmp.push_back(i);
            }
        }
        for(auto i : tmp){
            if(i == '('){
                if(front == cur){
                    continue;
                }
                else{
                    front--;
                }
            }
            ans.push_back(i);
        }
        return ans;
    }
};