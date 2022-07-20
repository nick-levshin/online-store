import { IBike } from '../components/bikeCards/interfaceBikes';
import MainContainer from './../components/main/mainContainer';

export function newMainDraw(arrBike: Array<IBike>): void {
    document.querySelector('.main__container')?.remove();
    const main = document.querySelector('.main') as HTMLElement;
    if (!arrBike.length) {
        const newMainContainer = document.createElement('div') as HTMLDivElement;
        newMainContainer.classList.add('main__container');
        const h3Txt = document.createElement('h3') as HTMLHeadingElement;
        h3Txt.classList.add('main__text');
        h3Txt.innerHTML = 'По Вашему запросу ничего не найдено';
        newMainContainer.prepend(h3Txt);
        main.prepend(newMainContainer);
    } else {
        main.prepend(new MainContainer().draw(arrBike));
    }
}
