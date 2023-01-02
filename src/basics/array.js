var arr = [];

arr.push(1)
arr.push(2)
arr.push('Hi')

console.log(arr);

// For each
arr.forEach((ele, index) => {
    console.log(index + ' ' + ele)
})

// iterator 
var itr = arr.entries();
for(i of itr) {
    console.log(i);
}

// iterator 
var itr1 = arr.keys();
console.log('Getting keys')
for(i of itr1) {
    console.log(i);
}


// copyWithin
var arr1= [1,2,3,4,5,6,7,8,9,10];
// place at 4th position elements between 1st and 4th pos
arr1.copyWithin(4, 0, 4);
console.log(arr1);

// every
// Return true if all the elemnts satisfy the function call result
const isNum = (n) => {
    return Number.isInteger(n);
}

var allNum = arr.every(isNum);
console.log(allNum);

// fill is more like replacing 
// fill(value, start, end);
var arr3 = [0, 0, 0 , 0];
arr3.fill(1, 0, 2);
console.log(arr3);

// filter()
// generates new arr for elements that satisfy the function call
var filterRes = arr.filter(isNum);
console.log(filterRes);

// find()
// gives first element that satifies the condition
var findRes = arr.find(isNum);
console.log(findRes)

// join
// joins all elements into a string
var str = arr.join('_');
console.log(str);

// map 
// stores result of calling function for every element
var newArr = arr.map((n) => isNum(n));
console.log('map() '+ newArr);

// reduce() - reduce elements of arr into single element
// 3 = initial value
let finalVal = arr.reduce((input, element) => {
    return input + element;
}, 3);
console.log('final Value '+finalVal);

// slice => get a subArr
var subArr = arr1.slice(1,4)
console.log('subArr '+ subArr);

// flat
const numbers = [1, 2, [3, 4, [5, [6]]]];
const flatNumbers = numbers.flat(1);

console.log('flatNumbers ' + flatNumbers);



var arr=['a', 'b[0]]', 'c'];  
let values = [1, 2];
var a=arr.reduce(function (accumulator,currentValue, index) {  
    
    return(

        accumulator[currentValue] || (accumulator[currentValue] = isNaN(arr[index+1])) ?
            arr.length - 1 === index ? values[index] : {}
            : []

    );


}, {});
console.log('reduce arr ', a);  