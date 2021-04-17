// Best day to sell stocks
var maxProfit = function(prices){
    var min = Number.MAX_SAFE_INTEGER;
    var max = 0;

    for (var i = 0;i < prices.length;i++) {
        min = Math.min(prices[i],min);
        max = Math.max(prices[i]-min,max);

    }
    return max;
}