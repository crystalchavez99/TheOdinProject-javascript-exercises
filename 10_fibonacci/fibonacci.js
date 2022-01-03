const fibonacci = function (n) {
    // string to number
    n = parseInt(n)
    if (n < 0) {
        return `OOPS`;
    }
    if (n < 2) {
        return n;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
