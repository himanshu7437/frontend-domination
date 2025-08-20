// es6

// 1. arrw function 

// js (normal) 
// three types of fn :-
// i) function statement 
// ii) function expression
// iii) anonymous function

// but in eas6, we have arrow fn. 
// it divide into three parts. 
//  i) basic arrow fn 
// () => {

// }

// ii) arrow fn with parametters 

// (params) => {

// }

// iii) implicit return 

// (params) => {
//     return;
// }

// (params) => console.log(params); // implicit return 

// 2. tempelate literal 

// console.log("hello", a, "my name is", name)
// console.log(`hello ${a} my name is ${name}`) // to use js in the print statements

// 3. default paramateres

// function abcd(param = 10){ // hum yaha ek default value de skte hai jo use hogi jab function koi bhi parameter nhi milega 
//     console.log(param);
// }

// abcd();
// abcd(12);

// 4. rest and spread 

// they are both same but different working. 
// i) spread 
// var a = [1, 2, 3, 4];
// var b = [...a]; // here we spread all the values and add it to the b variable.

// ii) rest 

// function abcd(a, b, ...c){
//     console.log(a, b, c);
// }

// abcd(1, 2, 3, 4, 5)

// 5. destructuring - matlab values ko destructure krna kisi variable mai
// var a = [1, 2, 3];
// var [first, second, third] = a;
// // var [first,, third] = a;

// console.log(first);
// // console.log(second);
// console.log(third);