// 50 interview Questions

// -------------------  console log ---------------------

// 1. log your name and favourite obby to console.

// console.log("himanshu sharma");
// console.log("reading books, playing games");


// 2. perform and log the result - 45*2-10

// console.log(45*2-10);

// 3. console current year

// var newd = new Date();
// console.log(newd.getFullYear());

// 4. create two variable for first and last name , concatenate them and log them

// var first = "Himanshu";
// var last = " Sharma";
// console.log(first+last);

// 5. trackk the value of a variable by logging it before and after update 

// var a = 10;
// console.log(a);
// a = 12;
// console.log(a);

// 6. use console.error() to simulate an error message

// console.error("this is an error message");

// 7. log the sqauare of the number 12 to the console

// var a = 12;
// console.log(a*a);

// 8. print the type of a variable holding a value true

// var a = true;
// console.log(typeof a); // boolean

// 9. make a variable holding your age and log whether it id greater than 18.

// var age = 21;
// if(age>18) {
//     console.log(age);
// }

// 10. log the result of 100/0 and observe the output.

// console.log(100/0);


// -------------------  variable and datatypes ---------------------

// 1. diplay a varialble using let and log its value

// let a = 10;
// console.log(typeof a); // number

// 2. creare a const pi and log

// const pi = 3.14;
// console.log(pi);

// 3. reassign a value to a variable declared with let and log the result

// let a = 10;
// a = 12;
// console.log(a);

// 4. check the type of null and log it.

// console.log(typeof null); // object

// 5. create a variable with a no. as a string "20" and check its type.

// var a = "20";
// console.log(typeof a); // string

// 6. use type of and check the type of boolean

// console.log(typeof Boolean); // function

// 7. create three variable of types string, number, and boolean and log their values.

// var a = "hello";
// var b = 12;
// var c = false;

// console.log(a, b, c);

// 8. declare a variable without assigning a value and log its type. 

// let a;
// console.log(a); // undefined 


// 9. create a variable with undefined and log its type.

// let a = undefined;
// console.log(typeof a); // undefined

// 10. use const to create an array. try reassigning the array and observe.

// const a = [1, 2, 3];
// a = [2, 3, 4]; // error - assignment to constant variable


// ------------------- Loops ---------------------

// 1. write a for loop to print numbers from 1 to 50.

// for (let i = 1; i <= 50; i++) {
//     console.log(i);
// }

// 2. use a while loop to sum the numbers from 1 to 50.

// var sum = 0;
// var num = 0;

// while(num <=50) {
//     sum+=num;
//     num++;
// }
// console.log(sum);

// 3. create a for....of loop to log each character of the string "javascript".

// var str = "javascript";

// for (var element of str) {
//     console.log(element); 
// }

// 4. write a for loop that print only even no. between 1 to 20. 

// for(let i = 1; i <= 20; i++) {
//     if(i%2==0) {
//         console.log(i);       
//     }
// }

// 5. use a do....while loop to log numbers from 5 to 1.

// var i = 5;
// do {
//     console.log(i); 
//     i--;
// } while (i>0);

// 6. create a for loop that calculates the factorial of 5.

// var sum = 1;
// for(let i = 1; i <= 5; i++) {
//     sum*=i;
// }
// console.log(sum);

// 7. use for loop to reverse an array [1, 2, 3, 4].

// var a = [1, 2, 3, 4];

// for(let i = a.length - 1; i >= 0; i--) {
//     console.log(a[i]);
// }

// 8. write a nested loop to print an 3 * 3 grid of numbers.

// let num = 1;
// for(let i = 1; i <= 3; i++) {
//     let row = "";
//     for(let j = 1; j <= 3; j++) {
//        row += num + " ";
//        num++; 
//     }
//     console.log(row);
// }

// 9. write a while loop that logs numbers from 1 to 100 divisible by 5.

// var a = 1;

// while(a <= 100) {
//     if(a%5==0) {
//         console.log(a);
//     }
//     a++;
// }

// 10. use a for...in loop tp iterate over an oobject and log its keys.

// var a = {
//     name: "himanshu",
//     age: 21,
//     college: "vaish college of engineering",
//     indian: true,
// }

// for (const key in a) {
//     console.log(`${key} -> ${a[key]}`);
    
// }


// ------------------- Arrays ---------------------

// 1. create an array of your top 5 favourite movies and log it.

