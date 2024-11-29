class Solution {
public:
    int minimumTime(vector<vector<int>>& grid) {
        vector<vector<int>> dist(grid.size(), vector<int>(grid[0].size(), INT_MAX));
        dist[0][0] = 0;
        queue<pair<int, int>> q;
        queue<pair<int, int>> tmp_q;
        q.push({0, 0});
        vector<pair<int, int>> dir{{0, -1}, {-1, 0}, {0, 1}, {1, 0}};
        int r = grid.size();
        int c = grid[0].size();
        while(!q.empty()){
            if(grid[0][1] >= 2 && grid[1][0] >= 2) break;
            while(!q.empty()){
                pair<int, int> tmp_p = q.front();
                q.pop();
                int cur_y = tmp_p.first;
                int cur_x = tmp_p.second;
                for(const auto& d : dir){
                    int next_y = tmp_p.first + d.first;
                    int next_x = tmp_p.second + d.second;
                    int tmp_add = 0;
                    bool valid_bound = next_y >= 0 && next_y < r && next_x >= 0 && next_x < c;
                    if(!valid_bound) continue;
                    bool valid_next = dist[cur_y][cur_x] + 1 >= grid[next_y][next_x];
                    if(!valid_next){
                        tmp_add += ((grid[next_y][next_x] - 1 - dist[cur_y][cur_x]) / 2) * 2 + ((grid[next_y][next_x] - 1 - dist[cur_y][cur_x]) % 2) * 2;
                    }
                    int cur_dist = dist[next_y][next_x];
                    int new_dist = dist[cur_y][cur_x] + tmp_add + 1;
                    if(new_dist < cur_dist){
                        dist[next_y][next_x] = new_dist;
                        tmp_q.push({next_y, next_x});
                    }
                }
            }
            q = tmp_q;
            while(!tmp_q.empty())
                tmp_q.pop();
        }
        for(auto i : dist){
            for(auto j : i){
                //cout << j << ", ";
            }
            //cout << endl;
        }
        if(dist[r - 1][c - 1] == INT_MAX)
            dist[r - 1][c - 1] = -1;
        return dist[r - 1][c - 1];
    }
};