import { drawNewHeaderTitle } from './drawNewHeaderTitle';
import { bikes } from './../components/bikeCards/bikeType';

export let count = localStorage.getItem('countShoppingCart') || '0';
export let shoppingCart: Array<string> = JSON.parse(localStorage.getItem('shoppingCart') as string) || [];
export function countShoppingCart(dataAtributItem: string, card: Element): void {
    if (hasShoppingCart(dataAtributItem)) {
        shoppingCart.splice(indexShoppingCart(dataAtributItem), 1);
        count = '' + (+count - 1);
        localStorage.setItem('countShoppingCart', count);
        localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    } else {
        count = '' + (+count + 1);
        localStorage.setItem('countShoppingCart', count);
        if (+count > 20) {
            (document.querySelector('.header__warningText') as HTMLHeadingElement).innerHTML =
                'В корзине не может быть более 20 товаров';
            count = '20';
            localStorage.setItem('countShoppingCart', count);
            return;
        }
        shoppingCart.push(dataAtributItem);
        localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    }
    card.classList.toggle('activeCardBike');
    bikes[+dataAtributItem].shoppingCart = card.classList.contains('activeCardBike');
    drawNewHeaderTitle();
}

export function resetShoppingCart(): void {
    bikes.forEach((item) => (item.shoppingCart = false));
    count = '0';
    shoppingCart = [];
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    drawNewHeaderTitle();
}

export function hasShoppingCart(elem: string): boolean {
    return shoppingCart.indexOf(elem) != -1;
}

export function indexShoppingCart(elem: string): number {
    return shoppingCart.indexOf(elem);
}
