import { IBike } from '../components/bikeCards/interfaceBikes';
import { createNewArrBike } from './createNewArrBikefunction';

export function SortArrayAlfabetReverse(x: IBike, y: IBike): number {
    if (x.manufacturer > y.manufacturer) return -1;
    return 0;
}

export function sortAlfabetReverse(): Array<IBike> {
    const arrBikeSort: Array<IBike> = createNewArrBike().sort(SortArrayAlfabetReverse);
    return arrBikeSort;
}
