

int climbStairs(int n){
    int ways[46] = {};
    ways[0] = 1;
    ways[1] = 1;
    for(int i = 2; i < n + 1; i++){
        ways[i] += ways[i - 1];
        ways[i] += ways[i - 2];
    }
    return ways[n];
}