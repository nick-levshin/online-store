import { IFind } from './find_header/interfaceFind';
import { ISort } from './sort_header/interfaceSort';
import { IReset } from './reset_header/interfaceReset';

export interface IHeaderSortFind {
    find: IFind;
    sort: ISort;
    reset: IReset;
    draw: () => HTMLDivElement;
}
