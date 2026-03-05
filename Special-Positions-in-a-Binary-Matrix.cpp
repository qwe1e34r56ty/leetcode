1class Solution {
2public:
3    int numSpecial(vector<vector<int>>& mat) {
4        int m = mat.size();
5        int n = mat[0].size();
6        vector<int> rowCount(m, 0);
7        vector<int> colCount(n, 0);
8        
9        for (int row = 0; row < m; row++) {
10            for (int col = 0; col < n; col++) {
11                if (mat[row][col] == 1) {
12                    rowCount[row]++;
13                    colCount[col]++;
14                }
15            }
16        }
17        
18        int ans = 0;
19        for (int row = 0; row < m; row++) {
20            for (int col = 0; col < n; col++) {
21                if (mat[row][col] == 1) {
22                    if (rowCount[row] == 1 && colCount[col] == 1) {
23                        ans++;
24                    }
25                }
26            }
27        }
28        
29        return ans;
30    }
31};