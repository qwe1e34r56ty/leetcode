class Solution {
public:
    bool canFall(const vector<vector<char>>& box, int r, int c){
        if(box[r][c] != '#'){
            return false;
        }
        if(r == box.size() - 1){
            return false;
        }
        if(box[r + 1][c] != '.'){
            return false;
        }
        return true;
    }
    vector<vector<char>> rotateTheBox(vector<vector<char>>& box) {
        vector<vector<char>> rb(box[0].size(), vector<char>(box.size()));
        for(int i = 0; i < box.size(); i++){
            for(int j = 0; j < box[0].size(); j++){
                rb[j][box.size() - 1 - i] = box[i][j];
            }
        }
        for(int i = rb.size() - 1; i >= 0; i--){
            for(int j = 0; j < rb[0].size(); j++){
                int tmp = i;
                while(canFall(rb, tmp, j)){
                    rb[tmp + 1][j] = '#';
                    rb[tmp][j] = '.';
                    tmp++;
                }
            }
        }
        return rb;
    }
};