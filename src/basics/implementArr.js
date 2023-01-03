// implement Array.flat(depth)
let array = [1, [2], [3, [4]]];

let array1 = [1, 2, 3, [4, 5, [6, [7]], 8], [10, [11, [12, 13]]], 9];
function flat(arr, depth = 1) {
    let res = [];

    arr.forEach(element => {
        // if element is array, go recurively
        if(Array.isArray(element) && depth > 0) {
            res.push(...flat(element, depth-1));
        } // else add to res
        else {
            res.push(element);
        }
    });
    return res;
}

let flatArr = flat(array, 1);
console.log('flattened array ' + flatArr);
console.log('arr 1 ', flat(array1, 1));
console.log('arr 2 ', flat(array1, 2));
console.log('arr 3 ', flat(array1, 3));
console.log('arr 4 ', flat(array1, 4));
console.log('arr 5 ', flat(array1, 5));


// Implement Array.reduce 
let arrToReduce = [1,2,3,4, 'Hi'];
function reduce(arr, sum = 0) {
    let res = sum;

    arr.forEach((element) => {
        res += element;
    });

    return res;
} 

let reducedArr = reduce(arrToReduce, 0);
console.log('reduced Array '+ reducedArr);


// Implement Queue using arrays
let input = []
let output = []

function enqueue(stack, item) {
    stack.push(item);
}

function deQueue(input, output) {
    if(output.length <= 0) {
        while(input.length > 0) {
            let ele = input.pop();
            output.push(ele)
        }
    }
    return output.pop();
}

enqueue(input, 1);
enqueue(input, 2);
enqueue(input, 3);
enqueue(input, 4);
var pop = deQueue(input, output);
console.log(pop)
