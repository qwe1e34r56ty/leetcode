/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    var start_trips = trips.sort(function(a, b){return a[1] - b[1]}).slice();
    var end_trips = trips.sort(function(a, b){ return a[2] - b[2]}).slice();
    var start_passenger = start_trips.map(function(a){return a[0]});
    var start = start_trips.map(function(a){return a[1]});
    start.push(Infinity);
    var end_passenger = end_trips.map(function(a){return a[0]});
    var end = end_trips.map(function(a){return a[2]});
    end.push(Infinity);
    var cur_passenger = 0;
    /*console.log(start_trips);
    console.log(end_trips);
    console.log(start);
    console.log(start_passenger);
    console.log(end);
    console.log(end_passenger);*/
    for(var start_i = 0, end_i = 0; end[end_i] != Infinity;){
        if(start[start_i] < end[end_i]){
            cur_passenger += start_passenger[start_i];
            start_i++;
            if(cur_passenger > capacity){
                return false;
            }
        }
        else{
            cur_passenger -= end_passenger[end_i];
            end_i++;
        }
    }
    return true;
};