class StockSpanner {
public:
    vector<int> arr;
    vector<int> st;
    StockSpanner() {
        arr = vector<int>();
        st = vector<int>();
    }
    
    int next(int price) {
        int ret;
        arr.push_back(price);
        while(!st.empty() && arr[st.back() - 1] <= price){
            st.pop_back();
        }
        ret = arr.size() - (st.empty() ? 0 : st.back());
        st.push_back(arr.size());
        /*for(auto i : st){
            cout << i << " ";
        }
        cout << endl;*/
        return ret;
    }
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * StockSpanner* obj = new StockSpanner();
 * int param_1 = obj->next(price);
 */