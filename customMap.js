// Custom implementation of map function
function customMap(arr, callback) {
    let mappedArray = [];
    for (let i = 0; i < arr.length; i++) {
        mappedArray.push(callback(arr[i], i, arr));
    }
    return mappedArray;
}

// Example of customMap function usage
const numbers = [1, 2, 3];
const squaredNumbers = customMap(numbers, (num) => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9]
