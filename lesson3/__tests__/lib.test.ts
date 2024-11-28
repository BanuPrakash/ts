import { filter, memo } from "../src/lib";

// AAA
describe('lib functionality', () => {
    // test spec
    it('should filter elements based on predicate', () => {
        const elems = [3,2,1,7,8];
        const predicate = jest.fn((x:number) => x % 2 === 0);
        const result = filter(elems, predicate);
        expect(result).toEqual([2, 8]);
        expect(predicate).toHaveBeenCalledTimes(5);
    })

    it("test memoization", () => {
        const fn = jest.fn( (x: number) => x * 2); // mock
        const memoized = memo(fn);
        expect(memoized(2)).toBe(4);
        expect(memoized(2)).toBe(4); // cache
        expect(memoized).toHaveBeenCalledTimes(1);
    })
})

