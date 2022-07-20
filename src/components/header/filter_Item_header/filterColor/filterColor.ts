import './filterColor.css';
import { IFilterColor } from './interfaceFilterColor';
import { ObjectFilter } from './../../../../controller/objectFilter';
import { createNewArrBike } from './../../../../controller/createNewArrBikefunction';
import { newMainDraw } from './../../../../controller/newMainDraw';
import Sort from './../../sort_find_header/sort_header/header_sort';
import { checkLocalStorage, saveLocalStorage } from '../../../../controller/settingsLocalStorage';

class FilterColor implements IFilterColor {
    filterColor(e: Event): void {
        const target = e.target as HTMLElement;
        const dataAtribute = target.getAttribute('data-color') as string;
        target.classList.toggle('activeColor');
        ObjectFilter.color[dataAtribute.toLowerCase()] = target.classList.contains('activeColor');
        newMainDraw(createNewArrBike());
        new Sort().sort();
        saveLocalStorage();
    }

    draw(): HTMLDivElement {
        const selectColor = document.createElement('div') as HTMLDivElement;
        selectColor.classList.add('filter__color');
        const h3Color = document.createElement('h5') as HTMLHeadingElement;
        h3Color.innerHTML = 'Цвет:';
        selectColor.prepend(h3Color);

        const arrColor: string[] = ['red', 'green', 'white', 'blue', 'grey', 'yellow'];
        for (const colorData of arrColor) {
            const colorItem = document.createElement('div') as HTMLDivElement;
            colorItem.classList.add(`filter__color_${colorData}`);
            if (checkLocalStorage()) {
                if (ObjectFilter.color[colorData]) {
                    colorItem.classList.add('activeColor');
                }
            }
            colorItem.setAttribute('data-color', `${colorData}`);
            colorItem.addEventListener('click', this.filterColor);
            selectColor.append(colorItem);
        }
        return selectColor;
    }
}

export default FilterColor;
