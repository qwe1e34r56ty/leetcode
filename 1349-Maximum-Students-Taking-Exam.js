/**
 * @param {character[][]} seats
 * @return {number}
 */
var maxStudents = function(seats) {
    let row = seats.length;
    let column = seats[0].length;
    let dp = new Array(1 << (column * 2)).fill(0);
    for(let i = 0; i < row; i++){
        for(let j = 0; j < (1 << column); j++){
            for(let k = 0; k < (1 << column); k++){
                dp[j] = Math.max(dp[j], dp[(j << column) + k]);
                //dp[(j << column) + k] = 0;
            }
        }
        if(seats[i][0] == '.'){
            for(let j = 0; j < (1 << column); j++){
                if((j & 2) == 0){
                    dp[j + (1 << column)] = dp[j] + 1;
                }
            }
        }
        for(let j = 1; j < column - 1; j++){
            if(seats[i][j] == '.'){
                for(let k = 0, sample = (1 << (j - 1)) | (1 << (column + j - 1)) | (1 << (j + 1)); k < (1 << (column + j)); k++){
                    if((k & sample) == 0){
                        dp[k + (1 << (column + j))] = dp[k] + 1;
                    }
                }
            }
        }
        if(column > 1){
            for(let j = 0, sample = (1 << (column - 2)) | (1 << (2 * column - 2)); j < (1 << (2 * column - 1)); j++){
                if(seats[i][column - 1] == '.'){
                    if((j & sample) == 0) {
                        dp[j + (1 << (2 * column - 1))] = dp[j] + 1;
                    }
                }
            }
        }
        //console.log(dp);
    }
    let answer = 0;
    for(let i = 0; i < (1 << (column * 2)); i++){
        answer = Math.max(answer, dp[i]);
    }
    return answer;
};