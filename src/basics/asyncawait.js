async function myDisplay() {  
    let myPromise = new Promise(function(myResolve, myReject) {  
      myResolve("Hello World!!");  
    });  
    document.getElementById("main").innerHTML = await myPromise;  
}  

  myDisplay(); 