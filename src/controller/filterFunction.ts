import { IBike } from './../components/bikeCards/interfaceBikes';
import { IObjectFilter } from './objectFilter';

export function FilterBike(bike: IBike, filterObj: IObjectFilter): boolean {
    if (Object.values(filterObj.color).includes(true) && !filterObj.color[bike.color]) return false;
    if (Object.values(filterObj.age).includes(true) && !filterObj.age[bike.age]) return false;
    if (
        Object.values(filterObj.manufacturer).includes(true) &&
        !filterObj.manufacturer[bike.manufacturer.toLowerCase()]
    ) {
        return false;
    }
    if (filterObj.popular && !bike.popular) return false;
    if (filterObj.yearBike.lowerBound > bike.year || filterObj.yearBike.upperBound < bike.year) return false;
    if (filterObj.countBike.lowerBound > bike.amount || filterObj.countBike.upperBound < bike.amount) return false;
    if (filterObj.searchString && !bike.name.toLowerCase().includes(filterObj.searchString.toLowerCase())) {
        return false;
    }

    return true;
}
