const reverseString = function (str) {
    if (str.includes(" ")) {
        str = str.split("").reverse().join("");
        return str;
    }

    str = str.split("").reverse().join("");
    return str;
};

// Do not edit below this line
module.exports = reverseString;
