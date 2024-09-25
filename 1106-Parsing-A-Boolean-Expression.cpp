class Solution {
public:
    bool parseBoolExpr(string exp) {
        int s_len = exp.size();
        vector<char> all_stack(s_len, 0);
        vector<char> oper_stack(s_len, 0);
        int cur = 0;
        int oper_cur = 0;
        char last;
        for(int i = 0; i < s_len; i++){
            if(exp[i] == '(' || exp[i] == ','){
                continue;
            }
            else if(exp[i] == ')'){
                bool tmp;
                oper_cur--;
                cur--;
                if(oper_stack[oper_cur] == '!'){
                    tmp = all_stack[cur] == 'f' ? true : false;
                    cur--;
                }
                else if(oper_stack[oper_cur] == '|'){
                    tmp = false;
                    while(all_stack[cur] != '|'){
                        tmp = tmp || (all_stack[cur] == 'f' ? false : true);
                        cur--;
                    }
                }
                else{
                    tmp = true;
                    while(all_stack[cur] != '&'){
                        tmp = tmp && (all_stack[cur] == 'f' ? false : true);
                        cur--;
                    }
                }
                all_stack[cur++] = tmp == true ? 't' : 'f';
            }
            else{
                all_stack[cur++] = exp[i];
                if(exp[i] == '!' || exp[i] == '&' || exp[i] == '|'){
                    oper_stack[oper_cur++] = exp[i];
                }
            }
            /*for(int i = 0; i < cur; i++){
                cout << all_stack[i] << endl;
            }
            cout << endl;*/
        }
        return all_stack[0] == 't' ? true : false;
    }
};