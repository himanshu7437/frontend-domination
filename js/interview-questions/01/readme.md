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

Perfect 👌 let’s make this **super clear and interview-ready**.

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


