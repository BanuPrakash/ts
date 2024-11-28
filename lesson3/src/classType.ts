interface Comparable {
    compareTo(other: this): number
}

class Product implements Comparable {
    [key: string]: any;
    // private name:string; //state
    // protected price: number; // state

    // constructor(n: string, p: number) {
    //     this.name = n;
    //     this.price = p;
    // }

    constructor(public name: string, public price: number) { }

    compareTo(other: this): number {
        return this.price - other.price;
    }

    // behaviour, methods, action
    isExpensive(): boolean {
        return false;
    }
}
// extends --> Specialization relationship --> inheritance
// Mobile IS A Product
class Mobile extends Product {
    constructor(name: string, price: number, public connectivity: string) {
        super(name, price); // delgate to Product const
    }
    // override
    // "noImplicitOverride": true,  
    override isExpensive(): boolean {
        return this.price > 10000;
    }
}

// Tv IS A Product
class Tv extends Product {
    constructor(name: string, price: number, public screenType: string) {
        super(name, price); // delegate to Product const
    }
    // override
    override isExpensive(): boolean {
        return this.price > 10000;
    }
}

let products: Product[] = [
    new Mobile("iPhone", 134342, '5G'),
    new Tv("sony", 62323, "OLED"),
    new Mobile("Samsung", 62323, "5G")
];

// OCP
products.forEach(p => {
    Object.keys(p).forEach(k => {
        //[key:string]: any;
        console.log(k, p[k]);
    })
})

// not OCP
//  products.forEach(p => {
//     console.log(p.name, p.price);
//     if(p.isExpensive()) { // dynamic binding
//         console.log(p.name + " is expensive");
//     }
//     if(p instanceof Mobile) {
//         console.log((p as Mobile).connectivity);
//     }
//  })

// OCP
function sort(items: Comparable[]) {
    for(let i  = 0; i < items.length; i++) {
        for(let j  = i + 1; j < items.length; j++) {
                if(items[i].compareTo(items[j]) > 0) {
                    let swap = items[i];
                    items[i] = items[j];
                    items[j] = swap 
                }
        }
    }
} 

sort(products);

let p:Product = new Mobile("A", 55, "5G");