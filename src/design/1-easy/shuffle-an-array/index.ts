class Solution {
  private original: number[];

  constructor(public nums: number[]) {
    this.original = [...nums];
  }

  reset(): number[] {
    this.nums = [...this.original];
    return this.nums;
  }

  shuffle(): number[] {
    let i = this.nums.length - 1;

    while (i > 0) {
      const randomIndex = Math.floor(Math.random() * (i + 1));

      [this.nums[i], this.nums[randomIndex]] = [
        this.nums[randomIndex],
        this.nums[i],
      ];

      i -= 1;
    }

    return this.nums;
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

export default Solution;
