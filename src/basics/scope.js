var a = 20;
const fun = () => {
    var a = 10;
    console.log('Inside fun ', a);
}

fun();
console.log('After fun() ', a)