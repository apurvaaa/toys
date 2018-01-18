/*As an input into a statistical model that predicts movies' opening weekend box offices, we collect publicly available data about how people are interacting with different movies online. Suppose we have jobs that regularly query this data across a specific time range; however, the API is unreliable so these jobs sometimes fail or collect an unpredictable time range. There is a set time range that we need to have data collected for, so our goal is to determine what intervals still need to be collected.

For this problem, you should provide a function that takes two parameters:
The first, collectedIntervals, will be an array of times that represents the ranges that have been successfully collected. Each element in the array will be a 2-tuple (or array with 2 elements) representing the start and end time of the interval. You can assume that the intervals will not overlap and all start times and end times will be distinct.
The second, desiredInterval, will be a 2-tuple (or array with 2 elements) representing the start and end time of the interval that we wish to have data for. Your function should return a list of the intervals that still need to be collected. For this problem, assume times are integers.

Example: 
collectedIntervals = [[10,15], [3,4], [7,9]]
desiredInterval = [1,12]
Your code should return [[1,3], [4,7], [9,10]] since these are the intervals in the range [1,12] that have not been collected.
*/

/*

var remainingIntervals = function(collectedIntervals, desiredInterval) {
    let ordered = collectedIntervals;
    ordered.sort((a, b) => {
        return a[0] - b[0]
    })

    console.log(ordered)
    let intervalBegun = false;
    let res = [];
    for (let i = 0; i < ordered.length; i++) {
        if (!intervalBegun && ordered[i][0] > desiredInterval[0] && ordered[i][0] < desiredInterval[1]) {
            intervalBegun = true
            res.push([desiredInterval[0], ordered[i][0]]);
        } else if (!intervalBegun && ordered[0]< desiredInterval[0] && ordered[i][1] > desiredInterval[0]) {
            if (ordered[])
        }
    }


};


var remainingIntervals2 = function(collectedIntervals, desiredInterval) {
    let ordered = collectedIntervals;
    ordered.sort((a, b) => {
        return a[0] - b[0]
    })

    console.log(ordered)
    let intervalBegun = false;
    let res = [];
    let prev;
    for (let i = 0; i < ordered.length; i++) {
        if (!intervalBegun) {
            if (ordered[i][0] > desiredInterval[0]) {
                res.push([desiredInterval[0], ordered[i][0]])
                if (ordered[i][1] )
            } else {
               // nothing happens 
            }
        } else {

        }

    }


};

var remainingIntervals3 = function(collectedIntervals, desiredInterval) {
    collectedIntervals.sort((a, b) => {
        return a[0] - b[0]
    })

    console.log(collectedIntervals)
    let intervalBegun = false;
    let res = [];
    let prev;
    for (let i = 0; i < collectedIntervals.length; i++) {
        
        if (!intervalBegun && collectedIntervals[i][1] >= desiredInterval[1]){
            intervalBegun = true
            // interval starts before teh cur interval
            if (collectedIntervals[i][0] >= desiredInterval[0]

            // interval starts in the middle of current interval    
            if (prev === undefined) {
                // ending could be before the start of cur interval or not
                res.push([desiredInterval[0], Math.mix(desiredInterval[1], collectedIntervals[i][0])])
            }
        } else if (intervalBegun){

        }

        // interval starts from the middle of current interval


        // interval starts after the cur interval
    }

    // merge continuous intervals
}
*/

var remainingIntervals3 = function(collectedIntervals, desiredInterval) {
    collectedIntervals.sort((a, b) => {
        return a[0] - b[0]
    })
    let intervalBegun = false;
    let res = [];
    let prev;
    let i = 0;

    // skip intervals till the start of the interval
    while (i < collectedIntervals.length && desiredInterval[0] > collectedIntervals[i][0] && desiredInterval[0] > collectedIntervals[i][1]) {
        i++;
    }
    if (i < collectedIntervals.length) {
        intervalBegun = true

    } else {
        return [desiredInterval]
    }
    // find gaps in the beginning of interval lists
    if (desiredInterval[0] < collectedIntervals[i][0]) {
        res.push([desiredInterval[0], Math.min(collectedIntervals[i][0], desiredInterval[1])])
        
        if (desiredInterval[1] <= collectedIntervals[i][1]) {
            return res;
        } else {
            prev = collectedIntervals[i][1]
        }
        i++;
    }
    // find gaps in the interval lists
         // till end of desired Interval
    while ( intervalBegun ) {
        // end of desired interval can be by end of prev 
        if (prev === desiredInterval[1]) {
            return res
        }

        // end of desired interval could be beyond all intervals 
        if (i >= collectedIntervals.length) {
            if (prev!== undefined) {
            res.push([prev, desiredInterval[1]])
            }
            return res
        }

        // end of desired interval could be in between perv and cur interval start
        if (desiredInterval[1] < collectedIntervals[i][0]) {
            if (prev!== undefined) {
                res.push([prev, desiredInterval[1]])
            }
            return res
        }
        // end of desired interval could be within this interval
        if (desiredInterval[1] <= collectedIntervals[i][1]) {
            if (prev!== undefined) {
                res.push([prev, collectedIntervals[i][0]])
            }
            return res;
        }
        // end of interval could be after cur intreval
        if (desiredInterval[1] > collectedIntervals[i][1]) {
            if (prev!== undefined) {
            res.push([prev, collectedIntervals[i][0]])
            }
            prev = collectedIntervals[i][1]
        }

        i++
    }
    return res;
}


console.log(remainingIntervals3([[3,4], [7,9], [10,15] ], [2, 9]));