// js is not asynchronous

//1. sync and async

// sync - doing task one by one.
// async - doing task all at a time the first done, the first print.

// // example 
// console.log("hi");
// console.log("hi2");
// console.log("hi3");

// asyc code 
// setInterval
// settimeout 
// XMLHttpRequest
// fetch
// axios
// promises

// 2. async js kya hai?
// whenever we are dealing with a line of code which is dependent on a server(outside) we need to use async js code.
// this code doesnt start immediately it wait for response.
// it prevents error

// benefit
// console.log("hii"); // ist line
// // request for fetching data 
// console.log("data"); // third line

// 3. callback function
// it is a normal function which call itself after a interval time.

// ex. 
// console.log("hello1");

// setInterval(function() {
//     console.log("hello");
// }, 1000)

// console.log("hii");

// 4. js is not asynchronous? 
// which means it runs single task at a time 
// it is a single threaded 

// lets understand the working 

// line 1 // sync
// line 2 // async
// line 3  // sync

// i ) main stack - it handles the sync part
// ii ) side stack - it handle async part

// once the main stack finish it check for any completed task in side stack this is called event loop

// 5. single threaded - runing single task at a time
// multi threaded - runing task simultaneously at a time

// callback - once the async code is completed .

// async code is majourly divide in two parts
// i) in the first we write the code - jo normal code ko aynch bnayega
// ii) code run after completion

// setInterval(() => {
//     console.log("hello");
// }, 1000);

// 6. promises 
// promise - positive Response(then)
// - negative response (catch)

// example 
// var hello = new Promise(function(res, rej){
//     var a = Math.floor(Math.random()*10)
//     if(a>5) {
//         return res(a);
//     } else {
//         return rej('below');
//     }
// });

// hello.then(function(data){
//     console.log(data);
// }).catch(function(error){
//     console.log(error);   
// }) 

// promise in a promise 

// var hello = new Promise(function(res, rej){
//     res("5");
// });

// var hello2 = hello.then(function(data){
//     console.log(data);
//     return new Promise(function(res, rej) {
//         res("4")
//     })
// })

//  hello2.then(function(data) {
//     console.log(data);
// })

// 7. async await 
// when we have a fn where we have a async code we can use promises but us tym p humko then ka use krna hoga jisse code lmba hojayega . so to make the code concise(chota code) we can use async await


// normal way
// function abcd() {
//     fetch('xyz').then(function(data){
//         console.log(data);
//     }).catch(function(error){
//         console.log(error);
//     })
// } 

// abcd();

//using async await 
// async function abcd() {
//     try {
//         var ans = await fetch('');
//         console.log(ans);
//     } catch (error) {
//         console.log(error);   
//     }
// }

// abcd();

// 8. 5 use case 
// node main in database ko handle karne k liye
// fetch 
// setinterval 
// settimeout 
// calling a third party.

// 9. concurrency and parrallelism 
// concurrency - in js synch and async code run simultaneously. this is concurrency. 
// parralleism - general depend on processor and cores i.e number of task running simultaneously. 
// single core, dual core, quadra core .

// 10. throttling - it used to control the No. of execution. 