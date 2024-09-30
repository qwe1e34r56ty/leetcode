class CustomStack {
public:
    vector<int> stack;
    int cur;
    int maxSize;
    CustomStack(int maxSize) :
        stack(1000), cur(0), maxSize(maxSize) {
        
    }
    
    void push(int x) {
        if(cur < maxSize)
            stack[cur++] = x;
    }
    
    int pop() {
        if(cur > 0)
            return stack[--cur];
        return -1;
    }
    
    void increment(int k, int val) {
        for(int i = 0; i < min(maxSize, k); i++){
            stack[i] += val;
        }
    }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * CustomStack* obj = new CustomStack(maxSize);
 * obj->push(x);
 * int param_2 = obj->pop();
 * obj->increment(k,val);
 */