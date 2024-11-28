function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

let per = { name: 'George', age: 30, city: 'Delhi' }

getProperty(per, "age"); // 30

// will check it 
// type NonNull<T> = T extends null | undefined ? never : T

// function addProduct(name: string, price: NonNull<number>) {
//     // todo
// }

// addProduct("iPhone", null);

type Immutable<T> = {
    readonly [P in keyof T]: T[P]
}

type Mutable<T> = {
    -readonly [P in keyof T]: T[P]
}
interface Point {
    x: number;
    y : number
}

type ReadOnlyPoint =  Immutable<Point>;

type MutablePoint = Mutable<ReadOnlyPoint>;

let point: ReadOnlyPoint = {x: 4, y: 5};

// point.x = 22; //readonly

// try this

type UserType = {
    id: string;
    name?:string;
    age?:number;
}

type Concrete<T> = {
    [P in keyof T]-?: T[P]
}
type ConcreteUserType = Concrete<UserType>