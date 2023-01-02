// let array = [1, 2, 3, [4, 5, [6, [7]], 8], [10, [11, [12, 13]]], 9];
let array = [1, [2 , [3 , [4]], 5]];

function flattenDeep(arr, result = []) {
   
    for(let i=0; i<arr.length; i++) {
        if(Array.isArray(arr[i])) {
            flattenDeep(arr[i], result);
        } else {
            result.push(arr[i]);
        }
    }

    return result;

}

let result = flattenDeep(array);

// console.log(result);


function flattenDepth(arr, result = [], depth = 2) {

    for(let i=0; i<arr.length; i++) {
        if(Array.isArray(arr[i]) & depth > 0) {
            flattenDepth(arr[i], result, --depth);
        } else if(Array.isArray(arr[i]) & depth == 0) { 
            result.push(arr[i]);
        } else {
            result.push(arr[i]);
        }
    }

    return result;
}

let result1 = flattenDepth(array, [], 4);
console.log(flattenDepth(array, [], 1));
console.log(flattenDepth(array, [], 2));
console.log(flattenDepth(array, [], 3));
console.log(result1);