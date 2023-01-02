class PubSub {
    constructor() {
        this.events = {}
    }

    subscription (eventName, func) {

        return {
            subscribe: () => {
                if(this.events[eventName]) {
                    this.events[eventName].push(func);
                    console.log(func.name , ' has subscribed to ', eventName);
                } else {
                    this.events[eventName] = [func];
                    console.log(func.name , ' has subscribed to ', eventName);
                }
            },

            unsubscribe: () => {
                if(this.events[eventName]) {
                    this.events[eventName] = this.events[eventName].filter((f) => f != func);
                    console.log(func.name , ' has unsubscribed to ', eventName);
                }
            }

        }


    }

    publish(eventName, ...args) {
        const functions = this.events[eventName];
        if(Array.isArray(functions)) {
            functions.forEach((f) => {
                f.apply(null, args)
            })
        }
    }

}

const speak = (name) => {
    console.log('Hello ' , name);
}

const greetAll = (...names) => {
    names.forEach((name) => {
        console.log('Hi ', name);
    })
}

const ps = new PubSub();

ps.subscription('greet', greetAll).subscribe();
ps.subscription('speak', speak).subscribe();
ps.subscription('speak', greetAll).subscribe();

ps.subscription('speak', greetAll).unsubscribe();

ps.publish('speak', 'Jonas');
ps.publish('greet', 'John', 'Rita', 'Harry');