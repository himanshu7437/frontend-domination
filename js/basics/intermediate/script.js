// intermediate

// 1) window object - in js, some features we use are not from js itself. but still we use them. these features are provided by browser in window object.

// console.log('hello');
// alert('hello');

// 2) browser context api - 

// window Object
// stack memory
// heap memory

// these 3 combinely form browser context api 

// 3) stack - stacks help to arrange the sequence of task in code

// 4) heap memory - temporary values between input and output.

// 4 + 5 + 4 + 8 + 3 
// 9 + 4 + 8 + 3
// 13 + 8 + 3
// 21 + 3 
// 24

// 5) execution context - when a function is called a fn, it create a iamginary box , where the code is executed called execution context

// these 3 things included 
// variable
// function
// lexical environment 

// 6) lexical environment 

// function abcd() {
//     var hello = 'hello'
//     function cdef() {
//         let hii = 'hii';
//         console.log(hello);
//     }
//     cdef();
// }

// abcd();

// 1. variable 
// hello 
// 2. fn 
// cdef
// 3. lexcal enviroment 
// var - acess all child 
// let - cdef 