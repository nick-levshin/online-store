import './global.css';
import App from './components/app';
import { bikes } from './components/bikeCards/bikeType';
import Sort from './components/header/sort_find_header/sort_header/header_sort';

const app = new App();
app.start(bikes);
new Sort().sort();
