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

// 7) how to copy a refrence 

// array 
// var arr = [1, 3, 4, 5, 6];
// var grr = [...arr];
// grr[0] = 10000;

// object 

// var obj = {
//     name: 'ashish',
// }

// var ggg = {...obj}

// ggg.class = 34;

// 8) truthy and falsy 

// if(false) {
//     console.log('true');
    
// } else {
//     console.log('false');
// }

// truthy - remaining
// falsy - null, undefined, NaN, 0, false, document.all

// 9) switch - use for conditional 
// var month = 2
// switch (month) {
//     case 1:
//         console.log("jan");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("march");
//         break;

//     default:
//         console.log("default value");
//         break;
// }

// 10) for each  - array p jb loop lgake har ek element p kuch kaam krna ho

// var arr = [1 , 2, 3, 4, 5, 6];

// var hello = arr.forEach(function(num) {
//     console.log(num+1);
// })

// -- for in - object p jb loop lgana ho

// var obj = {
//     name: 'ankit',
//     class: 2,
//     college: 'vaish',
//     city: 'bhiwani'
// }

// for (var key in obj) {
//     console.log(key, obj[key]);
// }

// 11) how array are made - in js arrays are converted into objects.

// var arr = [11, 2, 4, 5];

// arr[-1] = 23;
// var arr = {
//     0: 11,
//     1: 2,
//     3: 5
// }

// 12) delete a prop in object 

//  var obj = {
//     name: 'ankit',
//     class: 2,
//     college: 'vaish',
//     city: 'bhiwani'
// }

// delete obj.college;

// obj.college = 'vaish';
// obj.name = 'vaish';