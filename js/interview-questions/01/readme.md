## 🔑 **Ques-1) What is Event Delegation?**

Event Delegation is a **pattern in JavaScript** where instead of attaching event listeners to multiple child elements, you attach a **single event listener to their parent**.
The parent "listens" for events that bubble up from its children.

---

## ⚡ Why use Event Delegation?

1. ✅ **Performance** → fewer event listeners (better for memory).
2. ✅ **Dynamic elements** → works for elements added later (no need to re-attach).
3. ✅ **Cleaner code** → manage all child events from one place.

---

## 🧩 Example without Event Delegation:

```js
// multiple listeners (not efficient)
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    console.log("Button clicked:", btn.innerText);
  });
});
```

---

## 🧩 Example with Event Delegation:

```js
// one listener on the parent
document.querySelector('#parent').addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    console.log("Button clicked:", e.target.innerText);
  }
});
```

Here:

* We add **one listener to #parent**.
* The event bubbles from `button → parent`.
* We check `e.target` to see which button was clicked.

---

## 🔎 Real-world Example:

Imagine a dynamic list where items are added **after page load**:

```html
<ul id="menu">
  <li>Home</li>
  <li>About</li>
</ul>
<button id="add">Add Item</button>
```

```js
document.querySelector('#menu').addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    console.log("You clicked:", e.target.innerText);
  }
});

document.querySelector('#add').addEventListener('click', () => {
  let li = document.createElement('li');
  li.innerText = "New Item";
  document.querySelector('#menu').appendChild(li);
});
```

✅ Even new `<li>` items will respond to clicks — **thanks to delegation**.

---

## 📝 Interview Definition:

**Event Delegation is a technique where a single event listener is attached to a parent element to manage events of its child elements through event bubbling. It improves performance and works well with dynamically added elements.**

---



### 🔑 **Ques - 2 ) null and undefined**

---

## 🔑 **1. `undefined`**

* A variable that has been **declared but not assigned a value** is automatically `undefined`.
* It means: *"the variable exists, but no value is assigned yet."*

```js
let a;
console.log(a); // undefined (no value assigned)

function test(x) {
  console.log(x); 
}
test(); // undefined (no argument passed)
```

✅ **Default value in JS** → if nothing is assigned, it’s `undefined`.

---

## 🔑 **2. `null`**

* `null` is an **intentional absence of value**.
* It is something you **explicitly assign** to a variable to say: *"this variable should be empty."*

```js
let b = null;
console.log(b); // null (explicitly set to empty)
```

✅ **Used by developers** → to "clear/reset" a variable.

---

## 🔄 **Key Differences Between `null` and `undefined`**

| Feature     | `null`                          | `undefined`                               |
| ----------- | ------------------------------- | ----------------------------------------- |
| Meaning     | Intentional empty value         | Variable declared but not assigned        |
| Type        | `object` (historical bug in JS) | `undefined` (its own type)                |
| Assigned by | Developer (explicitly)          | JavaScript engine (by default)            |
| Example Use | Resetting a variable            | Uninitialized variable / missing argument |

---

## ⚡ Example:

```js
let x;
console.log(x); // undefined (not assigned)

let y = null;
console.log(y); // null (explicitly empty)
```

---

## 🤔 Trick Interview Question:

```js
console.log(typeof null); // "object"  (a bug in JS, should have been "null")
console.log(typeof undefined); // "undefined"
```

👉 So `null` is actually an **object** type (because of a 25+ year old bug in JS), while `undefined` has its **own type**.

---


### 🔑 **Ques - 3 ) Purpose of Closures in JavaScript**

A **closure** is created when a function "remembers" the variables from its **outer scope**, even after that outer function has finished executing.

---

### ✅ Why do we use closures?

1. **Data Privacy / Encapsulation**

   * We can hide variables from the outside world and only allow access through specific functions.

   ```js
   function counter() {
     let count = 0; // private variable

     return {
       increment: function() {
         count++;
         return count;
       },
       decrement: function() {
         count--;
         return count;
       }
     };
   }

   let c = counter();
   console.log(c.increment()); // 1
   console.log(c.increment()); // 2
   console.log(c.decrement()); // 1
   ```

   👉 `count` cannot be accessed directly, only via `increment()` or `decrement()`.

---

2. **Maintaining State**

   * Closures help us "remember" values between function calls.

   ```js
   function greet(name) {
     return function(message) {
       return `Hello ${name}, ${message}`;
     };
   }

   let greetRahul = greet("Rahul");
   console.log(greetRahul("Good morning")); // Hello Rahul, Good morning
   console.log(greetRahul("How are you?")); // Hello Rahul, How are you?
   ```

