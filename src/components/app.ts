import './app.css';
import Header from './header/header';
import { IMain } from './main/interface';
import { bikes } from '../components/bikeCards/bikeType';
import Main from './main/main';
import { IHeader } from './header/interfaceHeader';
import { IBike } from './bikeCards/interfaceBikes';
import { IFooter } from './footer/interfaceFooter';
import Footer from './footer/footer';
import { IApp } from './appInterface';

class App implements IApp {
    header: IHeader;
    main: IMain;
    footer: IFooter;
    constructor() {
        this.header = new Header();
        this.main = new Main();
        this.footer = new Footer();
    }
    start(arrBikes: Array<IBike> = bikes): HTMLBodyElement {
        const body = document.querySelector('#root') as HTMLBodyElement;
        body.classList.add('body');
        const header = this.header.draw();
        const main = this.main.draw(arrBikes);
        const footer = this.footer.draw();

        body.prepend(main);
        body.prepend(header);
        body.append(footer);

        return body;
    }
}

export default App;
