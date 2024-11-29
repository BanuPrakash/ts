// partial

interface Book {
    id: number,
    title: string,
    price: number
}

function updateBook(book: NonNull<Partial<Book>>) {
    //
}

updateBook({id: 1,  price: 500});