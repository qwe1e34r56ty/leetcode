int uniquePaths(int m, int n){
    int array[101][101] = {};
    array[1][1] = 1;
    for(int i = 1; i <= m; i++){
        for(int j = 1; j <= n; j++){
            array[i][j] = array[i][j] + array[i - 1][j] + array[i][j - 1];   
        }
    }
    return array[m][n];
}