1class Solution {
2public:
3    vector<int> sortByBits(vector<int>& arr) {
4        vector<vector<int>> arrs(15, vector<int>());
5        for(int i = 0 ; i < arr.size(); i++){
6            int count = 0;
7            for(int j = 0; j < 15; j++){
8                if(arr[i] & (int)pow(2, j)){
9                    count++;
10                }
11            }
12            arrs[count].push_back(arr[i]);
13        }
14        vector<int> result;
15        for(int i = 0; i < 15; i++){
16            sort(arrs[i].begin(), arrs[i].end());
17            result.insert(result.end(), arrs[i].begin(), arrs[i].end());
18        }
19        return result;
20    }
21};