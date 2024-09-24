/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function(row) {
    var n = row.length / 2;
    var answer = 0;
    var search = 0;
    for(var i = 0; i < 2 * n; i+=2){
        if(row[i] % 2){
            search = row[i] - 1;
        }
        else{
            search = row[i] + 1;
        }
        for(var j = i + 2, tmp = 0; j < 2 * n; j++){
            if(row[j] == search){
                tmp = row[i + 1];
                row[i + 1] = row[j];
                row[j] = tmp;
                answer++;
                break;
            }
        }
    }
    return answer;
};