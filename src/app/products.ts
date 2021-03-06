export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 99,
    description: 'A great phone with one of the best cameras'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 999,
    description: ''
  },
  {
    id: 4,
    name: 'KTM Duke 390',
    price: 17999,
    description: 'This is a little beast!'
  },
  {
    id: 5,
    name: 'MV Agusta Brutale 800',
    price: 32999,
    description: 'This is a bad bitch!'
  }
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
