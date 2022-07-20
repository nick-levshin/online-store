export interface IBike {
    name: string;
    manufacturer: string;
    color: string;
    url: string;
    age: string;
    year: number;
    price: number;
    type: string;
    amount: number;
    shoppingCart: boolean;
    popular: boolean;
    indx: number;
}

export interface ICardsBike {
    addShoppihgCart(e: Event): void;
    draw(bikes: Array<IBike>): HTMLDivElement;
}