// var a = ["a", "b", "c", "d", "e"];
// a.forEach(function(elem) {
//     console.log(elem);
    
// })

// 2. find and log the second element of an array.

// var a = ["a", "b", "c", "d", "e"];
// console.log(a[1]);

// 3. add two new elements to the start of an array using unshift().

// var nums = [1, 2, 3, 4, 5, 6];
// nums.unshift(-1);
// nums.unshift(-2);
// console.log(nums);

// 4. remove the last element of the array and log the updated arrray.

// var nums = [1, 2, 3, 4, 5, 6];
// nums.pop();
// console.log(nums);


// 5. use slice to extract the first three element of the array 

// var nums = [1, 2, 3, 4, 5, 6];
// console.log(nums.splice(0,3));

// 6. find the index of a specific element in a array using .indexof()

// var nums = [1, 2, 3, 4, 5, 6];
// console.log(nums.indexOf(5));  // 4

// 7. check if a value exists in an array using .includes().

// var nums = [1, 2, 3, 4, 5, 6];
// console.log(nums.includes(5));  // true

// 8. combine two arrays [1,2] and [3,4] using .concat().

// var a = [1, 2];
// var b = [3, 4];
//  console.log(a.concat(b));
 
// 9. sort an array of numbers in [5, 2, 9, 1] in ascending order.

// using bubble sort 

// var a = [8, 2, 9, 1];
// for(let j = 0; j < a.length - 1; j++) {
//     for(let i = 0; i < a.length - j - 1; i++) {
//     if(a[i] > a[i+1]) {
//         let temp = a[i];
//         a[i] = a[i+1];
//         a[i+1] = temp;
//         }
//     }
// }

// 10. write a program that creeates a copy of an araay without mutating the original.

// var a = [1, 3, 5, 2, 5];
// var b = [...a]; // first mmethod 


// var a = [1, 3, 5, 2, 5];
// var b = [];

// a.forEach(function(elem) { // second method
//     b.push(elem);
// })

// console.log(a); 

// ------------------- functions ---------------------

// 1. write a functions to check if a number is even or odd.

// function checkevenodd(num) {
//     if(num%2==0){
//         return "even";
//     } else {
//         return "odd";
//     }
// }

// console.log(checkevenodd(5)); // odd

// 2. create a functions to calculate the area of a circle with a given radius.

// function areacir(num) {
//     return Math.floor(Math.PI * num * num);
// }

// console.log(areacir(7)); // 153

// 3. write a functions that accepts an array and returns the sum of its elements.

// var sum = 0;
// function sumarr(num) {
//     num.forEach(function(elem) {
//         sum = sum + elem;
//     })
//     return sum;
// }
// console.log(sumarr([1, 2, 3, 4, 5, 6, 7, 8, 8, 7]));


// 4. create a functions that checks if a string start with a specific chaaracter.

// function strcheck(str, char) {
//     return str.toLowerCase().startsWith(char.toLowerCase());
// }

// console.log(strcheck("hello", "H")); //true

// 5. write a function to find the maximum of two numbers.

// function maxoftwo(a, b) {
//     if(a < b){
//         return b;
//     } else if( a > b) {
//         return a;
//     } else {
//         return "equal";
//     }
// } 

// console.log(maxoftwo(1, 1)); // equal

// 6. create a function that takes a number and reeturn its factorial.

// function facto(num) {
//     var fact = 1;
//     for(let i = 1; i <= num; i++ ) {
//         fact= fact*i;
//     }
//     return fact;
// }
// console.log(facto(4)); // 24

// 7. write a function that accepts a string and returns its reverse.

// function revstr(str) {
//     return str.split("").reverse().join("");
// }
// console.log(revstr("himanshu"));

// 8. create a functions to find the largest number in an array.

// function largnum(arr) {
//     var max = 0;
//     for(let i = 0; i < arr.length - 1; i++) {
//         if(arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(largnum([1, 4, 2, 6, 399, 88]));

// 9. write a function that converts a string to kebab-case eg. "Hello World" - hello-world

// function kebabcase(str) {
//     // return str.replaceAll(" ", "-");
//     return str.split(" ").join("-");
// }
// console.log(kebabcase("hii i am himanshu."));

// 10. create a function that logs: "hello world!!" everytime it is called.

// function hello() {
//     console.log("hello! World");
// }

// hello();
// hello();

// ------------------- END ---------------------
