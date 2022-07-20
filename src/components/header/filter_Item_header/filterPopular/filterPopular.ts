import './filterPopular.css';
import { IFilterPopular } from './interfaceFilterPopular';
import { ObjectFilter } from './../../../../controller/objectFilter';
import { createNewArrBike } from './../../../../controller/createNewArrBikefunction';
import { newMainDraw } from './../../../../controller/newMainDraw';
import Sort from './../../sort_find_header/sort_header/header_sort';
import { checkLocalStorage, saveLocalStorage } from '../../../../controller/settingsLocalStorage';

class FilterPopular implements IFilterPopular {
    filterPopular(e: Event): void {
        const target = e.target as HTMLElement;
        target.classList.toggle('activePopular');

        ObjectFilter.popular = target.classList.contains('activePopular');
        saveLocalStorage();
        newMainDraw(createNewArrBike());
        new Sort().sort();
    }

    draw(): HTMLDivElement {
        const selectPopular = document.createElement('div') as HTMLDivElement;
        selectPopular.classList.add('filter__popular');
        const h3Popular = document.createElement('h5') as HTMLHeadingElement;
        h3Popular.innerHTML = 'Популярен:';
        const bikePopular = document.createElement('div') as HTMLDivElement;
        bikePopular.classList.add('filter__popular_check');
        if (checkLocalStorage()) {
            if (ObjectFilter.popular) {
                bikePopular.classList.add('activePopular');
            }
        }
        bikePopular.addEventListener('click', this.filterPopular);
        selectPopular.prepend(h3Popular, bikePopular);
        return selectPopular;
    }
}

export default FilterPopular;
