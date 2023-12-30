// Custom implementation of forEach function
function customForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

// Usage example:
const numbers = [1, 2, 3, 4, 5];
customForEach(numbers, (number, index) => {
    console.log(`Number at index ${index}: ${number}`);
});
