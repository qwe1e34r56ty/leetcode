/**
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
var smallestSufficientTeam = function(req_skills, people) {
    var key = {};
    var skills_len = req_skills.length;
    for(var i = 0; i < skills_len; i++){
        key[req_skills[i]] = i;
    }
    var people_len = people.length;
    for(var i = 0; i < people_len; i++){
        for(var j = 0, hold_len = people[i].length; j < hold_len; j++){
            people[i][j] = key[people[i][j]];
        }
    }
    var dp = new Array(1 << skills_len);
    for(var i = 0; i < (1 << skills_len); i++){
        dp[i] = new Array(people_len).fill(0);
    }
    dp[0] = [];
    //console.log(dp);
    for(var i = 0; i < people_len; i++){
        for(var j = 0; j < (1 << skills_len); j++){
            var tmp = j;
            for(var k = 0, hold_len = people[i].length; k < hold_len; k++){
                tmp |= (1 << people[i][k]);
            }
            if(dp[tmp].length > dp[j].length + 1){
                dp[tmp] = dp[j].concat(i);
            }
        }
    }
    //console.log(key);
    //console.log(people);
    //console.log(dp);
    return dp[(1 << skills_len) - 1];
};