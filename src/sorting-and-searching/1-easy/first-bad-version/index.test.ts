import getFirstBadVersion from './index';
describe('Testing "firstBadVersion"', () => {
  test.each([
    {n: 5, firstBadVersion: 4},
    {n: 100, firstBadVersion: 100},
    {n: 100, firstBadVersion: 1},
  ])(
    'should equal $firstBadVersion for number of versions $n and first bad version $firstBadVersion',
    ({n, firstBadVersion}) => {
      let numberOfCalls = 0;
      const isBadVersion = (version: number) => {
        numberOfCalls += 1;

        return version >= firstBadVersion;
      };

      expect(getFirstBadVersion(isBadVersion)(n)).toEqual(firstBadVersion);
      console.log('>>>', 'API call #', numberOfCalls);
    }
  );
});
