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