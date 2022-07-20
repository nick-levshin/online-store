import './headerFilterRange.css';
import { IFilterHave } from './filter_have/interfaceFilterHave';
import { IFilterYear } from './filter_year/interfaceFilterYear';
import { IHeaderFilterRange } from './interfaceFilterRange';
import FilterHave from './filter_have/filterHave';
import FilterYear from './filter_year/filterYear';

class HeaderFilterRange implements IHeaderFilterRange {
    have: IFilterHave;
    year: IFilterYear;
    constructor() {
        this.have = new FilterHave();
        this.year = new FilterYear();
    }

    draw(): HTMLDivElement {
        const headerBlockFilter = document.createElement('div') as HTMLDivElement;
        headerBlockFilter.classList.add('header__filterRange');
        const h2Txt = document.createElement('h2') as HTMLHeadingElement;
        h2Txt.innerHTML = 'Фильтры по диапазону:';
        headerBlockFilter.prepend(h2Txt);
        headerBlockFilter.append(this.have.draw());
        headerBlockFilter.append(this.year.draw());
        return headerBlockFilter;
    }
}

export default HeaderFilterRange;
