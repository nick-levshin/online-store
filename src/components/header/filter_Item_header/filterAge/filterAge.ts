import './filterAge.css';
import { IFilterAge } from './interfaceFilterAge';
import { ObjectFilter } from './../../../../controller/objectFilter';
import { newMainDraw } from './../../../../controller/newMainDraw';
import { createNewArrBike } from './../../../../controller/createNewArrBikefunction';
import Sort from './../../sort_find_header/sort_header/header_sort';
import { checkLocalStorage, saveLocalStorage } from '../../../../controller/settingsLocalStorage';

class FilterAge implements IFilterAge {
    filterAge(e: Event): void {
        const target = e.target as HTMLElement;
        const dataAtribute = target.getAttribute('data-age') as string;
        target.classList.toggle('activeAge');
        ObjectFilter.age[dataAtribute.toLowerCase()] = target.classList.contains('activeAge');
        newMainDraw(createNewArrBike());
        new Sort().sort();
        saveLocalStorage();
    }
    draw(): HTMLDivElement {
        const selectAge = document.createElement('div') as HTMLDivElement;
        selectAge.classList.add('filter__age');
        const h3Age = document.createElement('h5') as HTMLHeadingElement;
        h3Age.innerHTML = 'Возраст:';
        selectAge.prepend(h3Age);

        const arrAge: string[] = ['children', 'teenage', 'adult'];
        for (const ageData of arrAge) {
            const ageItem = document.createElement('div') as HTMLDivElement;
            ageItem.classList.add(`filter__age_${ageData}`);
            ageItem.setAttribute('data-age', `${ageData}`);
            if (checkLocalStorage()) {
                if (ObjectFilter.age[ageData]) {
                    ageItem.classList.add('activeAge');
                }
            }
            ageItem.addEventListener('click', this.filterAge);
            selectAge.append(ageItem);
        }

        return selectAge;
    }
}

export default FilterAge;
