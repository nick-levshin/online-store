import './filterManufacturer.css';
import { IFilterManufacturer } from './interfaceFilterManufacturer';
import { ObjectFilter } from './../../../../controller/objectFilter';
import { createNewArrBike } from './../../../../controller/createNewArrBikefunction';
import { newMainDraw } from './../../../../controller/newMainDraw';
import Sort from './../../sort_find_header/sort_header/header_sort';
import { checkLocalStorage, saveLocalStorage } from '../../../../controller/settingsLocalStorage';

class FilterManufacturer implements IFilterManufacturer {
    filterManufacture = (e: Event): void => {
        const target = e.target as HTMLElement;
        target.classList.toggle('activeManufacturer');
        const dataAtribute = target.getAttribute('data-manufacturer') as string;
        ObjectFilter.manufacturer[dataAtribute.toLowerCase()] = target.classList.contains('activeManufacturer');
        newMainDraw(createNewArrBike());
        new Sort().sort();
        saveLocalStorage();
    };
    draw(): HTMLDivElement {
        const manufacturer = document.createElement('div') as HTMLDivElement;
        manufacturer.classList.add('filter__manufacturer');
        const h3Txt = document.createElement('h5') as HTMLHeadingElement;
        h3Txt.innerHTML = 'Производитель:';
        manufacturer.prepend(h3Txt);

        const arrManufacturer: string[] = ['aist', 'greenway', 'stels'];
        for (const factory of arrManufacturer) {
            const factoryItem = document.createElement('div') as HTMLDivElement;
            factoryItem.classList.add(`filter__manufacturer_${factory}`);
            if (checkLocalStorage()) {
                if (ObjectFilter.manufacturer[factory]) {
                    factoryItem.classList.add('activeManufacturer');
                }
            }
            factoryItem.setAttribute('data-manufacturer', `${factory}`);
            factoryItem.addEventListener('click', this.filterManufacture);
            manufacturer.append(factoryItem);
        }

        return manufacturer;
    }
}

export default FilterManufacturer;
