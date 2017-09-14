const add = (n) => (n+10);
console.log("simple call", add(3));

const memoize = (fn) => {
    let cache = {};
    return (...args) => {
        let n = args[0];
        if (n in cache) {
            console.log("fetching from cache");
            return cache[n];
        } else {
            console.log("calculating");
            let result = fn(n);
            cache[n] = result;
            return result;
        }
    }
}

const memoizeAdd = memoize(add);
console.log(memoizeAdd(3)); //calculated
console.log(memoizeAdd(3)); //cache