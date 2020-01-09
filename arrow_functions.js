var _this = this;
// Named function
function add(x, y) {
    return x + y;
}
// Anonymous function
var myAdd = function (x, y) { return x + y; };
console.log(add(4, 7));
console.log(myAdd(2, 3));
// Fat Arrow Function
var sum = function (x, y) {
    return x + y;
};
sum(10, 20); //returns 30
var square = function (x) {
    return (x * x);
};
console.log(square(9));
var square1 = function (x) {
    return (x * x);
};
console.log(square1(9));
// Use of this keyword
//Unlike regular functions, arrow functions do not have their own this.
var user = {
    name: "GFG",
    gfg1: function () {
        console.log("hello " + _this.name); // no 'this' binding here
    },
    gfg2: function () {
        console.log("Welcome to " + this.name); // 'this' binding works here
    }
};
user.gfg1();
user.gfg2();
//Arguments objects are not available in arrow functions, but are available in regular functions.
var user1 = {
    show: function () {
        console.log(arguments);
    }
};
//user1.show(1, 2, 3);
user1.show();
/*
Using new keyword

Regular functions created using function declarations or expressions are ‘constructible’ and
‘callable’. Since regular functions are constructible, they can be called using the ‘new’ keyword.
    However, the arrow functions are only ‘callable’ and not constructible.Thus, we will get a
     run-time error on trying to construct a non-constructible arrow functions using the new keyword.*/
/*let x1 = function():void{
    console.log(arguments);
};
//new x1(1,2,3);


let xz = ()=> {
    console.log(arguments1);
};
new xz(1,2,3);*/
//# sourceMappingURL=arrow_functions.js.map