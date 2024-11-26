class Solution {
public:
    int slidingPuzzle(vector<vector<int>>& board) {
        vector<vector<int>> dir = {{1, 3}, {0, 2, 4}, {1, 5}, {0, 4}, {1, 3, 5}, {2, 4}};
        string target = "123450";
        unordered_set<string> vis;
        queue<string> q;
        string start = "";

        for(const auto& i : board){
            for(int j : i){
                start += to_string(j);
            }
        }

        q.push(start);
        vis.insert(start);
        int step = 0;

        while (!q.empty()) {
            int size = q.size();
            while (size--) {
                string current = q.front();
                q.pop();

                if (current == target) return step;

                int zero = current.find('0');

                for (auto move : dir[zero]) {
                    string next = current;
                    swap(next[move], next[zero]);
                    if (!vis.contains(next)) {
                        vis.insert(next);
                        q.push(next);
                    }
                }
            }
            step++;
        }
        return -1;
    }
};