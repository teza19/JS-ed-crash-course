function add(x,y){
  return x+y;
}

console.log(add(3,4));

const name = (name)=>{
  console.log("Hello " + name);
}
name("chinni");


// var age = prompt("Please enter age: ");

//console.log("Age: " + age);

var numer = 10;
var newnum = numer+1;
console.log("Number: " + newnum);

let arr = [1,2,3,4,5];
console.log("Arrays: " + arr, arr[0], arr[1], arr[2], arr[3], arr[4]);

let arrtstr = arr.toString();
console.log(arrtstr);


var string = ("my name is tezasaai");

console.log(string);

console.log(string.length);
console.log(string.slice(3,6));
console.log(string.charAt(0));
console.log(string.split(" ,"));
console.log(string.toLowerCase());
console.log(string.toUpperCase());
console.log(string.replace("name", "peru"));


var x = [1,2,3,4,5];
var y= x.map(x => x * x);
const str = x.map(x => x.toString());
console.log(y);
console.log(str);
console.log(x);
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(x => x % 2 === 0);
console.log(evenNumbers); 