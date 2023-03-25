import { merge } from "./index";

describe("testing merge function", () => {
  test("merge empty array", () => {
    expect(merge([], [])).toEqual([]);
  });
  test("merge equal array", () => {
    expect(merge([1, 2], [1, 2])).toEqual([1, 1, 2, 2]);
  });
  test("merge equal length array but not equal value", () => {
    expect(merge([1, 2], [2, 4])).toEqual([1, 2, 2, 4]);
    expect(merge([2, 4], [1, 2])).toEqual([1, 2, 2, 4]);
  });
  test("merge unequal size array", () => {
    expect(merge([1, 2, 3], [1, 2])).toEqual([1, 1, 2, 2, 3]);
    expect(merge([1, 2], [1, 2, 3])).toEqual([1, 1, 2, 2, 3]);
    expect(merge([2, 5], [1, 2, 3])).toEqual([1, 2, 2, 3, 5]);
    expect(merge([5, 8], [1, 2, 3])).toEqual([1, 2, 3, 5, 8]);
  });
});
