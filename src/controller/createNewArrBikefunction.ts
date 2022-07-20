import { IBike } from './../components/bikeCards/interfaceBikes';
import { bikes } from './../components/bikeCards/bikeType';
import { FilterBike } from './filterFunction';
import { ObjectFilter } from './objectFilter';

export function createNewArrBike(): Array<IBike> {
    const tempArrBike: Array<IBike> = [];
    for (const bike of bikes) {
        if (FilterBike(bike, ObjectFilter)) {
            tempArrBike.push(bike);
        }
    }
    return tempArrBike;
}
