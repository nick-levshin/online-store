import { SortArrayAlfabet } from '../controller/sortAlfabetFunction';
import { SortArrayAlfabetReverse } from '../controller/sortAlfabetReverseFunction';
import { fakeObj1, fakeObj2 } from './fakeItem';

describe('sort function', () => {
    describe('sort alphabet function', () => {
        it('sort alphabet function returns -1', () => {
            const result = SortArrayAlfabet(fakeObj1, fakeObj2);
            expect(result).toBe(-1);
        });
    });
    describe('sort alphabet Reverse function', () => {
        it('sort alphabet function returns 1', () => {
            const res = SortArrayAlfabetReverse(fakeObj2, fakeObj1);
            expect(res).toBe(-1);
        });
    });
});
