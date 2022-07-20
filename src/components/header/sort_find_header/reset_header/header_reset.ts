import './header_reset.css';
import { IReset } from './interfaceReset';
import * as noUiSlider from 'nouislider';
import Sort from './../sort_header/header_sort';
import { resetObjectFilter } from './../../../../controller/resetObjectFilter';
import { resetShoppingCart } from './../../../../controller/FunctionCountShoppingCart';

class Reset implements IReset {
    resetFilter = (e: Event): void => {
        e.stopPropagation();
        document
            .querySelectorAll('.activeManufacturer')
            ?.forEach((item) => item.classList.remove('activeManufacturer'));
        document.querySelectorAll('.activeColor')?.forEach((item) => item.classList.remove('activeColor'));
        document.querySelectorAll('.activeAge')?.forEach((item) => item.classList.remove('activeAge'));
        document.querySelector('.activePopular')?.classList.remove('activePopular');
        const inputFind = document.querySelector('.find__input') as HTMLInputElement;
        inputFind.value = '';
        const slider1 = document.querySelector('#range') as noUiSlider.target;
        slider1.noUiSlider?.set([0, 100]);
        const slider2 = document.querySelectorAll('#range')[1] as noUiSlider.target;
        slider2.noUiSlider?.set([2000, 2022]);
        resetObjectFilter();
        new Sort().sort();
    };
    resetSetting = (e: Event): void => {
        e.stopPropagation();
        const select = document.querySelector('.sort') as HTMLSelectElement;
        select.value = 'offer';
        const inputFind = document.querySelector('.find__input') as HTMLInputElement;
        inputFind.value = '';
        resetShoppingCart();
        this.resetFilter(e);
        localStorage.clear();
    };
    draw(): HTMLDivElement {
        const headerReset = document.createElement('div') as HTMLDivElement;
        headerReset.classList.add('header__reset');

        const buttonResetFilter = document.createElement('button') as HTMLButtonElement;
        buttonResetFilter.setAttribute('type', 'button');
        buttonResetFilter.classList.add('reset__button_filter');
        buttonResetFilter.innerHTML = 'Сброс фильтров';
        buttonResetFilter.addEventListener('click', this.resetFilter);

        const buttonResetSetting = document.createElement('button') as HTMLButtonElement;
        buttonResetSetting.setAttribute('type', 'button');
        buttonResetSetting.classList.add('reset__button_setting');
        buttonResetSetting.innerHTML = 'Сброс настроек';
        buttonResetSetting.addEventListener('click', this.resetSetting);

        headerReset.append(buttonResetFilter, buttonResetSetting);
        return headerReset;
    }
}

export default Reset;
