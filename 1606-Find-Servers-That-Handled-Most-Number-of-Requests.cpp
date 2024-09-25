class Solution {
public:
    vector<int> busiestServers(int k, vector<int>& arrival, vector<int>& load) {
        map<int, int> ready;
        multimap<int, int> end;
        vector<int> handled(k, 0);
        for(int i = 0; i < k; i++){
            ready[i] = 0;
        }
        //cout << ready.lower_bound(2 % 3)->first << endl << endl;
        for(int i = 0; i < arrival.size(); i++){
            while(end.size() && end.begin()->first <= arrival[i]){
                ready[end.begin()->second] = end.begin()->first;
                end.erase(end.begin());
            }
            /*for(auto j : ready){
                cout << j.first << " ";
            }
            cout << endl;
            for(auto j : end){
                cout << j.first << " ";
            }
            cout << endl;*/
            if(ready.size()){
                if(ready.lower_bound(i % k) != ready.end()){
                    //cout << "next " << ready.lower_bound(i % k)->first << endl;
                    end.insert(pair<int, int>(arrival[i] + load[i], ready.lower_bound(i % k)->first));
                    handled[ready.lower_bound(i % k)->first]++;
                    ready.erase(ready.lower_bound(i % k));     
                }else{
                    end.insert(pair<int, int>(arrival[i] + load[i], ready.begin()->first));
                    handled[ready.begin()->first]++;
                    ready.erase(ready.begin());
                }
            }
        }
        /*for(auto i : handled){
            cout << i << endl;
        }*/
        vector<int> ans;
        int m = 0;
        for(auto i : handled){
            m = max(m, i);
        }
        for(int i = 0; i < k; i++){
            if(handled[i] == m){
                ans.push_back(i);
            }
        }
        return ans;
    }
};