---

3. **Callbacks & Event Handlers**

   * Many event listeners rely on closures to "remember" values.

   ```js
   function setupButton(id) {
     let msg = "Button clicked!";
     document.getElementById(id).addEventListener("click", function() {
       alert(msg); // closure keeps msg alive
     });
   }
   setupButton("myBtn");
   ```

---

4. **Module Pattern (like mini-classes without classes)**

   * Before `class` and `ES6 modules`, closures were used to simulate **modules**.

   ```js
   const Module = (function () {
     let secret = "Hidden Data";

     return {
       getSecret: function() {
         return secret;
       }
     };
   })();

   console.log(Module.getSecret()); // "Hidden Data"
   ```

---

### ⚡ In short:

The **purpose of closure** is to:

* Keep variables **private & secure**.
* Preserve **state** across function calls.
* Enable **callbacks, event handling, and module patterns**.
---

# 🔑 Ques - 4) Prototype Inheritance in JavaScript

---

## 1️⃣ Easy Explanation

👉 In JavaScript, **objects can inherit properties and methods from other objects** through something called the **prototype chain**.

Think of it like this:

* You have a child. If the child doesn’t know the answer, it asks their parent.
* If the parent doesn’t know, they ask *their* parent… and so on.
* This “asking up the chain” is what **prototype inheritance** does in JavaScript.

---

### Example:

```js
let animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  }
};

let rabbit = {
  jumps: true
};

// make rabbit inherit from animal
rabbit.__proto__ = animal;

console.log(rabbit.eats);  // true (inherited from animal)
rabbit.walk();             // "Animal walks"
```

Here:

* `rabbit` doesn’t have `eats` or `walk`.
* It looks up its **prototype (animal)** and finds them.

---

## 2️⃣ Interview Answer (Crisp)

**Prototype Inheritance** in JavaScript is a feature where objects can inherit properties and methods from another object through the **prototype chain**. If an object cannot find a property, it looks up its prototype until it finds it or reaches `null`.

---

## 3️⃣ Modern Example with `class` (syntactic sugar):

```js
class Animal {
  walk() {
    console.log("Animal walks");
  }
}

class Rabbit extends Animal {
  jump() {
    console.log("Rabbit jumps");
  }
}

let rabbit = new Rabbit();
rabbit.walk(); // from Animal
rabbit.jump(); // from Rabbit
```

👉 Under the hood, `extends` still uses **prototype inheritance**.

---

✅ **One-liner for Interview:**
“Prototype Inheritance allows one object to use the properties and methods of another object via the prototype chain, helping with code reuse and memory efficiency.”

---


---

# 🔑 Ques - 5) Synchronous vs Asynchronous in JavaScript

---

## 1️⃣ Easy Explanation

### Synchronous

* Code runs **line by line**.
* Each line **waits** for the previous one to finish.
* If one task is slow (like a big loop), everything else **stops** until it’s done.

👉 Like standing in a queue — you can’t move until the person in front is done.

```js
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");
// Output: Task 1 → Task 2 → Task 3
```

---

### Asynchronous

* Code **doesn’t block**.
* Long tasks (like fetching data from server, timers, file reading) can run in the background.
* JavaScript **doesn’t wait** for them — it keeps executing other code.
* When the task is ready, its callback/promise is executed.

👉 Like ordering food in a restaurant — you order, then do other things while the chef cooks.

```js
console.log("Task 1");

setTimeout(() => {
  console.log("Task 2 (after 2s)");
}, 2000);

console.log("Task 3");

// Output: Task 1 → Task 3 → Task 2
```

---

## 2️⃣ Interview Answer (Crisp)

**Synchronous JavaScript** executes code sequentially, one statement at a time, blocking further execution until the current one finishes.

**Asynchronous JavaScript** allows certain operations (like I/O, API calls, timers) to run in the background. Instead of blocking, they use callbacks, promises, or async/await to handle results later, enabling non-blocking code execution.

---

## 3️⃣ One-liner Examples

* **Synchronous:** Good for simple tasks where order matters.
* **Asynchronous:** Essential for APIs, database queries, file handling, timers — otherwise the page would “freeze.”

---

✅ **One-liner for Interview:**
“Synchronous code runs line by line, blocking further execution, while asynchronous code allows tasks to run in the background and continue execution without waiting.”

---

---

# 🔑 Ques -6) Hoisting in JavaScript

---

## 1️⃣ Easy Explanation

👉 **Hoisting** means:
JavaScript moves **declarations** (not initializations) **to the top of their scope** before execution.

