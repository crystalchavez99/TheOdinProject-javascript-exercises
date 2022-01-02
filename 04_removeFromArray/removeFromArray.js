const removeFromArray = function(arr, ...remove) {
    let values = [...remove];
    console.log(`Array of values to remove: ${values}`);
    /*creates a new array with all elements that pass the test
    implemented by the provided function*/
    arr = arr.filter(number => !values.includes(number));
    console.log(`New filtered array: ${arr}`);
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
