import './app.css';
import { IMain } from './main/interface';
import { IHeader } from './header/interfaceHeader';
import { IBike } from './bikeCards/interfaceBikes';
import { IFooter } from './footer/interfaceFooter';

export interface IApp {
    header: IHeader;
    main: IMain;
    footer: IFooter;
    start: (arrBikes: Array<IBike>) => HTMLBodyElement;
}
