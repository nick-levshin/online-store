import { IBike } from '../components/bikeCards/interfaceBikes';
import { createNewArrBike } from './createNewArrBikefunction';

function createComparator(key: 'year' | 'amount' | 'price', ascending: boolean) {
    function comparator(x: IBike, y: IBike): number {
        return ascending ? x[key] - y[key] : y[key] - x[key];
    }
    return comparator;
}

export function sortMinMax(key: 'year' | 'amount' | 'price', ascending: boolean): Array<IBike> {
    const comparatorFunc = createComparator(key, ascending);
    const arrBikeSort: Array<IBike> = createNewArrBike().sort(comparatorFunc);
    return arrBikeSort;
}
