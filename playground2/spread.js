// function add(a,b){
// return a+b;
// }
//
// //console.log(add(4,5));
//
// var addArr = [5,6,7];
// console.log(add(...addArr));
//
// var groupA = ['Jen',"Alenka",'John',"Bob",'Steve'];
// var groupB = ['Vikram'];
// var final = [3,...groupB,...groupA];
// console.log(final);

var person = ['Andrea', 25];
var personB = ['Thomas',29];

function greetingAge(name,age){
  console.log(`Hello ${name}, you are ${age} years old`);
}

greetingAge(...person);
greetingAge(...personB);
