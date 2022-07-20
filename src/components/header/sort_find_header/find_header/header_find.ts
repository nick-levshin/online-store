import './header_find.css';
import { IFind } from './interfaceFind';
import { createNewArrBike } from './../../../../controller/createNewArrBikefunction';
import { ObjectFilter } from './../../../../controller/objectFilter';
import { newMainDraw } from './../../../../controller/newMainDraw';
import Sort from './../sort_header/header_sort';
import { checkLocalStorage, saveLocalStorage } from '../../../../controller/settingsLocalStorage';

class Find implements IFind {
    find = (): void => {
        const inputFind = document.querySelector('.find__input') as HTMLInputElement;
        const inputFindValue: string = inputFind.value.toLowerCase();
        ObjectFilter.searchString = inputFindValue;
        saveLocalStorage();
        newMainDraw(createNewArrBike());
        new Sort().sort();
    };
    clean = (): void => {
        ObjectFilter.searchString = '';
        newMainDraw(createNewArrBike());
        new Sort().sort();
    };

    draw(): HTMLDivElement {
        const headerFind = document.createElement('div') as HTMLDivElement;
        headerFind.classList.add('header__find');
        const h2Txt = document.createElement('h2') as HTMLHeadingElement;
        h2Txt.innerHTML = 'Поиск:';

        const blockFind = document.createElement('div') as HTMLDivElement;
        blockFind.classList.add('find');

        const inputFind = document.createElement('input') as HTMLInputElement;
        inputFind.classList.add('find__input');
        inputFind.setAttribute('type', 'search');
        inputFind.setAttribute('placeholder', 'Введите данные');

        inputFind.autofocus = true;
        inputFind.setAttribute('autocomplete', 'off');
        inputFind.addEventListener('keyup', this.find);
        inputFind.addEventListener('search', this.clean);
        if (checkLocalStorage()) {
            inputFind.value = ObjectFilter.searchString;
        }

        const buttonFind = document.createElement('button') as HTMLButtonElement;
        buttonFind.classList.add('find__button');

        blockFind.append(inputFind, buttonFind);
        headerFind.append(h2Txt, blockFind);

        return headerFind;
    }
}

export default Find;
