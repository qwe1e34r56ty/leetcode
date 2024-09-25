class DinnerPlates {
public:
    int capacity;
    vector<stack<int>> st;
    set<int> empty;
    int last;
    DinnerPlates(int capacity) {
        this->capacity = capacity;
        st = vector<stack<int>>();
        empty = set<int>();
        last = -1;
    }
    
    void push(int val) {
        /*for(auto i : st){
            cout << i.size();
        }
        cout << " " << last << " ";
        for(auto i : empty){
            cout << i;
        }
        cout << endl;*/
        if(last == -1 || (st[last].size() == capacity && empty.empty())){
            last++;
            st.push_back(stack<int>());
            st[last].push(val);
        }
        else if(empty.empty()){
            st[last].push(val);
        }
        else{
            st[*empty.begin()].push(val);
            if(st[*empty.begin()].size() == capacity){
                empty.erase(empty.begin());
            }
        }
    }
    
    int pop() {
        /*for(auto i : st){
            cout << i.size();
        }
        cout << " " << last << " ";
        for(auto i : empty){
            cout << i;
        }
        cout << endl;*/
        if(last == -1){
            return -1;
        }
        if(st[last].size() == capacity){
            empty.insert(last);
        }
        int ret = st[last].top();
        st[last].pop();
        while(last != - 1 && st[last].size() == 0){
            empty.erase(last);
            last--;
        }
        return ret;
    }
    
    int popAtStack(int index) {
        if(index == last){
            return pop();
        }
        /*for(auto i : st){
            cout << i.size();
        }
        cout << " " << last << " ";
        for(auto i : empty){
            cout << i;
        }
        cout << endl;*/
        if(index > last || st[index].size() == 0){
            return -1;
        }
        if(st[index].size() == capacity){
            empty.insert(index);
        }
        int ret = st[index].top();
        st[index].pop();
        return ret;
    }
};

/**
 * Your DinnerPlates object will be instantiated and called as such:
 * DinnerPlates* obj = new DinnerPlates(capacity);
 * obj->push(val);
 * int param_2 = obj->pop();
 * int param_3 = obj->popAtStack(index);
 */