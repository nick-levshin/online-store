import { IBike, ICardsBike } from './../bikeCards/interfaceBikes';

export interface IMainContainer {
    cards: ICardsBike;
    draw(bikes: Array<IBike>): HTMLDivElement;
}
export interface IMain {
    mainContainer: IMainContainer;
    draw(bikes: Array<IBike>): HTMLDivElement;
}
