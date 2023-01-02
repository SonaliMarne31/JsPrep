// Basic promise

function createPromise (id) {
    return new Promise((resolve, reject) => {
        console.log('New Promise ' + id);
    })
}

createPromise(1);
createPromise(2);

// Promise Resolve / Reject 
const myPromise = new Promise((resolve, reject) => {  
    let condition = true;  
    
    if(condition) {    
        resolve('Promise is resolved successfully.');  
    } else {    
        reject('Promise is rejected');  
    }
}).then((message) => {
    console.log(message);
}).catch((err) => {
    console.log(err)
});


// Implement Promises all

Promise.all = function promiseAll(promises) {

    let result = [];
    if (promises.length === 0) {
        return Promise.resolve([]);
    }

    promises.forEach((promise, index) => {
        return
    })



}