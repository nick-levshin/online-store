import { IFilterManufacturer } from './filterManufacturer/interfaceFilterManufacturer';
import { IFilterColor } from './filterColor/interfaceFilterColor';
import { IFilterAge } from './filterAge/interfaceFilterAge';
import { IFilterPopular } from './filterPopular/interfaceFilterPopular';

export interface IHeaderFilterItem {
    manufacturer: IFilterManufacturer;
    color: IFilterColor;
    age: IFilterAge;
    popular: IFilterPopular;
    draw: () => HTMLDivElement;
}
