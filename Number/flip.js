// flip the number 1 to 0, 0 to 1 without using any ternary operation, condition, negation ..

function flip(num) {
    return Math.pow(num - 1, 2);
}

console.log(flip(1));