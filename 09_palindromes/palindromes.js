const palindromes = function (string) {
    /*/ ... /g It's a global regex. So it'll operate on multiple matches in the string.
[ ... ] This creates a character set. Basically it'll match any single character within the listed set of characters.
\W_ This matches the inverse of "word characters" and underscores. Any non-word character. */
    var re = /[\W_]/g;
    string = string.toLowerCase().replace(re, ``);
    let reverse = string.split("").reverse().join("");
    return string === reverse;
};

// Do not edit below this line
module.exports = palindromes;
