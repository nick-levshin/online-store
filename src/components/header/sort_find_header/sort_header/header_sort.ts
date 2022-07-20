import './header_sort.css';
import { ISort } from './interfaceSort';
import { sortAlfabet } from './../../../../controller/sortAlfabetFunction';
import { newMainDraw } from './../../../../controller/newMainDraw';
import { sortAlfabetReverse } from './../../../../controller/sortAlfabetReverseFunction';
import { createNewArrBike } from './../../../../controller/createNewArrBikefunction';
import { sortMinMax } from './../../../../controller/sortMinMaxFunction';

class Sort implements ISort {
    sort = (): void => {
        const select = document.querySelector('.sort') as HTMLSelectElement;
        const selectValue: string = select.value;
        switch (selectValue) {
            case 'offer':
                localStorage.setItem('selectValue', 'offer');
                newMainDraw(createNewArrBike());
                break;
            case 'alfabet':
                localStorage.setItem('selectValue', 'alfabet');
                newMainDraw(sortAlfabet());
                break;
            case 'alfabetReverse':
                localStorage.setItem('selectValue', 'alfabetReverse');
                newMainDraw(sortAlfabetReverse());
                break;
            case 'year':
                localStorage.setItem('selectValue', 'year');
                newMainDraw(sortMinMax('year', true));
                break;
            case 'yearReverse':
                localStorage.setItem('selectValue', 'yearReverse');
                newMainDraw(sortMinMax('year', false));
                break;
            case 'count':
                localStorage.setItem('selectValue', 'count');
                newMainDraw(sortMinMax('amount', true));
                break;
            case 'countReverse':
                localStorage.setItem('selectValue', 'countReverse');
                newMainDraw(sortMinMax('amount', false));
                break;
            case 'price':
                localStorage.setItem('selectValue', 'price');
                newMainDraw(sortMinMax('price', true));
                break;
            case 'priceReverse':
                localStorage.setItem('selectValue', 'priceReverse');
                newMainDraw(sortMinMax('price', false));
                break;
        }
    };

    draw = (): HTMLDivElement => {
        const headerSort = document.createElement('div') as HTMLDivElement;
        headerSort.classList.add('header__sort');
        const h2Txt = document.createElement('h2') as HTMLHeadingElement;
        h2Txt.innerHTML = 'Соpтировка:';

        const blockSort = document.createElement('select') as HTMLSelectElement;
        blockSort.classList.add('sort');
        blockSort.setAttribute('name', 'sortItem');
        blockSort.addEventListener('change', this.sort);

        const optionSort0 = document.createElement('option') as HTMLOptionElement;
        optionSort0.classList.add('find__option');
        optionSort0.setAttribute('value', 'offer');
        optionSort0.innerHTML = 'Выбери параметры';

        const optionSort1 = document.createElement('option') as HTMLOptionElement;
        optionSort1.classList.add('find__option');
        optionSort1.setAttribute('value', 'alfabet');
        optionSort1.innerHTML = 'По названию, от А до Я';

        const optionSort2 = document.createElement('option') as HTMLOptionElement;
        optionSort2.classList.add('find__option');
        optionSort2.setAttribute('value', 'alfabetReverse');
        optionSort2.innerHTML = 'По названию, от Я до А';

        const optionSort3 = document.createElement('option') as HTMLOptionElement;
        optionSort3.classList.add('find__option');
        optionSort3.setAttribute('value', 'year');
        optionSort3.innerHTML = 'По году, по возрастанию';

        const optionSort4 = document.createElement('option') as HTMLOptionElement;
        optionSort4.classList.add('find__option');
        optionSort4.setAttribute('value', 'yearReverse');
        optionSort4.innerHTML = 'По году, по убыванию';

        const optionSort5 = document.createElement('option') as HTMLOptionElement;
        optionSort5.classList.add('find__option');
        optionSort5.setAttribute('value', 'count');
        optionSort5.innerHTML = 'По количеству, по возрастанию';

        const optionSort6 = document.createElement('option') as HTMLOptionElement;
        optionSort6.classList.add('find__option');
        optionSort6.setAttribute('value', 'countReverse');
        optionSort6.innerHTML = 'По количеству, по убыванию';

        const optionSort7 = document.createElement('option') as HTMLOptionElement;
        optionSort7.classList.add('find__option');
        optionSort7.setAttribute('value', 'price');
        optionSort7.innerHTML = 'По цене, по возрастанию';

        const optionSort8 = document.createElement('option') as HTMLOptionElement;
        optionSort8.classList.add('find__option');
        optionSort8.setAttribute('value', 'priceReverse');
        optionSort8.innerHTML = 'По цене, по убыванию';

        blockSort.append(
            optionSort0,
            optionSort1,
            optionSort2,
            optionSort3,
            optionSort4,
            optionSort5,
            optionSort6,
            optionSort7,
            optionSort8
        );
        headerSort.append(h2Txt, blockSort);
        localStorage.getItem('selectValue')
            ? (blockSort.value = localStorage.getItem('selectValue') as string)
            : (blockSort.value = 'offer');
        return headerSort;
    };
}

export default Sort;
/*
const arrAttribute: string[] = [
    'offer',
    'alfabet',
    'alfabetReverse',
    'year',
    'yearReverse',
    'count',
    'countReverse',
    'price',
    'priceReverse'
];
const arrItem: string[] = [
    'Выбери параметры',
    'По названию, от А до Я',
    'По названию, от Я до А',
    'По году, по возрастанию',
    'По году, по убыванию',
    'По количеству, по возрастанию',
    'По количеству, по убыванию',
    'По цене, по возрастанию',
    'По цене, по убыванию',
];

for (let i = 0; i < arrAttribute.length; i + 1) {
    const optionSort = document.createElement('option') as HTMLOptionElement;
    optionSort.classList.add('find__option');
    optionSort.setAttribute('value', `${arrAttribute[i]}`);
    optionSort.innerHTML = `${arrItem[i]}`;
    blockSort.append(optionSort);
}
*/
