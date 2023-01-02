const debounce = (callbackFn, waittime) => {

    let timer;

    return(
        function executeFunction(...args){
            console.log(timer);
            // clearTimeout(timer);
            
            timer = setTimeout(() => {
                callbackFn(...args);
            }, waittime);
        }
    );


}

const returnedFunction = debounce((count) => {
    console.log('Execute me', count);
}, 5000);

returnedFunction(1);
returnedFunction(2);
returnedFunction(3);
returnedFunction(4);