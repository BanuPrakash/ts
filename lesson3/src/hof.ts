import {filter, map} from './lib';

let data:number[] = [5,1,2,6,8,12];

let evens: number[] = filter(data, (elem) => elem % 2 === 0);

console.log(evens);

type Product = {
    name: string;
    price: number;
    category: string;
}

let products: Product[] = [
    {name : 'iPhone', price: 89000.00, category: 'mobile'},
    {name : 'sony', price: 189000.00, category: 'tv'},
    {name : 'Samsung Fold', price: 289000.00, category: 'mobile'},
    {name : 'Wacom', price: 5000.00, category: 'computer'},
    {name : 'Oppo', price: 60000.00, category: 'mobile'},
    {name : 'LG', price: 77000.00, category: 'tv'}
]

let mobiles:Product[] = filter(products, (p) => p.category === 'mobile');

console.log(mobiles);

let names:string[] = map(products, p => p.name);
// names will be iPhone, sony, Wacom, ...
console.log(names)
function toDiv(product: Product) {
    return `
        <div className='card'>
            <div className='card-header'>
                ${product.name}
            </div>
             <div className='card-body'>
                ${product.price}, ${product.category}
            </div>
        </div>
    `
}

let divs = map(products, toDiv);
console.log(divs);