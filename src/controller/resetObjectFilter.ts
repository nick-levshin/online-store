import { ObjectFilter } from './objectFilter';

export function resetObjectFilter(): void {
    ObjectFilter.manufacturer.aist = false;
    ObjectFilter.manufacturer.stels = false;
    ObjectFilter.manufacturer.greenway = false;
    ObjectFilter.color.red = false;
    ObjectFilter.color.blue = false;
    ObjectFilter.color.green = false;
    ObjectFilter.color.white = false;
    ObjectFilter.color.yellow = false;
    ObjectFilter.color.grey = false;
    ObjectFilter.age.children = false;
    ObjectFilter.age.teenage = false;
    ObjectFilter.age.adult = false;
    ObjectFilter.popular = false;
    ObjectFilter.countBike.lowerBound = 0;
    ObjectFilter.countBike.upperBound = 100;
    ObjectFilter.yearBike.lowerBound = 2000;
    ObjectFilter.yearBike.upperBound = 2022;
    ObjectFilter.searchString = '';
}
