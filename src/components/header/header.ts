import './header.css';
import HeaderFilter from './filter_Item_header/headerFilterItem';
import HeaderTitle from './title_header/header_title';
import { IHeaderTitle } from './title_header/interfaceTitleBlock';
import { IHeaderFilterItem } from './filter_Item_header/interfaceFilterItem';
import { IHeader } from './interfaceHeader';
import { IHeaderFilterRange } from './filter_Range_header/interfaceFilterRange';
import HeaderFilterRange from './filter_Range_header/headerFilterRange';
import { IHeaderSortFind } from './sort_find_header/interfaceSortFindBlock';
import HeaderSortFind from './sort_find_header/header_sort_find';

class Header implements IHeader {
    headerTitle: IHeaderTitle;
    headerFilterItem: IHeaderFilterItem;
    headerFilterRange: IHeaderFilterRange;
    headerSortFind: IHeaderSortFind;
    constructor() {
        this.headerTitle = new HeaderTitle();
        this.headerFilterItem = new HeaderFilter();
        this.headerFilterRange = new HeaderFilterRange();
        this.headerSortFind = new HeaderSortFind();
    }
    draw(): HTMLDivElement {
        const header = document.createElement('div') as HTMLDivElement;
        header.classList.add('header');
        const block1 = this.headerTitle.draw();
        const block2 = this.headerFilterItem.draw();
        const block3 = this.headerFilterRange.draw();
        const block4 = this.headerSortFind.draw();
        header.prepend(block1, block2, block3, block4);
        return header;
    }
}

export default Header;
