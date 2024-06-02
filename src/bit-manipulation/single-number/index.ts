/**
 * The XOR operation has some fascinating properties that make it useful
 * in various programming scenarios, including finding the single element
 * in an array where all other elements appear twice.
 *
 * Here's why the XOR operation works in this case:
 *   * XORing two identical numbers results in 0: a ⊕ a = 0.
 *   * XORing any number with 0 results in the number itself: a ⊕ 0 = a
 *   * XOR is commutative and associative: a ⊕ b = b ⊕ a and (a ⊕ b) ⊕ c = a ⊕ (b ⊕ c).
 *
 * Given these properties, when you XOR all the elements in the array:
 *   * Paired elements will cancel each other out because a ⊕ a = 0.
 *   * The only element left will be the one that appears only once.
 *
 * Therefore, the result of XORing all the elements in the array will be the single
 * element that appears only once.
 */
export default function singleNumber(nums: number[]): number {
  let single = 0;

  for (const num of nums) {
    single ^= num;
  }

  return single;
}

// function singleNumber(nums: number[]): number {
//   const elementCounter = new Set<number>();

//   nums.forEach(element => {
//     if (elementCounter.has(element)) {
//       elementCounter.delete(element);
//     } else {
//       elementCounter.add(element);
//     }
//   });

//   const [element] = elementCounter.values();

//   return element;
// }
