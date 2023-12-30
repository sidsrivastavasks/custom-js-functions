function customFilter(array, callback) {
    const filteredArray = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            filteredArray.push(array[i]);
        }
    }

    return filteredArray;
}

// Example of customFilter function usage
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function isEven(number) {
    return number % 2 === 0;
}

const evenNumbers = customFilter(numbers, isEven);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
