/**
 * Time Complexity: O(N * M * 4), where N is the length of each gene (always 8)
 *                  and M is the number of genes in the bank, 4 - number of gens.
 * Space Complexity: O(M) for storing the bank set and the visited set.
 */
export function minMutation(
  startGene: string,
  endGene: string,
  bank: string[],
): number {
  const geneBank = new Set(bank);

  if (!geneBank.has(endGene)) return -1;

  const genes = ['A', 'C', 'G', 'T'];
  const queue: [string, number][] = [[startGene, 0]];
  const visited = new Set([startGene]);

  while (queue.length) {
    const [currentGene, mutations] = queue.shift()!;

    for (let i = 0; i < currentGene.length; i += 1) {
      for (const gene of genes) {
        if (currentGene[i] !== gene) {
          const nextGene =
            currentGene.slice(0, i) + gene + currentGene.slice(i + 1);

          if (nextGene === endGene) return mutations + 1;

          if (geneBank.has(nextGene) && !visited.has(nextGene)) {
            visited.add(nextGene);
            queue.push([nextGene, mutations + 1]);
          }
        }
      }
    }
  }

  return -1;
}
