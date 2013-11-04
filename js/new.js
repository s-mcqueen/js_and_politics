// This as a new object
function ExampleObject() {
    this.someNewProperty = 5; // This points to the new object
    this.confusing = true;
}

var a = new ExampleObject()
console.log(a)
