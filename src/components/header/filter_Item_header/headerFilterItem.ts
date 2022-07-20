import './headerFilterItem.css';
import FilterManufacturer from './filterManufacturer/filterManufacturer';
import { IFilterManufacturer } from './filterManufacturer/interfaceFilterManufacturer';
import { IFilterColor } from './filterColor/interfaceFilterColor';
import FilterColor from './filterColor/filterColor';
import { IHeaderFilterItem } from './interfaceFilterItem';
import { IFilterAge } from './filterAge/interfaceFilterAge';
import FilterAge from './filterAge/filterAge';
import FilterPopular from './filterPopular/filterPopular';
import { IFilterPopular } from './filterPopular/interfaceFilterPopular';

class HeaderFilterItem implements IHeaderFilterItem {
    manufacturer: IFilterManufacturer;
    color: IFilterColor;
    age: IFilterAge;
    popular: IFilterPopular;
    constructor() {
        this.manufacturer = new FilterManufacturer();
        this.color = new FilterColor();
        this.age = new FilterAge();
        this.popular = new FilterPopular();
    }

    draw(): HTMLDivElement {
        const headerBlockFilter = document.createElement('div') as HTMLDivElement;
        headerBlockFilter.classList.add('header__filter');
        const h2Txt = document.createElement('h2') as HTMLHeadingElement;
        h2Txt.innerHTML = 'Фильтры по значению:';
        headerBlockFilter.prepend(h2Txt);
        headerBlockFilter.append(this.manufacturer.draw());
        headerBlockFilter.append(this.color.draw());
        headerBlockFilter.append(this.age.draw());
        headerBlockFilter.append(this.popular.draw());

        return headerBlockFilter;
    }
}

export default HeaderFilterItem;
