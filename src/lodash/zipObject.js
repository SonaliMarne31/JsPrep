let arr = ['a', 'b'];
let vArr = [1, 2];


function zipObject (props, values) {
    let obj = Object.assign({}, []);

    for(let i=0; i<props.length ; i++) {
        obj[props[i]] =  values[i];
    }
    return obj;
}

console.log(zipObject(arr, vArr));


// _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
// => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }


let zipObjectDeep = (data, values) => {
    let result = {};
    data.forEach((i, idx) => {
      let keys = i.split(".");
      keys.reduce((acc, items, index) => {
        let itemArr = items.split(/\[([^}]+)\]/g);
        let value = itemArr[0];
        let indexValue = itemArr[1] && itemArr[1];
        return (
          acc[value] ||
          (acc[value] = isNaN(Number(keys[index + 1]))
            ? keys.length - 1 === index
              ? values[idx]
              : {}
            : [])
        );
      }, result);
    });
    return result;
    
  };
zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);



function zip(...arr) {
    let result = [];
    for(let j = 0; j<arr.length; j++) {
        let aArr = [];
        for(let k=0; k<arr.length; k++)
            aArr.push(arr[k][j]);
        result.push(aArr);
    }
   
    return result;

}


let r = zip(['a', 'b'], [1, 2], [true, false]);
console.log(r)