export function Memo(target:any, methodName: string, descriptor:PropertyDescriptor) {
    const original = descriptor.value; // original method
    const cache = new Map();
    // proxy pattern
    descriptor.value = function(...args: any[]) {
        const key = JSON.stringify(args);
        if(!cache.has(key)) {
           
            cache.set(key, original.apply(this, args)) ; // invoke actual method
        } else {
            console.log("has key " , key)
            return cache.get(key);
        }
       
    }
    return descriptor;
}