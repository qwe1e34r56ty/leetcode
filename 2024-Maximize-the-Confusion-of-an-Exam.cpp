class Solution {
public:
    int maxConsecutiveAnswers(string answerKey, int k) {
        deque<int> queue;
        int len = answerKey.size();
        int i = 0;
        int j = 1;
        int used = 0;
        int ans = 0;
        if(answerKey[0] == 'F'){
            queue.push_back(0);
            used++;
        }
        ans++;
        for(;j < len; j++){
            if(answerKey[j] == 'F'){
                if(used == k){
                    i = queue.front() + 1;
                    queue.pop_front();
                    used--;
                }
                queue.push_back(j);
                used++;
            }
            ans = max(ans, j - i + 1);
        }
        while(queue.size()){
            queue.pop_front();
        }
        i = 0;
        j = 1;
        used = 0;
        if(answerKey[0] == 'T'){
            queue.push_back(0);
            used++;
        }
        ans = max(ans, 1);
        for(;j < len; j++){
            if(answerKey[j] == 'T'){
                if(used == k){
                    i = queue.front() + 1;
                    queue.pop_front();
                    used--;
                }
                queue.push_back(j);
                used++;
            }
            ans = max(ans, j - i + 1);
        }
        return ans;
    }
};