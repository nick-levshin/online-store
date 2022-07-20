import '../headerFilterRange.css';
import { IFilterHave } from './interfaceFilterHave';
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import { ObjectFilter } from './../../../../controller/objectFilter';
import { createNewArrBike } from './../../../../controller/createNewArrBikefunction';
import { newMainDraw } from './../../../../controller/newMainDraw';
import Sort from './../../sort_find_header/sort_header/header_sort';
import { checkLocalStorage, saveLocalStorage } from '../../../../controller/settingsLocalStorage';

class FilterHave implements IFilterHave {
    filterCountBike(): void {
        if (document.querySelectorAll('.noUi-handle')[0]) {
            const minValue = document.querySelectorAll('.noUi-handle')[0].ariaValueNow as string;
            ObjectFilter.countBike.lowerBound = +minValue;
            const maxValue = document.querySelectorAll('.noUi-handle')[0]?.ariaValueMax as string;
            ObjectFilter.countBike.upperBound = +maxValue;
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
        h3Have.innerHTML = 'Количество на складе:';
        rangeTitle.append(h3Have);

        const rangeSlider = document.createElement('div') as HTMLDivElement;
        rangeSlider.classList.add('range__slider');
        const range = document.createElement('div') as noUiSlider.target;
        range.setAttribute('id', 'range');
        rangeSlider.append(range);
        sectionRange.append(rangeTitle, rangeSlider);
        const startFrom: number = checkLocalStorage() ? ObjectFilter.countBike.lowerBound : 0;
        const startTo: number = checkLocalStorage() ? ObjectFilter.countBike.upperBound : 100;

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
                min: 0,
                max: 100,
            },
            step: 1,
        });
        range.noUiSlider?.on('update', this.filterCountBike);
        return sectionRange;
    }
}

export default FilterHave;
