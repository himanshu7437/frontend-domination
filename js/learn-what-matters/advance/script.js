// advance

// 1) higher order fn - those funnction which take 
// i) a fn as a parameter 
// ii) return a fn 

// function abcd(cdef) {
//     return function() {

//     }
// }
// abcd(cdef);

// function cdef() {

// }

// 2) constructor fn - those fn which includes this keyword and when we call them we use new keyword. 

// i) this fn are use when we want to give similar properties to a number of elements. 
// ii) it returns a object 

// function human(name, age, height) {
//     this.name = name;
//     this.standard = 'Btech';
//     this.age = age
//     this.height = height
//     this.gender = 'male'
// }

// var himanshu = new human('himanshu', 21, 5.6);
// var ankit = new human('ankit', 21, 5.6);
// var ashish = new human('ashish', 21, 5.6);

// 3) first class fn 
// js has all function as first class fn because in js we can treat fn as normal value, save them , and pass to another fn.

// i) as variable, save them
// var hello = function() {

// }

// ii) fn ko pass kr skte in another fn

// function abcd () {

// }
// abcd(hello);

// 4) new keyword 
// it is used to create a blank object then add all the properties from the fn which is calling

// function human(name, age, height) {
//     this.name = name;
//     this.standard = 'Btech';
//     this.age = age
//     this.height = height
//     this.gender = 'male'
// }

// var himanshu = new human('himanshu', 21, 5.6);

// 5) iife - it is a special fn which run immediately such as we can make private variables which cannot be access by anyone.

// var ans = (function() {
//     var hello = 'hello';
//     // console.log(hello);
//     return {
//         getter: function() {
//             console.log(hello);
//         },
//         setter: function(name) {
//             hello = name;
//         }
//     }
// })()

// // console.log(hello)
// ans.getter();

// // hello = 'himanshu';
// ans.setter('himanshu');
// ans.getter();

// 6) prototype - whenever we create a object js automatically insert some inbuilt properties and methods which we can use.


// var obj = {
//     name: 'ankit'
// };

// console.log(obj.hasOwnProperty('name'));

// 7) prototype inheritance - inheritance properties and method with the help of prototype is termed prototype inheritance

// var human = {
//     canfly: false,
//     cantalk: true,
//     canSwim: true,
// }

// var himanshu = {
//     age: 21,
//     name: 'himanshu',
// }

// himanshu.__proto__ = human;
// console.log(himanshu.canSwim)

// 8) this keyword - this keyword change its meaning according to context.

// i) global scope 
// console.log(this);

// ii) in fn 
// function abcd() {
//     console.log(this);
    
// }
// abcd()

// iii) in methods 

// var human = {
//     canfly: false,
//     cantalk: true,
//     canSwim: true,
//     getter: function() {
//         console.log(this.canSwim);        
//     }
// }

// 9) call apply bind 

// call
// function abcd(var1, var2, var3) {
//     console.log( var1, var2, var3);    
//     console.log(this);    
// }

// var arr = {
//     name: 'ankit',
//     standard: 3,
// }

// abcd.call(arr, 3, 4, 5);

// apply
// function abcd(var1, var2, var3) {
//     console.log( var1, var2, var3);    
//     console.log(this);    
// }

// var arr = {
//     name: 'ankit',
//     standard: 3,
// }

// abcd.apply(arr,[ 3, 4, 5]);


// bind
// function abcd() {    
//     console.log(this);    
// }

// var arr = {
//     name: 'ankit',
//     standard: 3,
// }

// var himanshu = abcd.bind(arr);

// himanshu();

// 10) pure and impure fn 

// pure fn - ek asa fn jisme agr same input de to same output mile hmesha, or yeh kisi global variable ko change na  kare

// var hello = 'himanshu';
// function abcd(a,b) {
//     return a*b;
// }

// console.log(abcd(2,3));
// console.log(abcd(2,3));
// console.log(abcd(2,3));
// console.log(abcd(2,3));

// impure fn - opposite

// var hello = 'himanshu';
// function abcd(val) {
//     hello = 'hii';
//     console.log(Math.random()*val);
// }

// abcd(4);
// abcd(4);
// abcd(4);
// abcd(4);