import '../headerFilterRange.css';
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import { ObjectFilter } from './../../../../controller/objectFilter';
import { IFilterYear } from './interfaceFilterYear';
import { createNewArrBike } from './../../../../controller/createNewArrBikefunction';
import { newMainDraw } from './../../../../controller/newMainDraw';
import Sort from './../../sort_find_header/sort_header/header_sort';
import { checkLocalStorage, saveLocalStorage } from '../../../../controller/settingsLocalStorage';

class FilterYear implements IFilterYear {
    filterYear(): void {
        if (document.querySelectorAll('.noUi-handle')[2]) {
            const minValue = document.querySelectorAll('.noUi-handle')[2].ariaValueNow as string;
            ObjectFilter.yearBike.lowerBound = +minValue;
            const maxValue = document.querySelectorAll('.noUi-handle')[2]?.ariaValueMax as string;
            ObjectFilter.yearBike.upperBound = +maxValue;
            saveLocalStorage();
            newMainDraw(createNewArrBike());
            new Sort().sort();
        }
    }
    draw(): HTMLDivElement {
        const sectionRange = document.createElement('section') as HTMLDivElement;
        sectionRange.classList.add('range');

        const rangeTitle = document.createElement('div') as HTMLDivElement;
        rangeTitle.classList.add('range__title');
        const h3Have = document.createElement('h5') as HTMLHeadingElement;
        h3Have.innerHTML = 'Год выхода на рынок:';
        rangeTitle.append(h3Have);

        const rangeSlider = document.createElement('div') as HTMLDivElement;
        rangeSlider.classList.add('range__slider');
        const range = document.createElement('div') as noUiSlider.target;
        range.setAttribute('id', 'range');
        rangeSlider.append(range);
        sectionRange.append(rangeTitle, rangeSlider);
        const startFrom: number = checkLocalStorage() ? ObjectFilter.yearBike.lowerBound : 2000;
        const startTo: number = checkLocalStorage() ? ObjectFilter.yearBike.upperBound : 2022;
        noUiSlider.create(range, {
            start: [startFrom, startTo],
            connect: true,
            behaviour: 'tap-drag',
            tooltips: true,
            format: {
                to: function (value) {
                    return value + '';
                },
                from: function (value) {
                    return +value;
                },
            },
            range: {
                min: 2000,
                max: 2022,
            },
            step: 1,
        });
        range.noUiSlider?.on('update', this.filterYear);
        return sectionRange;
    }
}

export default FilterYear;
