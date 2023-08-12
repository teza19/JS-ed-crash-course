var a = 10;
var b = 20;

let c = a + b;
console.log(c);

console.log(typeof(c));

let d = "hello";
let f = "world";

let h = d + f;

console.log(h);
console.log(typeof(h));

var add;
var div
var mul;
var mod;

var add = 3+2;
var mul = 3*2;
var div = 3/2;
var mod = 3%2;

console.log( add, mul, div, mod );

console.log(1 < 2 ? true : false);


function hi(name){

  console.log("hello");

}

hi()

function addition(x,y){
  return x + y;
}
console.log(addition(9,3));


var addFunc = new Function("a","b" , "return a + b");

var r = addFunc(5,6)
console.log(r);



