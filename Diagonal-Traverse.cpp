class Solution {
public:
    vector<int> findDiagonalOrder(vector<vector<int>>& mat) {
        vector<int> ret(mat.size() * mat[0].size());
        int i = 0;
        pair<int, int> cur{0, 0};
        while(cur.first < mat.size() && cur.second < mat[0].size()){
            ret[i++] = mat[cur.first][cur.second];
            moveNext(cur, mat);
        }
        return ret;
    }

    void moveNext(pair<int, int>& cur, vector<vector<int>>& mat){
        int y = cur.first;
        int x = cur.second;
        if((y + x) % 2){
            if(x == 0){
                if(y == mat.size() - 1){
                    cur.second++;
                }else{
                    cur.first++;
                }
            }else{
                if(y == mat.size() - 1){
                    cur.second++;
                }else{
                    cur.first++;
                    cur.second--;
                }
            }
        }else{
            if(y == 0){
                if(x == mat[0].size() - 1){
                    cur.first++;
                }else{
                    cur.second++;
                }
            }else{
                if(x == mat[0].size() - 1){
                    cur.first++;
                }else{
                    cur.first--;
                    cur.second++;
                }
            }
        }
    }
};