// Class
class Employee {

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }


    details() {
        document.write(this.id + ' ' + this.name);
    }

    static display() {
        document.write("<br>");
        document.write("Static function called");
    }

}

// Prototype
Employee.prototype.fullName = function() {
    return this.id + ' ' + this.name;
}

var emp1 = new Employee(1, 'Sonali');
emp1.details();
document.write("<br>");

var emp2=new Employee("Duke", "William");  
document.write(emp2.fullName())

Employee.display();

// JS Object

var obj = {
    id: 2,
    name: 'Navneet',
    address: 'California'
}
document.write("<br>");
document.write(obj.id + ' ' + obj.name);

var obj1 = new Object();
obj1.id = 3;
obj1.name = 'Random Name';

document.write("<br>");
document.write(obj1.id + ' ' + obj1.name);
