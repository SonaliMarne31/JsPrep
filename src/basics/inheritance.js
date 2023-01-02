class Bike {
    constructor() {
        document.write('In Bike constructor');
        this.company = 'Honda';
    }
}


class Vehicle extends Bike {
    constructor(name, price) {
        super();
        this.name = name;
        this.price = price;
    }
}


var v = new Vehicle("ABC", 12000);
document.write("<br>");
document.write(v.name + ' ' + v.price + ' ' + v.company);