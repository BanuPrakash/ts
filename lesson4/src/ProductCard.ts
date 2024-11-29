import { Component } from "./decorators/Component";
import { Log } from './decorators/Log'

@Component({
    template: `<div className="card"></card>`
})
@Log
export default class ProductCard {
    name: string = "iPhone 15"
    price: number = 0;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}