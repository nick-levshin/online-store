import { IFilterHave } from './filter_have/interfaceFilterHave';
import { IFilterYear } from './filter_year/interfaceFilterYear';
export interface IHeaderFilterRange {
    have: IFilterHave;
    year: IFilterYear;
    draw: () => HTMLDivElement;
}
