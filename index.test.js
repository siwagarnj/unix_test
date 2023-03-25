"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("./merge");
describe("testing merge function", () => {
    test("merge empty array", () => {
        expect((0, merge_1.merge)([], [])).toEqual([]);
    });
    test("merge equal array", () => {
        expect((0, merge_1.merge)([1, 2], [1, 2])).toEqual([1, 1, 2, 2]);
    });
    test("merge equal length array but not equal value", () => {
        expect((0, merge_1.merge)([1, 2], [2, 4])).toEqual([1, 2, 2, 4]);
        expect((0, merge_1.merge)([2, 4], [1, 2])).toEqual([1, 2, 2, 4]);
    });
    test("merge unequal size array", () => {
        expect((0, merge_1.merge)([1, 2, 3], [1, 2])).toEqual([1, 1, 2, 2, 3]);
        expect((0, merge_1.merge)([1, 2], [1, 2, 3])).toEqual([1, 1, 2, 2, 3]);
        expect((0, merge_1.merge)([2, 5], [1, 2, 3])).toEqual([1, 2, 2, 3, 5]);
        expect((0, merge_1.merge)([5, 8], [1, 2, 3])).toEqual([1, 2, 3, 5, 8]);
    });
});
