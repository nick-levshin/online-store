export const ObjectFilter: IObjectFilter = localStorage.getItem('filterObject')
    ? JSON.parse(localStorage.getItem('filterObject') as string)
    : {
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

export interface IObjectFilter {
    manufacturer: {
        [key: string]: boolean;
    };
    color: {
        [key: string]: boolean;
    };
    age: {
        [key: string]: boolean;
    };
    popular: boolean;
    countBike: {
        [key: string]: number;
    };
    yearBike: {
        [key: string]: number;
    };
    searchString: string;
    shoppingCart: boolean;
}