* **Function declarations** are fully hoisted → you can call them before they are defined.
* **`var` variables** are hoisted but initialized with `undefined`.
* **`let` and `const` variables** are also hoisted, but they stay in a **“temporal dead zone” (TDZ)** until their line is reached → using them before declaration causes an **error**.

---

## 2️⃣ Code Examples

### 🟢 Function Hoisting

```js
sayHello(); // ✅ Works

function sayHello() {
  console.log("Hello!");
}
```

---

### 🟡 Var Hoisting

```js
console.log(a); // ✅ undefined (hoisted but not assigned)
var a = 10;
```

---

### 🔴 Let/Const Hoisting

```js
console.log(b); // ❌ ReferenceError (TDZ)
let b = 20;
```

---

## 3️⃣ Interview Answer (Crisp)

“Hoisting is JavaScript’s default behavior of moving **declarations** to the top of their scope before execution. Functions are fully hoisted, `var` is hoisted but initialized as `undefined`, and `let`/`const` are hoisted but remain in the temporal dead zone until defined.”

---

## 4️⃣ One-liner

👉 “Declarations are hoisted, but initializations are not.”

---
---

# 🔑 Ques - 7) Different Ways of Creating Objects in JavaScript

---

## 1️⃣ Object Literal (most common & simplest)

```js
const person = {
  name: "Rahul",
  age: 22,
  greet: function() {
    console.log("Hello!");
  }
};
```

## ✅ Best when you need a simple object.

## 2️⃣ Using `new Object()` (constructor)

```js
const car = new Object();
car.brand = "Tesla";
car.model = "Model S";
```

## ⚠️ Less common, same as object literal but longer.

## 3️⃣ Constructor Function

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const p1 = new Person("Rahul", 22);
```

## ✅ Used for creating **multiple similar objects** before ES6 classes.

## 4️⃣ ES6 Class

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const p2 = new Person("Rahul", 22);
```

## ✅ Cleaner & modern way → preferred in today’s development.

## 5️⃣ `Object.create()` (prototype-based)

```js
const proto = {
  greet() {
    console.log("Hello!");
  }
};

const student = Object.create(proto);
student.name = "Rahul";
```

## ✅ Useful when you want to create an object with a specific **prototype**.

## 6️⃣ Factory Function

```js
function createUser(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`Hi, I’m ${name}`);
    }
  };
}

const user = createUser("Rahul", 22);
```

## ✅ Similar to constructor but **doesn’t use `new`**.

# 🎯 Interview-Friendly Answer

“There are several ways to create objects in JavaScript:

* **Object literal** (most common),
* **`new Object()`**,
* **Constructor functions**,
* **ES6 Classes**,
* **`Object.create()`** for prototype inheritance, and
* **Factory functions**.

In real-world apps, object literals and classes are most commonly used.”

---

---

# 🔑Ques - 8) `this` in JavaScript

👉 **Definition (Interview Friendly):**
`this` refers to the **object that is currently calling/executing the function**.
Its value depends on **how** (not where) the function is called.

---

## 1️⃣ In the Global Context

```js
console.log(this);
```

* In **browser** → `this` points to the `window` object.
* In **strict mode** → `this` is `undefined`.

---

## 2️⃣ Inside an Object Method

```js
const person = {
  name: "Rahul",
  greet: function() {
    console.log(this.name);
  }
};
person.greet(); // Rahul
```

👉 Here `this` refers to the object (`person`) that calls the method.

---

## 3️⃣ Alone in a Function

```js
function show() {
  console.log(this);
}
show(); // window (or undefined in strict mode)
```

---

## 4️⃣ With `new` (Constructor Function or Class)

```js
function Person(name) {
  this.name = name;
}
const p1 = new Person("Rahul");
console.log(p1.name); // Rahul
```

👉 Inside a constructor/class, `this` refers to the **newly created object**.

---

## 5️⃣ In Arrow Functions 🚀

```js
const person = {
  name: "Rahul",
  greet: () => {
    console.log(this.name);
  }
};
person.greet(); // undefined (or window.name)
```

👉 Arrow functions **don’t have their own `this`**.
They use `this` from the **surrounding lexical scope**.

---

## 6️⃣ With `call`, `apply`, `bind`

```js
function greet(city) {
  console.log(`Hi I am ${this.name} from ${city}`);
}
const user = { name: "Rahul" };

greet.call(user, "Delhi");   // Hi I am Rahul from Delhi
greet.apply(user, ["Mumbai"]); // Hi I am Rahul from Mumbai
const bound = greet.bind(user, "Bangalore");
bound(); // Hi I am Rahul from Bangalore
```

👉 These methods **explicitly set** `this`.

---

# 🎯 Interview Answer (Simple & Clear)

