import { IBike, ICardsBike } from './interfaceBikes';
import './cardsBike.css';
import { countShoppingCart, hasShoppingCart } from '../../controller/FunctionCountShoppingCart';

export class CardsBike implements ICardsBike {
    addShoppihgCart = (event: Event): void => {
        const card = (event.target as HTMLElement).closest('.card__bike');
        if (!card) return;
        const dataAtributItem = card.getAttribute('data-indx') as string;
        countShoppingCart(dataAtributItem, card);
    };
    draw(bikes: Array<IBike>): HTMLDivElement {
        const cardS = document.createElement('div') as HTMLDivElement;
        cardS.classList.add('cards');
        bikes.forEach((item) => {
            const wrapperCard = document.createElement('div') as HTMLDivElement;
            wrapperCard.classList.add('card__wrapperCard');

            const card = document.createElement('div') as HTMLDivElement;
            card.classList.add('card__bike');
            if (item.shoppingCart || hasShoppingCart('' + `${item.indx}`)) {
                card.classList.add('activeCardBike');
            }
            card.setAttribute('data-indx', `${item.indx}`);
            card.addEventListener('click', this.addShoppihgCart);

            const cardImg = document.createElement('img') as HTMLImageElement;
            cardImg.classList.add('card__bike_img');
            cardImg.src = `${item.url}`;
            cardImg.alt = 'image bike';
            card.prepend(cardImg);

            const carDescript = document.createElement('div') as HTMLDivElement;
            carDescript.classList.add('card__bike_descript');
            card.append(carDescript);
            wrapperCard.prepend(card);
            cardS.append(wrapperCard);

            const nameBikiFirma = document.createElement('h6') as HTMLHeadingElement;
            carDescript.classList.add('bike__descript_firma');
            nameBikiFirma.textContent = `${item.name}`;
            carDescript.prepend(nameBikiFirma);

            const descriptBikeUl = document.createElement('ul') as HTMLUListElement;
            descriptBikeUl.classList.add('bike__descript_ul');
            const descriptBikeLi_0 = document.createElement('li') as HTMLLIElement;
            descriptBikeLi_0.textContent = `ТИП: ${item.type}`;
            const descriptBikeLi_1 = document.createElement('li') as HTMLLIElement;
            descriptBikeLi_1.textContent = `Возраст: ${item.age}`;
            const descriptBikeLi_2 = document.createElement('li') as HTMLLIElement;
            descriptBikeLi_2.textContent = `Год выпуска: ${item.year}г.`;
            const descriptBikeLi_3 = document.createElement('li') as HTMLLIElement;
            descriptBikeLi_3.textContent = `Цвет: ${item.color}`;
            const descriptBikeLi_4 = document.createElement('li') as HTMLLIElement;
            descriptBikeLi_4.textContent = `Количество на складе: ${item.amount}`;
            const descriptBikeLi_5 = document.createElement('li') as HTMLLIElement;
            descriptBikeLi_5.textContent = `Популярен: ${item.popular}`;
            const descriptBikeLi_6 = document.createElement('li') as HTMLLIElement;
            descriptBikeLi_6.textContent = `ЦЕНА: ${item.price}.00 руб`;
            descriptBikeUl.prepend(
                descriptBikeLi_0,
                descriptBikeLi_1,
                descriptBikeLi_2,
                descriptBikeLi_3,
                descriptBikeLi_4,
                descriptBikeLi_5,
                descriptBikeLi_6
            );
            carDescript.append(descriptBikeUl);
        });
        return cardS;
    }
}
