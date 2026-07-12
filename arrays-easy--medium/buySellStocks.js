//Find the best time to buy and sell stocks - if no profit return 0.

let arr = [7, 1, 5, 3, 6, 4];
// let arr = [7, 6, 1];

let prices = [7, 1, 5, 3, 6, 4];
// let prices = [7, 6, 1];

let len = arr.length;
let max = 0;
let buy = 0, sell = 0;

function bestTime(arr) {
    for( i=0; i<len; i++) {
        for( j=i; j<len; j++) {
            if((arr[j]-arr[i]) > max) {
                max = (arr[j]-arr[i]);
                buy = i;
                sell = j;
            }
        }
    }
    console.log("Buy at value "+arr[buy]+" and sell at value "+arr[sell]);
    return max;
};

var maxProfit = function(prices) {
    let minVal = prices[0];
    let maxGain = 0;

    for(let i= 1; i<prices.length; i++) {
        if(prices[i] - minVal > maxGain)  {
            maxGain = prices[i] - minVal;
        }
        if(prices[i] < minVal) {
            minVal = prices[i];
        }
    }
    console.log("Buy at: "+ minVal+". Max Gain: "+ maxGain)

    return maxGain;
}

const result = bestTime(arr);
// console.log(result);
const result1 = maxProfit(prices);
// console.log(result1);