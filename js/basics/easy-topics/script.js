// basics

// 1. word vs keyword
// word - any word which doesnt have any meaning in js
// keyword - any word which have any meaning in js(reserved keyword)

//2 var, let, const
// i) var and let can be initialize later. but const cannot.
// ii) var is es5 part and let, const are in es6.
// iii) var - function scope, let braces scope
// iv var add itself in window object, but let dont

// function abcd() {
//     var hello = 'hello';
//     function hell() {
//         var hii = 'hii';
//         console.log(hello);
//     }
//     hell();
//     console.log(hii);
// }

// abcd();

// var hello= 'hello';
// var hii = 'hii';
// console.log(window);

//3) hoisting - in js, variables and functions are hoisted thatt is their declaration move to the top of the code.
// effect - we can acess a variable or a function before declaration 

// console.log(hello);
// console.log(hii);
// var hello= 'hello';

// break 
// var hello; - top of the code
// hello = 'hello'; - same position 

// undefined - initalize but uski value nhi hai
// not defined - existence hi nhi hai 

// abcd();
// function abcd() {
//     console.log('hii');
// }

// 4) types in js 
// i) primitive - numbers, symbol, string, boolean, etc
// ii) refrence - () , [], {}

// primitive - original value not change

// var hello = 23;
// var hii = hello;

// hii = 3;
// console.log(hello);

// refrence - original value change

// var arr = [1, 2, 4, 5];
// var grr = arr;

// grr[4] = 3;
// grr[2] = 3;

// 5) conditionals - when we have choices
// - nested - if else if else 

// var age = 3;
// if(age > 0) {
//     console.log('true');
// } else {
//     console.log('false')
// }

// 6) loops - when we have to repeat code with a certain condition

// --- for 
// i initialization
// ii condition
// iii increament , decrement
// for (let index = 0; index < 5; index++) {
//     console.log('hello');
// }

// -- while 

// var age = 2;
//  while(age < 5) {
//     console.log('hello')
//         age++;
//  }

// -- do while 

//   do {
//     console.log('hello')
//   } while(false);

// 7) function - means we can name a line of code and run it anytime.

// function add() {
//     console.log('hello');
// }

// add();
// add();
// add();
// add();

// i) when we want to run code in future 
// ii) when we want to reuse a code

// iii when we want to print a code with differnt data

// function add(a , b) {
//         console.log(a + b);
// }

// add(3, 5); 
// add(3, 3);

// arguments - value which we pass 
// parameters - value which fn take

// 8) arrays - when we want to store multiple values

// var arr = [1, 2, 4 , 5, 6];

// //access
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// // initialize
// arr[4] = 3;
 

// push pop shift unshift splice

// // i) push - value add in last
// arr.push(7);

// // ii) pop - value delete in last
// arr.pop();

// // iii) shift - value delete in first
// arr.shift();

// // iv) unshift - value add in first
// arr.unshift(1000000);

// v) splice - delete a number of element 
// arr.splice(2, 3);

// 9) objects - objects holds the details of anything in key value pair;

// var obj = {
//     name: 'ankit',
//     rollNo: 338488484,
//     run: function() {
//         console.log('i can run');
//     }
// }

// console.log(obj.name);
// console.log(obj.rollNo);
// obj.run();