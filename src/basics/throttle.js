const throttle = (callbackFn, delay) => {

    let timer;
    let recentEvent;

    const executeFunction = (event) => {
        recentEvent = event;
        console.log('Recent Event ', recentEvent);
        
        if(!timer) { // means handle the event now
            callbackFn(recentEvent);
            recentEvent = null;

            timer = setTimeout(() => {
                timer = null;
                if(recentEvent) {
                    executeFunction(recentEvent);
                }
            }, delay);
        }
 

    }

    return executeFunction;
}

const returnedFunction = throttle((evt) => {
    console.log('Execute me', evt);
}, 5000);

returnedFunction('e0'); // time = 0
returnedFunction('e1'); // time = 5
returnedFunction('e2'); // time = 10
returnedFunction('e3'); // time = 15
returnedFunction('e4');
returnedFunction('e5');
returnedFunction('e6');
returnedFunction('e7');
returnedFunction('e8');
returnedFunction('e9');
returnedFunction('e10');
returnedFunction('e11');
returnedFunction('e12');
returnedFunction('e13');