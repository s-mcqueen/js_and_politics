var Person = function() {
    this.canTalk = true;
    this.greet = function() {
        if (this.canTalk) {
            console.log("Hi, I'm " + this.name);
        }
    };
};

var Employee = function(name, title) {
    this.name = name;
    this.title = title;
    this.greet = function() {
        if (this.canTalk) {
            console.log("Hi, I'm " + this.name + ", the " + this.title);
        }
    };
};
Employee.prototype = new Person();

var Customer = function(name) {
    this.name = name;
};
Customer.prototype = new Person();

var Mime = function(name) {
    this.name = name;
    this.canTalk = false;
};
Mime.prototype = new Person();

var a = new Employee('sean', 'killer')
a.greet()
