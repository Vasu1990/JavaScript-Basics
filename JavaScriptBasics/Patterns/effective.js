//http://stackoverflow.com/questions/11651527/how-to-set-up-javascript-namespace-and-classes-properly
MyNamespace = {};
MyNamespace.sub = {};
MyNamespace.anotherSub = {};
MyNamespace.sub.MyClass = (function () {

    var static_var; //static private var

    var MyClass2 = function () {

        var privateVar; //private
        var privateFn = function () { }; //private 

        this.someProperty = 5;  //public
        this.anotherProperty = false;  //public
        this.someFunction = function () {  //public
            //do something
        };
    };

    return MyClass2;

})();
debugger;

var c1 = new MyNamespace.sub.MyClass();
c1.someProperty = 1; // creates 5->1.

var c2 = new MyNamespace.sub.MyClass();
c2.someProperty = 2;  // creates 5->2. c1 is still 1



debugger;
var myClass = function () {
    var someProperty = 5;
    var anotherProperty = false;

    var init = function () {
        //do something
    };

    var someFunction = function () {
        //do something
    };

    return {
        someProperty: someProperty,
        anotherProperty: anotherProperty,
        init: init,
        someFunction: someFunction
    };
};


MyNamespace.MyClass = myClass();
var c2 = MyNamespace.MyClass;
// how  are planning to create one more object, while it's a reference? copy      //the whole one?

c2.someProperty = 2; // changes 5 -> 2
var c3 = MyNamespace.MyClass.init(); // create 2 instead of 5

c3.someProperty = 3;    // changes c3 and c3 from 2 to 3.
console.log(c2.someProperty + c3.someProperty);
console.log(c2.someProperty + c3.someProperty);