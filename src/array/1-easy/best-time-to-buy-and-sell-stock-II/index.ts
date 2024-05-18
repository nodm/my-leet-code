function maxProfit(prices: number[]): number {
  let profit = 0;

  for (let i = 1; i < prices.length; i += 1) {
    const dif = prices[i] - prices[i - 1];
    if (dif > 0) {
      profit += dif;
    }
  }

  return profit;
}

export default maxProfit;
