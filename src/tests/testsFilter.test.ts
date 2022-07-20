import { fakeObj3, fakeObjectFilter } from './fakeItem';
import { FilterBike } from '../controller/filterFunction';

describe('filter array bikes', () => {
    it('filter array bikes from FilterObject', () => {
        const res = FilterBike(fakeObj3, fakeObjectFilter);
        expect(res).toBe(false);
    });
});
