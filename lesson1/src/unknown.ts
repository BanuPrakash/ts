
function somefunc2(callback: unknown) : void {
    if(typeof callback === 'string') {
        console.log(callback.toUpperCase());
    } else if(typeof callback === 'function') {
        callback();
    }
}

somefunc2("Hello World!!!");