“In JavaScript, `this` refers to the object that is executing the function.
Its value depends on how the function is called:

* In global → `window` (or `undefined` in strict mode).
* Inside object methods → that object.
* In constructors/classes → the new object created.
* Arrow functions → don’t have their own `this`, they use the parent scope’s `this`.
  We can also manually set `this` using `call`, `apply`, or `bind`.”

---
---

# 🔑 Ques - 9) Promises in JavaScript

👉 **Definition (Interview Friendly):**
A **Promise** is an object that represents the eventual **completion or failure** of an asynchronous operation.
It helps us handle async code in a **cleaner and more readable** way than callbacks.

---

## 1️⃣ States of a Promise

A Promise can be in **three states**:

1. **Pending** → initial state, neither fulfilled nor rejected.
2. **Fulfilled** → operation completed successfully.
3. **Rejected** → operation failed.

---

## 2️⃣ Example

```js
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("✅ Task completed!");
  } else {
    reject("❌ Task failed!");
  }
});

myPromise
  .then(result => console.log(result)) // when resolved
  .catch(error => console.log(error)) // when rejected
  .finally(() => console.log("Done"));
```

---

# 🔄 Callbacks vs Promises

| Feature            | Callbacks                             | Promises                              |
| ------------------ | ------------------------------------- | ------------------------------------- |
| **Definition**     | Function passed into another function | Object that represents a future value |
| **Readability**    | Callback hell (nested) 😵             | Cleaner `.then().catch()` chain ✅     |
| **Error Handling** | Must handle manually in each callback | Built-in `.catch()` for errors ✅      |
| **Chaining**       | Hard to chain multiple async ops      | Easy chaining with `.then()` ✅        |
| **Control Flow**   | Can get messy in large apps           | More predictable & structured         |

---

## Example: Callback vs Promise

### ❌ Callback Hell

```js
doTask1(() => {
  doTask2(() => {
    doTask3(() => {
      console.log("All done!");
    });
  });
});
```

### ✅ Promise Chain

```js
doTask1()
  .then(doTask2)
  .then(doTask3)
  .then(() => console.log("All done!"))
  .catch(err => console.log(err));
```

---

# 🎯 Interview Answer (Simple & Clear)

“In JavaScript, **promises** are used to handle asynchronous operations in a cleaner way.
They represent a value that will be available **now, later, or never**.
Unlike callbacks that often lead to **callback hell**, promises allow us to write async code in a structured way with `.then`, `.catch`, and `.finally`.
Error handling and chaining are also much easier with promises.”

---

---

# 🔄 Ques - 10) Event Loop in JavaScript

👉 **Definition (Interview friendly):**
The **event loop** is a mechanism in JavaScript that allows it to perform **non-blocking asynchronous operations** despite being **single-threaded**.
It continuously checks the **Call Stack** and the **Callback Queue / Microtask Queue** to decide what to execute next.

---

## 1️⃣ How JS executes code

* JavaScript is **single-threaded** → it has **one Call Stack**.
* To handle async tasks (like `setTimeout`, promises, fetch etc.), the **Web APIs** & **Queues** come into play.

---

## 2️⃣ Flow of Event Loop

1. JS runs code line by line in the **Call Stack**.
2. If it finds async code (e.g., `setTimeout`), that code is given to **Web APIs**.
3. When async work is done, the callback/promise is moved to:

   * **Callback Queue** → e.g., `setTimeout`, DOM events.
   * **Microtask Queue** → e.g., Promises, `queueMicrotask`.
4. The **event loop** keeps checking:

   * If Call Stack is empty → take from **Microtask Queue first**.
   * If Microtask Queue is empty → take from **Callback Queue**.
5. This cycle keeps running → That’s the **Event Loop**.

---

## 3️⃣ Example

```js
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
```

### Output:

```
Start
End
Promise
Timeout
```

👉 Why?

* `console.log("Start")` → sync → runs immediately.
* `setTimeout(...,0)` → async → goes to **Callback Queue**.
* `Promise.resolve().then(...)` → async → goes to **Microtask Queue**.
* `console.log("End")` → sync → runs.
* Event Loop sees Call Stack empty → runs **Microtask Queue first** → `"Promise"`.
* Then runs **Callback Queue** → `"Timeout"`.

---

# 🎯 Interview Answer (Crisp)

“JavaScript is single-threaded, so it uses the **event loop** to handle asynchronous code.
The event loop keeps checking the **call stack** and processes tasks from the **microtask queue (promises)** first, and then from the **callback queue (like setTimeout)**.
This allows JavaScript to perform non-blocking operations efficiently.”

---
