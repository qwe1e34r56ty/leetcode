class Solution {
public:
    bool cross(int row, int col, vector<vector<int>>& mat){
        queue<pair<int, int>> q;
        vector<int> dir = {0, -1, 0, 1, 0};
        for(int i = 0; i < col; i++){
            if(mat[0][i] == 0){
                q.push(pair<int, int>(0, i));
                mat[0][i] = 1;
            }
        }
        while(q.size()){
            pair<int, int> i = q.front();
            for(int j = 0; j < 4; j++){
                int nextRow = i.first + dir[j];
                int nextCol = i.second + dir[j + 1];
                if(nextRow < 0 || nextRow >= row || nextCol < 0 || nextCol >= col || 
                    mat[nextRow][nextCol]){
                    continue;
                }
                if(nextRow == row - 1){
                    return true;
                }
                q.push(pair<int, int>(nextRow, nextCol));
                mat[nextRow][nextCol] = 1;
            }
            q.pop();
        }
        return false;
    }
    int latestDayToCross(int row, int col, vector<vector<int>>& cells) {
        for(auto& i : cells){
            for(auto& j : i){
                j--;
            }
        }
        int l = 0;
        int r = cells.size() - 1;
        vector<vector<int>> mat(row, vector<int>(col, 0));
        while(l < r){
            for(auto& i : mat){
                fill(i.begin(), i.end(), 0);
            }
            int m = (l + r + 1) >> 1;
            for(int i = 0; i < m; i++){
                mat[cells[i][0]][cells[i][1]] = 1;
            }
            if(cross(row, col, mat)){
                l = m;
            }
            else{
                r = m - 1;
            }
        }
        return l;
    }
};