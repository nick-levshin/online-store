import { IBike } from '../components/bikeCards/interfaceBikes';
import { IObjectFilter } from '../controller/objectFilter';

export const fakeObj1: IBike = {
    name: 'alfa',
    manufacturer: 'Alfa',
    color: 'white',
    url: './assets/images/24.jpg',
    age: 'teenage',
    year: 1,
    price: 1,
    type: 'city',
    amount: 1,
    shoppingCart: false,
    indx: 1,
    popular: false,
};

export const fakeObj2: IBike = {
    name: 'betta',
    manufacturer: 'Betta',
    color: 'white',
    url: './assets/images/24.jpg',
    age: 'teenage',
    year: 2,
    price: 2,
    type: 'city',
    amount: 2,
    shoppingCart: false,
    indx: 2,
    popular: true,
};
export const fakeObj3: IBike = {
    name: 'aist',
    manufacturer: 'Aist',
    color: 'red',
    url: './assets/images/24.jpg',
    age: 'teenage',
    year: 1,
    price: 1,
    type: 'city',
    amount: 1,
    shoppingCart: false,
    indx: 1,
    popular: true,
};

export const fakeObjectFilter: IObjectFilter = {
    manufacturer: {
        aist: false,
        stels: false,
        greenway: false,
    },
    color: {
        red: false,
        blue: false,
        green: false,
        white: false,
        yellow: false,
        grey: false,
    },
    age: {
        children: false,
        teenage: false,
        adult: false,
    },
    popular: false,
    countBike: {
        lowerBound: 0,
        upperBound: 100,
    },
    yearBike: {
        lowerBound: 2000,
        upperBound: 2022,
    },
    shoppingCart: false,
    searchString: '',
};
