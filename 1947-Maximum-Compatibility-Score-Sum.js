/**
 * @param {number[][]} students
 * @param {number[][]} mentors
 * @return {number}
 */
var maxCompatibilitySum = function(students, mentors) {
    let m = students.length;
    let n = students[0].length;
    let memo = new Array(m);
    for(let i = 0; i < m; i++){
        memo[i] = new Array(1 << m).fill(-1);
    }
    return dp(0, 0);
    function dp(i, cur){
        if(i == m){
            return 0;
        }
        let ans = memo[i][cur];
        if(ans != -1){
            return ans;
        }
        ans = 0;
        let next = ((1 << m) - 1) ^ cur;
        for(let j = 0; j < m; j++){
            if(next & (1 << j)){
                let tmp = 0;
                for(let k = 0; k < n; k++){
                    if(students[i][k] == mentors[j][k]){
                        tmp++;
                    }
                }
                ans = Math.max(ans, tmp + dp(i + 1, cur | (1 << j)));
            }
        }
        memo[i][cur] = ans;
        return ans;
    }
};