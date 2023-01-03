function outerFn() {

    let counter = 0;

    return {
        innerFn: function innerFn(count) {
            counter = count + counter;
            return counter;
        }
    }


}

let iFn = outerFn();
// console.log(iFn.innerFn(1));
// console.log(iFn.innerFn(1));


var y = 1;
if (function f() {}) {
  y += typeof f;
}
// console.log(y);

// let b;
// (function(){
//     var a = b = 3;
//   })();
  
// console.log("a defined? " + (typeof a !== 'undefined'));
// console.log("b defined? " + (typeof b !== 'undefined'));



var x = 23;

(function(){
  var x = 43;
  (function random(){
    x++;
    console.log('IIEF', x);
    var x = 21;
  })();
})(); 


(function(a){
    return (function(){
      console.log(a);
      a = 23;
    })()
  })(45);


const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000);
}
console.log(i);

for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000);
}