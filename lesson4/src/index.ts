import ProductCard from "./ProductCard";
// import Book from "./Book";
import Lib from "./Lib";
let compute = new Lib();
console.time("a");
    console.log(compute.fibanocci(40));
console.timeEnd("a")
console.time("b");
    console.log(compute.fibanocci(40));
console.timeEnd("b")


// let productCard:ProductCard = new ProductCard("iPhone", 89000);

// console.log(productCard.name);
// // @ts-ignore
//  console.log(productCard.template)

//  let productCard2:ProductCard = new ProductCard("Oppo", 24000);

// let b:Book = new Book();
// b.price = 9; // set
// console.log(b.price); //get

