import { count } from '../../../controller/FunctionCountShoppingCart';
import './header_title.css';
import { IHeaderTitle } from './interfaceTitleBlock';

class HeaderTitle implements IHeaderTitle {
    draw = (): HTMLDivElement => {
        const headerBlock1 = document.createElement('div') as HTMLDivElement;
        headerBlock1.classList.add('header__title');
        const h1Txt = document.createElement('h1') as HTMLHeadingElement;
        h1Txt.innerHTML = 'Online Store';

        const countShoppingCart = document.createElement('h6') as HTMLHeadingElement;
        const countShopping = count;
        countShoppingCart.textContent = countShopping;

        const imgShoppingCart = document.createElement('div') as HTMLDivElement;
        imgShoppingCart.classList.add('header__shoppingCart');

        const warningText = document.createElement('p') as HTMLParagraphElement;
        warningText.classList.add('header__warningText');
        warningText.innerHTML = '';

        headerBlock1.prepend(h1Txt);
        headerBlock1.append(countShoppingCart);
        headerBlock1.append(imgShoppingCart, warningText);
        return headerBlock1;
    };
}

export default HeaderTitle;
