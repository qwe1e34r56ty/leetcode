1class Solution {
2public:
3    int minSwaps(vector<vector<int>>& grid) {
4        multiset<pair<int, int>> ms = {};
5        int result = 0;
6        for(int i = 0; i < grid.size(); i++){
7            for(int j = grid[i].size() - 1; j >= -1; j--){
8                if(j == -1 || grid[i][j] == 1){
9                   ms.insert({i, grid[i].size() - 1 - j});
10                   break;
11                }
12            }
13        }
14        for(int i = 0; i < grid.size(); i++){
15            for(auto it = ms.begin(); it != ms.end(); it++){
16                if(it->second >= grid.size() - i - 1){
17                    result += distance(ms.begin(), it);
18                    ms.erase(it);
19                    break;
20                }
21            }
22            if(ms.size() != grid.size() - i - 1){
23                return -1;
24            }
25        }
26        return result;
27    }
28};