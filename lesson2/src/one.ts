const product = {
    "id": 123,
    "name": "Macbook Laptop",
    "price": 234567.88,
    "supplier": {
        name: "Apple",
        "address": "Redmond, WA"
    }
}

type Supplier = typeof product['supplier'];

function changeSupplier(supplier:Supplier) {
    // 
}

changeSupplier({name:"", "address": ''});