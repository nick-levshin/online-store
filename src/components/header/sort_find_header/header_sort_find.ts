import './header_sort_find.css';
import { IHeaderSortFind } from './interfaceSortFindBlock';
import { IFind } from './find_header/interfaceFind';
import { ISort } from './sort_header/interfaceSort';
import Find from './find_header/header_find';
import Sort from './sort_header/header_sort';
import { IReset } from './reset_header/interfaceReset';
import Reset from './reset_header/header_reset';

class HeaderSortFind implements IHeaderSortFind {
    find: IFind;
    sort: ISort;
    reset: IReset;
    constructor() {
        this.find = new Find();
        this.sort = new Sort();
        this.reset = new Reset();
    }

    draw(): HTMLDivElement {
        const headerBlockSortFind = document.createElement('div') as HTMLDivElement;
        headerBlockSortFind.classList.add('header__findSort');

        headerBlockSortFind.append(this.find.draw());
        headerBlockSortFind.append(this.sort.draw());
        headerBlockSortFind.append(this.reset.draw());
        return headerBlockSortFind;
    }
}
export default HeaderSortFind;
