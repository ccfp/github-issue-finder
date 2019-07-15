import subsequences from "lib/subsequences";

describe("subsequences", () => {
  it("returns the full array as first element", () => {
    expect(subsequences([1, 2, 3])[0]).toEqual([1, 2, 3]);
    expect(subsequences([1])[0]).toEqual([1]);
  });
  it("returns all but last element from input array as second element", () => {
    expect(subsequences([1, 2, 3, 4])[1]).toEqual([1, 2, 3]);
  });
  it("returns an empty nested array if given an empty array", () => {
    expect(subsequences([])).toEqual([[]]);
  });
});
