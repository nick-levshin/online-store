import { IHeaderTitle } from './title_header/interfaceTitleBlock';
import { IHeaderFilterItem } from './filter_Item_header/interfaceFilterItem';
import { IHeaderFilterRange } from './filter_Range_header/interfaceFilterRange';
import { IHeaderSortFind } from './sort_find_header/interfaceSortFindBlock';

export interface IHeader {
    headerTitle: IHeaderTitle;
    headerFilterItem: IHeaderFilterItem;
    headerFilterRange: IHeaderFilterRange;
    headerSortFind: IHeaderSortFind;
    draw: () => HTMLDivElement;
}
