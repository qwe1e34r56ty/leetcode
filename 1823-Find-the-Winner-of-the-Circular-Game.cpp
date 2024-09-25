#include<iostream>
#include<algorithm>
#include<vector>
using namespace std;

class Solution {
public:
    int findTheWinner(int n, int k) {
        vector<int> arr(n);
        for(auto it = arr.begin(); it != arr.end(); it++){
            *it = it - arr.begin() + 1;
        }
        auto cur = arr.begin();
        auto prev = cur;
        for(int i = 0; i < n - 1; i++){
            for(int j = 0; j < k - 1; j++){
                prev = cur;
                cur = next(cur, arr);
            }
            arr.erase(cur);
            if(k != 1){
                cur = next(prev, arr);
            }
            /*for(auto it = arr.begin(); it != arr.end(); it++){
                cout << *it << ", ";
            }
            cout << endl;*/
        }
        return *arr.begin();
    }
    std::vector<int>::iterator next(std::vector<int>::iterator cur, std::vector<int>& container){
        cur++;
        if(cur >= container.end()){
            return container.begin();
        }
        return cur;
    }
};