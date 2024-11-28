// OCP
export function filter<T>(elems: T[], predicateFn: (elem: T) => boolean): T[] {
    let results: T[] = [];
    elems.forEach(elem => {
        if (predicateFn(elem)) {
            results.push(elem)
        }
    })
    return results;
}

// Complete this
// map is used to transform
export function map() {

}
//let mobiles:Product[] = filter(products, (p) => p.category === 'mobile');