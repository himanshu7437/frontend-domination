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

// 1. write a js function to reverse a number?


// ist method 
// function reverseanum(num) {
//     var result = Number(num.toString().split("").reverse().join(""));    
//     return result;
// }

// var a = 1234;
// console.log(reverseanum(a));

// 2nd method 

// function reversenum(num) {
//     var rev = 0;
//     while (num > 0) {
//         rev = rev*10 + num%10;
//         num = Math.floor(num/10);
//     } 
//     return rev;
// }


// var a = 234345;
// console.log(reversenum(a));

// 2. write a function to check if a given string is palindrome or not?

// function checkPalindrome(str) {
//     return str.split("").reverse().join("") === str
// }

// var a = "sos"
// console.log(checkPalindrome(a));

// 3. write a js fn that returns a paassed string with letters in alphbetical order?

// function alphaorder(str) {
//     return str.split(" ").map(function(elem) {
//         return elem.split("").sort().join("");
//     }).join(" ");
// }
// var str = "hello i am himanshu"
// console.log(alphaorder(str));

// 4. write a js fn which accept a string as a parameter and converts the first letters of each word in the uppercase?

// function capitalize(str) {
//     return str.split(" ").map(function(elem){
//         return elem.charAt(0).toUpperCase() + elem.substring(1)
//     }).join(" ");
// }
// var  a = "hey this ia a cat"
// console.log(capitalize(a));

// 5. write a js fn to get the no. of occurece of each letter in a a specific string?

// function checkOccur(str) {
//     var newstr = str.replaceAll(" ", "")
//     var a = {};
//     for(let i = 0; i < newstr.length; i++){
//         if(a.hasOwnProperty(newstr.charAt(i))) {
//             a[newstr.charAt(i)]++;
//         } else {
//             a[newstr.charAt(i)] = 1;
//         }
//     }
//     return a;
// }

// var a = "hey am i frontend developer";

// console.log(checkOccur(a));


// -------------------------------loops ---------------------------------

// 1. loop an array and add all numbers of it?

// var a = [1, 2, 3, 4];
// var result = a.reduce(function( acc, num) {
//     return acc+num;  // return te final updated acc
// }, 0); // initial value of acc.

// console.log(result);


// 2. in an array of numbers and string only add those which are not string?

// var a = [1, 2, 3, "hello", "ho", 67, "j", 8, "f"]
// var result = a.reduce(function(acc, elem) {
//     if(typeof elem === "string") {
//         return acc + 0;
//     }
//     else{
//         return acc + elem;
//     }
// })

// console.log(result);

// 3. loop an arrays of object and remove all objects which dont have given value male?

// do later

// -------------------------------Arrays ---------------------------------

// 1. js fn to clone an array?


// var a = [1, 2, 3, 4];

// 1st method 
// var b = [...a];
// console.log(b); // [1, 2, 3, 4]

// 2nd method
// var c = []
// a.forEach(function(elem) {
//     c.push(elem);
// })
// console.log(c); // [1, 2, 3, 4]

// 2. write a js fn which accepts an arguement and return the type?

// function checktype(elem) {
//     return typeof elem;
// }
// console.log(checktype(12));
// console.log(checktype("hello"));
// console.log(checktype(true));
// console.log(checktype({}));
// console.log(checktype());
// console.log(checktype(function(){}));

// 3. write a js fn to get the first element of an array passing a paramter "n" return the first 'n' element of the array.

// function printfirst(arr, index = 1) {
//     if(index < arr.length) {
//         for(let i = 0; i <= index; i ++) {
//             console.log(arr[i]);        
//         }
//     } else {
//         console.log("yeh jyada mang liya bro")
//     }
// }

// var a = ["hello", "hii", "hmm"];
// var b = ["o", "i", "h"];
// printfirst(a, 2);
// printfirst(b, 2);

// 4. write a js fn to find the most frequent item of an array?

// function mostFreq(arr) {
//     var result = {}
//     var highestVal = 0;
//     var value;
//     arr.forEach(function(elem) {
//         if(result.hasOwnProperty(elem)) {
//             result[elem]++;
//         } else {
//             result[elem] = 1;
//         }
//     })
//     for (const key in result) {
//         if(result[key] > highestVal) {
//             highestVal = result[key];
//             value = key;
//         }
//     }
//     return `the most frequent number is ${value} which comes ${highestVal} times`
// }
// var a = [1, 2, 3, 4 , 4, 4, 4, 4, 4];
// console.log(mostFreq(a)); //the most frequent number is 4 which comes 6 times

// 5 write a js program to shuffle an array?

// do later

// 6. write a js program to compute the union of two arrays?

var a = [1, 2, 3, 4, 2];
var b = [1, 2, 2, 3, 4, 6];

var c = new Set(a.concat(b)); // set contains always unique values
console.log(c);

