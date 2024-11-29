import { Component } from "./decorators/Component";

@Component({
    template : `<div className="card"></card>`
})
export default class ProductCard {
    name: string = "iPhone 15"
}