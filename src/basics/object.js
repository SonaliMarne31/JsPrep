// Create Object

// using literal
var emp = {
    "id": 1,
    "name": 'John Doe',
    "salary": 100000
}

// using new keyword
var emp1 = new Object();
emp1.id = 2
emp1.name = 'Smith Doe'
emp1.salary = 150000

// using constructor
function emp2(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary
}

var emp22 = new emp2(3, 'Great Emp', 200000);

console.log(emp);
console.log(emp1);
console.log(emp22);


// Methods

// Object.assign(target, source)
var obj1 = Object.assign({}, emp1);
console.log('obj1 ', obj1)

// Object.entries() > return [K,V] pairs of an obj
console.log(Object.entries(obj1))

console.log(Object.values(obj1));


Object.freeze(obj1);
// obj1.name = 'New name'; // return error

var props = Object.getOwnPropertyNames(obj1);
console.log(props)

console.log(Object.getPrototypeOf(obj1))


// Seal vs preventExtensions
// Seal >> No new prop, no modification to existing prop
// preventExtensions  >> No new prop

// Object.seal(obj)  >> cannot add new props or modify existing props
Object.seal(obj1);
// obj1.newProp = 'New Prop Value' >> error object is not extensible

Object.preventExtensions(obj1); 
// obj1.newProp = 'New Prop Value'; >> error object is not extensible

// Shallow copy
var obj2 = emp;
console.log('obj2', obj2);

obj2.id = 5;
console.log('orig obj ', emp);
console.log('cloned obj ', obj2);