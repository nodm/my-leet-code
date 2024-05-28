function removeElement(nums: number[], val: number): number {
  let directIndex = 0;
  let reverseIndex = nums.length - 1;

  while (directIndex <= reverseIndex) {
    if (nums[directIndex] === val) {
      nums[directIndex] = nums[reverseIndex];
      reverseIndex -= 1;
    } else {
      directIndex += 1;
    }
  }

  return directIndex;
}

export default removeElement;
