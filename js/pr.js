function MyClass() {
      var _value = 1;
}
MyClass.prototype.getValue = function() { return _value; }

var c = MyClass();
c.getValue();

