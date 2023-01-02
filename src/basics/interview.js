var string = "Welcome to this Javascript Guide!";

function reverseStr(string) {
    var splitStr = string.split(' ');
    let str = '';
    splitStr.forEach(element => {
        str += ' ' + Array.from(element).reverse().join('');
    });
    return str;
}


console.log(reverseStr(string));

var arrayList = [1 , 2, 3];
console.log(Array.isArray(string));

// Object.prototype.toString.call(arrayList)