/**
 * O(n) solution
 */
export function maxProfit(prices: number[]): number {
  let profit = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i += 1) {
    const price = prices[i];

    if (price < minPrice) {
      minPrice = price;
    } else {
      const delta = price - minPrice;

      if (delta > profit) profit = delta;
    }
  }

  return profit;
}

/**
 * O(n ^ 2) solution
 */
export function maxProfitBrute(prices: number[]): number {
  let profit = 0;

  for (let i = 0; i < prices.length - 1; i += 1) {
    for (let j = i + 1; j < prices.length; j += 1) {
      const delta = prices[j] - prices[i];

      if (delta > profit) profit = delta;
    }
  }

  return profit;
}

export default maxProfit;
