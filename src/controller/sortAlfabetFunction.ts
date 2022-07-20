import { IBike } from './../components/bikeCards/interfaceBikes';
import { createNewArrBike } from './createNewArrBikefunction';

export function SortArrayAlfabet(x: IBike, y: IBike): number {
    if (x.manufacturer < y.manufacturer) return -1;
    return 0;
}

export function sortAlfabet(): Array<IBike> {
    const arrBikeSort: Array<IBike> = createNewArrBike().sort(SortArrayAlfabet);
    return arrBikeSort;
}
