import './main.css';
import { CardsBike } from '../bikeCards/cardsBike';
import { ICardsBike, IBike } from '../bikeCards/interfaceBikes';
import { IMainContainer } from './interface';

class MainContainer implements IMainContainer {
    cards: ICardsBike;
    constructor() {
        this.cards = new CardsBike();
    }
    draw(bikes: Array<IBike>): HTMLDivElement {
        const mainContainer = document.createElement('div') as HTMLDivElement;
        mainContainer.classList.add('main__container');
        const cardsBikes = this.cards.draw(bikes);
        mainContainer.prepend(cardsBikes);
        return mainContainer;
    }
}

export default MainContainer;
