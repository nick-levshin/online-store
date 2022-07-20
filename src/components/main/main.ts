import './main.css';
import { IMainContainer, IMain } from './interface';
import MainContainer from './mainContainer';
import { IBike } from './../bikeCards/interfaceBikes';
import { checkLocalStorage } from '../../controller/settingsLocalStorage';
import { createNewArrBike } from './../../controller/createNewArrBikefunction';

class Main implements IMain {
    mainContainer: IMainContainer;
    constructor() {
        this.mainContainer = new MainContainer();
    }
    draw(bikes: Array<IBike>): HTMLDivElement {
        const main = document.createElement('div') as HTMLDivElement;
        main.classList.add('main');
        let mainContainer: HTMLElement;
        checkLocalStorage()
            ? (mainContainer = this.mainContainer.draw(createNewArrBike()))
            : (mainContainer = this.mainContainer.draw(bikes));
        main.prepend(mainContainer);
        return main;
    }
}

export default Main;
