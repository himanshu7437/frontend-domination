// interview questions - 4

// -------------------------------Strings ---------------------------------

//1. Given a string reverse each word in the string?

// var str = "hello i am himanshu";
// var newstr = str.split(" ").map(function(elem) {   // here we use map instead of for each, because map helps to store the values in a new array
//     return elem.split("").reverse().join("")
// });
// console.log(newstr.join(" ")); // olleh i ma uhsnamih

//2. How to Check, if an object is an array or not?

// var a = [1, 2, 3, 4];
// var b = {
//     0:1,
//     1:2,
//     2:3
// }
// console.log(typeof a); // object
// console.log(typeof b); // object
// // so to check if the given variable is a array we have to use.
// console.log(Array.isArray(a)); // true
// console.log(Array.isArray(b)); // false


//3. How to empty an array? (do not run a loop through each value and to pop each value)

// var a = [1, 2, 3, 4, 5];
// a.length = 0;
// console.log(a); // []

//4. howe to check if a no is an integer?

// var a = 2;
// var b = 3.2;
// console.log(Number.isInteger(a)); // true
// console.log(Number.isInteger(b)); // false

//5. make this work :- duplicate([1,2,3,4]) -> [1,2,3,4,1,2,3,4]

// function duplicate(arr) {
//     return arr.concat(arr);
// }

// console.log(duplicate([1,2,3,4])); // [1,2,3,4,1,2,3,4]


// -------------------------------functions ---------------------------------
