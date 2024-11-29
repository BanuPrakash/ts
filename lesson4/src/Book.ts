import Range from "./decorators/Range";

export default class Book {
    name: string = "";

    @Range({ min: 0, max: 100 })
    price: number = 10;

    // set fullName(n:string) {

    // }

    // get fullName() {
    //     return this.name;
    // }
}