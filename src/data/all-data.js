export const reactClassInheritanceQuestions = [
    {
      id: 1,
      question: "What does the `class` keyword do in JavaScript?",
      options: [
        "Defines a class to create objects",
        "Creates a new function",
        "Creates an array",
        "Defines a primitive type"
      ],
      correctAnswer: "Defines a class to create objects",
      answerDescription: "`class` is used in JavaScript to define a blueprint for creating objects with specific properties and methods."
    },
    {
      id: 2,
      question: "What is inheritance in JavaScript?",
      options: [
        "A way to reuse code from other classes",
        "A method to declare global variables",
        "A function that creates objects",
        "A function for manipulating DOM"
      ],
      correctAnswer: "A way to reuse code from other classes",
      answerDescription: "Inheritance allows one class to inherit the properties and methods from another class, facilitating code reuse."
    },
    {
      id: 3,
      question: "What does `super()` do in a child class constructor?",
      options: [
        "Calls the parent class constructor",
        "Creates a new instance of the parent class",
        "Defines a new method in the child class",
        "Passes arguments to the parent class methods"
      ],
      correctAnswer: "Calls the parent class constructor",
      answerDescription: "`super()` is used to call the constructor of the parent class, allowing the child class to inherit properties."
    },
    {
      id: 4,
      question: "What will the following code return: `class A {}; const obj = new A(); obj instanceof A`?",
      options: [
        "true",
        "false",
        "undefined",
        "error"
      ],
      correctAnswer: "true",
      answerDescription: "The `instanceof` operator checks whether an object is an instance of a specific class, and in this case, `obj` is an instance of `A`."
    },
    {
      id: 5,
      question: "What does the `constructor` method do in a class?",
      options: [
        "It initializes the class’s state and properties",
        "It is used to return the class instance",
        "It is a method used to define methods of a class",
        "It initializes the JavaScript runtime environment"
      ],
      correctAnswer: "It initializes the class’s state and properties",
      answerDescription: "The `constructor` method is automatically invoked when a class is instantiated, and is used to initialize the properties of the class."
    },
    {
      id: 6,
      question: "What is `prototype` in JavaScript?",
      options: [
        "An object that all class instances inherit methods from",
        "A variable that holds a class’s properties",
        "A type of object that stores the class’s variables",
        "A global variable in JavaScript"
      ],
      correctAnswer: "An object that all class instances inherit methods from",
      answerDescription: "The `prototype` is an object that every class instance has access to. Methods added to the `prototype` of a class are shared across all instances of that class."
    },
    {
      id: 7,
      question: "How can you add a method to the prototype of a class in JavaScript?",
      options: [
        "ClassName.prototype.methodName = function() {}",
        "methodName.prototype = function() {}",
        "function ClassName() {} ClassName.prototype.methodName = function() {}",
        "You cannot add methods to the prototype"
      ],
      correctAnswer: "ClassName.prototype.methodName = function() {}",
      answerDescription: "To add a method to a class’s prototype, you use `ClassName.prototype.methodName = function() {};`."
    },
    {
      id: 8,
      question: "What is method overriding in JavaScript?",
      options: [
        "Creating a new method with the same name as the parent class method in a child class",
        "Calling a parent class method inside a child class",
        "Changing the value of a parent class property",
        "Extending a class"
      ],
      correctAnswer: "Creating a new method with the same name as the parent class method in a child class",
      answerDescription: "Method overriding happens when a child class provides a specific implementation of a method that is already defined in the parent class."
    },
    {
      id: 9,
      question: "What is `Object.create()` in JavaScript?",
      options: [
        "It creates an object and sets its prototype to the object passed as an argument",
        "It creates a new class",
        "It creates a method in a class",
        "It returns a primitive object"
      ],
      correctAnswer: "It creates an object and sets its prototype to the object passed as an argument",
      answerDescription: "`Object.create()` creates a new object and sets its prototype to the object passed as an argument."
    },
    {
      id: 10,
      question: "What is the difference between `class` and `function` in JavaScript?",
      options: [
        "A class is a blueprint for creating objects, a function is a reusable block of code",
        "A class can’t be used to create objects, but a function can",
        "Functions can inherit from other functions, but classes cannot",
        "Classes cannot have methods"
      ],
      correctAnswer: "A class is a blueprint for creating objects, a function is a reusable block of code",
      answerDescription: "A class in JavaScript is a blueprint for creating objects, while a function is a block of code designed to perform a specific task."
    },
    {
      id: 11,
      question: "What will the following code output: `class Person { sayHello() { return 'Hello'; }} const p = new Person(); console.log(p.sayHello());`?",
      options: [
        "'Hello'",
        "undefined",
        "Error",
        "Hello()"
      ],
      correctAnswer: "'Hello'",
      answerDescription: "The `sayHello()` method is defined in the `Person` class, so calling `p.sayHello()` will return 'Hello'."
    },
    {
      id: 12,
      question: "What is the purpose of `Object.assign()` in JavaScript?",
      options: [
        "It copies the properties of one object to another",
        "It creates a new object",
        "It clones an object",
        "It defines a method for an object"
      ],
      correctAnswer: "It copies the properties of one object to another",
      answerDescription: "`Object.assign()` is used to copy the values of all enumerable properties from one or more source objects to a target object."
    },
    {
      id: 13,
      question: "What is the output of the following code: `let person = { name: 'John' }; let anotherPerson = Object.create(person); console.log(anotherPerson.name);`?",
      options: [
        "'John'",
        "undefined",
        "Error",
        "'anotherPerson'"
      ],
      correctAnswer: "'John'",
      answerDescription: "The `anotherPerson` object inherits the `name` property from the `person` object via its prototype, so it outputs 'John'."
    },
    {
      id: 14,
      question: "What is abstraction in JavaScript?",
      options: [
        "Hiding the complex details of implementation from the user and exposing only essential features",
        "Creating new classes",
        "Creating more complex methods",
        "Using multiple inheritance"
      ],
      correctAnswer: "Hiding the complex details of implementation from the user and exposing only essential features",
      answerDescription: "Abstraction in JavaScript is about hiding the implementation details and exposing only the relevant functionalities to the user."
    },
    {
      id: 15,
      question: "Which of the following is an example of encapsulation in JavaScript?",
      options: [
        "Using private variables and methods inside a class",
        "Inheriting properties from another class",
        "Creating methods for objects",
        "Using global variables"
      ],
      correctAnswer: "Using private variables and methods inside a class",
      answerDescription: "Encapsulation is the concept of bundling the data (variables) and methods that operate on the data into a single unit, typically a class."
    },
    {
      id: 16,
      question: "What will the following code return: `class A { constructor() {} } class B extends A {} const obj = new B(); console.log(obj instanceof A)`?",
      options: [
        "true",
        "false",
        "undefined",
        "Error"
      ],
      correctAnswer: "true",
      answerDescription: "Since `B` extends `A`, instances of `B` are also instances of `A`. Thus, `obj instanceof A` returns `true`."
    },
    {
      id: 17,
      question: "How can you add properties to an object in JavaScript?",
      options: [
        "Directly using dot notation",
        "By using the `Object.defineProperty()` method",
        "Using the `new` keyword",
        "Both a and b"
      ],
      correctAnswer: "Both a and b",
      answerDescription: "You can add properties to an object using dot notation or the `Object.defineProperty()` method."
    },
    {
      id: 18,
      question: "What will the following code output: `class Animal { speak() { return 'Hello!'; }} class Dog extends Animal { speak() { return 'Woof!'; }} const dog = new Dog(); console.log(dog.speak());`?",
      options: [
        "'Woof!'",
        "'Hello!'",
        "undefined",
        "Error"
      ],
      correctAnswer: "'Woof!'",
      answerDescription: "The `speak()` method is overridden in the `Dog` class, so calling `dog.speak()` will return 'Woof!'."
    },
    {
      id: 19,
      question: "What is a getter in JavaScript?",
      options: [
        "A method that is used to get a value",
        "A method that sets the value",
        "A function that modifies the prototype",
        "None of the above"
      ],
      correctAnswer: "A method that is used to get a value",
      answerDescription: "A getter is a method that allows you to define a property as if it were a simple attribute, but with custom logic to retrieve its value."
    },
    {
      id: 20,
      question: "How do you create a class method in JavaScript?",
      options: [
        "By defining a function inside the class",
        "By using the `this` keyword",
        "By defining a method outside the class",
        "Both a and b"
      ],
      correctAnswer: "Both a and b",
      answerDescription: "You create a class method by defining a function inside the class and using `this` to refer to instance properties."
    },
    {
      id: 21,
      question: "What is the output of `typeof Object`?",
      options: [
        "function",
        "object",
        "undefined",
        "string"
      ],
      correctAnswer: "function",
      answerDescription: "In JavaScript, `Object` is a function, so `typeof Object` returns 'function'."
    },
    {
      id: 22,
      question: "How do you create an instance of a class in JavaScript?",
      options: [
        "By using the `new` keyword",
        "By calling the class as a function",
        "By using `Object.create()`",
        "All of the above"
      ],
      correctAnswer: "By using the `new` keyword",
      answerDescription: "You create an instance of a class by using the `new` keyword followed by the class name."
    },
    {
      id: 23,
      question: "How can you prevent a class from being subclassed in JavaScript?",
      options: [
        "By making the class constructor private",
        "By using `Object.preventExtensions()`",
        "By using `class` keyword only",
        "By using `Object.freeze()`"
      ],
      correctAnswer: "By using `Object.freeze()`",
      answerDescription: "`Object.freeze()` makes an object immutable, so no new properties or methods can be added, which can also prevent subclassing."
    },
    {
      id: 24,
      question: "What is the output of `typeof class {}` in JavaScript?",
      options: [
        "function",
        "object",
        "undefined",
        "class"
      ],
      correctAnswer: "function",
      answerDescription: "In JavaScript, classes are syntactic sugar for constructor functions, so `typeof class {}` returns 'function'."
    },
    {
      id: 25,
      question: "What is the prototype chain in JavaScript?",
      options: [
        "A way for objects to inherit properties and methods from other objects",
        "A built-in function in JavaScript",
        "A method for binding functions",
        "A type of inheritance"
      ],
      correctAnswer: "A way for objects to inherit properties and methods from other objects",
      answerDescription: "The prototype chain is a series of links where each object inherits properties from its prototype, allowing inheritance in JavaScript."
    }
  ]

  export const reactPromisesAsyncAwaitQuestions = [
    {
      id: 1,
      question: "What is the purpose of a Promise in JavaScript?",
      options: [
        "To handle asynchronous operations",
        "To execute synchronous functions",
        "To avoid the use of callbacks",
        "To create a loop"
      ],
      correctAnswer: "To handle asynchronous operations",
      answerDescription: "A Promise is used to handle asynchronous operations by allowing you to write asynchronous code in a more readable and manageable way."
    },
    {
      id: 2,
      question: "Which of the following methods is used to handle the resolved value of a Promise?",
      options: [
        ".then()",
        ".catch()",
        ".finally()",
        ".async()"
      ],
      correctAnswer: ".then()",
      answerDescription: "`then()` is used to handle the resolved value of a Promise. It takes a function as an argument to execute once the promise is resolved."
    },
    {
      id: 3,
      question: "What will the following code output: `const promise = new Promise((resolve, reject) => { resolve('Done!'); }); promise.then((result) => console.log(result));`?",
      options: [
        "'Done!'",
        "'Pending'",
        "undefined",
        "Error"
      ],
      correctAnswer: "'Done!'",
      answerDescription: "Since the promise is resolved with 'Done!', it will be logged to the console when `then()` is called."
    },
    {
      id: 4,
      question: "What is the purpose of `async` and `await` in JavaScript?",
      options: [
        "To make asynchronous code look and behave like synchronous code",
        "To execute synchronous code asynchronously",
        "To handle errors more easily",
        "To run multiple Promises in parallel"
      ],
      correctAnswer: "To make asynchronous code look and behave like synchronous code",
      answerDescription: "`async` and `await` allow you to write asynchronous code in a more readable and cleaner way by making it look and behave like synchronous code."
    },
    {
      id: 5,
      question: "Which of the following will throw an error in an `async` function?",
      options: [
        "Not using `await` with a Promise",
        "Calling a non-Promise function",
        "Trying to use `await` outside of an `async` function",
        "Using `await` in a synchronous function"
      ],
      correctAnswer: "Trying to use `await` outside of an `async` function",
      answerDescription: "`await` can only be used inside an `async` function. Using it outside of an `async` function will throw a syntax error."
    },
    {
      id: 6,
      question: "What will the following code output: `async function foo() { return 'Hello'; } foo().then(result => console.log(result));`?",
      options: [
        "'Hello'",
        "undefined",
        "Promise { <pending> }",
        "Error"
      ],
      correctAnswer: "'Hello'",
      answerDescription: "An `async` function always returns a Promise. Since the function returns 'Hello', it will resolve to 'Hello', and that value will be logged."
    },
    {
      id: 7,
      question: "Which of the following is the correct way to handle multiple Promises in parallel?",
      options: [
        "Promise.all()",
        "Promise.any()",
        "Promise.catch()",
        "Promise.finally()"
      ],
      correctAnswer: "Promise.all()",
      answerDescription: "`Promise.all()` is used to execute multiple Promises in parallel and returns a single Promise that resolves when all the input Promises resolve."
    },
    {
      id: 8,
      question: "What will the following code output: `const promise = Promise.reject('Error'); promise.catch(err => console.log(err));`?",
      options: [
        "'Error'",
        "undefined",
        "'Success'",
        "Error"
      ],
      correctAnswer: "'Error'",
      answerDescription: "`Promise.reject()` creates a Promise that is immediately rejected, and `catch()` is used to handle the rejection and log the error."
    },
    {
      id: 9,
      question: "How does `Promise.all()` behave if one of the promises is rejected?",
      options: [
        "It immediately rejects with the error of the rejected Promise",
        "It resolves with an array of all the values",
        "It ignores the rejected promise",
        "It waits for all promises to finish before resolving"
      ],
      correctAnswer: "It immediately rejects with the error of the rejected Promise",
      answerDescription: "`Promise.all()` will reject immediately if one of the promises is rejected, and it will return the rejection reason."
    },
    {
      id: 10,
      question: "What does `Promise.finally()` do?",
      options: [
        "Executes a function after the promise is either resolved or rejected",
        "Handles the resolved value of a promise",
        "Handles the rejection of a promise",
        "Both a and b"
      ],
      correctAnswer: "Executes a function after the promise is either resolved or rejected",
      answerDescription: "`finally()` executes a function after a Promise is either resolved or rejected, regardless of the outcome."
    },
    {
      id: 11,
      question: "What does the `await` keyword do?",
      options: [
        "Pauses the execution of the async function until the Promise is resolved",
        "Creates a new Promise",
        "Handles the resolved value of a Promise",
        "Converts a function to a Promise"
      ],
      correctAnswer: "Pauses the execution of the async function until the Promise is resolved",
      answerDescription: "`await` pauses the execution of an `async` function and waits for the Promise to resolve before continuing with the code."
    },
    {
      id: 12,
      question: "What will the following code output: `async function bar() { const result = await Promise.resolve(10); console.log(result); } bar();`?",
      options: [
        "10",
        "undefined",
        "Promise { <pending> }",
        "Error"
      ],
      correctAnswer: "10",
      answerDescription: "Since `Promise.resolve(10)` resolves to 10, the `await` expression returns 10, which is logged to the console."
    },
    {
      id: 13,
      question: "What will the following code output: `const promise = Promise.resolve(5); promise.then(result => console.log(result));`?",
      options: [
        "5",
        "undefined",
        "Error",
        "Promise { <pending> }"
      ],
      correctAnswer: "5",
      answerDescription: "The promise is resolved with 5, and the resolved value is logged using the `then()` method."
    },
    {
      id: 14,
      question: "What happens when a function passed to `setTimeout()` is asynchronous?",
      options: [
        "It will execute after the specified delay",
        "It will block the execution of the remaining code",
        "It will execute synchronously",
        "It will never execute"
      ],
      correctAnswer: "It will execute after the specified delay",
      answerDescription: "`setTimeout()` is an asynchronous function that will execute the callback function after the specified delay, allowing other code to run in the meantime."
    },
    {
      id: 15,
      question: "What is the result of chaining `.then()` with a Promise?",
      options: [
        "The next `.then()` executes after the Promise is resolved",
        "The next `.then()` executes immediately",
        "The `.then()` throws an error",
        "It runs synchronously"
      ],
      correctAnswer: "The next `.then()` executes after the Promise is resolved",
      answerDescription: "Chaining `.then()` ensures that each function executes in order after the previous Promise is resolved."
    },
    {
      id: 16,
      question: "What is the purpose of callbacks in JavaScript?",
      options: [
        "To handle asynchronous operations",
        "To create reusable code",
        "To manage event listeners",
        "All of the above"
      ],
      correctAnswer: "All of the above",
      answerDescription: "Callbacks are used to handle asynchronous operations, create reusable code, and manage event listeners in JavaScript."
    },
    {
      id: 17,
      question: "What will happen if a callback function is called with an error as the first argument?",
      options: [
        "It indicates an error has occurred",
        "The callback function will be ignored",
        "The callback will run normally",
        "None of the above"
      ],
      correctAnswer: "It indicates an error has occurred",
      answerDescription: "In a standard Node.js callback pattern, the first argument is used to indicate an error. If an error occurs, it will be passed as the first argument."
    },
    {
      id: 18,
      question: "What will the following code output: `setTimeout(() => { console.log('Delayed'); }, 1000); console.log('Immediate');`?",
      options: [
        "'Immediate' then 'Delayed'",
        "'Delayed' then 'Immediate'",
        "'Immediate'",
        "'Delayed'"
      ],
      correctAnswer: "'Immediate' then 'Delayed'",
      answerDescription: "`setTimeout()` is asynchronous, so 'Immediate' is logged first, and 'Delayed' is logged after the timeout."
    },
    {
      id: 19,
      question: "What will the following code output: `async function foo() { return 'Hi'; } console.log(foo());`?",
      options: [
        "Promise { 'Hi' }",
        "'Hi'",
        "undefined",
        "Error"
      ],
      correctAnswer: "Promise { 'Hi' }",
      answerDescription: "An `async` function always returns a Promise. Even though the function returns 'Hi', it will resolve to that value."
    },
    {
      id: 20,
      question: "What is the behavior of a `Promise` in JavaScript if it’s not resolved or rejected?",
      options: [
        "It remains in a pending state",
        "It resolves to undefined",
        "It throws an error",
        "It cancels itself"
      ],
      correctAnswer: "It remains in a pending state",
      answerDescription: "A `Promise` remains in the pending state until it is either resolved or rejected."
    },
    {
      id: 21,
      question: "How do you handle errors in an `async` function?",
      options: [
        "By using a `try...catch` block",
        "By using `.catch()`",
        "By using `.finally()`",
        "By using `.then()`"
      ],
      correctAnswer: "By using a `try...catch` block",
      answerDescription: "Errors in an `async` function are handled by wrapping the code in a `try...catch` block."
    },
    {
      id: 22,
      question: "What will the following code output: `const promise = new Promise((resolve, reject) => { reject('Failed!'); }); promise.catch(err => console.log(err));`?",
      options: [
        "'Failed!'",
        "undefined",
        "Error",
        "Promise { <pending> }"
      ],
      correctAnswer: "'Failed!'",
      answerDescription: "`Promise.reject()` causes the Promise to be rejected, and `.catch()` logs the rejection reason."
    },
    {
      id: 23,
      question: "Which of the following can be used to resolve multiple Promises in JavaScript?",
      options: [
        "Promise.all()",
        "Promise.allSettled()",
        "Promise.race()",
        "All of the above"
      ],
      correctAnswer: "All of the above",
      answerDescription: "All these methods can be used to handle multiple Promises in different ways, like executing them in parallel or handling both resolved and rejected Promises."
    },
    {
      id: 24,
      question: "What is the benefit of using `async` and `await` over traditional callback functions?",
      options: [
        "Cleaner, more readable code",
        "No need to handle multiple nested callbacks",
        "Better error handling",
        "All of the above"
      ],
      correctAnswer: "All of the above",
      answerDescription: "`async` and `await` allow for cleaner and more readable code, handle errors more effectively, and avoid callback hell."
    },
    {
      id: 25,
      question: "What will the following code output: `const myPromise = new Promise((resolve, reject) => { resolve('First'); }); myPromise.then(console.log).catch(console.error);`?",
      options: [
        "'First'",
        "'Error'",
        "undefined",
        "Promise { <pending> }"
      ],
      correctAnswer: "'First'",
      answerDescription: "`resolve('First')` resolves the promise, and `then()` logs the result."
    }
  ];

  export const reactMidLevelInterviewQuestions = [
    {
      id: 1,
      question: "What is the difference between `useEffect()` and `componentDidMount()`?",
      options: [
        "They are the same, `useEffect()` is just the modern version.",
        "`useEffect()` is used for side-effects in functional components, while `componentDidMount()` is used in class components.",
        "`useEffect()` only runs on mount, while `componentDidMount()` runs on every render.",
        "`useEffect()` is used for asynchronous code execution, `componentDidMount()` is for synchronous code."
      ],
      correctAnswer: "`useEffect()` is used for side-effects in functional components, while `componentDidMount()` is used in class components.",
      answerDescription: "`useEffect()` is the hook used for side-effects in functional components, while `componentDidMount()` is specific to class components."
    },
    {
      id: 2,
      question: "What is the purpose of `React.memo()`?",
      options: [
        "It memoizes the component to prevent unnecessary re-renders.",
        "It helps optimize event handling.",
        "It prevents re-rendering when the state changes.",
        "It is used to create higher-order components."
      ],
      correctAnswer: "It memoizes the component to prevent unnecessary re-renders.",
      answerDescription: "`React.memo()` is a higher-order component that memoizes the rendered output of a functional component to avoid unnecessary re-renders when props haven't changed."
    },
    {
      id: 3,
      question: "What is the difference between `useState()` and `useReducer()`?",
      options: [
        "`useState()` is for simple state management, while `useReducer()` is for complex state logic involving multiple sub-values.",
        "`useState()` is for performance optimization, and `useReducer()` is for managing side-effects.",
        "`useState()` can only be used in class components, while `useReducer()` can only be used in functional components.",
        "`useState()` works asynchronously, while `useReducer()` works synchronously."
      ],
      correctAnswer: "`useState()` is for simple state management, while `useReducer()` is for complex state logic involving multiple sub-values.",
      answerDescription: "`useState()` is for managing individual state values, while `useReducer()` is preferred when managing complex state that involves multiple actions or nested data structures."
    },
    {
      id: 4,
      question: "What is a higher-order component (HOC)?",
      options: [
        "A component that renders another component with additional props.",
        "A component that uses `React.memo()` to optimize performance.",
        "A component that handles error boundaries.",
        "A component that provides context to its children."
      ],
      correctAnswer: "A component that renders another component with additional props.",
      answerDescription: "A higher-order component (HOC) is a function that takes a component and returns a new component, usually with added functionality or extra props."
    },
    {
      id: 5,
      question: "What is the `context` API in React?",
      options: [
        "It is a way to share state between components without passing props.",
        "It is a global store that manages application state.",
        "It allows sharing side-effects in a component tree.",
        "It is used for handling HTTP requests."
      ],
      correctAnswer: "It is a way to share state between components without passing props.",
      answerDescription: "The `context` API allows you to share state and other values across components without needing to pass props manually at each level of the component tree."
    },
    {
      id: 6,
      question: "What is the purpose of the `key` prop in React lists?",
      options: [
        "To uniquely identify elements for efficient re-rendering.",
        "To add a unique class name to each list item.",
        "To optimize the state of the list items.",
        "To manage the scroll position in the list."
      ],
      correctAnswer: "To uniquely identify elements for efficient re-rendering.",
      answerDescription: "The `key` prop helps React identify which items have changed, been added, or removed, enabling more efficient re-rendering of lists."
    },
    {
      id: 7,
      question: "What are controlled components in React?",
      options: [
        "Components where the form elements' values are controlled by React state.",
        "Components where form elements are uncontrolled by React.",
        "Components that cannot be re-rendered.",
        "Components that control global state."
      ],
      correctAnswer: "Components where the form elements' values are controlled by React state.",
      answerDescription: "In controlled components, the state of form elements is managed by React, which provides a single source of truth for input values."
    },
    {
      id: 8,
      question: "What is the purpose of `React.StrictMode`?",
      options: [
        "To check for potential problems in the application during development.",
        "To optimize the rendering performance of the app.",
        "To enforce code style guidelines.",
        "To log every component's lifecycle events."
      ],
      correctAnswer: "To check for potential problems in the application during development.",
      answerDescription: "`React.StrictMode` helps to identify potential problems in the app during development, such as unsafe lifecycle methods or deprecated APIs."
    },
    {
      id: 9,
      question: "What is the difference between `useEffect()` and `useLayoutEffect()`?",
      options: [
        "`useEffect()` runs asynchronously after the DOM has been painted, while `useLayoutEffect()` runs synchronously before the DOM is painted.",
        "`useEffect()` runs before the DOM is painted, while `useLayoutEffect()` runs after.",
        "`useEffect()` only runs when props change, while `useLayoutEffect()` only runs when state changes.",
        "There is no difference between `useEffect()` and `useLayoutEffect()`."
      ],
      correctAnswer: "`useEffect()` runs asynchronously after the DOM has been painted, while `useLayoutEffect()` runs synchronously before the DOM is painted.",
      answerDescription: "`useEffect()` runs asynchronously after the render, while `useLayoutEffect()` runs synchronously before the browser paints the DOM, making it useful for layout measurements."
    },
    {
      id: 10,
      question: "How does React handle events in the DOM?",
      options: [
        "React uses event delegation to handle events on the root of the DOM.",
        "React attaches event listeners to each DOM element.",
        "React uses Web Workers to handle events asynchronously.",
        "React listens to events only on class components."
      ],
      correctAnswer: "React uses event delegation to handle events on the root of the DOM.",
      answerDescription: "React uses a single event listener at the root of the DOM and delegates events to the appropriate child elements."
    },
    {
      id: 11,
      question: "What is the role of `shouldComponentUpdate()` in class components?",
      options: [
        "It determines whether a component should re-render when new props or state are received.",
        "It prevents state from being updated.",
        "It performs side-effects after a component mounts.",
        "It initializes the state of a component."
      ],
      correctAnswer: "It determines whether a component should re-render when new props or state are received.",
      answerDescription: "`shouldComponentUpdate()` is used in class components to optimize performance by preventing unnecessary re-renders."
    },
    {
      id: 12,
      question: "What is the purpose of `useRef()` in React?",
      options: [
        "It creates a mutable reference that persists across renders.",
        "It is used to store local state in a functional component.",
        "It provides access to the component's lifecycle methods.",
        "It handles asynchronous code execution in components."
      ],
      correctAnswer: "It creates a mutable reference that persists across renders.",
      answerDescription: "`useRef()` creates a reference that can be used to directly access a DOM element or store values that persist across renders without causing a re-render."
    },
    {
      id: 13,
      question: "What is React's reconciliation algorithm?",
      options: [
        "It compares the current virtual DOM with the previous one to identify changes.",
        "It updates the state when a component is re-rendered.",
        "It controls the scheduling of asynchronous tasks.",
        "It optimizes the event loop to handle more user interactions."
      ],
      correctAnswer: "It compares the current virtual DOM with the previous one to identify changes.",
      answerDescription: "React uses its reconciliation algorithm to efficiently update the UI by comparing the current virtual DOM with the previous one and updating only the changed parts."
    },
    {
      id: 14,
      question: "What is lazy loading in React?",
      options: [
        "It allows components to be loaded only when they are needed, improving performance.",
        "It loads all components asynchronously when the app starts.",
        "It synchronously loads components on page load.",
        "It prevents state from being updated."
      ],
      correctAnswer: "It allows components to be loaded only when they are needed, improving performance.",
      answerDescription: "Lazy loading helps to load components asynchronously, only when they are required, reducing the initial loading time of an app."
    },
    {
      id: 15,
      question: "What is `useCallback()` used for in React?",
      options: [
        "It memoizes a function to prevent unnecessary re-creation on each render.",
        "It schedules side-effects in the component lifecycle.",
        "It provides a reference to a DOM element.",
        "It updates the state in functional components."
      ],
      correctAnswer: "It memoizes a function to prevent unnecessary re-creation on each render.",
      answerDescription: "`useCallback()` memoizes functions so that they are not re-created on each render, improving performance when passing callbacks to child components."
    },
    {
      id: 16,
      question: "How do you handle errors in React components?",
      options: [
        "By using error boundaries.",
        "By using `catch()` blocks in asynchronous code.",
        "By calling `componentWillUnmount()` when errors occur.",
        "By using the `throwError` method."
      ],
      correctAnswer: "By using error boundaries.",
      answerDescription: "Error boundaries are components that catch JavaScript errors in their child components and display a fallback UI instead of crashing the app."
    },
    {
      id: 17,
      question: "What does `React.PureComponent` do?",
      options: [
        "It only re-renders a component if the props or state have changed.",
        "It allows a component to handle errors during rendering.",
        "It prevents a component from rendering when props change.",
        "It forces a re-render for every state change."
      ],
      correctAnswer: "It only re-renders a component if the props or state have changed.",
      answerDescription: "`React.PureComponent` implements `shouldComponentUpdate()` with a shallow prop and state comparison, reducing unnecessary re-renders."
    },
    {
      id: 18,
      question: "What is the purpose of `useLayoutEffect()` in React?",
      options: [
        "It runs synchronously after all DOM mutations.",
        "It runs asynchronously after the component has mounted.",
        "It is used for error handling in functional components.",
        "It replaces `componentDidUpdate()` in class components."
      ],
      correctAnswer: "It runs synchronously after all DOM mutations.",
      answerDescription: "`useLayoutEffect()` runs synchronously after all DOM mutations, making it useful for updating the DOM before the browser paints the changes."
    },
    {
      id: 19,
      question: "What does `React.createElement()` do?",
      options: [
        "It creates a React element that can be rendered into the DOM.",
        "It generates a virtual DOM for server-side rendering.",
        "It triggers a re-render of the entire app.",
        "It optimizes the state of a component."
      ],
      correctAnswer: "It creates a React element that can be rendered into the DOM.",
      answerDescription: "`React.createElement()` is the low-level API that creates React elements, which are used to describe the structure of the UI in JSX."
    },
    {
      id: 20,
      question: "How does React handle updates to components?",
      options: [
        "It batches updates and optimizes rendering for performance.",
        "It updates all components, even if the props haven't changed.",
        "It directly updates the DOM without using the virtual DOM.",
        "It uses Web Workers to handle updates asynchronously."
      ],
      correctAnswer: "It batches updates and optimizes rendering for performance.",
      answerDescription: "React batches state updates and only re-renders components that have changed, making the rendering process more efficient."
    },
    {
      id: 21,
      question: "What are fragment components in React?",
      options: [
        "They allow grouping multiple elements without adding extra nodes to the DOM.",
        "They allow a component to handle multiple states.",
        "They prevent re-renders for nested components.",
        "They are used for asynchronous data fetching."
      ],
      correctAnswer: "They allow grouping multiple elements without adding extra nodes to the DOM.",
      answerDescription: "Fragments are used to group multiple elements in a component without adding extra nodes to the DOM."
    },
    {
      id: 22,
      question: "What is the purpose of `useImperativeHandle()` in React?",
      options: [
        "It customizes the instance value that is exposed to parent components.",
        "It handles events in class components.",
        "It provides a reference to a DOM element.",
        "It is used to perform side-effects in a component."
      ],
      correctAnswer: "It customizes the instance value that is exposed to parent components.",
      answerDescription: "`useImperativeHandle()` customizes the value that is exposed to the parent when using `ref` with a child component."
    },
    {
      id: 23,
      question: "What is the use of `React.forwardRef()`?",
      options: [
        "It allows passing refs to functional components.",
        "It prevents a component from re-rendering.",
        "It allows handling context in a component.",
        "It is used for managing forms."
      ],
      correctAnswer: "It allows passing refs to functional components.",
      answerDescription: "`React.forwardRef()` allows functional components to accept `ref` and forward it to a child component."
    },
    {
      id: 24,
      question: "What are controlled and uncontrolled components in React?",
      options: [
        "Controlled components have their value managed by React state, while uncontrolled components rely on the DOM to manage their value.",
        "Controlled components are managed by refs, while uncontrolled components are managed by state.",
        "Both types are used for performance optimization.",
        "Controlled components are used only in functional components."
      ],
      correctAnswer: "Controlled components have their value managed by React state, while uncontrolled components rely on the DOM to manage their value.",
      answerDescription: "Controlled components manage input values using React state, whereas uncontrolled components rely on the DOM itself to manage values." 
    }
  ];
  
  export const reactEventLoopThreadQuestions = [
    {
      id: 1,
      question: "What is the purpose of the event loop in JavaScript?",
      options: [
        "To handle asynchronous code execution",
        "To manage memory allocation",
        "To execute synchronous code only",
        "To create multiple threads"
      ],
      correctAnswer: "To handle asynchronous code execution",
      answerDescription: "The event loop is responsible for executing asynchronous code, handling callbacks, and managing the call stack."
    },
    {
      id: 2,
      question: "Which of the following tasks does the JavaScript event loop handle?",
      options: [
        "Executing callbacks after a timeout",
        "Rendering UI components in React",
        "Handling state changes",
        "Blocking synchronous code execution"
      ],
      correctAnswer: "Executing callbacks after a timeout",
      answerDescription: "The event loop is responsible for executing tasks from the event queue, such as callbacks from `setTimeout()` or other asynchronous functions."
    },
    {
      id: 3,
      question: "In the context of React, when does the event loop run?",
      options: [
        "Whenever an event is triggered, such as a user click",
        "When a component is mounted",
        "Only when state or props change",
        "Whenever a new function is invoked"
      ],
      correctAnswer: "Whenever an event is triggered, such as a user click",
      answerDescription: "In React, the event loop processes events like clicks, keypresses, or other user interactions to update the UI and trigger re-renders."
    },
    {
      id: 4,
      question: "What happens when a component is rendered in React?",
      options: [
        "The event loop executes synchronously",
        "The event loop handles the rendering process asynchronously",
        "The browser is blocked during rendering",
        "JavaScript threads are blocked"
      ],
      correctAnswer: "The event loop handles the rendering process asynchronously",
      answerDescription: "React’s rendering process is handled asynchronously, which means it doesn't block the event loop and allows other events to be processed."
    },
    {
      id: 5,
      question: "What is the call stack in the event loop?",
      options: [
        "A data structure that stores all synchronous function calls",
        "A queue where asynchronous callbacks are stored",
        "A memory area used for storing event listeners",
        "The main thread of the browser"
      ],
      correctAnswer: "A data structure that stores all synchronous function calls",
      answerDescription: "The call stack stores the currently executing functions. The event loop uses it to execute functions one by one, starting with the top-most function."
    },
    {
      id: 6,
      question: "Which of the following will be executed first in the event loop?",
      options: [
        "Synchronous code",
        "Asynchronous code from `setTimeout()`",
        "Code inside `Promise.then()`",
        "Code inside `setInterval()`"
      ],
      correctAnswer: "Synchronous code",
      answerDescription: "Synchronous code in the call stack is executed before asynchronous code like `setTimeout()` or `Promise.then()`, which are moved to the event queue."
    },
    {
      id: 7,
      question: "How does React use the event loop for UI rendering?",
      options: [
        "React batches state updates and schedules them asynchronously",
        "React directly manipulates the DOM on every state change",
        "React blocks the main thread during rendering",
        "React uses multiple threads to render the UI"
      ],
      correctAnswer: "React batches state updates and schedules them asynchronously",
      answerDescription: "React batches state updates and schedules UI updates asynchronously, allowing the event loop to handle other tasks without blocking the main thread."
    },
    {
      id: 8,
      question: "What does the `setState()` method in React trigger?",
      options: [
        "An immediate re-render of the component",
        "A re-render of the component after the event loop processes asynchronous tasks",
        "It only updates the state without re-rendering the component",
        "Nothing"
      ],
      correctAnswer: "A re-render of the component after the event loop processes asynchronous tasks",
      answerDescription: "When `setState()` is called, React schedules a re-render, which is processed after the event loop completes the current task."
    },
    {
      id: 9,
      question: "Which of the following can block the event loop in JavaScript?",
      options: [
        "A long-running synchronous function",
        "An asynchronous `setTimeout()` function",
        "An HTTP request",
        "A state update in React"
      ],
      correctAnswer: "A long-running synchronous function",
      answerDescription: "Synchronous functions in the call stack can block the event loop, preventing asynchronous code from being processed until the synchronous code finishes."
    },
    {
      id: 10,
      question: "How does React handle re-renders after state changes?",
      options: [
        "React triggers a synchronous re-render immediately",
        "React batches state updates and triggers re-renders after the event loop is free",
        "React uses a different thread for re-renders",
        "React does not trigger re-renders for state changes"
      ],
      correctAnswer: "React batches state updates and triggers re-renders after the event loop is free",
      answerDescription: "React optimizes performance by batching state updates and triggering re-renders asynchronously after the event loop completes current tasks."
    },
    {
      id: 11,
      question: "What happens when a browser renders a React component?",
      options: [
        "The event loop processes all callbacks and updates the UI immediately",
        "The React virtual DOM updates and schedules rendering asynchronously",
        "The UI is rendered synchronously, blocking the event loop",
        "The browser calls external APIs to handle rendering"
      ],
      correctAnswer: "The React virtual DOM updates and schedules rendering asynchronously",
      answerDescription: "React uses a virtual DOM to update the UI asynchronously, minimizing blocking the event loop and improving performance."
    },
    {
      id: 12,
      question: "What is the role of event listeners in JavaScript?",
      options: [
        "To handle user interactions with the UI",
        "To execute asynchronous code",
        "To manage the event queue",
        "To execute synchronous code only"
      ],
      correctAnswer: "To handle user interactions with the UI",
      answerDescription: "Event listeners are used to handle user interactions like clicks, keypresses, or mouse events and trigger appropriate responses in JavaScript."
    },
    {
      id: 13,
      question: "How does React update the component tree when state changes?",
      options: [
        "React triggers a full re-render of the component tree synchronously",
        "React triggers an asynchronous re-render and diffing process",
        "React updates only the components that are changed",
        "React does not update the component tree on state change"
      ],
      correctAnswer: "React triggers an asynchronous re-render and diffing process",
      answerDescription: "React asynchronously updates the component tree, performs a diffing process to minimize DOM manipulation, and updates only changed parts."
    },
    {
      id: 14,
      question: "What happens when `setTimeout()` is called in JavaScript?",
      options: [
        "The callback is executed immediately after the specified delay",
        "The callback is placed in the event queue after the specified delay",
        "The callback is executed in a new thread",
        "The callback is executed in the current thread"
      ],
      correctAnswer: "The callback is placed in the event queue after the specified delay",
      answerDescription: "`setTimeout()` schedules the callback to be executed after the specified delay, moving it to the event queue for future execution by the event loop."
    },
    {
      id: 15,
      question: "How does React handle component re-renders when the state is updated?",
      options: [
        "By blocking the event loop until the component is re-rendered",
        "By updating the UI synchronously without any optimization",
        "By batching state updates and triggering re-renders asynchronously",
        "By creating new threads for each re-render"
      ],
      correctAnswer: "By batching state updates and triggering re-renders asynchronously",
      answerDescription: "React batches state updates for performance and schedules re-renders asynchronously, so they do not block the event loop."
    },
    {
      id: 16,
      question: "What happens to JavaScript code in the call stack when an asynchronous function is encountered?",
      options: [
        "The function is executed immediately",
        "The function is moved to the event queue and executed later",
        "The function is ignored",
        "The function is executed synchronously"
      ],
      correctAnswer: "The function is moved to the event queue and executed later",
      answerDescription: "When an asynchronous function is encountered, it is moved to the event queue, and the event loop will process it once the call stack is empty."
    },
    {
      id: 17,
      question: "What is the difference between the call stack and the event queue in JavaScript?",
      options: [
        "The call stack stores synchronous functions, while the event queue stores asynchronous functions",
        "The event queue stores synchronous functions, while the call stack stores asynchronous functions",
        "The event queue and call stack are the same",
        "There is no event queue in JavaScript"
      ],
      correctAnswer: "The call stack stores synchronous functions, while the event queue stores asynchronous functions",
      answerDescription: "The call stack stores synchronous functions, and the event queue stores asynchronous tasks waiting to be executed by the event loop."
    },
    {
      id: 18,
      question: "How does React’s event handling system work with the browser’s event loop?",
      options: [
        "React handles events synchronously, blocking the event loop",
        "React listens for events and processes them asynchronously without blocking the event loop",
        "React only handles events when the call stack is empty",
        "React delegates event handling to web workers"
      ],
      correctAnswer: "React listens for events and processes them asynchronously without blocking the event loop",
      answerDescription: "React uses an event delegation system, processing events asynchronously and allowing other JavaScript code to execute without blocking the event loop."
    },
    {
      id: 19,
      question: "How can event listeners in JavaScript be used to handle user input?",
      options: [
        "By directly modifying the DOM",
        "By listening for events like `click`, `change`, `input`, etc.",
        "By executing asynchronous code",
        "By creating new threads"
      ],
      correctAnswer: "By listening for events like `click`, `change`, `input`, etc.",
      answerDescription: "Event listeners handle user input by listening for specific events like clicks, changes, or key presses and triggering appropriate callbacks."
    },
    {
      id: 20,
      question: "What happens when the JavaScript call stack is empty?",
      options: [
        "The event loop processes asynchronous code in the event queue",
        "The browser crashes",
        "The event loop stops",
        "The event loop executes all code synchronously"
      ],
      correctAnswer: "The event loop processes asynchronous code in the event queue",
      answerDescription: "Once the call stack is empty, the event loop processes tasks from the event queue, executing asynchronous code like Promises or event handlers."
    },
    {
      id: 21,
      question: "What is the primary advantage of React’s event delegation system?",
      options: [
        "It avoids adding event listeners to each DOM element individually",
        "It blocks the event loop",
        "It uses multiple threads to handle events",
        "It synchronizes state updates with the event loop"
      ],
      correctAnswer: "It avoids adding event listeners to each DOM element individually",
      answerDescription: "React’s event delegation system attaches a single event listener to a parent element and handles all events for its child components, improving performance."
    },
    {
      id: 22,
      question: "In React, when is the `componentDidMount()` method called?",
      options: [
        "Before the component is rendered",
        "After the component is rendered and added to the DOM",
        "Before the component is removed from the DOM",
        "When the component receives new props"
      ],
      correctAnswer: "After the component is rendered and added to the DOM",
      answerDescription: "`componentDidMount()` is called after the component is rendered and mounted to the DOM, making it a good place for initiating side effects like data fetching."
    },
    {
      id: 23,
      question: "How does React handle performance optimization during component rendering?",
      options: [
        "React uses a single thread for rendering",
        "React batches state updates and updates only changed components",
        "React blocks the event loop to ensure synchronization",
        "React delegates rendering to a separate thread"
      ],
      correctAnswer: "React batches state updates and updates only changed components",
      answerDescription: "React optimizes performance by batching state updates and rendering only the parts of the UI that have changed, avoiding unnecessary re-renders."
    },
    {
      id: 24,
      question: "What happens if an asynchronous function throws an error?",
      options: [
        "The error is caught in the event queue",
        "The error is ignored and the function continues to execute",
        "The error is handled by the event loop and displayed to the user",
        "The promise is rejected and can be caught with `.catch()`"
      ],
      correctAnswer: "The promise is rejected and can be caught with `.catch()`",
      answerDescription: "If a promise is rejected or an asynchronous function throws an error, the error can be caught using `.catch()` or `try/catch` in an async function."
    },
    {
      id: 25,
      question: "In JavaScript, which of the following operations happens asynchronously?",
      options: [
        "DOM manipulation",
        "Alert boxes",
        "File reading from the filesystem",
        "Looping through an array"
      ],
      correctAnswer: "File reading from the filesystem",
      answerDescription: "File reading from the filesystem is typically asynchronous, meaning it does not block the event loop and allows other tasks to continue executing."
    }
  ];

  export const reactMiddlewareOptimizationHooksQuestions = [
    {
      id: 1,
      question: "What is middleware in React, and how does it work?",
      options: [
        "Middleware in React is used to handle asynchronous logic in components.",
        "Middleware in React is a function that intercepts and modifies actions before they reach the reducer or component.",
        "Middleware in React is used to create custom hooks for data fetching.",
        "Middleware in React handles side-effects in lifecycle methods."
      ],
      correctAnswer: "Middleware in React is a function that intercepts and modifies actions before they reach the reducer or component.",
      answerDescription: "Middleware functions in React (commonly with Redux) allow for intercepting dispatched actions to perform side-effects or modify actions before they reach reducers."
    },
    {
      id: 2,
      question: "What is `React.lazy()` and how does it help with optimization?",
      options: [
        "It is used to load components asynchronously, reducing the initial load time.",
        "It is used to handle form validation asynchronously.",
        "It is used to optimize the rendering of list components.",
        "It is used to trigger component re-renders."
      ],
      correctAnswer: "It is used to load components asynchronously, reducing the initial load time.",
      answerDescription: "`React.lazy()` allows you to load components asynchronously, improving the initial load time by only loading the component when it is required (lazy-loading)."
    },
    {
      id: 3,
      question: "What is the purpose of `useMemo()` in React?",
      options: [
        "It helps memoize expensive calculations to avoid recalculating them on each render.",
        "It prevents unnecessary re-renders by memoizing the component.",
        "It schedules a re-render when the dependency list changes.",
        "It handles async operations in functional components."
      ],
      correctAnswer: "It helps memoize expensive calculations to avoid recalculating them on each render.",
      answerDescription: "`useMemo()` optimizes performance by memoizing the result of an expensive calculation, only recalculating it when its dependencies change."
    },
    {
      id: 4,
      question: "What is the difference between `useMemo()` and `useCallback()`?",
      options: [
        "`useMemo()` memoizes values, while `useCallback()` memoizes functions.",
        "`useMemo()` is used for side-effects, while `useCallback()` is used for state management.",
        "`useMemo()` is for caching data, while `useCallback()` optimizes rendering of components.",
        "`useMemo()` works in class components, while `useCallback()` works only in functional components."
      ],
      correctAnswer: "`useMemo()` memoizes values, while `useCallback()` memoizes functions.",
      answerDescription: "`useMemo()` is used for memoizing values, while `useCallback()` memoizes functions, preventing unnecessary function recreation on each render."
    },
    {
      id: 5,
      question: "What is `React.memo()` used for?",
      options: [
        "It memoizes the result of a component's render to avoid unnecessary re-renders.",
        "It controls state management in functional components.",
        "It helps schedule component rendering asynchronously.",
        "It prevents event listener attachments to components."
      ],
      correctAnswer: "It memoizes the result of a component's render to avoid unnecessary re-renders.",
      answerDescription: "`React.memo()` is a higher-order component that memoizes a functional component to avoid re-rendering when the props haven't changed."
    },
    {
      id: 6,
      question: "What is the purpose of the `useEffect()` hook in React?",
      options: [
        "It allows you to perform side-effects in functional components.",
        "It handles state updates in functional components.",
        "It manages global context within the app.",
        "It helps optimize event handling."
      ],
      correctAnswer: "It allows you to perform side-effects in functional components.",
      answerDescription: "`useEffect()` allows you to perform side-effects such as data fetching, subscriptions, and manual DOM manipulation in functional components."
    },
    {
      id: 7,
      question: "What does `useReducer()` hook do in React?",
      options: [
        "It provides a way to manage state in functional components, particularly for complex state logic.",
        "It handles side-effects in the component lifecycle.",
        "It is used to trigger component re-renders based on action dispatching.",
        "It is used for data fetching in functional components."
      ],
      correctAnswer: "It provides a way to manage state in functional components, particularly for complex state logic.",
      answerDescription: "`useReducer()` is used for managing complex state logic in functional components, especially when the state depends on multiple actions or sub-values."
    },
    {
      id: 8,
      question: "How can you optimize performance in React when dealing with large lists of data?",
      options: [
        "Use `React.memo()` and lazy-load components.",
        "Use `useCallback()` to memoize event handlers.",
        "Use `windowing` techniques with libraries like `react-window` or `react-virtualized` to render only visible items.",
        "All of the above."
      ],
      correctAnswer: "All of the above.",
      answerDescription: "To optimize performance with large lists, you can combine `React.memo()`, `useCallback()`, and libraries like `react-window` to render only visible items and reduce unnecessary renders."
    },
    {
      id: 9,
      question: "What are the benefits of using `React.Fragment`?",
      options: [
        "It allows grouping multiple elements without adding extra nodes to the DOM.",
        "It provides a fallback UI for error boundaries.",
        "It is used to memoize multiple child components.",
        "It helps in managing the state of multiple components."
      ],
      correctAnswer: "It allows grouping multiple elements without adding extra nodes to the DOM.",
      answerDescription: "`React.Fragment` is used to group multiple elements into one parent element without adding an extra node to the DOM, making it useful for cleaner HTML."
    },
    {
      id: 10,
      question: "What is the purpose of `useLayoutEffect()` in React?",
      options: [
        "It runs synchronously after all DOM mutations, useful for reading layout and triggering reflows.",
        "It schedules side-effects asynchronously after a render.",
        "It prevents layout thrashing.",
        "It is used for error handling in functional components."
      ],
      correctAnswer: "It runs synchronously after all DOM mutations, useful for reading layout and triggering reflows.",
      answerDescription: "`useLayoutEffect()` runs synchronously after the DOM is updated but before the browser paints the changes, making it useful for reading layout or triggering layout reflows."
    },
    {
      id: 11,
      question: "What is the purpose of `useImperativeHandle()` in React?",
      options: [
        "It customizes the instance value exposed to parent components via `ref`.",
        "It handles asynchronous events in child components.",
        "It provides a fallback UI for error boundaries.",
        "It optimizes the rendering of functional components."
      ],
      correctAnswer: "It customizes the instance value exposed to parent components via `ref`.",
      answerDescription: "`useImperativeHandle()` allows you to customize the value exposed by a ref to a parent component, useful for controlling what a parent can access from the child."
    },
    {
      id: 12,
      question: "What does `React.forwardRef()` do?",
      options: [
        "It allows passing refs to functional components.",
        "It provides access to lifecycle methods in functional components.",
        "It memoizes components to prevent re-renders.",
        "It provides asynchronous code execution for child components."
      ],
      correctAnswer: "It allows passing refs to functional components.",
      answerDescription: "`React.forwardRef()` is a higher-order component that allows functional components to receive `ref` and forward it to a child element."
    },
    {
      id: 13,
      question: "What is the role of `useContext()` in React?",
      options: [
        "It allows accessing and updating context in functional components.",
        "It schedules side-effects based on the context.",
        "It handles routing in functional components.",
        "It optimizes component re-renders based on context updates."
      ],
      correctAnswer: "It allows accessing and updating context in functional components.",
      answerDescription: "`useContext()` provides a way to consume values from the nearest parent context provider without manually passing props through every level."
    },
    {
      id: 14,
      question: "What is the purpose of the `useCallback()` hook?",
      options: [
        "It returns a memoized version of a callback function.",
        "It memoizes the result of an expensive calculation.",
        "It handles asynchronous tasks in functional components.",
        "It synchronizes state between different components."
      ],
      correctAnswer: "It returns a memoized version of a callback function.",
      answerDescription: "`useCallback()` memoizes a function to prevent its recreation on every render, which is particularly useful when passing callbacks to child components."
    },
    {
      id: 15,
      question: "How can you optimize re-renders in React when props or state are updated frequently?",
      options: [
        "By using `React.memo()`, `useMemo()`, and `useCallback()`.",
        "By manually setting the `shouldComponentUpdate()` lifecycle method.",
        "By using the `key` prop in lists.",
        "All of the above."
      ],
      correctAnswer: "All of the above.",
      answerDescription: "You can optimize re-renders by using `React.memo()`, `useMemo()`, `useCallback()`, and by using the `key` prop in lists to minimize unnecessary updates."
    },
    {
      id: 16,
      question: "What is the benefit of using `Suspense` in React?",
      options: [
        "It allows you to suspend rendering until a condition is met, such as async data loading.",
        "It delays component rendering to improve performance.",
        "It optimizes error boundaries for async code.",
        "It loads components lazily to reduce bundle size."
      ],
      correctAnswer: "It allows you to suspend rendering until a condition is met, such as async data loading.",
      answerDescription: "`Suspense` allows you to delay rendering until all necessary data is loaded or a condition is met, improving user experience when dealing with asynchronous data."
    },
    {
      id: 17,
      question: "What is the main difference between `useEffect()` and `useLayoutEffect()`?",
      options: [
        "`useLayoutEffect()` runs synchronously after the DOM is mutated, while `useEffect()` runs asynchronously.",
        "`useEffect()` is used for error handling, while `useLayoutEffect()` handles DOM manipulation.",
        "There is no difference between the two.",
        "`useLayoutEffect()` is only used in class components."
      ],
      correctAnswer: "`useLayoutEffect()` runs synchronously after the DOM is mutated, while `useEffect()` runs asynchronously.",
      answerDescription: "`useLayoutEffect()` runs synchronously after DOM mutations to handle layout or style adjustments, while `useEffect()` runs asynchronously, allowing the DOM to be painted first."
    },
    {
      id: 18,
      question: "What is the purpose of `useRef()` in React?",
      options: [
        "It provides a mutable reference to a DOM element or a value that persists across renders.",
        "It handles async operations in functional components.",
        "It creates a new reference to a component.",
        "It triggers a re-render when the reference is updated."
      ],
      correctAnswer: "It provides a mutable reference to a DOM element or a value that persists across renders.",
      answerDescription: "`useRef()` returns a mutable ref object that persists across re-renders, typically used to hold a reference to a DOM element or mutable value."
    },
    {
      id: 19,
      question: "How can you handle error boundaries in React?",
      options: [
        "By using `componentDidCatch()` in class components or `ErrorBoundary` in functional components.",
        "By using `useEffect()` with an error handler.",
        "By manually catching errors inside event handlers.",
        "By using `Suspense` to catch errors in asynchronous components."
      ],
      correctAnswer: "By using `componentDidCatch()` in class components or `ErrorBoundary` in functional components.",
      answerDescription: "Error boundaries in React catch JavaScript errors anywhere in the component tree, log those errors, and display a fallback UI."
    },
    {
      id: 20,
      question: "What is `React.StrictMode` used for?",
      options: [
        "It helps identify potential problems in an application during development by intentionally running additional checks.",
        "It allows the application to run faster in production.",
        "It handles memory optimization.",
        "It automatically fixes errors in components."
      ],
      correctAnswer: "It helps identify potential problems in an application during development by intentionally running additional checks.",
      answerDescription: "`React.StrictMode` is a tool for highlighting potential problems in the application during development and helps identify issues such as unsafe lifecycle methods and deprecated API usage."
    },
    {
      id: 21,
      question: "What is the purpose of `useEffect()` clean-up function?",
      options: [
        "It is used to clean up side-effects, such as canceling network requests or clearing timers.",
        "It optimizes performance by removing unnecessary state updates.",
        "It triggers a re-render when dependencies change.",
        "It allows for error handling inside functional components."
      ],
      correctAnswer: "It is used to clean up side-effects, such as canceling network requests or clearing timers.",
      answerDescription: "The clean-up function of `useEffect()` is used to clean up any side-effects like clearing timers, canceling network requests, or unsubscribing from subscriptions."
    },
    {
      id: 22,
      question: "What is the primary benefit of using `context` in React?",
      options: [
        "It allows sharing values (like state) between components without prop drilling.",
        "It improves performance by reducing re-renders.",
        "It simplifies the code for component styling.",
        "It manages lifecycle methods in functional components."
      ],
      correctAnswer: "It allows sharing values (like state) between components without prop drilling.",
      answerDescription: "React's `context` API is used to share values like state or functions across components without needing to pass them down through every level of the component tree."
    }
  ];

  export const reactSessionAuthSocketQuestions = [
    {
      id: 1,
      question: "How do you manage authentication in a React application?",
      options: [
        "By storing the JWT token in localStorage and attaching it to every request header.",
        "By using cookies to store the user's session and checking the server on every request.",
        "By using Redux to manage authentication state.",
        "All of the above."
      ],
      correctAnswer: "All of the above.",
      answerDescription: "Authentication in React applications can be managed in multiple ways, including storing JWT tokens in localStorage, using cookies for session management, or using a state management library like Redux."
    },
    {
      id: 2,
      question: "What is the purpose of using `useEffect()` to handle session expiration in React?",
      options: [
        "It allows you to check the session expiration on component mount and update the UI accordingly.",
        "It keeps the session alive by extending the expiration time.",
        "It stores the session in localStorage.",
        "It is used to trigger an API call to fetch session details."
      ],
      correctAnswer: "It allows you to check the session expiration on component mount and update the UI accordingly.",
      answerDescription: "`useEffect()` can be used to handle side effects, such as checking if the session has expired when the component mounts and updating the UI or redirecting the user if the session is no longer valid."
    },
    {
      id: 3,
      question: "What is the benefit of using JWT (JSON Web Tokens) for authentication in React?",
      options: [
        "JWT allows the client and server to authenticate requests without storing session data on the server.",
        "JWT is encrypted, making it secure for storing sensitive information.",
        "JWT automatically handles the renewal of access tokens.",
        "All of the above."
      ],
      correctAnswer: "All of the above.",
      answerDescription: "JWT allows for stateless authentication, where the token is stored on the client and can be used to authenticate requests without needing server-side session management. It also provides security and can include user roles or other information."
    },
    {
      id: 4,
      question: "What is the primary disadvantage of storing JWT tokens in localStorage?",
      options: [
        "LocalStorage is vulnerable to XSS (Cross-Site Scripting) attacks, which can compromise JWT tokens.",
        "JWT tokens in localStorage expire too quickly.",
        "LocalStorage does not allow storing more than 5MB of data.",
        "LocalStorage cannot store non-string values."
      ],
      correctAnswer: "LocalStorage is vulnerable to XSS (Cross-Site Scripting) attacks, which can compromise JWT tokens.",
      answerDescription: "LocalStorage is accessible through JavaScript, which makes it susceptible to XSS attacks. If an attacker can inject malicious scripts into the page, they can steal tokens from localStorage."
    },
    {
      id: 5,
      question: "How can you securely manage authentication tokens in React applications?",
      options: [
        "By storing tokens in HttpOnly cookies to prevent access via JavaScript.",
        "By storing tokens in Redux store.",
        "By storing tokens in localStorage and encrypting them.",
        "By using a third-party authentication library."
      ],
      correctAnswer: "By storing tokens in HttpOnly cookies to prevent access via JavaScript.",
      answerDescription: "Storing tokens in HttpOnly cookies adds security because these cookies are not accessible via JavaScript, reducing the risk of XSS attacks."
    },
    {
      id: 6,
      question: "How do you implement session persistence in React after a page reload?",
      options: [
        "By storing the session token in localStorage and retrieving it on page load.",
        "By using cookies to store session data and automatically refresh the session on page reload.",
        "By using a global state management solution like Redux to persist session state.",
        "All of the above."
      ],
      correctAnswer: "All of the above.",
      answerDescription: "Session persistence can be achieved by storing session tokens in localStorage or cookies, or by using a state management solution like Redux to ensure session data is maintained across page reloads."
    },
    {
      id: 7,
      question: "What is the role of `useContext()` in authentication flow in React?",
      options: [
        "It can be used to provide and consume authentication state across components.",
        "It stores the user's session token.",
        "It handles session expiration automatically.",
        "It redirects users to login page if authentication fails."
      ],
      correctAnswer: "It can be used to provide and consume authentication state across components.",
      answerDescription: "`useContext()` can be used to manage authentication state globally, providing a way to share user session data across the app without passing props through each level of the component tree."
    },
    {
      id: 8,
      question: "What is the purpose of `withAuth()` higher-order component in React?",
      options: [
        "It wraps a component and ensures that the user is authenticated before rendering the component.",
        "It handles token refresh automatically for each request.",
        "It redirects users to the login page if they are not authenticated.",
        "It provides session information to child components."
      ],
      correctAnswer: "It wraps a component and ensures that the user is authenticated before rendering the component.",
      answerDescription: "`withAuth()` is a higher-order component (HOC) that can wrap components, checking for authentication and ensuring that the user is logged in before the component is rendered."
    },
    {
      id: 9,
      question: "What is the role of Socket.IO in React for real-time communication?",
      options: [
        "Socket.IO enables real-time, bi-directional communication between the client and server.",
        "Socket.IO stores session data on the client-side.",
        "Socket.IO sends HTTP requests asynchronously.",
        "Socket.IO handles the authentication logic for the app."
      ],
      correctAnswer: "Socket.IO enables real-time, bi-directional communication between the client and server.",
      answerDescription: "Socket.IO is a library that provides real-time, bi-directional communication over WebSockets, allowing the server and client to send messages and events in real-time."
    },
    {
      id: 10,
      question: "How do you handle authorization in React when making API calls?",
      options: [
        "By attaching the JWT token in the Authorization header of each API request.",
        "By using cookies to manage session data and automatically adding the token to requests.",
        "By storing the token in Redux and manually passing it with each request.",
        "All of the above."
      ],
      correctAnswer: "All of the above.",
      answerDescription: "Authorization can be handled by attaching the JWT token to API requests, either by using headers, cookies, or Redux. Each approach ensures the server can verify the user's authentication."
    },
    {
      id: 11,
      question: "What is the purpose of `socket.emit()` in Socket.IO?",
      options: [
        "It sends a message or event from the client to the server.",
        "It listens for incoming events from the server.",
        "It updates the session data on the server.",
        "It connects the client to a specific namespace."
      ],
      correctAnswer: "It sends a message or event from the client to the server.",
      answerDescription: "`socket.emit()` is used to send events or messages from the client to the server in real-time using Socket.IO."
    },
    {
      id: 12,
      question: "How do you handle token refresh in React to keep a user authenticated?",
      options: [
        "By checking the expiration of the token and refreshing it automatically before making any requests.",
        "By using `setInterval()` to refresh the token every X minutes.",
        "By triggering a token refresh on the server when the user logs in.",
        "By storing the token in cookies, which automatically refreshes every time the user visits the site."
      ],
      correctAnswer: "By checking the expiration of the token and refreshing it automatically before making any requests.",
      answerDescription: "To keep users authenticated, you can check the expiration of the JWT token before making API requests and refresh the token automatically if it has expired."
    },
    {
      id: 13,
      question: "How do you ensure that the authentication token is securely sent with each request in React?",
      options: [
        "By adding the token to the Authorization header of each API request.",
        "By sending the token as a query parameter in the request URL.",
        "By storing the token in a public session storage.",
        "By using an insecure HTTP connection."
      ],
      correctAnswer: "By adding the token to the Authorization header of each API request.",
      answerDescription: "The most secure way to send the authentication token is by adding it to the Authorization header of each API request. This prevents exposing the token in URLs or accessible client-side storage."
    },
    {
      id: 14,
      question: "What does `socket.on()` do in Socket.IO?",
      options: [
        "It listens for events sent from the server to the client.",
        "It sends events from the client to the server.",
        "It handles authentication errors from the server.",
        "It creates a new WebSocket connection."
      ],
      correctAnswer: "It listens for events sent from the server to the client.",
      answerDescription: "`socket.on()` is used to listen for events sent by the server and handle them on the client side in real-time communication."
    },
    {
      id: 15,
      question: "What is the `socket.connect()` method in Socket.IO used for?",
      options: [
        "It initiates a connection from the client to the server using WebSockets.",
        "It listens for incoming events from the server.",
        "It sends a connection request to a specific namespace.",
        "It disconnects the client from the server."
      ],
      correctAnswer: "It initiates a connection from the client to the server using WebSockets.",
      answerDescription: "`socket.connect()` establishes a WebSocket connection from the client to the server, allowing real-time communication."
    },
    {
      id: 16,
      question: "How can you ensure a user is redirected to the login page if they are not authenticated in React?",
      options: [
        "By checking the authentication status in `useEffect()` and using `React Router` to redirect the user.",
        "By using `window.location.href` to manually redirect the user.",
        "By calling an API on every route change to check the user's session.",
        "By storing the redirect URL in localStorage before redirecting the user."
      ],
      correctAnswer: "By checking the authentication status in `useEffect()` and using `React Router` to redirect the user.",
      answerDescription: "You can use `useEffect()` to check the authentication status on component mount and `React Router` to handle redirects if the user is not authenticated."
    },
    {
      id: 17,
      question: "What is the best practice for protecting API routes in a React app?",
      options: [
        "By using JWT tokens and validating the token on the server for each request.",
        "By using API keys stored in localStorage.",
        "By validating the user's email address.",
        "By using server-side session management."
      ],
      correctAnswer: "By using JWT tokens and validating the token on the server for each request.",
      answerDescription: "Using JWT tokens is a common and secure practice for protecting API routes. The token is included with each request, and the server can verify it to ensure the user is authorized."
    },
    {
      id: 18,
      question: "How can you handle multiple socket events in a React component?",
      options: [
        "By using `socket.on()` for each event and creating corresponding handlers.",
        "By creating a switch statement inside `socket.on()` to handle different events.",
        "By using `Promise.all()` to handle multiple events simultaneously.",
        "By chaining `.then()` to each event handler."
      ],
      correctAnswer: "By using `socket.on()` for each event and creating corresponding handlers.",
      answerDescription: "You can handle multiple socket events by calling `socket.on()` for each event type and defining corresponding event handlers."
    },
    {
      id: 19,
      question: "What is the role of `useState()` in managing authentication state in React?",
      options: [
        "It stores and manages the authentication status, such as whether the user is logged in.",
        "It handles token refresh logic.",
        "It stores the user's session information.",
        "It handles route redirection based on authentication."
      ],
      correctAnswer: "It stores and manages the authentication status, such as whether the user is logged in.",
      answerDescription: "`useState()` is commonly used to manage the state of authentication, such as whether the user is logged in or not."
    },
    {
      id: 20,
      question: "What is the difference between `socket.disconnect()` and `socket.close()` in Socket.IO?",
      options: [
        "`socket.disconnect()` disconnects the client from the server, while `socket.close()` closes the underlying connection, making it impossible to reconnect.",
        "`socket.disconnect()` is used to stop listening to events, while `socket.close()` stops emitting events.",
        "They are the same and can be used interchangeably.",
        "`socket.close()` is used in client-side events, while `socket.disconnect()` is for server-side events."
      ],
      correctAnswer: "`socket.disconnect()` disconnects the client from the server, while `socket.close()` closes the underlying connection, making it impossible to reconnect.",
      answerDescription: "`socket.disconnect()` disconnects the client but allows reconnection, while `socket.close()` permanently closes the connection."
    }
  ];

  export const reactOptimizationQuestions = [
    {
      id: 1,
      question: "What is the purpose of `React.memo()` and when should you use it?",
      options: [
        "It memoizes components to prevent unnecessary re-renders when props don't change.",
        "It optimizes functional components by rendering them only once.",
        "It speeds up state updates by batching them together.",
        "It optimizes class components."
      ],
      correctAnswer: "It memoizes components to prevent unnecessary re-renders when props don't change.",
      answerDescription: "`React.memo()` is used to optimize functional components by memoizing them. It prevents unnecessary re-renders if the component's props haven't changed."
    },
    {
      id: 2,
      question: "What is the difference between `useCallback()` and `useMemo()` in React?",
      options: [
        "`useCallback()` memoizes functions, while `useMemo()` memoizes values.",
        "`useCallback()` is used for performance optimization, while `useMemo()` is used to store results of async operations.",
        "Both are used for memoizing values in a component.",
        "`useMemo()` is only used inside `useEffect()`."
      ],
      correctAnswer: "`useCallback()` memoizes functions, while `useMemo()` memoizes values.",
      answerDescription: "`useCallback()` is used to memoize callback functions, whereas `useMemo()` is used to memoize the return value of a computation to prevent recalculating expensive operations."
    },
    {
      id: 3,
      question: "What is the purpose of `shouldComponentUpdate()` in class components?",
      options: [
        "It determines if a component should re-render based on changes in state or props.",
        "It prevents the component from rendering when the state changes.",
        "It allows the component to update itself based on external changes.",
        "It handles the lifecycle methods in the class component."
      ],
      correctAnswer: "It determines if a component should re-render based on changes in state or props.",
      answerDescription: "`shouldComponentUpdate()` is a lifecycle method in class components that helps optimize performance by determining whether a re-render is necessary."
    },
    {
      id: 4,
      question: "How does `React.lazy()` improve performance in React apps?",
      options: [
        "It allows components to be loaded lazily, meaning they are loaded only when needed.",
        "It optimizes the use of state in the application.",
        "It reduces the amount of data sent over the network.",
        "It prevents unnecessary rendering of components."
      ],
      correctAnswer: "It allows components to be loaded lazily, meaning they are loaded only when needed.",
      answerDescription: "`React.lazy()` enables code-splitting by dynamically importing components only when they are needed, reducing the initial load time."
    },
    {
      id: 5,
      question: "What is the role of `React.PureComponent` in optimizing performance?",
      options: [
        "It automatically implements `shouldComponentUpdate()` to shallow compare props and state.",
        "It reduces the number of re-renders by preventing all updates to the component.",
        "It helps in managing the lifecycle methods for better performance.",
        "It allows for deep comparison of props and state."
      ],
      correctAnswer: "It automatically implements `shouldComponentUpdate()` to shallow compare props and state.",
      answerDescription: "`React.PureComponent` is a subclass of `React.Component` that implements a shallow comparison of props and state to prevent unnecessary re-renders."
    },
    {
      id: 6,
      question: "What is the purpose of `useEffect()` in performance optimization?",
      options: [
        "It allows you to perform side effects after render and control when they should run.",
        "It reduces the frequency of state updates in a component.",
        "It controls the reactivity of props.",
        "It prevents unnecessary rendering of child components."
      ],
      correctAnswer: "It allows you to perform side effects after render and control when they should run.",
      answerDescription: "`useEffect()` is used to perform side effects after a render and can be optimized by specifying dependencies to avoid unnecessary re-execution."
    },
    {
      id: 7,
      question: "What is the main benefit of using React's `Suspense`?",
      options: [
        "It allows you to load components lazily and handle loading states gracefully.",
        "It caches components to prevent unnecessary re-renders.",
        "It optimizes component state management.",
        "It improves the overall page speed by reducing CSS."
      ],
      correctAnswer: "It allows you to load components lazily and handle loading states gracefully.",
      answerDescription: "`Suspense` helps handle loading states for lazy-loaded components and provides a mechanism to wait for resources to load before rendering the component."
    },
    {
      id: 8,
      question: "How can you prevent unnecessary re-renders in React functional components?",
      options: [
        "By using `React.memo()` and `useCallback()`.",
        "By using `useEffect()` with an empty dependency array.",
        "By splitting the component into smaller components.",
        "By using the `key` prop on list elements."
      ],
      correctAnswer: "By using `React.memo()` and `useCallback()`.",
      answerDescription: "Using `React.memo()` to memoize components and `useCallback()` to memoize functions helps prevent unnecessary re-renders in functional components."
    },
    {
      id: 9,
      question: "What is the significance of code-splitting in React, and how do you implement it?",
      options: [
        "It reduces the initial loading time by splitting the code into smaller chunks and loading them only when necessary.",
        "It combines all the JavaScript files into one large file for faster load.",
        "It caches resources to prevent reloading.",
        "It bundles all images and assets into separate files."
      ],
      correctAnswer: "It reduces the initial loading time by splitting the code into smaller chunks and loading them only when necessary.",
      answerDescription: "Code-splitting in React is done using `React.lazy()` and `Suspense` to split the app into smaller bundles, which are loaded only when needed, improving performance."
    },
    {
      id: 10,
      question: "What is a potential problem with inline functions in React, and how do you avoid it?",
      options: [
        "Inline functions can cause unnecessary re-renders due to reference changes, and you can avoid this by using `useCallback()`.",
        "Inline functions improve performance by reducing function calls.",
        "Inline functions cause memory leaks and should be avoided.",
        "Inline functions reduce the complexity of the code."
      ],
      correctAnswer: "Inline functions can cause unnecessary re-renders due to reference changes, and you can avoid this by using `useCallback()`.",
      answerDescription: "Inline functions are re-created on every render, which can cause unnecessary re-renders. You can optimize this by using `useCallback()` to memoize the function."
    },
    {
      id: 11,
      question: "What is the benefit of using the `key` prop in lists of React components?",
      options: [
        "It helps React identify which items have changed, been added, or removed, preventing unnecessary re-renders.",
        "It ensures that all components are rendered in the correct order.",
        "It improves the style of list items.",
        "It prevents the list from being updated too frequently."
      ],
      correctAnswer: "It helps React identify which items have changed, been added, or removed, preventing unnecessary re-renders.",
      answerDescription: "The `key` prop is essential for React to efficiently update and manage lists by identifying items uniquely, preventing unnecessary re-renders."
    },
    {
      id: 12,
      question: "How can you prevent unnecessary rendering of child components in React?",
      options: [
        "By using `React.memo()` or `PureComponent` to prevent re-renders if props haven't changed.",
        "By moving the child components to a separate state management library.",
        "By removing the child component from the render method.",
        "By using the `key` prop to force a re-render."
      ],
      correctAnswer: "By using `React.memo()` or `PureComponent` to prevent re-renders if props haven't changed.",
      answerDescription: "`React.memo()` and `PureComponent` help to optimize performance by preventing re-renders of child components unless their props or state have changed."
    },
    {
      id: 13,
      question: "What does `React.lazy()` do in terms of performance optimization?",
      options: [
        "It allows you to load components lazily, reducing the bundle size of the initial load.",
        "It improves the efficiency of state updates in large applications.",
        "It automatically splits the application code into multiple files.",
        "It caches components for faster re-renders."
      ],
      correctAnswer: "It allows you to load components lazily, reducing the bundle size of the initial load.",
      answerDescription: "`React.lazy()` enables dynamic import of components, helping to split the code and load only the required components, reducing the initial bundle size."
    },
    {
      id: 14,
      question: "What is the role of `useMemo()` in performance optimization?",
      options: [
        "It memoizes expensive calculations so that they are only recomputed when their dependencies change.",
        "It memoizes functions to prevent re-creation on each render.",
        "It prevents state updates from triggering unnecessary renders.",
        "It controls the flow of data within the app."
      ],
      correctAnswer: "It memoizes expensive calculations so that they are only recomputed when their dependencies change.",
      answerDescription: "`useMemo()` helps optimize performance by memoizing the result of expensive calculations and recomputing them only when their dependencies change."
    },
    {
      id: 15,
      question: "What is the effect of excessive state updates on React performance?",
      options: [
        "Excessive state updates can lead to unnecessary re-renders, affecting performance.",
        "State updates increase the speed of rendering.",
        "State updates help manage memory usage efficiently.",
        "State updates prevent components from rendering."
      ],
      correctAnswer: "Excessive state updates can lead to unnecessary re-renders, affecting performance.",
      answerDescription: "Frequent state updates can trigger unnecessary re-renders, negatively impacting performance, especially in large React applications."
    },
    {
      id: 16,
      question: "How does the `useReducer()` hook help optimize performance in React?",
      options: [
        "It allows complex state logic to be managed with fewer re-renders, compared to using `useState()` for every action.",
        "It stores the state in a global context to prevent unnecessary updates.",
        "It limits the number of renders by preventing side effects.",
        "It batches multiple state changes into a single render."
      ],
      correctAnswer: "It allows complex state logic to be managed with fewer re-renders, compared to using `useState()` for every action.",
      answerDescription: "`useReducer()` is useful for managing complex state updates in an optimized way, reducing the number of re-renders compared to using `useState()` in scenarios with multiple state changes."
    },
    {
      id: 17,
      question: "Why is it important to keep the component tree shallow in large React applications?",
      options: [
        "Shallow component trees reduce the cost of rendering and improve the performance of React applications.",
        "Shallow component trees are easier to maintain.",
        "Shallow component trees automatically prevent unnecessary state updates.",
        "Shallow component trees improve the layout of the application."
      ],
      correctAnswer: "Shallow component trees reduce the cost of rendering and improve the performance of React applications.",
      answerDescription: "A shallow component tree reduces the complexity of React's reconciliation process, which improves rendering performance in large applications."
    },
    {
      id: 18,
      question: "What is the purpose of the `Profiler` API in React?",
      options: [
        "It measures the performance of React components and identifies components that are slow to render.",
        "It provides a way to log all render cycles for debugging purposes.",
        "It automatically optimizes component rendering based on performance data.",
        "It caches component renders to improve performance."
      ],
      correctAnswer: "It measures the performance of React components and identifies components that are slow to render.",
      answerDescription: "The `Profiler` API allows developers to measure the performance of individual components and identify areas where performance can be optimized."
    },
    {
      id: 19,
      question: "How does using `window.requestIdleCallback()` optimize rendering in React?",
      options: [
        "It allows React to perform work when the main thread is idle, avoiding blocking critical user interactions.",
        "It forces React to perform work during the idle phase.",
        "It prevents re-renders while the page is idle.",
        "It delays the execution of heavy computations until the next frame."
      ],
      correctAnswer: "It allows React to perform work when the main thread is idle, avoiding blocking critical user interactions.",
      answerDescription: "`window.requestIdleCallback()` is used to perform work during idle periods when the main thread is free, allowing React to avoid blocking user interactions."
    },
    {
      id: 20,
      question: "How can you optimize large lists of data in React?",
      options: [
        "By using `react-window` or `react-virtualized` to render only visible items.",
        "By using `shouldComponentUpdate()` to prevent re-renders.",
        "By storing the list in global state.",
        "By splitting the list into separate components."
      ],
      correctAnswer: "By using `react-window` or `react-virtualized` to render only visible items.",
      answerDescription: "Libraries like `react-window` and `react-virtualized` optimize large lists by only rendering the visible items, improving performance in scenarios with large datasets."
    }
  ];
  
  export const testingPhilosophyWithRTL = [
    {
      id: 1,
      question: "What is the main philosophy behind React Testing Library?",
      options: [
        "Testing components in isolation without worrying about how they interact with the DOM.",
        "Testing the entire app including UI components, server calls, and side effects.",
        "Testing components based on their behavior and how users interact with them.",
        "Testing individual methods and logic separately."
      ],
      correctAnswer: "Testing components based on their behavior and how users interact with them.",
      answerDescription: "The core philosophy of React Testing Library is to test components based on how users interact with them, focusing on behavior and accessibility."
    },
    {
      id: 2,
      question: "What is the main advantage of using `getByRole` over `getByTestId` in React Testing Library?",
      options: [
        "`getByRole` selects elements based on their accessibility role, which is more aligned with how users interact with the app.",
        "`getByRole` is faster than `getByTestId`.",
        "`getByTestId` is deprecated and shouldn't be used in modern testing.",
        "`getByRole` is for performance optimization in tests."
      ],
      correctAnswer: "`getByRole` selects elements based on their accessibility role, which is more aligned with how users interact with the app.",
      answerDescription: "`getByRole` is preferred because it focuses on accessibility roles, ensuring tests reflect how users navigate and interact with the UI."
    },
    {
      id: 3,
      question: "What should be the main goal when writing tests with React Testing Library?",
      options: [
        "To ensure that components are rendered correctly.",
        "To verify the internal implementation of components.",
        "To test the component's behavior as a user would interact with it.",
        "To mock external services and validate that they are called."
      ],
      correctAnswer: "To test the component's behavior as a user would interact with it.",
      answerDescription: "The goal of RTL is to write tests that simulate user interactions to ensure the component behaves as expected from a user's perspective."
    },
    {
      id: 4,
      question: "How do you set up testing with React Testing Library in a project?",
      options: [
        "By installing `react-testing-library` and configuring Jest with the appropriate test environment.",
        "By installing `react-test-utils` and running `npm test`.",
        "By installing `enzyme` and `jest-environment`.",
        "By installing `@testing-library/react` and configuring Babel."
      ],
      correctAnswer: "By installing `@testing-library/react` and configuring Jest with the appropriate test environment.",
      answerDescription: "To set up testing, you need to install `@testing-library/react` and configure Jest to run the tests with the right test environment (JSX and React)."
    },
    {
      id: 5,
      question: "What is the purpose of `fireEvent` in React Testing Library?",
      options: [
        "It is used to simulate a user interaction, like a button click or form input.",
        "It triggers a component's lifecycle methods manually.",
        "It helps in testing async behavior in the component.",
        "It is used to trigger state updates in functional components."
      ],
      correctAnswer: "It is used to simulate a user interaction, like a button click or form input.",
      answerDescription: "`fireEvent` is used to simulate events like clicks, input changes, etc., to test how the component reacts to these interactions."
    },
    {
      id: 6,
      question: "What is the recommended way to mock external data or services in React Testing Library?",
      options: [
        "Using Jest's `mock` functions and providing mock data in the test.",
        "Using `useEffect` hooks to mock external APIs.",
        "Using `React.memo` to mock data.",
        "By directly manipulating the DOM."
      ],
      correctAnswer: "Using Jest's `mock` functions and providing mock data in the test.",
      answerDescription: "Jest's `mock` functions are used to mock external data or services, ensuring your tests are isolated and consistent without making actual network requests."
    },
    {
      id: 7,
      question: "How do you handle asynchronous code in React Testing Library tests?",
      options: [
        "Using `await` with `findBy` queries and wrapping the test in `async/await` syntax.",
        "Using `waitFor` to wait for DOM updates asynchronously.",
        "Using `fireEvent` to trigger async behavior.",
        "Both `await` with queries and `waitFor` for asynchronous updates."
      ],
      correctAnswer: "Both `await` with queries and `waitFor` for asynchronous updates.",
      answerDescription: "React Testing Library provides `findBy` for asynchronous queries and `waitFor` to wait for certain conditions or updates in the DOM."
    },
    {
      id: 8,
      question: "What is the purpose of `screen.debug()` in React Testing Library?",
      options: [
        "It logs the current state of the DOM, which can be useful for debugging tests.",
        "It checks if all components are mounted correctly.",
        "It prints the component's props in the console.",
        "It mocks an API call for debugging."
      ],
      correctAnswer: "It logs the current state of the DOM, which can be useful for debugging tests.",
      answerDescription: "`screen.debug()` outputs the current state of the rendered DOM to the console, which is helpful when debugging failed tests."
    },
    {
      id: 9,
      question: "What is the difference between `getBy` and `findBy` queries in React Testing Library?",
      options: [
        "`getBy` queries are for synchronous elements, while `findBy` queries are for asynchronous elements.",
        "`getBy` queries return an array, while `findBy` returns a single element.",
        "`getBy` queries return promises, while `findBy` queries return the element directly.",
        "`getBy` queries are faster than `findBy` queries."
      ],
      correctAnswer: "`getBy` queries are for synchronous elements, while `findBy` queries are for asynchronous elements.",
      answerDescription: "`getBy` is used for elements that are present immediately, while `findBy` is used for elements that may appear asynchronously after an action or time delay."
    },
    {
      id: 10,
      question: "How do you test for user interactions like button clicks in React Testing Library?",
      options: [
        "By using `fireEvent.click` or `userEvent.click` to simulate a click event.",
        "By using `getByText` to verify the button's text.",
        "By testing the component's state after the click event.",
        "By asserting that the button is enabled or disabled."
      ],
      correctAnswer: "By using `fireEvent.click` or `userEvent.click` to simulate a click event.",
      answerDescription: "To simulate a click event, you can use `fireEvent.click` or `userEvent.click` to trigger the button click and then test the resulting behavior."
    },
    {
      id: 11,
      question: "What is the difference between `fireEvent` and `userEvent` in React Testing Library?",
      options: [
        "`userEvent` is a higher-level abstraction that simulates user interactions more closely, while `fireEvent` is a lower-level API.",
        "`fireEvent` is used for form interactions, while `userEvent` is used for UI events.",
        "`userEvent` is for mocking external services, while `fireEvent` is for DOM interactions.",
        "`userEvent` is faster but less reliable than `fireEvent`."
      ],
      correctAnswer: "`userEvent` is a higher-level abstraction that simulates user interactions more closely, while `fireEvent` is a lower-level API.",
      answerDescription: "`userEvent` is generally preferred as it simulates real user behavior more closely, such as handling input and clicks. `fireEvent` is a lower-level API but still works."
    },
    {
      id: 12,
      question: "What is the purpose of `waitFor` in React Testing Library?",
      options: [
        "It waits for an element to appear or for a condition to be met asynchronously before continuing the test.",
        "It triggers re-renders of the component after state changes.",
        "It waits for an API call to return before moving to the next step.",
        "It helps with mocking network requests during tests."
      ],
      correctAnswer: "It waits for an element to appear or for a condition to be met asynchronously before continuing the test.",
      answerDescription: "`waitFor` is useful for waiting for asynchronous updates in the DOM, such as after state updates or network requests, before making assertions."
    },
    {
      id: 13,
      question: "How would you test a component that makes an API call in React Testing Library?",
      options: [
        "Mock the API call using Jest and assert that the correct data is displayed after the call finishes.",
        "Use `fireEvent` to trigger the API call.",
        "Use `await` to wait for the API to complete, then assert the state.",
        "Check that the API response appears in the console log."
      ],
      correctAnswer: "Mock the API call using Jest and assert that the correct data is displayed after the call finishes.",
      answerDescription: "To test components that make API calls, you can mock the API call using Jest and then test that the component behaves correctly when the data is returned."
    },
    {
      id: 14,
      question: "What does the `act()` function do in React Testing Library?",
      options: [
        "It ensures that all updates related to a test are completed before assertions are made.",
        "It simulates user interactions.",
        "It tracks state updates in React components.",
        "It wraps asynchronous code inside test functions."
      ],
      correctAnswer: "It ensures that all updates related to a test are completed before assertions are made.",
      answerDescription: "`act()` ensures that React has processed all updates (including async updates) before making assertions to avoid test failures due to unprocessed updates."
    },
    {
      id: 15,
      question: "What is the purpose of `render()` in React Testing Library?",
      options: [
        "It renders a component into the DOM for testing.",
        "It sets up the testing environment.",
        "It allows mocking of external APIs.",
        "It checks if components render correctly with given props."
      ],
      correctAnswer: "It renders a component into the DOM for testing.",
      answerDescription: "`render()` is used to render the component into the DOM so that you can query and interact with it during tests."
    },
    {
      id: 16,
      question: "How can you test if an element is visible or hidden in React Testing Library?",
      options: [
        "By using `getByText` or `getByRole` to find the element and assert its visibility.",
        "By using `fireEvent` to simulate hiding elements.",
        "By querying the DOM and checking if the element exists.",
        "By testing the component's state changes."
      ],
      correctAnswer: "By using `getByText` or `getByRole` to find the element and assert its visibility.",
      answerDescription: "You can use `getBy` queries to locate elements and then use assertions to verify if they are visible or not based on their state or DOM properties."
    },
    {
      id: 17,
      question: "How would you test that a form submission triggers a function in React Testing Library?",
      options: [
        "By simulating the form submission and asserting the function is called.",
        "By checking the form's input values.",
        "By verifying the console output.",
        "By checking the form's API request."
      ],
      correctAnswer: "By simulating the form submission and asserting the function is called.",
      answerDescription: "You can use `fireEvent.submit` or `userEvent.submit` to simulate form submission and then use Jest mocks to verify if the function has been called."
    },
    {
      id: 18,
      question: "What is the role of `screen` in React Testing Library?",
      options: [
        "It provides a way to query the DOM for elements across all tests.",
        "It is a mock function used to simulate user interactions.",
        "It triggers state updates in components.",
        "It renders components for testing."
      ],
      correctAnswer: "It provides a way to query the DOM for elements across all tests.",
      answerDescription: "The `screen` object provides access to various querying functions to locate and interact with elements rendered by React Testing Library."
    },
    {
      id: 19,
      question: "How do you assert that a component is removed from the DOM in React Testing Library?",
      options: [
        "By using `queryByText` and asserting that it returns `null`.",
        "By using `getByRole` and asserting that the element is hidden.",
        "By using `fireEvent` to remove the component.",
        "By using `screen.queryBy` and asserting it returns `undefined`."
      ],
      correctAnswer: "By using `queryByText` and asserting that it returns `null`.",
      answerDescription: "`queryByText` returns `null` if the element is not found in the DOM, which can be used to assert that a component has been removed."
    },
    {
      id: 20,
      question: "Why should we avoid testing implementation details in React Testing Library?",
      options: [
        "It leads to fragile tests that break when the implementation changes.",
        "It is unnecessary since implementation is not important in tests.",
        "It makes the tests more complex and harder to maintain.",
        "It can cause slow test execution."
      ],
      correctAnswer: "It leads to fragile tests that break when the implementation changes.",
      answerDescription: "React Testing Library encourages testing the behavior of components as users interact with them, rather than focusing on implementation details that might change frequently."
    }
  ];

  export const writingTestsAndStateHandling = [
    {
      id: 1,
      question: "How do you test state changes in a functional component with React Testing Library?",
      options: [
        "By directly inspecting the component's internal state.",
        "By using `act()` and asserting the UI updates based on state changes.",
        "By mocking the state and testing the functions that manipulate it.",
        "By using `screen.getByText()` and verifying the component's props."
      ],
      correctAnswer: "By using `act()` and asserting the UI updates based on state changes.",
      answerDescription: "`act()` ensures that React processes all updates (including state updates) before assertions, ensuring accurate tests."
    },
    {
      id: 2,
      question: "How would you handle a form state update in React Testing Library?",
      options: [
        "Simulate user input events and verify if the form state updates accordingly.",
        "Directly update the form state and check for component re-renders.",
        "Check if the form state is stored in `localStorage`.",
        "Check for state changes via a mock function."
      ],
      correctAnswer: "Simulate user input events and verify if the form state updates accordingly.",
      answerDescription: "By simulating user inputs (e.g., with `fireEvent` or `userEvent`), you can trigger state changes and then verify how the form's state affects the UI."
    },
    {
      id: 3,
      question: "What method would you use to test a component that sets local component state on user interaction?",
      options: [
        "Test by calling the state setter function directly.",
        "Test by simulating the user interaction and verifying UI changes.",
        "Use the `useState` hook inside a mock component.",
        "Mock the state and simulate its updates."
      ],
      correctAnswer: "Test by simulating the user interaction and verifying UI changes.",
      answerDescription: "React Testing Library promotes testing components as users interact with them. So, simulating user events like clicks or input changes and asserting the UI reflects state updates is the best approach."
    },
    {
      id: 4,
      question: "How do you test asynchronous state updates in React Testing Library?",
      options: [
        "By using `async` and `await` to wait for the state to update.",
        "By manually setting state in the component and verifying UI changes.",
        "By using `findBy` queries and `waitFor` to wait for the state update.",
        "By using the `flush()` method to process updates."
      ],
      correctAnswer: "By using `findBy` queries and `waitFor` to wait for the state update.",
      answerDescription: "`findBy` queries and `waitFor` allow you to test asynchronous updates by waiting for the DOM to reflect the state change before asserting."
    },
    {
      id: 5,
      question: "What is the advantage of using `useEffect` in tests for state updates?",
      options: [
        "It allows the test to wait for asynchronous state updates before making assertions.",
        "It directly updates the state in the component for testing purposes.",
        "It simulates user interactions automatically.",
        "It triggers rerenders automatically."
      ],
      correctAnswer: "It allows the test to wait for asynchronous state updates before making assertions.",
      answerDescription: "`useEffect` is a hook that handles side effects, including state changes. In testing, it ensures that state changes are processed before assertions are made."
    },
    {
      id: 6,
      question: "How can you test if a component's state change results in a side effect?",
      options: [
        "By mocking the side effect function and asserting that it's called after the state change.",
        "By directly calling the state change function in the test.",
        "By asserting that the component re-renders when the state changes.",
        "By simulating the side effect function inside the test."
      ],
      correctAnswer: "By mocking the side effect function and asserting that it's called after the state change.",
      answerDescription: "When testing side effects, mock the side effect function (e.g., API calls, data fetching) and assert that it is triggered after the state changes."
    },
    {
      id: 7,
      question: "What does the `waitFor` function do when testing state updates in React Testing Library?",
      options: [
        "It waits for the state to be directly updated before making assertions.",
        "It waits for asynchronous operations (like promises or timers) to complete before proceeding.",
        "It asserts the initial state and waits for the next state.",
        "It forces the component to re-render before making assertions."
      ],
      correctAnswer: "It waits for asynchronous operations (like promises or timers) to complete before proceeding.",
      answerDescription: "`waitFor` is used to wait for asynchronous actions, such as state updates that might be triggered by promises or network requests, before making assertions."
    },
    {
      id: 8,
      question: "What is the best approach for testing a component that conditionally renders based on state?",
      options: [
        "Simulate a state change by dispatching an action and check if the correct content is rendered.",
        "Test each condition of the state separately.",
        "Check for state changes using `console.log` and verify if the content changes accordingly.",
        "Directly change the component's props and check for the rendering."
      ],
      correctAnswer: "Simulate a state change by dispatching an action and check if the correct content is rendered.",
      answerDescription: "The best way to test conditional rendering is by simulating a state change (e.g., with `fireEvent` or `userEvent`) and then checking whether the UI reflects the correct state."
    },
    {
      id: 9,
      question: "What is the difference between `act()` and `waitFor()` in React Testing Library when dealing with state changes?",
      options: [
        "`act()` is used for synchronously processing state updates, while `waitFor()` handles asynchronous updates.",
        "`act()` waits for async state changes, while `waitFor()` synchronously processes them.",
        "`act()` triggers the state changes manually, while `waitFor()` checks for side effects.",
        "`waitFor()` is deprecated in React Testing Library, and `act()` should be used exclusively."
      ],
      correctAnswer: "`act()` is used for synchronously processing state updates, while `waitFor()` handles asynchronous updates.",
      answerDescription: "`act()` is typically used to ensure that all React updates (like state changes) are flushed before assertions, while `waitFor()` is useful for waiting on asynchronous state changes."
    },
    {
      id: 10,
      question: "How do you test a component that has both synchronous and asynchronous state updates?",
      options: [
        "Use `act()` for synchronous updates and `waitFor()` for asynchronous updates.",
        "Use only `act()` for both synchronous and asynchronous updates.",
        "Use `waitFor()` exclusively for all state changes.",
        "Use `setState()` to directly change the component state."
      ],
      correctAnswer: "Use `act()` for synchronous updates and `waitFor()` for asynchronous updates.",
      answerDescription: "For synchronous updates, `act()` is used to ensure React processes them before assertions. For asynchronous state updates, `waitFor()` ensures the DOM reflects the new state."
    },
    {
      id: 11,
      question: "How can you test that a component is correctly rendering data after state updates?",
      options: [
        "By simulating the state change and using `getByText` to check for the updated data.",
        "By checking the component's internal state using `screen`.",
        "By using `setState()` and asserting the result.",
        "By mocking the data and verifying the render."
      ],
      correctAnswer: "By simulating the state change and using `getByText` to check for the updated data.",
      answerDescription: "By simulating a state change (via user events or functions) and asserting that the component reflects the updated state in the UI (e.g., using `getByText`)."
    },
    {
      id: 12,
      question: "How can you test the state of a component after a user input?",
      options: [
        "By simulating the input event and then checking the component’s output in the DOM.",
        "By directly accessing the component's state using `console.log`.",
        "By mocking the input and testing the changes in localStorage.",
        "By checking the return value of the input function."
      ],
      correctAnswer: "By simulating the input event and then checking the component’s output in the DOM.",
      answerDescription: "The best way to test state changes from user input is by simulating the input event (e.g., with `fireEvent.change` or `userEvent.type`) and asserting that the UI updates accordingly."
    },
    {
      id: 13,
      question: "What is the purpose of the `useState` hook in React, and how do you test it?",
      options: [
        "The `useState` hook manages local state. You can test it by simulating user interactions and checking if the component reflects the updated state.",
        "The `useState` hook is used to manage global state, and you can test it by dispatching actions.",
        "The `useState` hook should never be tested in unit tests.",
        "The `useState` hook is used for component props management, not internal state."
      ],
      correctAnswer: "The `useState` hook manages local state. You can test it by simulating user interactions and checking if the component reflects the updated state.",
      answerDescription: "`useState` is used for managing local component state. Testing it involves simulating user actions and verifying that the component re-renders with the new state."
    },
    {
      id: 14,
      question: "How do you test a component's state update that triggers a side effect, like an API call?",
      options: [
        "Mock the API call and assert that the state update correctly triggers the API request.",
        "Test the API call directly in the component and check if it updates the state.",
        "Check the network tab in the browser during tests.",
        "Check the console output for the API request."
      ],
      correctAnswer: "Mock the API call and assert that the state update correctly triggers the API request.",
      answerDescription: "In React Testing Library, you should mock the API call and assert that the state update triggers the side effect (e.g., network request) as expected."
    },
    {
      id: 15,
      question: "What is the correct way to test a component that updates the state in a useEffect hook?",
      options: [
        "By testing the state updates via `waitFor` or `findBy` queries after simulating an action that triggers `useEffect`.",
        "By directly manipulating the state inside the component.",
        "By checking for console logs from `useEffect`.",
        "By simulating the component’s lifecycle methods."
      ],
      correctAnswer: "By testing the state updates via `waitFor` or `findBy` queries after simulating an action that triggers `useEffect`.",
      answerDescription: "To test `useEffect`, simulate the actions that trigger it (like prop changes or events) and then use `waitFor` or `findBy` to assert the UI updates correctly after the state change."
    },
    {
      id: 16,
      question: "What is the best strategy for testing a React component that has many state dependencies?",
      options: [
        "Test each state dependency separately and check the output for each scenario.",
        "Directly mock all state variables and check the UI.",
        "Test only the final state after all updates have completed.",
        "Test the component with real props and simulate state updates."
      ],
      correctAnswer: "Test each state dependency separately and check the output for each scenario.",
      answerDescription: "It’s important to test components with multiple state dependencies by checking each one individually to ensure the component behaves correctly with different state combinations."
    },
    {
      id: 17,
      question: "How would you simulate a state update after a component mounts and test it?",
      options: [
        "Use `useEffect` and `waitFor` to check if the state is updated after the component mounts.",
        "Directly call `setState()` and assert the result.",
        "Simulate a user interaction to trigger the state update after mounting.",
        "Test the component’s lifecycle methods directly."
      ],
      correctAnswer: "Use `useEffect` and `waitFor` to check if the state is updated after the component mounts.",
      answerDescription: "`useEffect` triggers after mounting, and `waitFor` can help you wait for state updates asynchronously, allowing you to test the effect on the UI."
    },
    {
      id: 18,
      question: "How do you test a component with `useState` and `useEffect` where the state is updated from an external API?",
      options: [
        "Mock the API call and simulate the state update, then assert the UI changes accordingly.",
        "Directly update the state with mock data and check the UI.",
        "Test the API call directly and check for successful completion.",
        "Test the lifecycle methods and simulate API calls manually."
      ],
      correctAnswer: "Mock the API call and simulate the state update, then assert the UI changes accordingly.",
      answerDescription: "In testing, mock the API calls, simulate the state update, and verify that the component re-renders correctly with the updated state."  
    },
    {
      id: 19,
      question: "How do you handle async state updates when testing a form submission?",
      options: [
        "Use `waitFor` or `findBy` to wait for the state to update after submitting the form.",
        "Check the form’s submission status directly in the UI.",
        "Test the form using synchronous methods.",
        "Use `fireEvent.submit` and assert that the API request completes."
      ],
      correctAnswer: "Use `waitFor` or `findBy` to wait for the state to update after submitting the form.",
      answerDescription: "When testing asynchronous form submissions, you can use `waitFor` or `findBy` to wait for state changes or effects triggered by the submission before making assertions."
    },
    {
      id: 20,
      question: "What is the purpose of `screen.debug()` in React Testing Library?",
      options: [
        "It logs the current state of the rendered component in the DOM.",
        "It asserts if the component's state is updated.",
        "It simulates a state change in the component.",
        "It mocks the component’s external functions."
      ],
      correctAnswer: "It logs the current state of the rendered component in the DOM.",
      answerDescription: "`screen.debug()` logs the DOM of the rendered component, helping you to debug and inspect the component’s current state during testing."
    }
  ];

  export const componentAndIntegrationTesting = [
    {
      id: 1,
      question: "What is the primary purpose of component testing in React Testing Library?",
      options: [
        "To test individual React components in isolation, ensuring they render and behave correctly.",
        "To test the entire application end-to-end.",
        "To ensure that all components are connected to Redux store.",
        "To test the API calls made by the components."
      ],
      correctAnswer: "To test individual React components in isolation, ensuring they render and behave correctly.",
      answerDescription: "Component testing focuses on testing individual components in isolation to verify their rendering, behavior, and interactions."
    },
    {
      id: 2,
      question: "What is the difference between unit testing and integration testing in React?",
      options: [
        "Unit testing tests individual components in isolation, while integration testing checks how multiple components work together.",
        "Unit testing tests components with Redux, while integration testing tests components without Redux.",
        "Unit testing focuses on testing APIs, while integration testing focuses on testing UI.",
        "Unit testing focuses on rendering, while integration testing focuses on state management."
      ],
      correctAnswer: "Unit testing tests individual components in isolation, while integration testing checks how multiple components work together.",
      answerDescription: "Unit testing focuses on individual units, such as components or functions, while integration testing ensures different parts of the app work together as expected."
    },
    {
      id: 3,
      question: "How do you test the interaction between two components in integration testing?",
      options: [
        "By simulating user events in one component and checking if the second component responds accordingly.",
        "By testing each component separately in isolation and comparing results.",
        "By checking if the components are rendered without errors.",
        "By ensuring that the components have identical props."
      ],
      correctAnswer: "By simulating user events in one component and checking if the second component responds accordingly.",
      answerDescription: "In integration testing, we simulate user interactions (such as clicks or inputs) in one component and assert that the second component reacts correctly."
    },
    {
      id: 4,
      question: "How do you test a button click that triggers state updates in React Testing Library?",
      options: [
        "By using `fireEvent.click()` to simulate a click and asserting the state change through the UI.",
        "By checking the state directly with `useState`.",
        "By using `screen.getByText()` to check for the button label change.",
        "By testing the button component separately in isolation."
      ],
      correctAnswer: "By using `fireEvent.click()` to simulate a click and asserting the state change through the UI.",
      answerDescription: "To test button clicks that trigger state updates, you simulate the click event with `fireEvent.click()` and then check if the UI reflects the expected state change."
    },
    {
      id: 5,
      question: "What is the role of `waitFor` in integration tests for components that depend on asynchronous operations?",
      options: [
        "It allows you to wait for asynchronous operations (e.g., network requests) to complete before asserting the DOM.",
        "It forces the components to update immediately.",
        "It checks if components have been rendered without errors.",
        "It waits for component props to change."
      ],
      correctAnswer: "It allows you to wait for asynchronous operations (e.g., network requests) to complete before asserting the DOM.",
      answerDescription: "`waitFor` is used to handle asynchronous operations in integration tests, ensuring that the DOM reflects the expected state after an asynchronous event like a network request."
    },
    {
      id: 6,
      question: "How do you test if a component correctly renders a list of items?",
      options: [
        "By simulating user actions and verifying if each item appears in the DOM.",
        "By checking the list's length using `screen.getAllByRole()` or `screen.getAllByText()`.",
        "By testing each item individually using `getByText()`.",
        "By checking the list's data in local storage."
      ],
      correctAnswer: "By checking the list's length using `screen.getAllByRole()` or `screen.getAllByText()`.",
      answerDescription: "You can check if a component correctly renders a list by verifying the number of items rendered using `screen.getAllByRole()` or `screen.getAllByText()`."
    },
    {
      id: 7,
      question: "How can you test a component that fetches data from an API in React Testing Library?",
      options: [
        "By mocking the API call and asserting that the data is displayed once the state is updated.",
        "By calling the API directly inside the test and checking the response.",
        "By testing the API independently using Jest.",
        "By checking the network tab in the browser developer tools."
      ],
      correctAnswer: "By mocking the API call and asserting that the data is displayed once the state is updated.",
      answerDescription: "In RTL, you can mock API calls and assert that the component updates its state correctly, reflecting the fetched data in the UI."
    },
    {
      id: 8,
      question: "What would you use `getByText` for in a component test?",
      options: [
        "To find elements in the DOM by their visible text content.",
        "To find components based on their state.",
        "To mock data used in the component.",
        "To check if the component's props are being passed correctly."
      ],
      correctAnswer: "To find elements in the DOM by their visible text content.",
      answerDescription: "`getByText` is used to find DOM elements based on their visible text content, which is useful for verifying rendered text in component tests."
    },
    {
      id: 9,
      question: "How do you test that a component makes an API call when a button is clicked?",
      options: [
        "By simulating a button click with `fireEvent.click()` and asserting the API call is made using a mock.",
        "By checking the console output for the API request.",
        "By inspecting the network tab of the browser.",
        "By ensuring that the button renders without errors."
      ],
      correctAnswer: "By simulating a button click with `fireEvent.click()` and asserting the API call is made using a mock.",
      answerDescription: "You can simulate a button click with `fireEvent.click()` and use mocks to assert that the API call is made during the event handling."
    },
    {
      id: 10,
      question: "When would you use `findBy` queries in React Testing Library?",
      options: [
        "When you need to find elements asynchronously, such as after an API call or a delayed state update.",
        "To find elements that are initially rendered in the DOM.",
        "To query for elements that don't have unique identifiers.",
        "To check if props are being passed correctly."
      ],
      correctAnswer: "When you need to find elements asynchronously, such as after an API call or a delayed state update.",
      answerDescription: "`findBy` queries are designed to find elements asynchronously, making them useful for scenarios where elements appear after async operations like data fetching."
    },
    {
      id: 11,
      question: "What is the `screen` object in React Testing Library?",
      options: [
        "It is an object that provides queries to find DOM elements in the rendered component.",
        "It is an object that stores the state of the component.",
        "It is an object that manages the component’s lifecycle events.",
        "It is used to handle errors during rendering."
      ],
      correctAnswer: "It is an object that provides queries to find DOM elements in the rendered component.",
      answerDescription: "`screen` provides queries to find elements in the rendered DOM and is commonly used in React Testing Library for interacting with the component during tests."
    },
    {
      id: 12,
      question: "How do you handle testing components that depend on context or global state?",
      options: [
        "By wrapping the component in a provider and passing necessary values to the context.",
        "By mocking the context values.",
        "By directly modifying the context in the test.",
        "By checking if the component makes calls to the context API."
      ],
      correctAnswer: "By wrapping the component in a provider and passing necessary values to the context.",
      answerDescription: "When testing components that use context, you wrap the component in the appropriate provider with the necessary context values for testing."
    },
    {
      id: 13,
      question: "How do you test that a component renders correctly with props passed from a parent component?",
      options: [
        "By simulating the component's render method and checking if the props are rendered.",
        "By passing different sets of props and checking if the component behaves as expected.",
        "By mocking the props and verifying the output.",
        "By checking the console logs for prop values."
      ],
      correctAnswer: "By passing different sets of props and checking if the component behaves as expected.",
      answerDescription: "You test prop-based behavior by passing different prop values to the component and verifying that it renders or behaves correctly."
    },
    {
      id: 14,
      question: "What is the benefit of testing components in isolation with React Testing Library?",
      options: [
        "It helps ensure that components behave correctly independently of the full app.",
        "It reduces the need for integration testing.",
        "It simulates real user interactions and prevents UI bugs.",
        "It allows you to test only the rendered HTML structure."
      ],
      correctAnswer: "It helps ensure that components behave correctly independently of the full app.",
      answerDescription: "Testing components in isolation ensures they behave correctly and reduces errors when the components are integrated into the larger application."
    },
    {
      id: 15,
      question: "What is the purpose of `act()` in React Testing Library?",
      options: [
        "It helps ensure that all updates related to a change (like state or props) are applied before making assertions.",
        "It simulates user actions in the component.",
        "It allows the component to be mounted asynchronously.",
        "It checks the component's behavior after a button click."
      ],
      correctAnswer: "It helps ensure that all updates related to a change (like state or props) are applied before making assertions.",
      answerDescription: "`act()` is used to wrap code that triggers state updates, ensuring that all updates are applied and the component is re-rendered before making assertions."
    },
    {
      id: 16,
      question: "How do you simulate a form submission in React Testing Library?",
      options: [
        "By using `fireEvent.submit()` and checking if the form's submit handler is triggered.",
        "By checking the form’s `onSubmit` prop directly.",
        "By using `screen.getByRole('form')` to check if the form renders.",
        "By testing the form's DOM directly."
      ],
      correctAnswer: "By using `fireEvent.submit()` and checking if the form's submit handler is triggered.",
      answerDescription: "To simulate a form submission, you use `fireEvent.submit()` and verify that the handler is called and the component responds correctly."
    },
    {
      id: 17,
      question: "What is the advantage of using `screen` over `render` when querying DOM elements?",
      options: [
        "`screen` is used to query the DOM after the component is rendered, making it more consistent for querying elements in tests.",
        "`render` provides the query methods, while `screen` does not.",
        "`render` is used for querying, and `screen` is used for assertions.",
        "`screen` is used only for rendering the component."
      ],
      correctAnswer: "`screen` is used to query the DOM after the component is rendered, making it more consistent for querying elements in tests.",
      answerDescription: "`screen` provides a more consistent approach to querying the DOM and is recommended for querying elements after the component has been rendered."
    },
    {
      id: 18,
      question: "What would you use `fireEvent.change()` for in React Testing Library?",
      options: [
        "To simulate changes in form elements like inputs or textareas.",
        "To simulate mouse click events on buttons.",
        "To simulate navigation events.",
        "To test if components update state."
      ],
      correctAnswer: "To simulate changes in form elements like inputs or textareas.",
      answerDescription: "`fireEvent.change()` simulates a change event on form elements, such as inputs and textareas, which is useful for testing user input handling."
    },
    {
      id: 19,
      question: "How would you test an error boundary in React Testing Library?",
      options: [
        "By rendering a component that throws an error and checking if the fallback UI is displayed.",
        "By testing the error handler function directly.",
        "By ensuring that the component’s lifecycle methods are called.",
        "By checking the network response for errors."
      ],
      correctAnswer: "By rendering a component that throws an error and checking if the fallback UI is displayed.",
      answerDescription: "To test an error boundary, you simulate an error in a child component and verify that the fallback UI is rendered."
    },
    {
      id: 20,
      question: "What is the correct way to handle cleanup after testing in React Testing Library?",
      options: [
        "By using the `cleanup()` method or relying on the automatic cleanup after each test.",
        "By manually resetting the component's state.",
        "By removing elements from the DOM manually.",
        "By unmounting the component inside each test."
      ],
      correctAnswer: "By using the `cleanup()` method or relying on the automatic cleanup after each test.",
      answerDescription: "React Testing Library automatically cleans up after each test, but you can also call `cleanup()` manually if needed to ensure no leftover side effects."
    }
  ];
  
  export const mockingAndSpying = [
    {
      id: 1,
      question: "What is the purpose of mocking functions in React Testing Library?",
      options: [
        "To replace real functions with simulated ones that can track their behavior during testing.",
        "To simulate user events in the component.",
        "To ensure that all components are rendered correctly.",
        "To check if the component’s props are passed correctly."
      ],
      correctAnswer: "To replace real functions with simulated ones that can track their behavior during testing.",
      answerDescription: "Mocking functions helps isolate the component's behavior by replacing real implementations with simulated ones, allowing for precise control over the test environment."
    },
    {
      id: 2,
      question: "Which method would you use to mock an API call in React Testing Library?",
      options: [
        "Using `jest.fn()` to mock the function and return a resolved or rejected promise.",
        "By manually invoking the API in the test.",
        "By using `fireEvent.click()` on the API button.",
        "By directly modifying the network tab in the developer tools."
      ],
      correctAnswer: "Using `jest.fn()` to mock the function and return a resolved or rejected promise.",
      answerDescription: "You can use `jest.fn()` to mock API calls and control the response for testing purposes, returning a promise to simulate async behavior."
    },
    {
      id: 3,
      question: "How can you spy on a method inside a React component during a test?",
      options: [
        "By using `jest.spyOn()` to track calls to the method.",
        "By checking the method’s return value directly.",
        "By manually calling the method during the test.",
        "By inspecting the component's state."
      ],
      correctAnswer: "By using `jest.spyOn()` to track calls to the method.",
      answerDescription: "Jest provides `jest.spyOn()` to spy on function calls and observe how the function is used, without modifying its implementation."
    },
    {
      id: 4,
      question: "What does `jest.fn()` do in React Testing Library?",
      options: [
        "It creates a mock function that can track how it was called, how many times, and with what arguments.",
        "It simulates a user event on a component.",
        "It cleans up the DOM after each test.",
        "It makes a mock API request."
      ],
      correctAnswer: "It creates a mock function that can track how it was called, how many times, and with what arguments.",
      answerDescription: "`jest.fn()` creates a mock function, allowing you to track its calls, arguments, return values, and behavior in tests."
    },
    {
      id: 5,
      question: "How do you ensure a mock function is called during a test?",
      options: [
        "By using assertions like `expect(mockFunction).toHaveBeenCalled()`.",
        "By checking if the function has been rendered in the DOM.",
        "By inspecting the method’s return value directly.",
        "By checking the component’s lifecycle methods."
      ],
      correctAnswer: "By using assertions like `expect(mockFunction).toHaveBeenCalled()`.",
      answerDescription: "You can use Jest’s assertions, such as `toHaveBeenCalled()`, to verify that the mock function was called during the test."
    },
    {
      id: 6,
      question: "What is the purpose of `jest.mock()` in React Testing Library?",
      options: [
        "It allows you to replace a module or function with a mock implementation for the test.",
        "It creates a mock function to track the number of times it was called.",
        "It simulates a button click event on the component.",
        "It ensures that state updates are triggered in the component."
      ],
      correctAnswer: "It allows you to replace a module or function with a mock implementation for the test.",
      answerDescription: "`jest.mock()` is used to replace a module or function with a mock implementation, which is useful when testing components that depend on external services."
    },
    {
      id: 7,
      question: "How do you mock an imported function in a React component?",
      options: [
        "By using `jest.mock()` to replace the imported function with a mock implementation.",
        "By directly modifying the function in the test.",
        "By calling the function directly within the component.",
        "By using `fireEvent.click()` to simulate user actions."
      ],
      correctAnswer: "By using `jest.mock()` to replace the imported function with a mock implementation.",
      answerDescription: "You can mock an imported function by using `jest.mock()` to replace it with a mock function that simulates its behavior."
    },
    {
      id: 8,
      question: "How do you verify that a mocked function is called with specific arguments?",
      options: [
        "By using `expect(mockFunction).toHaveBeenCalledWith()`.",
        "By checking the console output for the arguments.",
        "By directly inspecting the function’s parameters.",
        "By checking the function’s return value."
      ],
      correctAnswer: "By using `expect(mockFunction).toHaveBeenCalledWith()`.",
      answerDescription: "Jest’s `toHaveBeenCalledWith()` assertion allows you to check that a mocked function was called with specific arguments."
    },
    {
      id: 9,
      question: "What is the difference between `jest.fn()` and `jest.spyOn()`?",
      options: [
        "`jest.fn()` creates a new mock function, while `jest.spyOn()` spies on an existing function.",
        "`jest.fn()` mocks API calls, while `jest.spyOn()` only tracks function calls.",
        "`jest.fn()` is used for testing component rendering, while `jest.spyOn()` is for tracking state updates.",
        "`jest.fn()` simulates user input, while `jest.spyOn()` is used for spying on network requests."
      ],
      correctAnswer: "`jest.fn()` creates a new mock function, while `jest.spyOn()` spies on an existing function.",
      answerDescription: "`jest.fn()` creates a mock function, while `jest.spyOn()` allows you to track calls to an existing function, such as a method on an object."
    },
    {
      id: 10,
      question: "How can you reset all mocks before each test?",
      options: [
        "By using `beforeEach(() => { jest.clearAllMocks(); })`.",
        "By manually clearing the mocks in each test.",
        "By calling `jest.resetMocks()` in the component.",
        "By using `afterEach()` to reset the mocks."
      ],
      correctAnswer: "By using `beforeEach(() => { jest.clearAllMocks(); })`.",
      answerDescription: "You can use `jest.clearAllMocks()` in `beforeEach` to reset all mocks before each test to ensure a clean test environment."
    },
    {
      id: 11,
      question: "How do you mock an asynchronous function that returns a promise in React Testing Library?",
      options: [
        "By using `jest.fn()` to mock the function and returning a resolved or rejected promise.",
        "By directly mocking the promise with `Promise.resolve()`.",
        "By calling `mockImplementationOnce()` on the async function.",
        "By waiting for the promise to resolve inside the test before making assertions."
      ],
      correctAnswer: "By using `jest.fn()` to mock the function and returning a resolved or rejected promise.",
      answerDescription: "You can mock an async function with `jest.fn()` and return a resolved or rejected promise to simulate async behavior in tests."
    },
    {
      id: 12,
      question: "What would you use `mockImplementationOnce()` for?",
      options: [
        "To mock the implementation of a function for a single call in a test.",
        "To spy on a function’s return value across multiple tests.",
        "To mock the behavior of an entire module.",
        "To mock user inputs during component rendering."
      ],
      correctAnswer: "To mock the implementation of a function for a single call in a test.",
      answerDescription: "`mockImplementationOnce()` allows you to define custom behavior for a single call of the mock function, while `mockImplementation()` applies globally."
    },
    {
      id: 13,
      question: "How would you mock a React component method?",
      options: [
        "By using `jest.spyOn(Component.prototype, 'method')` to spy on the method.",
        "By directly calling the method inside the test.",
        "By using `jest.fn()` to create a mock method.",
        "By modifying the component’s state in the test."
      ],
      correctAnswer: "By using `jest.spyOn(Component.prototype, 'method')` to spy on the method.",
      answerDescription: "You can spy on a React component’s method using `jest.spyOn()` to track its calls during the test."
    },
    {
      id: 14,
      question: "What does `mockReturnValueOnce()` do in Jest?",
      options: [
        "It sets a custom return value for a mock function for a single call.",
        "It sets the return value for all calls of the mock function.",
        "It makes the mock function return undefined.",
        "It ensures that the mock function is not called more than once."
      ],
      correctAnswer: "It sets a custom return value for a mock function for a single call.",
      answerDescription: "`mockReturnValueOnce()` sets a custom return value for a mock function for one call, useful when testing different scenarios."
    },
    {
      id: 15,
      question: "How would you assert that a function was called with a specific context?",
      options: [
        "By using `expect(spy).toHaveBeenCalledWith(expect.objectContaining(context))`.",
        "By checking the component’s `this` value directly.",
        "By ensuring the function’s return value matches the context.",
        "By manually binding the context to the function."
      ],
      correctAnswer: "By using `expect(spy).toHaveBeenCalledWith(expect.objectContaining(context))`.",
      answerDescription: "You can assert that a function was called with a specific context by using `expect.objectContaining()` to match the context in the arguments."
    },
    {
      id: 16,
      question: "How can you mock a `console.log` statement during a test?",
      options: [
        "By using `jest.spyOn(console, 'log').mockImplementation(() => {})`.",
        "By using `console.log.mockReturnValue()`.",
        "By mocking the console globally in the test setup.",
        "By replacing `console.log` with a custom function."
      ],
      correctAnswer: "By using `jest.spyOn(console, 'log').mockImplementation(() => {})`.",
      answerDescription: "`jest.spyOn()` can be used to mock `console.log` and prevent it from logging to the console, allowing for more controlled testing."
    },
    {
      id: 17,
      question: "How would you mock an imported module that uses default exports?",
      options: [
        "By using `jest.mock('module', () => ({ default: jest.fn() }))`.",
        "By using `jest.mock('module')`.",
        "By using `jest.fn()` directly in the test.",
        "By mocking each method inside the imported module."
      ],
      correctAnswer: "By using `jest.mock('module', () => ({ default: jest.fn() }))`.",
      answerDescription: "When mocking default exports, you can use `jest.mock()` and manually specify the mock implementation for the default export."
    },
    {
      id: 18,
      question: "What does `jest.clearAllMocks()` do?",
      options: [
        "It clears all mock function calls, reset their state, and removes their return values.",
        "It clears the entire DOM between tests.",
        "It resets all component state.",
        "It removes mock implementations from the module."
      ],
      correctAnswer: "It clears all mock function calls, reset their state, and removes their return values.",
      answerDescription: "`jest.clearAllMocks()` ensures that all mocks are reset before each test, making sure there are no leftover side effects from previous tests."
    },
    {
      id: 19,
      question: "What is the advantage of using `jest.mock()` with `mockImplementationOnce()`?",
      options: [
        "It allows you to mock different behavior for each call in a sequence.",
        "It ensures that the mock implementation is used globally in the test.",
        "It lets you spy on functions in the imported module.",
        "It automatically sets the return values for the mock function."
      ],
      correctAnswer: "It allows you to mock different behavior for each call in a sequence.",
      answerDescription: "`mockImplementationOnce()` allows you to define custom behavior for successive calls, providing more control in testing complex interactions."
    },
    {
      id: 20,
      question: "How do you ensure that a mocked function does not affect other tests?",
      options: [
        "By resetting mocks using `jest.clearAllMocks()` before each test.",
        "By manually resetting the mock function state after each test.",
        "By using `mockImplementationOnce()` for each call.",
        "By isolating the test cases in different test suites."
      ],
      correctAnswer: "By resetting mocks using `jest.clearAllMocks()` before each test.",
      answerDescription: "Resetting mocks before each test ensures that no leftover mock data affects other tests, maintaining test isolation."
    }
  ];

  export const codeCoverageAndPerformance = [
    {
      id: 1,
      question: "What is code coverage, and why is it important in testing?",
      options: [
        "It measures how much of your code is tested by the tests.",
        "It ensures that all functions are executed at least once.",
        "It tracks how many bugs were found during testing.",
        "It helps identify which parts of the code are slow."
      ],
      correctAnswer: "It measures how much of your code is tested by the tests.",
      answerDescription: "Code coverage is a metric that measures the percentage of your code that is covered by tests, helping to ensure that critical parts of your application are adequately tested."
    },
    {
      id: 2,
      question: "What is the difference between statement coverage and branch coverage?",
      options: [
        "Statement coverage ensures that every line of code is executed, while branch coverage ensures that every possible branch (if/else) is tested.",
        "Statement coverage measures how many tests pass, while branch coverage measures how many functions are executed.",
        "Statement coverage checks how fast the tests run, while branch coverage checks memory usage.",
        "Statement coverage tracks global state, while branch coverage tracks local state."
      ],
      correctAnswer: "Statement coverage ensures that every line of code is executed, while branch coverage ensures that every possible branch (if/else) is tested.",
      answerDescription: "Statement coverage tracks which lines of code are executed, while branch coverage ensures that each logical path (branches like if/else) is also covered."
    },
    {
      id: 3,
      question: "How can you check the code coverage of your tests in React Testing Library?",
      options: [
        "By using a code coverage tool like `jest --coverage`.",
        "By manually writing coverage tests for every component.",
        "By using a browser extension for coverage tracking.",
        "By checking the output of `console.log()` in the tests."
      ],
      correctAnswer: "By using a code coverage tool like `jest --coverage`.",
      answerDescription: "Jest provides a built-in code coverage tool that can be activated by running `jest --coverage`, which will display code coverage metrics for your tests."
    },
    {
      id: 4,
      question: "What is the purpose of using `jest.mock()` in terms of performance testing?",
      options: [
        "To replace complex or expensive function calls with faster mock implementations.",
        "To generate random data for the test.",
        "To track the execution time of each function.",
        "To ensure that your components are rendered correctly."
      ],
      correctAnswer: "To replace complex or expensive function calls with faster mock implementations.",
      answerDescription: "By mocking expensive operations (e.g., API calls), `jest.mock()` can help speed up tests and improve performance when testing components."
    },
    {
      id: 5,
      question: "What does `--coverage` flag do when running Jest?",
      options: [
        "It collects and reports code coverage information during test execution.",
        "It limits the tests to only the files that are covered by tests.",
        "It speeds up the tests by skipping slow tests.",
        "It runs tests on a subset of the codebase based on recent changes."
      ],
      correctAnswer: "It collects and reports code coverage information during test execution.",
      answerDescription: "The `--coverage` flag in Jest generates a code coverage report that helps identify untested areas of the code."
    },
    {
      id: 6,
      question: "What does it mean if a test has 100% code coverage?",
      options: [
        "It means that every line of code in the codebase has been tested by at least one test.",
        "It means that all components have passed the test.",
        "It indicates that no tests failed.",
        "It means the code runs without any errors."
      ],
      correctAnswer: "It means that every line of code in the codebase has been tested by at least one test.",
      answerDescription: "100% code coverage means that all lines of code have been executed during testing, but it does not guarantee that all possible scenarios are covered."
    },
    {
      id: 7,
      question: "What is performance testing in React?",
      options: [
        "It is testing how fast the React app loads and responds to user interactions.",
        "It is testing the code coverage of the application.",
        "It is testing the security of the application.",
        "It is testing the app’s ability to handle network requests."
      ],
      correctAnswer: "It is testing how fast the React app loads and responds to user interactions.",
      answerDescription: "Performance testing evaluates how quickly the app responds to user interactions, ensuring a smooth user experience."
    },
    {
      id: 8,
      question: "How can React component re-renders impact performance?",
      options: [
        "Frequent re-renders can cause performance issues by wasting resources and slowing down the app.",
        "Re-renders always improve performance by ensuring components are up-to-date.",
        "Re-renders have no effect on performance as React optimizes them.",
        "Re-renders can only be caused by props changes."
      ],
      correctAnswer: "Frequent re-renders can cause performance issues by wasting resources and slowing down the app.",
      answerDescription: "Excessive re-renders can lead to performance degradation, especially in large applications, as it consumes unnecessary resources."
    },
    {
      id: 9,
      question: "Which React feature can help optimize performance by preventing unnecessary re-renders?",
      options: [
        "React.memo()",
        "React.createElement()",
        "useRef()",
        "useState()"
      ],
      correctAnswer: "React.memo()",
      answerDescription: "React.memo() is a higher-order component that optimizes performance by memoizing the rendered output and preventing unnecessary re-renders of functional components."
    },
    {
      id: 10,
      question: "How can you improve performance when testing React components with Jest?",
      options: [
        "By using mock functions to replace slow or expensive operations.",
        "By writing additional tests to check the performance of each component.",
        "By using the `async/await` syntax in every test.",
        "By enabling code coverage in every test."
      ],
      correctAnswer: "By using mock functions to replace slow or expensive operations.",
      answerDescription: "Mocking expensive operations in tests helps speed up test execution, improving overall performance."
    },
    {
      id: 11,
      question: "What is a common issue with code coverage tools, such as Jest's coverage reporting?",
      options: [
        "High code coverage doesn’t necessarily mean that the tests are effective or comprehensive.",
        "Code coverage always guarantees that no bugs will be present in the code.",
        "Jest coverage reports can be inaccurate if tests are not written correctly.",
        "Code coverage tools slow down the test suite significantly."
      ],
      correctAnswer: "High code coverage doesn’t necessarily mean that the tests are effective or comprehensive.",
      answerDescription: "While high code coverage suggests that more code is tested, it doesn’t guarantee that all edge cases or the most critical paths have been tested."
    },
    {
      id: 12,
      question: "How can you optimize the performance of a React component?",
      options: [
        "By using `shouldComponentUpdate()` or `React.memo()` to avoid unnecessary re-renders.",
        "By adding more state variables in the component.",
        "By making all components stateless.",
        "By rendering every component inside a separate `useEffect()` hook."
      ],
      correctAnswer: "By using `shouldComponentUpdate()` or `React.memo()` to avoid unnecessary re-renders.",
      answerDescription: "`shouldComponentUpdate()` and `React.memo()` are useful for optimizing re-renders in React components by checking if a component needs to re-render based on prop or state changes."
    },
    {
      id: 13,
      question: "Which of the following can negatively affect performance in React?",
      options: [
        "Unnecessary re-renders caused by improper component structure.",
        "Using functional components instead of class components.",
        "Using hooks like `useState` and `useEffect`.",
        "Passing props directly to child components."
      ],
      correctAnswer: "Unnecessary re-renders caused by improper component structure.",
      answerDescription: "Improper component structure and unnecessary re-renders can degrade performance by consuming resources and slowing down the app."
    },
    {
      id: 14,
      question: "What is the impact of using `useEffect` in React on performance?",
      options: [
        "It can introduce performance issues if used improperly, such as excessive network requests or unnecessary updates.",
        "It always improves performance by ensuring asynchronous operations are handled correctly.",
        "It helps keep the component state synchronized with the DOM.",
        "It is unrelated to performance."
      ],
      correctAnswer: "It can introduce performance issues if used improperly, such as excessive network requests or unnecessary updates.",
      answerDescription: "`useEffect` can cause performance issues if not used carefully, especially when it leads to unnecessary side effects or re-renders."
    },
    {
      id: 15,
      question: "How can you measure the performance of a React component?",
      options: [
        "By using the `React Profiler` API to monitor component render times and behaviors.",
        "By checking the execution time of tests.",
        "By analyzing the server-side logs.",
        "By measuring network requests directly."
      ],
      correctAnswer: "By using the `React Profiler` API to monitor component render times and behaviors.",
      answerDescription: "The React Profiler API provides detailed insights into the render performance of React components, helping identify performance bottlenecks."
    },
    {
      id: 16,
      question: "Which testing tool can be used alongside Jest to monitor performance in React?",
      options: [
        "React Profiler API",
        "Chrome DevTools",
        "Jest Coverage Reporter",
        "Enzyme"
      ],
      correctAnswer: "React Profiler API",
      answerDescription: "The React Profiler API allows you to measure and optimize the performance of React components during tests."
    },
    {
      id: 17,
      question: "Why is it important to optimize code performance during testing?",
      options: [
        "To reduce the test execution time, making the development process faster.",
        "To ensure the app loads faster in the browser.",
        "To improve the quality of the app’s UX/UI.",
        "To avoid network errors in the tests."
      ],
      correctAnswer: "To reduce the test execution time, making the development process faster.",
      answerDescription: "Optimizing performance in tests helps reduce execution time, improving developer productivity and the speed of the testing process."
    },
    {
      id: 18,
      question: "Which of the following tools can be used to check the code coverage of Jest tests?",
      options: [
        "Istanbul or `nyc`",
        "React DevTools",
        "Jest Profiler",
        "Cypress"
      ],
      correctAnswer: "Istanbul or `nyc`",
      answerDescription: "Istanbul, or its command-line version `nyc`, is a popular tool for measuring code coverage and is often used alongside Jest for coverage reporting."
    },
    {
      id: 19,
      question: "How can you improve the performance of a slow React application?",
      options: [
        "By implementing code splitting and lazy loading of components.",
        "By using only class components instead of function components.",
        "By making all components re-render as often as possible.",
        "By disabling React's development mode."
      ],
      correctAnswer: "By implementing code splitting and lazy loading of components.",
      answerDescription: "Code splitting and lazy loading are effective techniques for improving the performance of a React app by loading only the necessary parts of the app."
    },
    {
      id: 20,
      question: "What is the main purpose of performance profiling tools in React?",
      options: [
        "To identify bottlenecks and optimize component rendering.",
        "To ensure that all components are fully tested.",
        "To measure the speed of network requests.",
        "To track state changes in real-time."
      ],
      correctAnswer: "To identify bottlenecks and optimize component rendering.",
      answerDescription: "Performance profiling tools like React Profiler help identify performance bottlenecks, allowing developers to optimize components and reduce rendering times."
    }
  ];
  
  export const errorHandlingAndEdgeCases = [
    {
      id: 1,
      question: "What is the purpose of `Error Boundaries` in React?",
      options: [
        "To catch JavaScript errors anywhere in the component tree and display a fallback UI.",
        "To handle network errors that occur in API requests.",
        "To catch errors during state updates and handle them gracefully.",
        "To log errors to the console for debugging purposes."
      ],
      correctAnswer: "To catch JavaScript errors anywhere in the component tree and display a fallback UI.",
      answerDescription: "Error Boundaries allow React to gracefully handle errors in the component tree, preventing the entire app from crashing."
    },
    {
      id: 2,
      question: "When is `componentDidCatch()` used in React?",
      options: [
        "It is used in class components to catch errors in the component tree and log the error details.",
        "It is used in functional components to handle network errors.",
        "It is used to handle API response errors in the application.",
        "It is used to catch all errors in a React application."
      ],
      correctAnswer: "It is used in class components to catch errors in the component tree and log the error details.",
      answerDescription: "`componentDidCatch()` is a lifecycle method used in class components to catch errors in the component tree and log error details or display fallback UI."
    },
    {
      id: 3,
      question: "How can you handle asynchronous errors in React?",
      options: [
        "By using `try/catch` blocks within `async/await` syntax.",
        "By using `catch` on the promise itself.",
        "By using `Error Boundaries` for catching async errors.",
        "By using `componentDidCatch` in functional components."
      ],
      correctAnswer: "By using `try/catch` blocks within `async/await` syntax.",
      answerDescription: "Asynchronous errors can be handled using `try/catch` blocks inside `async/await` to ensure that errors are caught and handled properly."
    },
    {
      id: 4,
      question: "What is the behavior of React when an error is thrown inside a component?",
      options: [
        "React will unmount the component and show the fallback UI if an Error Boundary is used.",
        "React will log the error to the console but continue rendering the app.",
        "React will automatically reload the page to fix the issue.",
        "React will ignore the error and keep the app running."
      ],
      correctAnswer: "React will unmount the component and show the fallback UI if an Error Boundary is used.",
      answerDescription: "If an error is thrown inside a component, React will attempt to unmount the component and display the fallback UI, if an Error Boundary is used."
    },
    {
      id: 5,
      question: "What should be included in the fallback UI for Error Boundaries?",
      options: [
        "A user-friendly message, such as 'Something went wrong. Please try again later.'",
        "Detailed error stack trace and debug information.",
        "A loading spinner indicating that the app is recovering from the error.",
        "A retry button to reload the entire app."
      ],
      correctAnswer: "A user-friendly message, such as 'Something went wrong. Please try again later.'",
      answerDescription: "The fallback UI should provide a user-friendly message that informs users about the error in a clear and non-technical way."
    },
    {
      id: 6,
      question: "Which of the following is NOT an edge case that should be handled in React?",
      options: [
        "Invalid user input.",
        "Network failures or timeouts.",
        "Correct user input and successful network requests.",
        "Empty or null data being passed as props."
      ],
      correctAnswer: "Correct user input and successful network requests.",
      answerDescription: "Edge cases typically refer to unexpected or exceptional conditions, such as invalid input or network failures, not the normal flow of correct input or success."
    },
    {
      id: 7,
      question: "How can you handle null or undefined props in React?",
      options: [
        "By using PropTypes or TypeScript to enforce correct prop types.",
        "By checking for null or undefined before rendering the component.",
        "By providing default props with fallback values.",
        "All of the above."
      ],
      correctAnswer: "All of the above.",
      answerDescription: "You can handle null or undefined props by validating them with PropTypes or TypeScript, checking for them before rendering, and providing default props as fallbacks."
    },
    {
      id: 8,
      question: "What is the best way to handle large datasets and avoid performance issues in React?",
      options: [
        "Use virtualized lists or pagination to load data in chunks.",
        "Render all data at once to ensure completeness.",
        "Use `setState()` for every item in the dataset.",
        "Load all data into the global state for easy access."
      ],
      correctAnswer: "Use virtualized lists or pagination to load data in chunks.",
      answerDescription: "To handle large datasets efficiently, you should use virtualized lists or pagination to load and render data incrementally, reducing memory consumption and improving performance."
    },
    {
      id: 9,
      question: "How can you handle network request errors in React components?",
      options: [
        "By using `try/catch` around async requests and showing an error message in the UI.",
        "By ignoring network errors and letting them pass through.",
        "By directly calling `window.alert()` to notify the user.",
        "By rerendering the entire component tree."
      ],
      correctAnswer: "By using `try/catch` around async requests and showing an error message in the UI.",
      answerDescription: "You should wrap network requests in `try/catch` blocks to catch and handle errors, and show appropriate messages or fallback UI to the user."
    },
    {
      id: 10,
      question: "What is the proper way to handle a 404 error when fetching data in a React app?",
      options: [
        "Show a custom 'Page Not Found' UI component.",
        "Log the error to the console and continue execution.",
        "Redirect the user to a different page automatically.",
        "Render a fallback UI specific to the 404 error."
      ],
      correctAnswer: "Render a fallback UI specific to the 404 error.",
      answerDescription: "When encountering a 404 error, you should display a meaningful fallback UI that informs users that the requested data was not found."
    },
    {
      id: 11,
      question: "How should you handle errors when making API requests in React?",
      options: [
        "You should catch errors using `.catch()` or `try/catch` and display an error message or fallback UI.",
        "You should ignore all errors and let the app crash.",
        "You should hide the error from the user and display empty content.",
        "You should show a detailed stack trace to the user."
      ],
      correctAnswer: "You should catch errors using `.catch()` or `try/catch` and display an error message or fallback UI.",
      answerDescription: "Catching errors in async operations ensures that the app can handle network failures gracefully and show an appropriate message to the user."
    },
    {
      id: 12,
      question: "What is the behavior of React when you try to render a component with invalid state?",
      options: [
        "React will throw an error and prevent rendering.",
        "React will attempt to render the component with invalid state and display a warning.",
        "React will crash the app.",
        "React will ignore the invalid state and continue rendering other components."
      ],
      correctAnswer: "React will attempt to render the component with invalid state and display a warning.",
      answerDescription: "React will log a warning to the console and continue rendering the component, but it's important to handle invalid state properly to prevent unexpected behavior."
    },
    {
      id: 13,
      question: "What is the best way to handle edge cases where props might be missing or incorrect in React?",
      options: [
        "Use default props or conditional rendering to handle missing or incorrect props.",
        "Let the component crash so you can catch the error.",
        "Use `componentDidCatch()` to handle all errors, even missing props.",
        "Throw an error in the render method if props are incorrect."
      ],
      correctAnswer: "Use default props or conditional rendering to handle missing or incorrect props.",
      answerDescription: "Using default props or conditional rendering helps ensure that your components handle missing or incorrect props gracefully without crashing."
    },
    {
      id: 14,
      question: "How can you prevent infinite loops in React components?",
      options: [
        "By checking if the state or props have changed before performing updates in `useEffect` or `componentDidUpdate`.",
        "By using `setTimeout` to delay state updates.",
        "By calling `forceUpdate()` to trigger re-renders manually.",
        "By always using functional components instead of class components."
      ],
      correctAnswer: "By checking if the state or props have changed before performing updates in `useEffect` or `componentDidUpdate`.",
      answerDescription: "You can prevent infinite loops by ensuring that state updates are conditional and only happen when necessary, preventing redundant re-renders."
    },
    {
      id: 15,
      question: "What should you do if you encounter a race condition while fetching data in a React component?",
      options: [
        "You should use `async/await` with proper error handling and manage state updates based on the response order.",
        "You should ignore the issue and let the component render based on whichever response arrives first.",
        "You should manually delay one request until the other completes.",
        "You should block the UI thread until the requests are completed."
      ],
      correctAnswer: "You should use `async/await` with proper error handling and manage state updates based on the response order.",
      answerDescription: "Proper handling of asynchronous requests using `async/await` and managing the response order ensures that race conditions are avoided in React."
    },
    {
      id: 16,
      question: "How do you handle form validation errors in React?",
      options: [
        "By checking the form input values before submitting and showing appropriate error messages.",
        "By submitting the form regardless of errors.",
        "By ignoring form validation altogether.",
        "By showing the validation errors as part of the component's UI without any handling."
      ],
      correctAnswer: "By checking the form input values before submitting and showing appropriate error messages.",
      answerDescription: "Form validation should be done before submitting the form, and validation errors should be displayed clearly to the user."
    },
    {
      id: 17,
      question: "What should you do when an error occurs during a state update in React?",
      options: [
        "Catch the error and display a user-friendly error message.",
        "Let the app crash so the error is easier to debug.",
        "Ignore the error and continue execution.",
        "Manually update the component state using `forceUpdate()`."
      ],
      correctAnswer: "Catch the error and display a user-friendly error message.",
      answerDescription: "Catching errors during state updates ensures that the app doesn't crash and can display meaningful error messages to the user."
    },
    {
      id: 18,
      question: "How should you handle unexpected or undefined API responses in React?",
      options: [
        "By validating the response before rendering components that depend on it.",
        "By directly rendering the data without checking.",
        "By showing a default value or empty state without validation.",
        "By throwing an error if the response is unexpected."
      ],
      correctAnswer: "By validating the response before rendering components that depend on it.",
      answerDescription: "It's important to validate API responses before rendering to prevent rendering invalid or unexpected data."
    },
    {
      id: 19,
      question: "What is the proper way to handle missing or undefined values in the state in React?",
      options: [
        "Set a default state value to ensure no undefined state values exist.",
        "Let React handle the state automatically.",
        "Throw an error to alert the developer.",
        "Ignore the issue and continue with rendering."
      ],
      correctAnswer: "Set a default state value to ensure no undefined state values exist.",
      answerDescription: "Default state values should be set to avoid missing or undefined values and ensure consistent rendering."
    },
    {
      id: 20,
      question: "What should be your approach when dealing with user errors in forms?",
      options: [
        "You should show helpful error messages and allow the user to correct their input.",
        "You should ignore user errors and continue with the form submission.",
        "You should log errors to the console for the developer's reference.",
        "You should block the user from submitting the form until all fields are filled."
      ],
      correctAnswer: "You should show helpful error messages and allow the user to correct their input.",
      answerDescription: "When handling user errors, clear and helpful error messages should be provided to guide the user to correct their input."
    }
  ];

  export const coreJavaScriptConcepts = [
    {
      id: 1,
      question: "What’s the difference between `var`, `let`, and `const` in JavaScript?",
      options: [
        "`var` is function-scoped, `let` and `const` are block-scoped.",
        "`let` and `const` are only used in functions, `var` is used in global scope.",
        "`var` can be redeclared, but `let` and `const` cannot.",
        "`const` allows re-assignment, `let` and `var` do not."
      ],
      correctAnswer: "`var` is function-scoped, `let` and `const` are block-scoped.",
      answerDescription: "`var` is function-scoped, meaning it is available within the function it's declared in, while `let` and `const` are block-scoped, meaning they are only available within the block they are defined in."
    },
    {
      id: 2,
      question: "What are the differences between primitive and reference data types in JavaScript?",
      options: [
        "Primitive types are immutable, reference types are mutable.",
        "Primitive types are always stored by reference, while reference types are stored by value.",
        "Primitive types are stored in memory as a reference, while reference types are stored by value.",
        "There is no difference; both are used to store values in JavaScript."
      ],
      correctAnswer: "Primitive types are immutable, reference types are mutable.",
      answerDescription: "Primitive data types (like `string`, `number`, `boolean`, etc.) are immutable, whereas reference data types (like `objects` and `arrays`) are mutable and can be modified."
    },
    {
      id: 3,
      question: "What are the different data types in JavaScript?",
      options: [
        "string, number, boolean, object, array, function, null, undefined, symbol",
        "string, number, boolean, object, array, function, null, void, symbol",
        "number, boolean, object, array, function, null, undefined, symbol",
        "string, boolean, object, null, undefined, array, symbol"
      ],
      correctAnswer: "string, number, boolean, object, array, function, null, undefined, symbol",
      answerDescription: "JavaScript has 7 primitive data types: `string`, `number`, `boolean`, `null`, `undefined`, and `symbol`. It also has `object`, which is used for more complex structures like arrays and functions."
    },
    {
      id: 4,
      question: "How do you check the data type of a variable in JavaScript?",
      options: [
        "Using `typeof` operator.",
        "Using `instanceof` operator.",
        "Using `isNaN()` function.",
        "Using `checkType()` method."
      ],
      correctAnswer: "Using `typeof` operator.",
      answerDescription: "`typeof` is the standard way to check the data type of a variable in JavaScript. For example, `typeof 'string'` will return `string`."
    },
    {
      id: 5,
      question: "What is type coercion in JavaScript? Can you give an example?",
      options: [
        "Automatic or implicit conversion of values from one type to another.",
        "Explicit conversion of values to different types.",
        "An error that occurs when types are mismatched.",
        "A process where JavaScript forces values to be of the same type."
      ],
      correctAnswer: "Automatic or implicit conversion of values from one type to another.",
      answerDescription: "Type coercion in JavaScript is the automatic conversion of values from one type to another. For example, `5 + '5'` results in `'55'`, where the number `5` is coerced into a string."
    },
    {
      id: 6,
      question: "What will the following code return: `typeof NaN`?",
      options: [
        "number",
        "undefined",
        "NaN",
        "object"
      ],
      correctAnswer: "number",
      answerDescription: "Although `NaN` represents 'Not-a-Number', its type is actually `number` in JavaScript."
    },
    {
      id: 7,
      question: "What is the difference between `null` and `undefined` in JavaScript?",
      options: [
        "`null` is a value that represents nothing, while `undefined` is a variable that has been declared but not assigned a value.",
        "`null` is a special object type, while `undefined` is a primitive type.",
        "`null` is used to indicate that a variable is undefined, while `undefined` is used to represent a missing value.",
        "`null` and `undefined` are equivalent and can be used interchangeably."
      ],
      correctAnswer: "`null` is a value that represents nothing, while `undefined` is a variable that has been declared but not assigned a value.",
      answerDescription: "`null` is an assigned value that represents the intentional absence of any object value, while `undefined` is the default value assigned to variables that are declared but not initialized."
    },
    {
      id: 8,
      question: "What does the `==` operator do in JavaScript?",
      options: [
        "Compares two values for equality, performing type coercion if necessary.",
        "Compares two values for strict equality, no type coercion.",
        "Checks if two variables are of the same type and value.",
        "Assigns the value on the right side to the variable on the left."
      ],
      correctAnswer: "Compares two values for equality, performing type coercion if necessary.",
      answerDescription: "`==` compares two values for equality but allows type coercion, meaning it will convert values to the same type before comparing them (e.g., `'5' == 5` is `true`)."
    },
    {
      id: 9,
      question: "What does the `===` operator do in JavaScript?",
      options: [
        "Compares two values for strict equality, no type coercion.",
        "Compares two values for equality, performing type coercion if necessary.",
        "Checks if two variables are of the same type and value.",
        "Checks if two variables point to the same memory location."
      ],
      correctAnswer: "Compares two values for strict equality, no type coercion.",
      answerDescription: "`===` checks for strict equality, meaning both the value and type must be the same (e.g., `'5' === 5` is `false`)."
    },
    {
      id: 10,
      question: "What will the following code return: `typeof []`?",
      options: [
        "object",
        "array",
        "undefined",
        "function"
      ],
      correctAnswer: "object",
      answerDescription: "In JavaScript, arrays are technically considered objects. Therefore, `typeof []` will return `object`."
    },
    {
      id: 11,
      question: "What is the purpose of the `isNaN()` function in JavaScript?",
      options: [
        "It checks if a value is a valid number.",
        "It checks if a value is `null`.",
        "It checks if a value is `undefined`.",
        "It converts a value to a number if possible."
      ],
      correctAnswer: "It checks if a value is a valid number.",
      answerDescription: "`isNaN()` is used to check if a value is `NaN` (Not-a-Number). It returns `true` if the value is `NaN`."
    },
    {
      id: 12,
      question: "What will the following code return: `false == '0'`?",
      options: [
        "true",
        "false",
        "undefined",
        "NaN"
      ],
      correctAnswer: "true",
      answerDescription: "In JavaScript, `==` performs type coercion. The string `'0'` is coerced into a number `0`, and `false` is also coerced into `0`, so the comparison is `true`."
    },
    {
      id: 13,
      question: "How do you check if an object is an array in JavaScript?",
      options: [
        "Using `Array.isArray()` method.",
        "Using `typeof` operator.",
        "Using `instanceof Array`.",
        "Both `Array.isArray()` and `instanceof Array`."
      ],
      correctAnswer: "Both `Array.isArray()` and `instanceof Array`.",
      answerDescription: "Both `Array.isArray()` and `instanceof Array` can be used to check if an object is an array in JavaScript."
    },
    {
      id: 14,
      question: "What is the result of the following comparison: `[] == false`?",
      options: [
        "true",
        "false",
        "undefined",
        "null"
      ],
      correctAnswer: "true",
      answerDescription: "`[] == false` returns `true` because of type coercion. An empty array is coerced into an empty string, and `'' == false` evaluates to `true`."
    },
    {
      id: 15,
      question: "How do you convert a string to a number in JavaScript?",
      options: [
        "Using the `Number()` function or the unary `+` operator.",
        "Using the `parseInt()` function.",
        "Using the `parseFloat()` function.",
        "All of the above."
      ],
      correctAnswer: "All of the above.",
      answerDescription: "You can convert a string to a number in multiple ways: using `Number()`, `parseInt()`, `parseFloat()`, or the unary `+` operator."
    },
    {
      id: 16,
      question: "What is `undefined` in JavaScript?",
      options: [
        "A variable that has been declared but not initialized.",
        "A function that returns no value.",
        "A data type that represents a missing value.",
        "Both A and C."
      ],
      correctAnswer: "Both A and C.",
      answerDescription: "`undefined` represents both a variable that has been declared but not initialized, and a missing or unassigned value."
    },
    {
      id: 17,
      question: "What is the result of `typeof null` in JavaScript?",
      options: [
        "object",
        "null",
        "undefined",
        "function"
      ],
      correctAnswer: "object",
      answerDescription: "In JavaScript, `typeof null` returns `object`, which is a known bug in the language."
    },
    {
      id: 18,
      question: "How do you compare two objects in JavaScript?",
      options: [
        "Using the `==` or `===` operator.",
        "Using the `Object.is()` method.",
        "By checking each property manually.",
        "All of the above."
      ],
      correctAnswer: "By checking each property manually.",
      answerDescription: "To compare two objects in JavaScript, you need to manually compare each of their properties since `==` or `===` checks reference equality, not value equality."
    },
    {
      id: 19,
      question: "What does the `isNaN()` function return when applied to a non-numeric string?",
      options: [
        "true",
        "false",
        "NaN",
        "undefined"
      ],
      correctAnswer: "true",
      answerDescription: "`isNaN()` returns `true` when applied to a non-numeric string because the string cannot be converted to a valid number."
    },
    {
      id: 20,
      question: "What is the output of the following: `typeof {} === 'object'`?",
      options: [
        "true",
        "false",
        "undefined",
        "NaN"
      ],
      correctAnswer: "true",
      answerDescription: "`typeof {}` returns `object`, so `typeof {} === 'object'` evaluates to `true`."
    }
  ];
  
  export const functionsAndScope = [
    {
      id: 1,
      question: "What is the difference between a function declaration and a function expression?",
      options: [
        "Function declarations are hoisted, function expressions are not.",
        "Function declarations can be invoked before they are declared, but function expressions cannot.",
        "Function expressions cannot be assigned to variables.",
        "There is no difference."
      ],
      correctAnswer: "Function declarations are hoisted, function expressions are not.",
      answerDescription: "Function declarations are hoisted to the top of their scope and can be invoked before their definition, whereas function expressions are not hoisted and cannot be invoked before being defined."
    },
    {
      id: 2,
      question: "What is a function expression in JavaScript, and how does it differ from a function declaration?",
      options: [
        "A function expression is a function that is defined as part of a larger expression, whereas a function declaration is a stand-alone statement.",
        "A function expression can be named, while a function declaration cannot.",
        "A function declaration is executed immediately, whereas a function expression is not.",
        "A function expression cannot be assigned to a variable."
      ],
      correctAnswer: "A function expression is a function that is defined as part of a larger expression, whereas a function declaration is a stand-alone statement.",
      answerDescription: "A function expression is part of an expression and is not hoisted, whereas a function declaration is a complete statement and is hoisted to the top of the scope."
    },
    {
      id: 3,
      question: "What is a closure in JavaScript? Can you give an example?",
      options: [
        "A closure is a function that remembers its lexical scope even when the function is executed outside that scope.",
        "A closure is a function that can access variables from global scope.",
        "A closure is a function that is created when a variable is declared.",
        "A closure is a function that allows recursion."
      ],
      correctAnswer: "A closure is a function that remembers its lexical scope even when the function is executed outside that scope.",
      answerDescription: "A closure allows a function to retain access to variables from its lexical scope, even after the outer function has finished executing. For example: `function outer() { var x = 10; return function inner() { console.log(x); }; }`."
    },
    {
      id: 4,
      question: "How do closures work in JavaScript?",
      options: [
        "Closures allow functions to access variables from their lexical scope even after the outer function has finished executing.",
        "Closures are functions that are defined inside other functions and are used for recursion.",
        "Closures prevent variables from being overwritten in the global scope.",
        "Closures enable functions to execute asynchronously."
      ],
      correctAnswer: "Closures allow functions to access variables from their lexical scope even after the outer function has finished executing.",
      answerDescription: "Closures capture the scope in which they were created, allowing them to access variables from that scope even after the outer function has returned."
    },
    {
      id: 5,
      question: "What is the difference between an arrow function and a regular function in JavaScript?",
      options: [
        "Arrow functions cannot use the `this` keyword, whereas regular functions can.",
        "Arrow functions do not have their own `this` context, whereas regular functions do.",
        "Arrow functions are hoisted, while regular functions are not.",
        "Arrow functions can only return values, while regular functions can perform actions."
      ],
      correctAnswer: "Arrow functions do not have their own `this` context, whereas regular functions do.",
      answerDescription: "Arrow functions do not have their own `this` value, instead, they inherit `this` from their enclosing scope. Regular functions have their own `this` context."
    },
    {
      id: 6,
      question: "What does the `this` keyword refer to in JavaScript?",
      options: [
        "The `this` keyword refers to the global object in non-strict mode and the current object in strict mode.",
        "The `this` keyword refers to the function that was last executed.",
        "The `this` keyword always refers to the object that contains the function.",
        "The `this` keyword refers to the variable that was last initialized."
      ],
      correctAnswer: "The `this` keyword refers to the global object in non-strict mode and the current object in strict mode.",
      answerDescription: "In non-strict mode, `this` refers to the global object (e.g., `window` in browsers), while in strict mode, `this` is `undefined`. Inside methods, `this` refers to the object the method belongs to."
    },
    {
      id: 7,
      question: "How does `this` behave in an arrow function?",
      options: [
        "Arrow functions have their own `this` context.",
        "Arrow functions inherit `this` from their surrounding lexical context.",
        "Arrow functions use the `this` value from the global object.",
        "Arrow functions do not have access to `this`."
      ],
      correctAnswer: "Arrow functions inherit `this` from their surrounding lexical context.",
      answerDescription: "Arrow functions do not have their own `this`. They inherit `this` from the context in which they are defined, which is the scope of the enclosing function or global object."
    },
    {
      id: 8,
      question: "What is hoisting in JavaScript? How does it affect variable declarations?",
      options: [
        "Hoisting is the process of variables being assigned to the top of their scope, but only their declarations, not their values.",
        "Hoisting is the process where function expressions are elevated to the top of their scope.",
        "Hoisting allows you to access variables even before they are declared.",
        "Hoisting only applies to variable declarations with `let` and `const`."
      ],
      correctAnswer: "Hoisting is the process of variables being assigned to the top of their scope, but only their declarations, not their values.",
      answerDescription: "In JavaScript, hoisting moves variable and function declarations to the top of their scope during the compilation phase, but only the declarations are hoisted, not the initializations."
    },
    {
      id: 9,
      question: "What will happen if you try to access a variable declared with `let` or `const` before its declaration?",
      options: [
        "You will get a `ReferenceError` because they are hoisted but not initialized.",
        "The variable will be automatically assigned `undefined`.",
        "The variable will be available but its value will be `null`.",
        "You will get a `TypeError`."
      ],
      correctAnswer: "You will get a `ReferenceError` because they are hoisted but not initialized.",
      answerDescription: "Variables declared with `let` or `const` are hoisted, but they remain in a 'temporal dead zone' until they are initialized, causing a `ReferenceError` if accessed before declaration."
    },
    {
      id: 10,
      question: "How does hoisting affect function declarations in JavaScript?",
      options: [
        "Function declarations are hoisted with both their definition and body, so they can be invoked before they appear in the code.",
        "Function declarations are hoisted with only their names, not their bodies.",
        "Function declarations are not hoisted in JavaScript.",
        "Function declarations are hoisted but only work within their respective blocks."
      ],
      correctAnswer: "Function declarations are hoisted with both their definition and body, so they can be invoked before they appear in the code.",
      answerDescription: "Function declarations are fully hoisted, meaning both their definition and body are moved to the top of their scope, allowing them to be called before the actual declaration in the code."
    },
    {
      id: 11,
      question: "What is the difference between a function declaration and a function expression regarding hoisting?",
      options: [
        "Function declarations are hoisted and can be called before their definition, while function expressions are not hoisted.",
        "Function declarations are not hoisted, but function expressions are.",
        "Both function declarations and function expressions are hoisted equally.",
        "Function expressions are hoisted, but function declarations are not."
      ],
      correctAnswer: "Function declarations are hoisted and can be called before their definition, while function expressions are not hoisted.",
      answerDescription: "Function declarations are hoisted with both their name and body, allowing them to be invoked before their declaration. Function expressions are not hoisted, meaning they cannot be called before their definition."
    },
    {
      id: 12,
      question: "What will the following code return: `typeof function() {}`?",
      options: [
        "function",
        "object",
        "undefined",
        "null"
      ],
      correctAnswer: "function",
      answerDescription: "`typeof function() {}` returns `function`, as the type of a function in JavaScript is `function`."
    },
    {
      id: 13,
      question: "What is an IIFE (Immediately Invoked Function Expression)?",
      options: [
        "A function that is invoked immediately after being declared.",
        "A function that is invoked after a delay.",
        "A function that is declared globally but invoked locally.",
        "A function that returns another function."
      ],
      correctAnswer: "A function that is invoked immediately after being declared.",
      answerDescription: "An IIFE (Immediately Invoked Function Expression) is a function expression that is executed as soon as it is defined. It is commonly used to create a local scope to avoid polluting the global scope."
    },
    {
      id: 14,
      question: "What is the value of `this` inside a regular function?",
      options: [
        "The `this` value refers to the global object or the object that called the function.",
        "The `this` value refers to the function itself.",
        "The `this` value refers to the most recently declared variable.",
        "The `this` value refers to `null`."
      ],
      correctAnswer: "The `this` value refers to the global object or the object that called the function.",
      answerDescription: "In a regular function, `this` refers to the global object (in non-strict mode) or the object that invoked the function."
    },
    {
      id: 15,
      question: "What is the `this` keyword in an arrow function?",
      options: [
        "The `this` keyword refers to the global object.",
        "The `this` keyword refers to the object that called the function.",
        "The `this` keyword refers to the context in which the function was created.",
        "The `this` keyword is undefined in arrow functions."
      ],
      correctAnswer: "The `this` keyword refers to the context in which the function was created.",
      answerDescription: "In arrow functions, `this` is lexically bound, meaning it refers to the `this` value of the surrounding context where the arrow function was defined."
    },
    {
      id: 16,
      question: "What happens if a function is declared as a function expression but invoked before its definition?",
      options: [
        "It will throw an error because function expressions are not hoisted.",
        "It will work just like a function declaration.",
        "The function will be invoked with `undefined`.",
        "It will invoke an empty function."
      ],
      correctAnswer: "It will throw an error because function expressions are not hoisted.",
      answerDescription: "Since function expressions are not hoisted, trying to invoke them before their definition will throw a `TypeError`."
    },
    {
      id: 17,
      question: "How does JavaScript determine the value of `this` in a method call?",
      options: [
        "It depends on how the function is called (e.g., via an object or as a standalone function).",
        "It always refers to the global object.",
        "It always refers to the `document` object in the browser.",
        "It is always `null`."
      ],
      correctAnswer: "It depends on how the function is called (e.g., via an object or as a standalone function).",
      answerDescription: "The value of `this` is determined by the call site. In an object method, `this` refers to the object, but in a standalone function, `this` refers to the global object (in non-strict mode)."
    },
    {
      id: 18,
      question: "What is the value of `this` inside a class method?",
      options: [
        "The value of `this` refers to the class instance.",
        "The value of `this` refers to the class constructor.",
        "The value of `this` is undefined.",
        "The value of `this` refers to the global object."
      ],
      correctAnswer: "The value of `this` refers to the class instance.",
      answerDescription: "Inside a class method, `this` refers to the class instance, allowing you to access its properties and methods."
    },
    {
      id: 19,
      question: "What happens if you call a function inside a setTimeout() with an arrow function?",
      options: [
        "It inherits `this` from the enclosing scope.",
        "It uses the global `this` context.",
        "It does not have access to `this`.",
        "It causes an infinite loop."
      ],
      correctAnswer: "It inherits `this` from the enclosing scope.",
      answerDescription: "Since arrow functions do not have their own `this`, they inherit `this` from their enclosing scope, which can be useful in asynchronous code like `setTimeout`."
    },
    {
      id: 20,
      question: "What will happen if you try to call a method of an object before the object is initialized in JavaScript?",
      options: [
        "It will throw an error because the object is not yet defined.",
        "It will return `undefined` because the method doesn't exist.",
        "It will work normally if the method is defined globally.",
        "It will return `null`."
      ],
      correctAnswer: "It will throw an error because the object is not yet defined.",
      answerDescription: "Calling a method on an object before it is initialized will throw an error because the object does not exist at that point in time."
    }
  ];
  
  export const asynchronousJavaScript = [
    {
      id: 1,
      question: "What is a callback function in JavaScript?",
      options: [
        "A function passed as an argument to another function and executed after the first function completes.",
        "A function that is called immediately after being defined.",
        "A function that can only be called once.",
        "A function that returns a promise."
      ],
      correctAnswer: "A function passed as an argument to another function and executed after the first function completes.",
      answerDescription: "A callback function is a function passed as an argument to another function and is executed when the first function finishes its execution."
    },
    {
      id: 2,
      question: "What is callback hell in JavaScript, and how can it be avoided?",
      options: [
        "Callback hell is when multiple callbacks are nested inside each other, leading to code that is difficult to read and maintain. It can be avoided by using promises or async/await.",
        "Callback hell occurs when callbacks are not executed in order, and it can be avoided by using setTimeout.",
        "Callback hell occurs when there are too many asynchronous functions running at the same time, and it can be avoided by using recursive functions.",
        "Callback hell occurs when callbacks are passed without function arguments."
      ],
      correctAnswer: "Callback hell is when multiple callbacks are nested inside each other, leading to code that is difficult to read and maintain. It can be avoided by using promises or async/await.",
      answerDescription: "Callback hell happens when you have multiple nested callbacks, leading to messy and hard-to-read code. It can be avoided by using promises or async/await for cleaner asynchronous flow."
    },
    {
      id: 3,
      question: "What is a promise in JavaScript?",
      options: [
        "A promise is a placeholder for a value that is initially unknown but will be resolved at a later time.",
        "A promise is a way to immediately execute code without waiting for any asynchronous actions.",
        "A promise is a function that will always resolve successfully.",
        "A promise is a special type of callback function."
      ],
      correctAnswer: "A promise is a placeholder for a value that is initially unknown but will be resolved at a later time.",
      answerDescription: "A promise is an object representing the eventual completion or failure of an asynchronous operation. It is a placeholder for a value that may be available in the future."
    },
    {
      id: 4,
      question: "How does `.then()` work in a promise?",
      options: [
        "`.then()` is called when the promise is resolved, and it receives the resolved value as an argument.",
        "`.then()` is called when the promise is rejected, and it catches the error.",
        "`.then()` is used to immediately execute a function after the promise is created.",
        "`.then()` is used to resolve the promise."
      ],
      correctAnswer: ".then() is called when the promise is resolved, and it receives the resolved value as an argument.",
      answerDescription: "`then()` is a method attached to a promise that is executed when the promise is resolved. It receives the resolved value as an argument and returns a new promise."
    },
    {
      id: 5,
      question: "How does `.catch()` work in a promise?",
      options: [
        "`.catch()` is called when a promise is rejected and handles the error.",
        "`.catch()` is used to resolve the promise.",
        "`.catch()` allows you to chain multiple promises.",
        "`.catch()` is used to log the value of a resolved promise."
      ],
      correctAnswer: ".catch() is called when a promise is rejected and handles the error.",
      answerDescription: "`catch()` is used to handle errors in promise chains. It is called when the promise is rejected and is responsible for handling the error or exception."
    },
    {
      id: 6,
      question: "What does the following code return? `const promise = new Promise((resolve, reject) => { resolve('Success!'); }); promise.then((value) => console.log(value));`",
      options: [
        "'Success!'",
        "undefined",
        "Promise object",
        "'Error!'"
      ],
      correctAnswer: "'Success!'",
      answerDescription: "The code creates a resolved promise, and `.then()` is used to log the resolved value, which is 'Success!'."
    },
    {
      id: 7,
      question: "What is the purpose of the `async` keyword in JavaScript?",
      options: [
        "The `async` keyword is used to define a function that always returns a promise.",
        "The `async` keyword is used to immediately execute a function.",
        "The `async` keyword prevents promises from being returned.",
        "The `async` keyword allows you to use the `await` keyword inside the function."
      ],
      correctAnswer: "The `async` keyword is used to define a function that always returns a promise.",
      answerDescription: "`async` functions always return a promise. If the function returns a value, the promise is resolved with that value."
    },
    {
      id: 8,
      question: "How does `await` work in JavaScript?",
      options: [
        "`await` pauses the execution of an `async` function until the promise is resolved or rejected.",
        "`await` is used to define a function that returns a promise.",
        "`await` executes all promises concurrently.",
        "`await` allows you to run synchronous code inside an asynchronous function."
      ],
      correctAnswer: "`await` pauses the execution of an `async` function until the promise is resolved or rejected.",
      answerDescription: "`await` is used to pause the execution of an `async` function until the promise is resolved or rejected. It makes asynchronous code look and behave more like synchronous code."
    },
    {
      id: 9,
      question: "How do you handle errors when using `async/await`?",
      options: [
        "You handle errors by using a `try/catch` block around the `await` statement.",
        "You handle errors by chaining `.catch()` after the `await` statement.",
        "You use `throw` inside an `async` function to propagate the error.",
        "You handle errors by using the `finally` block."
      ],
      correctAnswer: "You handle errors by using a `try/catch` block around the `await` statement.",
      answerDescription: "With `async/await`, you handle errors in asynchronous code using a `try/catch` block to catch any exceptions thrown during the execution of the `await` statement."
    },
    {
      id: 10,
      question: "What will happen if you use `await` outside of an `async` function?",
      options: [
        "You will get a syntax error.",
        "The code will execute as expected.",
        "`await` will be ignored.",
        "You will get a promise as the result."
      ],
      correctAnswer: "You will get a syntax error.",
      answerDescription: "`await` can only be used inside `async` functions, and using it outside of one will result in a syntax error."
    },
    {
      id: 11,
      question: "What does the JavaScript event loop do?",
      options: [
        "The event loop continuously checks the call stack and message queue, processing any pending events.",
        "The event loop executes synchronous code after the stack is empty.",
        "The event loop waits for input from the user before executing any code.",
        "The event loop executes all code asynchronously, without a call stack."
      ],
      correctAnswer: "The event loop continuously checks the call stack and message queue, processing any pending events.",
      answerDescription: "The event loop manages asynchronous operations in JavaScript. It continuously checks the call stack for execution and moves pending events from the message queue to the stack when the stack is empty."
    },
    {
      id: 12,
      question: "What is the call stack in JavaScript?",
      options: [
        "The call stack is a data structure that stores the execution context of the currently executing functions.",
        "The call stack is a collection of all the variables used in a program.",
        "The call stack is where asynchronous operations are queued.",
        "The call stack stores the event listeners for each DOM element."
      ],
      correctAnswer: "The call stack is a data structure that stores the execution context of the currently executing functions.",
      answerDescription: "The call stack keeps track of function calls. When a function is called, its execution context is pushed onto the stack, and when it finishes, it is popped from the stack."
    },
    {
      id: 13,
      question: "What is the difference between synchronous and asynchronous code?",
      options: [
        "Synchronous code executes one operation at a time, while asynchronous code allows multiple operations to run concurrently.",
        "Synchronous code runs in parallel, whereas asynchronous code runs sequentially.",
        "Synchronous code uses promises, while asynchronous code does not.",
        "Synchronous code is faster than asynchronous code."
      ],
      correctAnswer: "Synchronous code executes one operation at a time, while asynchronous code allows multiple operations to run concurrently.",
      answerDescription: "Synchronous code runs one operation after another, blocking further execution until the current task completes. Asynchronous code, on the other hand, allows tasks to run concurrently, improving performance."
    },
    {
      id: 14,
      question: "How does the event loop handle multiple asynchronous operations in JavaScript?",
      options: [
        "It places each asynchronous operation in the message queue and processes them one by one when the call stack is empty.",
        "It processes all asynchronous operations simultaneously.",
        "It ignores asynchronous operations until the call stack is empty.",
        "It processes asynchronous operations as soon as they are initiated."
      ],
      correctAnswer: "It places each asynchronous operation in the message queue and processes them one by one when the call stack is empty.",
      answerDescription: "The event loop places asynchronous operations in the message queue and processes them in order when the call stack is empty, ensuring non-blocking execution of code."
    },
    {
      id: 15,
      question: "What is the output of the following code? `console.log('First'); setTimeout(() => console.log('Second'), 0); console.log('Third');`",
      options: [
        "'First', 'Second', 'Third'",
        "'First', 'Third', 'Second'",
        "'Third', 'First', 'Second'",
        "'Third', 'Second', 'First'"
      ],
      correctAnswer: "'First', 'Third', 'Second'",
      answerDescription: "Even though `setTimeout()` is called with 0 delay, it still places the function in the message queue, and the event loop will execute it after the current call stack is empty, which results in 'First', 'Third', 'Second'."
    },
    {
      id: 16,
      question: "What happens when you use `setTimeout()` in JavaScript?",
      options: [
        "It runs the function synchronously after the specified delay.",
        "It runs the function asynchronously after the specified delay.",
        "It runs the function immediately and then waits for the specified delay.",
        "It blocks the execution of subsequent code until the delay is complete."
      ],
      correctAnswer: "It runs the function asynchronously after the specified delay.",
      answerDescription: "`setTimeout()` is an asynchronous function that waits for the specified delay and then executes the provided callback function."
    },
    {
      id: 17,
      question: "Which of the following methods is used to create a resolved promise?",
      options: [
        "Promise.resolve()",
        "Promise.reject()",
        "new Promise()",
        "setTimeout()"
      ],
      correctAnswer: "Promise.resolve()",
      answerDescription: "`Promise.resolve()` is used to create a resolved promise, allowing you to return an immediately resolved value in promise-based code."
    },
    {
      id: 18,
      question: "What does the `finally` method in a promise do?",
      options: [
        "It runs code after a promise is either resolved or rejected, regardless of the result.",
        "It is called only when a promise is resolved.",
        "It is called only when a promise is rejected.",
        "It cancels a promise."
      ],
      correctAnswer: "It runs code after a promise is either resolved or rejected, regardless of the result.",
      answerDescription: "`finally()` is used to execute code after a promise is settled (either resolved or rejected). It's useful for cleanup tasks."
    },
    {
      id: 19,
      question: "What is the behavior of `setInterval()` in JavaScript?",
      options: [
        "It repeatedly calls a function at specified intervals until cleared.",
        "It calls a function only once after a specified interval.",
        "It waits for all asynchronous functions to finish before calling the function.",
        "It pauses execution until the function is called."
      ],
      correctAnswer: "It repeatedly calls a function at specified intervals until cleared.",
      answerDescription: "`setInterval()` calls a function repeatedly at specified time intervals. It continues calling the function at the specified interval until `clearInterval()` is called."
    },
    {
      id: 20,
      question: "What is the result of executing a promise with a `then` method on a rejected promise?",
      options: [
        "It immediately executes the next `then` method.",
        "It skips to the next `catch` method.",
        "It executes the `catch` block first.",
        "It returns a new resolved promise."
      ],
      correctAnswer: "It skips to the next `catch` method.",
      answerDescription: "When a promise is rejected, it skips the `then` method and moves directly to the `catch` method to handle the rejection."
    }
  ];
  
  export const objectsAndArrays = [
    {
      id: 1,
      question: "How do you create an object in JavaScript?",
      options: [
        "By using the `Object.create()` method.",
        "By using curly braces `{}` to define key-value pairs.",
        "By using the `new Object()` syntax.",
        "By using the `Object()` constructor."
      ],
      correctAnswer: "By using curly braces `{}` to define key-value pairs.",
      answerDescription: "You create an object in JavaScript by using curly braces `{}` and defining key-value pairs inside. For example: `let obj = {name: 'John', age: 30};`"
    },
    {
      id: 2,
      question: "What is `Object.assign()` used for in JavaScript?",
      options: [
        "It assigns a value to an object property.",
        "It copies all properties from one or more source objects to a target object.",
        "It merges multiple objects into one.",
        "It freezes the object to prevent modification."
      ],
      correctAnswer: "It copies all properties from one or more source objects to a target object.",
      answerDescription: "`Object.assign()` is used to copy properties from one or more source objects to a target object. It can be used to clone or merge objects."
    },
    {
      id: 3,
      question: "What is the purpose of `Object.keys()` in JavaScript?",
      options: [
        "It returns an array of all the keys of an object.",
        "It returns the values of an object as an array.",
        "It checks if a key exists in an object.",
        "It retrieves the prototype of an object."
      ],
      correctAnswer: "It returns an array of all the keys of an object.",
      answerDescription: "`Object.keys()` returns an array of all the enumerable property names (keys) of an object."
    },
    {
      id: 4,
      question: "How do you add an element to the end of an array in JavaScript?",
      options: [
        "Using the `push()` method.",
        "Using the `unshift()` method.",
        "Using the `pop()` method.",
        "Using the `concat()` method."
      ],
      correctAnswer: "Using the `push()` method.",
      answerDescription: "`push()` is used to add one or more elements to the end of an array and returns the new array length."
    },
    {
      id: 5,
      question: "What is the difference between `map()` and `forEach()` in JavaScript?",
      options: [
        "`map()` returns a new array, while `forEach()` returns `undefined`.",
        "`map()` modifies the original array, while `forEach()` does not.",
        "`map()` is used only for objects, while `forEach()` is used for arrays.",
        "`map()` can only be used on arrays with numbers."
      ],
      correctAnswer: "`map()` returns a new array, while `forEach()` returns `undefined`.",
      answerDescription: "`map()` creates a new array based on the results of applying a function to each element, while `forEach()` iterates over an array without returning anything."
    },
    {
      id: 6,
      question: "What does the `reduce()` method do in JavaScript?",
      options: [
        "It creates a new array from an existing one by applying a function to each element.",
        "It aggregates all the array elements into a single value based on a provided function.",
        "It filters out elements based on a condition.",
        "It sorts the array based on a function."
      ],
      correctAnswer: "It aggregates all the array elements into a single value based on a provided function.",
      answerDescription: "`reduce()` is used to iterate over an array and reduce it to a single value, such as summing up values or concatenating strings."
    },
    {
      id: 7,
      question: "What is the purpose of the `forEach()` method in JavaScript?",
      options: [
        "It iterates over an array and applies a function to each element, without returning a new array.",
        "It filters the elements of an array based on a condition.",
        "It creates a new array with the elements that satisfy a condition.",
        "It sorts the array in ascending order."
      ],
      correctAnswer: "It iterates over an array and applies a function to each element, without returning a new array.",
      answerDescription: "`forEach()` is used to iterate over an array and execute a function for each element, but it does not return a new array."
    },
    {
      id: 8,
      question: "What is array destructuring in JavaScript?",
      options: [
        "Array destructuring allows you to extract values from an array and assign them to variables.",
        "Array destructuring creates a copy of the array.",
        "Array destructuring sorts the array in ascending order.",
        "Array destructuring is used to combine arrays."
      ],
      correctAnswer: "Array destructuring allows you to extract values from an array and assign them to variables.",
      answerDescription: "Array destructuring allows you to extract values from an array and assign them to variables in a concise syntax. For example: `let [a, b] = [1, 2];`"
    },
    {
      id: 9,
      question: "What is object destructuring in JavaScript?",
      options: [
        "Object destructuring allows you to extract properties from an object and assign them to variables.",
        "Object destructuring is used to merge two objects.",
        "Object destructuring creates a deep copy of the object.",
        "Object destructuring allows you to remove properties from an object."
      ],
      correctAnswer: "Object destructuring allows you to extract properties from an object and assign them to variables.",
      answerDescription: "Object destructuring allows you to extract properties from an object and assign them to variables using a concise syntax. For example: `let {name, age} = person;`"
    },
    {
      id: 10,
      question: "What is the spread operator (`...`) used for in JavaScript?",
      options: [
        "The spread operator is used to copy elements from an array or properties from an object into a new array or object.",
        "The spread operator combines two arrays into one.",
        "The spread operator is used to define function parameters.",
        "The spread operator creates an alias for an array."
      ],
      correctAnswer: "The spread operator is used to copy elements from an array or properties from an object into a new array or object.",
      answerDescription: "The spread operator (`...`) is used to unpack elements from an array or properties from an object and copy them into a new array or object."
    },
    {
      id: 11,
      question: "What is the rest parameter (`...`) used for in JavaScript?",
      options: [
        "The rest parameter allows you to collect multiple values into an array within a function.",
        "The rest parameter is used to define a spread operator in objects.",
        "The rest parameter allows you to spread an array into separate elements.",
        "The rest parameter is used to remove elements from an array."
      ],
      correctAnswer: "The rest parameter allows you to collect multiple values into an array within a function.",
      answerDescription: "The rest parameter (`...`) is used to collect multiple arguments passed to a function into a single array. For example: `function sum(...numbers) { return numbers.reduce((a, b) => a + b); }`"
    },
    {
      id: 12,
      question: "How do you combine two objects in JavaScript using the spread operator?",
      options: [
        "By using `const combined = {...obj1, ...obj2};`.",
        "By using `Object.assign(obj1, obj2);`.",
        "By using `const combined = obj1 + obj2;`.",
        "By using `Object.merge(obj1, obj2);`."
      ],
      correctAnswer: "By using `const combined = {...obj1, ...obj2};`.",
      answerDescription: "The spread operator can be used to combine objects by spreading the properties of both objects into a new object."
    },
    {
      id: 13,
      question: "What does the `map()` method return in JavaScript?",
      options: [
        "It returns a new array with the results of calling a function on every element in the array.",
        "It returns the original array.",
        "It sorts the array in place.",
        "It removes elements from the array."
      ],
      correctAnswer: "It returns a new array with the results of calling a function on every element in the array.",
      answerDescription: "`map()` creates a new array by applying a function to each element of the original array, leaving the original array unchanged."
    },
    {
      id: 14,
      question: "What is the output of this code: `let arr = [1, 2, 3]; arr.push(4); console.log(arr);`",
      options: [
        "[1, 2, 3, 4]",
        "[1, 2, 3]",
        "[4, 1, 2, 3]",
        "[3, 4, 1, 2]"
      ],
      correctAnswer: "[1, 2, 3, 4]",
      answerDescription: "`push()` adds a new element to the end of the array. So the array becomes `[1, 2, 3, 4]`."
    },
    {
      id: 15,
      question: "What does the `filter()` method do in JavaScript?",
      options: [
        "It creates a new array with elements that pass a test provided in a function.",
        "It removes all elements from the array.",
        "It adds elements to the array.",
        "It combines two arrays."
      ],
      correctAnswer: "It creates a new array with elements that pass a test provided in a function.",
      answerDescription: "`filter()` is used to create a new array with all elements that pass the test implemented by the provided function."
    },
    {
      id: 16,
      question: "Which method can be used to check if an object is an array in JavaScript?",
      options: [
        "Array.isArray()",
        "typeof()",
        "isArray()",
        "instanceof Array"
      ],
      correctAnswer: "Array.isArray()",
      answerDescription: "`Array.isArray()` is a method used to check if a value is an array."
    },
    {
      id: 17,
      question: "What does the `shift()` method do in JavaScript?",
      options: [
        "It removes the first element from an array and returns it.",
        "It adds a new element to the beginning of an array.",
        "It removes the last element from an array.",
        "It sorts the array."
      ],
      correctAnswer: "It removes the first element from an array and returns it.",
      answerDescription: "`shift()` removes the first element from an array and returns it, while shifting the remaining elements down."
    },
    {
      id: 18,
      question: "What does `Array.prototype.slice()` do in JavaScript?",
      options: [
        "It returns a shallow copy of a portion of an array.",
        "It sorts the array in place.",
        "It removes elements from the array.",
        "It creates a deep copy of the array."
      ],
      correctAnswer: "It returns a shallow copy of a portion of an array.",
      answerDescription: "`slice()` returns a new array that is a shallow copy of a portion of the original array, without modifying the original."
    },
    {
      id: 19,
      question: "What does the `concat()` method do in JavaScript?",
      options: [
        "It merges two or more arrays into a new array.",
        "It removes the last element from an array.",
        "It filters elements based on a condition.",
        "It reverses the elements of an array."
      ],
      correctAnswer: "It merges two or more arrays into a new array.",
      answerDescription: "`concat()` is used to merge two or more arrays into a new array without modifying the original arrays."
    },
    {
      id: 20,
      question: "How do you prevent further modifications to an object in JavaScript?",
      options: [
        "By using `Object.freeze()`.",
        "By using `Object.seal()`.",
        "By using `Object.preventExtensions()`.",
        "By using `const`."
      ],
      correctAnswer: "By using `Object.freeze()`.",
      answerDescription: "`Object.freeze()` prevents modifications to an object by making it immutable."
    }
  ];
  
  export const es6PlusFeatures = [
    {
      id: 1,
      question: "What are template literals and how are they different from regular strings?",
      options: [
        "Template literals are strings enclosed by backticks (`) and allow for string interpolation and multi-line strings.",
        "Template literals are only used for multi-line strings.",
        "Template literals are enclosed by single quotes ('') and allow string interpolation.",
        "Template literals are objects that store multiple strings."
      ],
      correctAnswer: "Template literals are strings enclosed by backticks (`) and allow for string interpolation and multi-line strings.",
      answerDescription: "Template literals are enclosed by backticks (`), allowing for string interpolation using `${}` and support multi-line strings without the need for concatenation."
    },
    {
      id: 2,
      question: "How do you create a multi-line string in JavaScript?",
      options: [
        "By using the `\n` character in regular strings.",
        "By using the `+` operator to concatenate lines.",
        "By using template literals with backticks (`).",
        "By using the `String.split()` method."
      ],
      correctAnswer: "By using template literals with backticks (`).",
      answerDescription: "Template literals, enclosed by backticks (`), support multi-line strings directly without the need for escape characters."
    },
    {
      id: 3,
      question: "What is string interpolation in JavaScript, and how do template literals facilitate it?",
      options: [
        "String interpolation allows variables to be inserted directly into a string using `${}` syntax inside template literals.",
        "String interpolation concatenates variables using the `+` operator.",
        "String interpolation replaces `+` with the `&` operator.",
        "String interpolation is a feature of regular strings only."
      ],
      correctAnswer: "String interpolation allows variables to be inserted directly into a string using `${}` syntax inside template literals.",
      answerDescription: "String interpolation in JavaScript is done using `${}` inside template literals, which allows you to embed expressions directly within strings."
    },
    {
      id: 4,
      question: "What is the difference between `import` and `require()` in JavaScript?",
      options: [
        "`import` is used for ES6 module syntax, while `require()` is used in CommonJS modules.",
        "`import` is asynchronous, while `require()` is synchronous.",
        "`import` is used only in Node.js, while `require()` is used in the browser.",
        "`import` is used to include external scripts, while `require()` imports JSON files."
      ],
      correctAnswer: "`import` is used for ES6 module syntax, while `require()` is used in CommonJS modules.",
      answerDescription: "`import` is used for importing ES6 modules, while `require()` is the older syntax used for CommonJS modules, mainly in Node.js."
    },
    {
      id: 5,
      question: "How do you export a function in a JavaScript module?",
      options: [
        "Using `export default function myFunction() {}`.",
        "Using `export myFunction()`.",
        "Using `module.export(function myFunction())`.",
        "Using `export function myFunction()`."
      ],
      correctAnswer: "Using `export function myFunction()`.",
      answerDescription: "You can export a function in a JavaScript module using the `export function` syntax, or you can use `export default` for default exports."
    },
    {
      id: 6,
      question: "What is the difference between `export` and `export default` in JavaScript?",
      options: [
        "`export` is used to export multiple named exports, while `export default` is used to export a single value as the default export.",
        "`export` is used for default exports, while `export default` is used for named exports.",
        "`export` exports an object, while `export default` exports a function.",
        "`export` is used only for classes, while `export default` is used for functions."
      ],
      correctAnswer: "`export` is used to export multiple named exports, while `export default` is used to export a single value as the default export.",
      answerDescription: "`export` is used for named exports, where you can export multiple values, while `export default` is used for the default export, where only one value can be exported."
    },
    {
      id: 7,
      question: "How do you import a specific function from a module in JavaScript?",
      options: [
        "Using `import { myFunction } from './myModule';`.",
        "Using `require('./myModule').myFunction;`.",
        "Using `import './myModule/myFunction';`.",
        "Using `import myFunction from './myModule';`."
      ],
      correctAnswer: "Using `import { myFunction } from './myModule';`.",
      answerDescription: "You can import specific functions using the `import { functionName } from 'module';` syntax."
    },
    {
      id: 8,
      question: "How do you import everything from a module in JavaScript?",
      options: [
        "Using `import * as moduleName from './myModule';`.",
        "Using `require('./myModule')`.",
        "Using `import * from './myModule';`.",
        "Using `import moduleName from './myModule';`."
      ],
      correctAnswer: "Using `import * as moduleName from './myModule';`.",
      answerDescription: "You can import everything from a module using the `import * as moduleName` syntax."
    },
    {
      id: 9,
      question: "What is the purpose of `Set` in JavaScript?",
      options: [
        "A `Set` is a collection of unique values.",
        "A `Set` stores key-value pairs, with the keys being unique.",
        "A `Set` stores multiple values in an ordered list.",
        "A `Set` allows duplicates and null values."
      ],
      correctAnswer: "A `Set` is a collection of unique values.",
      answerDescription: "`Set` is a built-in JavaScript object that allows you to store unique values of any type, whether primitive or reference."
    },
    {
      id: 10,
      question: "What is the main difference between a `Set` and an `Array` in JavaScript?",
      options: [
        "`Set` only allows unique values, while `Array` can contain duplicates.",
        "`Set` is an ordered collection, while `Array` is unordered.",
        "`Set` allows objects, but `Array` does not.",
        "`Set` allows for index-based access, while `Array` does not."
      ],
      correctAnswer: "`Set` only allows unique values, while `Array` can contain duplicates.",
      answerDescription: "`Set` only stores unique values, whereas `Array` can store multiple occurrences of the same value."
    },
    {
      id: 11,
      question: "What is a `Map` in JavaScript and when would you use it?",
      options: [
        "A `Map` is an ordered collection of key-value pairs, where keys can be of any type.",
        "A `Map` is used to store a collection of unique values like a `Set`.",
        "A `Map` is used for storing JSON objects.",
        "A `Map` is used for storing primitive data types only."
      ],
      correctAnswer: "A `Map` is an ordered collection of key-value pairs, where keys can be of any type.",
      answerDescription: "A `Map` stores key-value pairs where both the keys and values can be of any type. It maintains the insertion order of the keys."
    },
    {
      id: 12,
      question: "What are the advantages of using a `Map` over an `Object` in JavaScript?",
      options: [
        "A `Map` maintains the insertion order of keys and allows keys of any type.",
        "An `Object` can only store string keys, while a `Map` allows any type.",
        "A `Map` is faster for large collections of key-value pairs.",
        "All of the above."
      ],
      correctAnswer: "All of the above.",
      answerDescription: "`Map` offers several advantages over `Object`, including the ability to use keys of any type, maintaining key insertion order, and providing better performance for large collections."
    },
    {
      id: 13,
      question: "How do you add a key-value pair to a `Map` in JavaScript?",
      options: [
        "Using the `set()` method, like `map.set(key, value)`.",
        "Using the `push()` method, like `map.push(key, value)`.",
        "Using the `add()` method, like `map.add(key, value)`.",
        "Using the `insert()` method, like `map.insert(key, value)`."
      ],
      correctAnswer: "Using the `set()` method, like `map.set(key, value)`.",
      answerDescription: "To add key-value pairs to a `Map`, you use the `set()` method. Example: `map.set(key, value)`."
    },
    {
      id: 14,
      question: "How do you get the value associated with a key in a `Map`?",
      options: [
        "Using the `get()` method, like `map.get(key)`.",
        "Using the `find()` method, like `map.find(key)`.",
        "Using the `search()` method, like `map.search(key)`.",
        "Using the `fetch()` method, like `map.fetch(key)`."
      ],
      correctAnswer: "Using the `get()` method, like `map.get(key)`.",
      answerDescription: "You can retrieve the value associated with a key in a `Map` by using the `get()` method."
    },
    {
      id: 15,
      question: "What method would you use to check if a `Map` contains a specific key?",
      options: [
        "Using the `has()` method, like `map.has(key)`.",
        "Using the `includes()` method, like `map.includes(key)`.",
        "Using the `contains()` method, like `map.contains(key)`.",
        "Using the `exists()` method, like `map.exists(key)`."
      ],
      correctAnswer: "Using the `has()` method, like `map.has(key)`.",
      answerDescription: "To check if a `Map` contains a specific key, you can use the `has()` method."
    },
    {
      id: 16,
      question: "How do you remove a key-value pair from a `Map`?",
      options: [
        "Using the `delete()` method, like `map.delete(key)`.",
        "Using the `remove()` method, like `map.remove(key)`.",
        "Using the `clear()` method to remove a specific key.",
        "Using the `discard()` method, like `map.discard(key)`."
      ],
      correctAnswer: "Using the `delete()` method, like `map.delete(key)`.",
      answerDescription: "To remove a key-value pair from a `Map`, you can use the `delete()` method."
    },
    {
      id: 17,
      question: "How do you check the size of a `Map` in JavaScript?",
      options: [
        "By using the `size` property, like `map.size`.",
        "By using the `length` property, like `map.length`.",
        "By using the `count()` method, like `map.count()`.",
        "By using the `getSize()` method, like `map.getSize()`."
      ],
      correctAnswer: "By using the `size` property, like `map.size`.",
      answerDescription: "To check the size of a `Map`, you can use the `size` property, which returns the number of key-value pairs in the map."
    },
    {
      id: 18,
      question: "How do you iterate over the keys of a `Map`?",
      options: [
        "By using the `keys()` method and a `for...of` loop.",
        "By using the `forEach()` method.",
        "By using the `values()` method.",
        "By using the `entries()` method."
      ],
      correctAnswer: "By using the `keys()` method and a `for...of` loop.",
      answerDescription: "You can iterate over the keys of a `Map` by using the `keys()` method and a `for...of` loop."
    },
    {
      id: 19,
      question: "How can you clear all key-value pairs from a `Map`?",
      options: [
        "Using the `clear()` method, like `map.clear()`.",
        "Using the `reset()` method, like `map.reset()`.",
        "Using the `empty()` method, like `map.empty()`.",
        "Using the `flush()` method, like `map.flush()`."
      ],
      correctAnswer: "Using the `clear()` method, like `map.clear()`.",
      answerDescription: "To clear all key-value pairs from a `Map`, you use the `clear()` method."
    },
    {
      id: 20,
      question: "Which of the following is true about `Map` and `Set` in JavaScript?",
      options: [
        "`Map` stores key-value pairs, and `Set` stores unique values.",
        "`Map` stores unique values, and `Set` stores key-value pairs.",
        "`Map` stores primitive values, and `Set` stores objects.",
        "`Map` and `Set` are used for identical purposes."
      ],
      correctAnswer: "`Map` stores key-value pairs, and `Set` stores unique values.",
      answerDescription: "`Map` stores key-value pairs, where keys can be of any type, while `Set` stores unique values with no duplicates."
    }
  ];
  
  export const errorHandling = [
    {
      id: 1,
      question: "How does error handling work with try/catch in JavaScript?",
      options: [
        "The code inside the `try` block is executed, and if any error occurs, it is caught in the `catch` block.",
        "The `catch` block will only catch errors in synchronous code, while `try` catches asynchronous errors.",
        "The `try` block always throws an error, and the `catch` block handles the error.",
        "Errors must be manually thrown using `throw` for `catch` to work."
      ],
      correctAnswer: "The code inside the `try` block is executed, and if any error occurs, it is caught in the `catch` block.",
      answerDescription: "In a `try/catch` block, JavaScript executes the code in the `try` block. If an error occurs, the `catch` block handles it."
    },
    {
      id: 2,
      question: "What is the purpose of the `finally` block in a `try/catch` statement?",
      options: [
        "The `finally` block is executed whether or not an error occurs, allowing for cleanup or final actions.",
        "The `finally` block is executed only if the `catch` block catches an error.",
        "The `finally` block is executed after the `try` block, but before the `catch` block.",
        "The `finally` block is used to catch errors that occur in the `catch` block."
      ],
      correctAnswer: "The `finally` block is executed whether or not an error occurs, allowing for cleanup or final actions.",
      answerDescription: "The `finally` block is always executed after the `try/catch` statement, whether an error was thrown or not, making it ideal for cleanup actions."
    },
    {
      id: 3,
      question: "What will be the output of the following code?\n`try { throw new Error('Test Error'); } catch (e) { console.log(e.message); }`",
      options: [
        "'Test Error'",
        "undefined",
        "Error: Test Error",
        "null"
      ],
      correctAnswer: "'Test Error'",
      answerDescription: "In the `catch` block, the `message` property of the `Error` object is logged, which contains 'Test Error'."
    },
    {
      id: 4,
      question: "What happens if there is no `catch` block in a `try/catch` statement?",
      options: [
        "The error is thrown to the global context.",
        "The program stops executing entirely.",
        "The error is ignored.",
        "A default error handler is invoked."
      ],
      correctAnswer: "The error is thrown to the global context.",
      answerDescription: "If there is no `catch` block, the error propagates to the next available handler, often leading to a global unhandled error."
    },
    {
      id: 5,
      question: "How do you create custom errors in JavaScript?",
      options: [
        "By extending the built-in `Error` class to create a custom error type.",
        "By using the `throw` keyword with a custom message.",
        "By using `catch` block to define custom error types.",
        "By using a special `CustomError` constructor function."
      ],
      correctAnswer: "By extending the built-in `Error` class to create a custom error type.",
      answerDescription: "Custom errors are created by extending the `Error` class, which allows for the addition of custom properties or methods."
    },
    {
      id: 6,
      question: "What is the syntax to create a custom error class in JavaScript?",
      options: [
        "class CustomError extends Error { constructor(message) { super(message); this.name = 'CustomError'; } }",
        "function CustomError(message) { this.message = message; }",
        "class CustomError { constructor(message) { this.message = message; } }",
        "throw new Error('Custom Error');"
      ],
      correctAnswer: "class CustomError extends Error { constructor(message) { super(message); this.name = 'CustomError'; } }",
      answerDescription: "To create a custom error, extend the `Error` class, pass the message to `super(message)` and set the error `name`."
    },
    {
      id: 7,
      question: "How do you throw a custom error in JavaScript?",
      options: [
        "throw new CustomError('This is a custom error');",
        "throw CustomError('This is a custom error');",
        "throw new Error('This is a custom error');",
        "throw CustomError = 'This is a custom error';"
      ],
      correctAnswer: "throw new CustomError('This is a custom error');",
      answerDescription: "You can throw a custom error by using `throw new CustomError('message')` after creating the custom error class."
    },
    {
      id: 8,
      question: "How do you catch a custom error in a `try/catch` block?",
      options: [
        "try { ... } catch (e) { if (e instanceof CustomError) { ... } }",
        "try { ... } catch (CustomError) { ... }",
        "try { ... } catch (e) { e instanceof CustomError }",
        "try { ... } catch (e) { if (e.name === 'CustomError') { ... } }"
      ],
      correctAnswer: "try { ... } catch (e) { if (e instanceof CustomError) { ... } }",
      answerDescription: "You can catch a custom error using `instanceof` to check if the error is an instance of your custom error class."
    },
    {
      id: 9,
      question: "What is the purpose of the `throw` statement in JavaScript?",
      options: [
        "The `throw` statement is used to generate an error manually.",
        "The `throw` statement is used to re-throw an error in a `catch` block.",
        "The `throw` statement is used to stop the execution of a function.",
        "The `throw` statement is used to define custom error types."
      ],
      correctAnswer: "The `throw` statement is used to generate an error manually.",
      answerDescription: "The `throw` statement allows you to throw an error manually, either built-in or custom, to be caught by a `catch` block."
    },
    {
      id: 10,
      question: "What is the effect of the `finally` block when an error is thrown in the `try` block?",
      options: [
        "The `finally` block will always execute, regardless of whether an error is thrown.",
        "The `finally` block will not execute if an error occurs.",
        "The `finally` block will only execute if the error is handled in the `catch` block.",
        "The `finally` block will rethrow the error."
      ],
      correctAnswer: "The `finally` block will always execute, regardless of whether an error is thrown.",
      answerDescription: "The `finally` block always executes after the `try/catch` block, regardless of whether an error was thrown or caught."
    },
    {
      id: 11,
      question: "How do you access the error message from a thrown error object?",
      options: [
        "error.message",
        "error.details",
        "error.info",
        "error.text"
      ],
      correctAnswer: "error.message",
      answerDescription: "The error message is stored in the `message` property of the error object."
    },
    {
      id: 12,
      question: "What is the difference between `throw` and `return` in JavaScript?",
      options: [
        "`throw` generates an error, while `return` ends the execution of a function.",
        "`throw` ends the execution of a function, while `return` generates an error.",
        "`throw` is used to return a value, while `return` is used to throw errors.",
        "`throw` and `return` can be used interchangeably."
      ],
      correctAnswer: "`throw` generates an error, while `return` ends the execution of a function.",
      answerDescription: "`throw` generates an error to be caught, whereas `return` returns a value and terminates a function's execution."
    },
    {
      id: 13,
      question: "Which of the following is a valid custom error class in JavaScript?",
      options: [
        "class CustomError extends Error { constructor(message) { super(message); this.name = 'CustomError'; } }",
        "class CustomError { constructor(message) { this.message = message; this.name = 'CustomError'; } }",
        "function CustomError(message) { this.message = message; this.name = 'CustomError'; }",
        "Error CustomError(message) { this.message = message; }"
      ],
      correctAnswer: "class CustomError extends Error { constructor(message) { super(message); this.name = 'CustomError'; } }",
      answerDescription: "A custom error class is created by extending the built-in `Error` class, allowing for customized error handling."
    },
    {
      id: 14,
      question: "How would you throw a custom error with additional properties in JavaScript?",
      options: [
        "throw new CustomError('message', { code: 400, timestamp: Date.now() });",
        "throw new CustomError('message').withProperties({ code: 400, timestamp: Date.now() });",
        "throw new Error('message', { code: 400, timestamp: Date.now() });",
        "throw new Error('message').withProperties({ code: 400, timestamp: Date.now() });"
      ],
      correctAnswer: "throw new CustomError('message', { code: 400, timestamp: Date.now() });",
      answerDescription: "Custom error objects can hold additional properties like `code` or `timestamp` by passing them in the constructor."
    },
    {
      id: 15,
      question: "What will happen if you omit the `catch` block in a `try/catch` statement and an error occurs?",
      options: [
        "The error will propagate to the next available handler or the global scope.",
        "The error will be ignored.",
        "The program will terminate immediately.",
        "A default error message will be displayed."
      ],
      correctAnswer: "The error will propagate to the next available handler or the global scope.",
      answerDescription: "If there is no `catch` block, the error will bubble up and may be handled by a global error handler or terminate the script."
    },
    {
      id: 16,
      question: "Which of the following best describes error handling in asynchronous JavaScript?",
      options: [
        "You use `.catch()` to handle errors in promises or `try/catch` with async/await.",
        "You always need to use `try/catch` with asynchronous code.",
        "Asynchronous code cannot throw errors.",
        "Errors are automatically handled by JavaScript for asynchronous operations."
      ],
      correctAnswer: "You use `.catch()` to handle errors in promises or `try/catch` with async/await.",
      answerDescription: "In asynchronous code, errors can be caught using `.catch()` for promises or `try/catch` in `async` functions."
    },
    {
      id: 17,
      question: "What happens if you throw an error from an `async` function?",
      options: [
        "The error is returned as a rejected promise.",
        "The error will be caught by the surrounding `try/catch` block.",
        "The error is ignored and the function continues.",
        "The error will trigger a `finally` block."
      ],
      correctAnswer: "The error is returned as a rejected promise.",
      answerDescription: "When an error is thrown from an `async` function, it is returned as a rejected promise, which can be handled with `.catch()`."
    },
    {
      id: 18,
      question: "What is the effect of `throw` in a `finally` block?",
      options: [
        "If `throw` is used in the `finally` block, it will override any previously thrown error.",
        "The `throw` will be ignored if used in the `finally` block.",
        "The `throw` will be caught by the `catch` block in the `try/catch` statement.",
        "It will automatically stop the execution of the `finally` block."
      ],
      correctAnswer: "If `throw` is used in the `finally` block, it will override any previously thrown error.",
      answerDescription: "`throw` in the `finally` block will override any previously thrown error and propagate that error instead."
    },
    {
      id: 19,
      question: "Which of the following methods can be used to capture a global unhandled error in JavaScript?",
      options: [
        "window.onerror",
        "document.onerror",
        "global.onerror",
        "error.capture"
      ],
      correctAnswer: "window.onerror",
      answerDescription: "You can use the `window.onerror` method to handle global errors that are not caught by any `try/catch` blocks."
    },
    {
      id: 20,
      question: "Which of the following is true about error handling in asynchronous code using `async/await`?",
      options: [
        "You can use `try/catch` blocks to handle errors in asynchronous code.",
        "`async/await` automatically handles all errors without the need for `try/catch`.",
        "Errors thrown in `async` functions do not need to be handled.",
        "You can use `.catch()` to catch errors only in synchronous functions."
      ],
      correctAnswer: "You can use `try/catch` blocks to handle errors in asynchronous code.",
      answerDescription: "In asynchronous code with `async/await`, errors can be handled using `try/catch` blocks to catch any exceptions."
    }
  ];
  
  export const domManipulation = [
    {
      id: 1,
      question: "How do you select an element in the DOM and change its content?",
      options: [
        "document.querySelector('selector').innerHTML = 'New Content';",
        "document.getElementById('id').text = 'New Content';",
        "document.querySelector('selector').value = 'New Content';",
        "document.querySelector('selector').setAttribute('content', 'New Content');"
      ],
      correctAnswer: "document.querySelector('selector').innerHTML = 'New Content';",
      answerDescription: "You can use `document.querySelector()` to select an element and `innerHTML` to change its content."
    },
    {
      id: 2,
      question: "How do you select an element by its ID in the DOM?",
      options: [
        "document.getElementById('id')",
        "document.querySelector('#id')",
        "document.getElementsByClassName('id')",
        "document.getElementByClassName('id')"
      ],
      correctAnswer: "document.getElementById('id')",
      answerDescription: "To select an element by its ID, you can use `document.getElementById()`, which returns a single element with the given ID."
    },
    {
      id: 3,
      question: "How do you add an event listener to a button that logs 'Button Clicked' when clicked?",
      options: [
        "document.querySelector('button').addEventListener('click', function() { console.log('Button Clicked'); });",
        "document.querySelector('button').onClick = function() { console.log('Button Clicked'); };",
        "document.getElementById('button').onclick = function() { console.log('Button Clicked'); };",
        "document.getElementById('button').addEventListener('click', console.log('Button Clicked'));"
      ],
      correctAnswer: "document.querySelector('button').addEventListener('click', function() { console.log('Button Clicked'); });",
      answerDescription: "You can use `addEventListener` to attach a click event handler to the button, logging 'Button Clicked' when the button is clicked."
    },
    {
      id: 4,
      question: "How do you remove an event listener from a button?",
      options: [
        "document.querySelector('button').removeEventListener('click', handler);",
        "document.querySelector('button').removeEventListener('click');",
        "document.querySelector('button').onClick = null;",
        "document.getElementById('button').off('click', handler);"
      ],
      correctAnswer: "document.querySelector('button').removeEventListener('click', handler);",
      answerDescription: "To remove an event listener, you need to use `removeEventListener()` and pass the same event type and handler function."
    },
    {
      id: 5,
      question: "What is the difference between `addEventListener()` and `onClick`?",
      options: [
        "`addEventListener()` can handle multiple event listeners on the same element, while `onClick` can only handle one.",
        "`onClick` can handle multiple event listeners, while `addEventListener()` can only handle one.",
        "`addEventListener()` is used to listen for keyboard events, while `onClick` is for mouse events.",
        "`onClick` is used for inline event handling, while `addEventListener()` is used for external scripts."
      ],
      correctAnswer: "`addEventListener()` can handle multiple event listeners on the same element, while `onClick` can only handle one.",
      answerDescription: "`addEventListener()` allows you to add multiple event listeners to an element, while `onClick` can only assign one handler function."
    },
    {
      id: 6,
      question: "How can you prevent the default action of a form submission event in JavaScript?",
      options: [
        "event.preventDefault();",
        "event.stopPropagation();",
        "return false;",
        "event.cancel();"
      ],
      correctAnswer: "event.preventDefault();",
      answerDescription: "You can prevent the default action (such as form submission) using `event.preventDefault()` inside an event handler."
    },
    {
      id: 7,
      question: "What is event delegation in JavaScript?",
      options: [
        "It is a technique where events are attached to parent elements rather than individual child elements, improving performance and handling dynamic content.",
        "It is a method for attaching events to multiple elements at once.",
        "It is a way to delegate control of event handling to third-party libraries.",
        "It is used to limit event listeners to certain areas of the DOM."
      ],
      correctAnswer: "It is a technique where events are attached to parent elements rather than individual child elements, improving performance and handling dynamic content.",
      answerDescription: "Event delegation is a strategy where you attach a single event listener to a parent element and handle events for child elements dynamically."
    },
    {
      id: 8,
      question: "Which method allows you to get all elements with a specific class name?",
      options: [
        "document.getElementsByClassName('className')",
        "document.querySelectorAll('.className')",
        "document.getElementsByTagName('className')",
        "document.querySelector('.className')"
      ],
      correctAnswer: "document.getElementsByClassName('className')",
      answerDescription: "To select all elements with a specific class name, you can use `document.getElementsByClassName('className')`, which returns a live HTMLCollection."
    },
    {
      id: 9,
      question: "How do you access the value of an input field?",
      options: [
        "document.querySelector('input').value",
        "document.querySelector('input').innerText",
        "document.querySelector('input').content",
        "document.getElementById('input').innerHTML"
      ],
      correctAnswer: "document.querySelector('input').value",
      answerDescription: "You can access the value of an input field using the `.value` property of the element."
    },
    {
      id: 10,
      question: "How can you modify the CSS style of an element in JavaScript?",
      options: [
        "document.querySelector('element').style.property = 'value';",
        "document.querySelector('element').setAttribute('style', 'property: value;');",
        "document.querySelector('element').style.cssText = 'property: value;';",
        "document.querySelector('element').setStyle('property', 'value');"
      ],
      correctAnswer: "document.querySelector('element').style.property = 'value';",
      answerDescription: "You can modify an element's CSS style by accessing its `style` property and setting the specific CSS properties."
    },
    {
      id: 11,
      question: "How can you add a new class to an element using JavaScript?",
      options: [
        "document.querySelector('element').classList.add('newClass');",
        "document.querySelector('element').addClass('newClass');",
        "document.querySelector('element').setAttribute('class', 'newClass');",
        "document.querySelector('element').className = 'newClass';"
      ],
      correctAnswer: "document.querySelector('element').classList.add('newClass');",
      answerDescription: "You can use `classList.add()` to add a new class to an element without replacing any existing classes."
    },
    {
      id: 12,
      question: "How do you remove a class from an element?",
      options: [
        "document.querySelector('element').classList.remove('className');",
        "document.querySelector('element').removeClass('className');",
        "document.querySelector('element').setAttribute('class', '');",
        "document.querySelector('element').className = '';"
      ],
      correctAnswer: "document.querySelector('element').classList.remove('className');",
      answerDescription: "You can remove a class from an element by using `classList.remove()`, which removes the specified class from the element."
    },
    {
      id: 13,
      question: "What method allows you to find the first matching element of a selector?",
      options: [
        "document.querySelector('selector')",
        "document.querySelectorAll('selector')",
        "document.getElementsByClassName('selector')",
        "document.getElementById('selector')"
      ],
      correctAnswer: "document.querySelector('selector')",
      answerDescription: "To find the first element that matches a specific CSS selector, use `document.querySelector()`."
    },
    {
      id: 14,
      question: "What is the `innerHTML` property used for?",
      options: [
        "It is used to get or set the HTML content inside an element.",
        "It is used to retrieve the plain text content of an element.",
        "It is used to access an element's attribute values.",
        "It is used to modify the background color of an element."
      ],
      correctAnswer: "It is used to get or set the HTML content inside an element.",
      answerDescription: "The `innerHTML` property is used to get or set the HTML content inside an element, including nested elements."
    },
    {
      id: 15,
      question: "How do you attach an event listener to multiple elements at once?",
      options: [
        "By using event delegation on the parent element.",
        "By attaching the listener to each element individually.",
        "By using `addEventListener()` with an array of elements.",
        "By iterating through the elements and attaching the event to each one."
      ],
      correctAnswer: "By iterating through the elements and attaching the event to each one.",
      answerDescription: "To attach an event listener to multiple elements, you can iterate through the elements and use `addEventListener()` on each one."
    },
    {
      id: 16,
      question: "What is the `document.createElement()` method used for?",
      options: [
        "It is used to create a new HTML element dynamically.",
        "It is used to access an existing HTML element.",
        "It is used to add a new element to the DOM.",
        "It is used to remove an element from the DOM."
      ],
      correctAnswer: "It is used to create a new HTML element dynamically.",
      answerDescription: "The `document.createElement()` method allows you to create a new HTML element that can later be added to the DOM."
    },
    {
      id: 17,
      question: "How do you append a newly created element to the DOM?",
      options: [
        "document.body.appendChild(newElement);",
        "document.querySelector('body').addChild(newElement);",
        "document.body.append(newElement);",
        "document.body.appendChild(newElement).toDOM();"
      ],
      correctAnswer: "document.body.appendChild(newElement);",
      answerDescription: "To add a newly created element to the DOM, you can use `appendChild()` to append it as a child to a parent element."
    },
    {
      id: 18,
      question: "What does the `document.querySelectorAll()` method return?",
      options: [
        "A NodeList of all matching elements.",
        "A single element.",
        "An array of all matching elements.",
        "A collection of all child nodes."
      ],
      correctAnswer: "A NodeList of all matching elements.",
      answerDescription: "`document.querySelectorAll()` returns a static NodeList containing all matching elements in the DOM."
    },
    {
      id: 19,
      question: "Which method can be used to get all child elements of a specific element?",
      options: [
        "element.children",
        "element.querySelectorAll('*')",
        "element.getElementsByClassName('*')",
        "element.childNodes"
      ],
      correctAnswer: "element.children",
      answerDescription: "`element.children` returns a live HTMLCollection of all child elements of the specified element."
    },
    {
      id: 20,
      question: "How do you check if an element is part of the DOM?",
      options: [
        "element.isConnected",
        "element.isInDOM",
        "element.isPresent",
        "element.isVisible"
      ],
      correctAnswer: "element.isConnected",
      answerDescription: "`element.isConnected` returns `true` if the element is currently part of the DOM, otherwise `false`."
    }
  ];
  
  export const algorithmsAndDataStructures = [
    {
      id: 1,
      question: "How do you sort an array of numbers in ascending order?",
      options: [
        "Using the `sort()` method in JavaScript.",
        "Using the `reverse()` method in JavaScript.",
        "By manually iterating and swapping the elements.",
        "Using the `arr.push()` method."
      ],
      correctAnswer: "Using the `sort()` method in JavaScript.",
      answerDescription: "In JavaScript, you can use the `sort()` method to sort an array of numbers in ascending order."
    },
    {
      id: 2,
      question: "Can you implement a binary search algorithm?",
      options: [
        "Yes, by using a recursive or iterative approach to search the middle element.",
        "No, binary search only works with strings.",
        "Yes, but it only works on unsorted arrays.",
        "No, binary search is not an algorithm for searching."
      ],
      correctAnswer: "Yes, by using a recursive or iterative approach to search the middle element.",
      answerDescription: "Binary search is a search algorithm that works by dividing the search space in half and repeatedly narrowing down the possibilities."
    },
    {
      id: 3,
      question: "What is Big-O notation?",
      options: [
        "It is a notation that describes the performance or complexity of an algorithm in terms of input size.",
        "It is used to measure the total time taken for an algorithm to run.",
        "It is used to represent the space required by a program.",
        "It measures how fast an algorithm executes in real-time."
      ],
      correctAnswer: "It is a notation that describes the performance or complexity of an algorithm in terms of input size.",
      answerDescription: "Big-O notation describes the upper bound of the algorithm's time or space complexity in the worst case as the input size grows."
    },
    {
      id: 4,
      question: "What is the time complexity of a quicksort algorithm?",
      options: [
        "O(n log n) on average and O(n^2) in the worst case.",
        "O(n^2) in the average and worst case.",
        "O(log n) in the best case.",
        "O(n) in the average case."
      ],
      correctAnswer: "O(n log n) on average and O(n^2) in the worst case.",
      answerDescription: "Quicksort has an average time complexity of O(n log n), but in the worst case (when the pivot is poorly chosen), it can degrade to O(n^2)."
    },
    {
      id: 5,
      question: "What is the time complexity of merge sort?",
      options: [
        "O(n log n) for both best, average, and worst cases.",
        "O(n^2) for all cases.",
        "O(log n) for best cases.",
        "O(n) for average cases."
      ],
      correctAnswer: "O(n log n) for both best, average, and worst cases.",
      answerDescription: "Merge sort always has a time complexity of O(n log n) regardless of the input."
    },
    {
      id: 6,
      question: "What is the worst-case time complexity of bubble sort?",
      options: [
        "O(n^2)",
        "O(n log n)",
        "O(n)",
        "O(log n)"
      ],
      correctAnswer: "O(n^2)",
      answerDescription: "In the worst case, bubble sort has a time complexity of O(n^2) when the array is reversed."
    },
    {
      id: 7,
      question: "How does binary search work?",
      options: [
        "It divides the array into two halves and compares the middle element with the target value.",
        "It searches the array sequentially from start to finish.",
        "It always checks the first and last elements of the array.",
        "It selects a random element and compares it with the target."
      ],
      correctAnswer: "It divides the array into two halves and compares the middle element with the target value.",
      answerDescription: "Binary search works by repeatedly dividing the search space in half, comparing the middle element to the target, and narrowing down the range."
    },
    {
      id: 8,
      question: "What is the time complexity of binary search?",
      options: [
        "O(log n)",
        "O(n)",
        "O(n log n)",
        "O(n^2)"
      ],
      correctAnswer: "O(log n)",
      answerDescription: "Binary search has a time complexity of O(log n) because the search space is halved with each comparison."
    },
    {
      id: 9,
      question: "What is the space complexity of merge sort?",
      options: [
        "O(n)",
        "O(n log n)",
        "O(1)",
        "O(log n)"
      ],
      correctAnswer: "O(n)",
      answerDescription: "Merge sort requires additional space to store the divided arrays during the merging process, leading to O(n) space complexity."
    },
    {
      id: 10,
      question: "What does it mean if an algorithm has a time complexity of O(n^2)?",
      options: [
        "The algorithm takes time proportional to the square of the input size.",
        "The algorithm is extremely efficient.",
        "The algorithm takes time proportional to the input size.",
        "The algorithm's time complexity doesn't change with input size."
      ],
      correctAnswer: "The algorithm takes time proportional to the square of the input size.",
      answerDescription: "O(n^2) means that the algorithm's execution time grows quadratically with the input size. An example is bubble sort."
    },
    {
      id: 11,
      question: "How does selection sort work?",
      options: [
        "It repeatedly selects the smallest element from the unsorted portion of the array and swaps it with the first unsorted element.",
        "It splits the array into sub-arrays and sorts each one independently.",
        "It sorts the array by repeatedly swapping adjacent elements.",
        "It picks the middle element as the pivot and sorts around it."
      ],
      correctAnswer: "It repeatedly selects the smallest element from the unsorted portion of the array and swaps it with the first unsorted element.",
      answerDescription: "Selection sort repeatedly selects the smallest element from the unsorted portion of the array and places it in the correct position."
    },
    {
      id: 12,
      question: "What is a hash table?",
      options: [
        "A data structure that stores key-value pairs with fast lookup time.",
        "A data structure that stores values in sorted order.",
        "A linear data structure that stores elements in sequence.",
        "A structure that allows fast insertion and deletion but slow lookups."
      ],
      correctAnswer: "A data structure that stores key-value pairs with fast lookup time.",
      answerDescription: "A hash table stores data in key-value pairs, providing fast access to elements by hashing the key."
    },
    {
      id: 13,
      question: "What is the time complexity of accessing an element in an array?",
      options: [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n^2)"
      ],
      correctAnswer: "O(1)",
      answerDescription: "Accessing an element by index in an array is a constant time operation, O(1)."
    },
    {
      id: 14,
      question: "What is the time complexity of finding the maximum value in an unsorted array?",
      options: [
        "O(n)",
        "O(log n)",
        "O(n^2)",
        "O(1)"
      ],
      correctAnswer: "O(n)",
      answerDescription: "Finding the maximum value in an unsorted array requires iterating through the entire array, making it an O(n) operation."
    },
    {
      id: 15,
      question: "What does a balanced binary search tree (BST) guarantee?",
      options: [
        "That the depth of the tree is minimal, leading to efficient operations.",
        "That every node has two children.",
        "That the left child is smaller than the right child at every level.",
        "That all elements are sorted in increasing order."
      ],
      correctAnswer: "That the depth of the tree is minimal, leading to efficient operations.",
      answerDescription: "A balanced BST ensures that the tree's depth is minimal, resulting in efficient operations like search, insert, and delete (O(log n))."
    },
    {
      id: 16,
      question: "What is the time complexity of insertion sort?",
      options: [
        "O(n^2)",
        "O(n log n)",
        "O(n)",
        "O(log n)"
      ],
      correctAnswer: "O(n^2)",
      answerDescription: "Insertion sort has a worst-case time complexity of O(n^2) when the input array is in reverse order."
    },
    {
      id: 17,
      question: "What is a queue data structure?",
      options: [
        "A linear structure that follows First-In-First-Out (FIFO) order.",
        "A structure where elements are processed in a Last-In-First-Out (LIFO) order.",
        "A structure that allows random access to elements.",
        "A data structure used for searching and sorting."
      ],
      correctAnswer: "A linear structure that follows First-In-First-Out (FIFO) order.",
      answerDescription: "A queue is a linear data structure that follows the FIFO principle, meaning the first element added is the first one removed."
    },
    {
      id: 18,
      question: "What is the time complexity of enqueue and dequeue operations in a queue?",
      options: [
        "O(1)",
        "O(n)",
        "O(log n)",
        "O(n^2)"
      ],
      correctAnswer: "O(1)",
      answerDescription: "Both enqueue (adding an element) and dequeue (removing an element) operations in a queue can be done in constant time, O(1)."
    },
    {
      id: 19,
      question: "What is the space complexity of an algorithm that uses a constant amount of space, regardless of the input size?",
      options: [
        "O(1)",
        "O(n)",
        "O(n^2)",
        "O(log n)"
      ],
      correctAnswer: "O(1)",
      answerDescription: "An algorithm that uses a constant amount of space regardless of input size has O(1) space complexity."
    },
    {
      id: 20,
      question: "What is the worst-case time complexity of the heap sort algorithm?",
      options: [
        "O(n log n)",
        "O(n^2)",
        "O(n)",
        "O(log n)"
      ],
      correctAnswer: "O(n log n)",
      answerDescription: "Heap sort has a worst-case time complexity of O(n log n) because it builds a heap in O(n) time and then sorts it with repeated O(log n) operations."
    }
  ];
  
  export const memoryManagementAndOptimization = [
    {
      id: 1,
      question: "What is garbage collection in JavaScript?",
      options: [
        "It is the process of automatically reclaiming memory that is no longer in use.",
        "It is the manual process of freeing memory allocated to variables.",
        "It is the process of tracking memory leaks in JavaScript.",
        "It is the process of storing objects in memory for future use."
      ],
      correctAnswer: "It is the process of automatically reclaiming memory that is no longer in use.",
      answerDescription: "Garbage collection in JavaScript refers to the automatic process of reclaiming memory that is no longer accessible or in use by the program."
    },
    {
      id: 2,
      question: "How does garbage collection work in JavaScript?",
      options: [
        "JavaScript uses reference counting and the mark-and-sweep algorithm.",
        "JavaScript only uses reference counting for memory management.",
        "JavaScript relies on manual memory management from the programmer.",
        "JavaScript never uses garbage collection."
      ],
      correctAnswer: "JavaScript uses reference counting and the mark-and-sweep algorithm.",
      answerDescription: "JavaScript uses a combination of reference counting and the mark-and-sweep algorithm to identify and collect unreachable objects and free memory."
    },
    {
      id: 3,
      question: "What is a memory leak in JavaScript?",
      options: [
        "It occurs when memory that is no longer needed is not released.",
        "It is a feature that prevents memory from being freed.",
        "It happens when a variable is too large for the system to handle.",
        "It happens when a function runs indefinitely."
      ],
      correctAnswer: "It occurs when memory that is no longer needed is not released.",
      answerDescription: "A memory leak happens when objects that are no longer in use are not properly released, causing the application to consume more memory over time."
    },
    {
      id: 4,
      question: "How can you prevent memory leaks in JavaScript?",
      options: [
        "By manually setting variables to null when they are no longer needed.",
        "By using local variables only in functions.",
        "By limiting the number of variables in the code.",
        "By always using a garbage collector."
      ],
      correctAnswer: "By manually setting variables to null when they are no longer needed.",
      answerDescription: "Memory leaks can be avoided by ensuring that variables, especially references to large objects, are set to null or undefined once they are no longer needed."
    },
    {
      id: 5,
      question: "What is the common cause of memory leaks in JavaScript?",
      options: [
        "Global variables and unused event listeners.",
        "Short-lived variables inside functions.",
        "Avoiding the use of closures.",
        "Using `const` instead of `let`."
      ],
      correctAnswer: "Global variables and unused event listeners.",
      answerDescription: "Memory leaks often occur when variables are unintentionally kept alive in global scope or when event listeners are added but never removed."
    },
    {
      id: 6,
      question: "How do closures contribute to memory leaks?",
      options: [
        "Closures can keep references to variables in memory even after the outer function has finished execution.",
        "Closures have no impact on memory management.",
        "Closures automatically clean up memory once they go out of scope.",
        "Closures only keep local variables in memory."
      ],
      correctAnswer: "Closures can keep references to variables in memory even after the outer function has finished execution.",
      answerDescription: "Closures can unintentionally keep references to variables in memory, which may result in memory leaks if those variables are not properly disposed of."
    },
    {
      id: 7,
      question: "What is the best way to remove event listeners to avoid memory leaks?",
      options: [
        "By calling `removeEventListener()` when the event is no longer needed.",
        "By deleting the event listener function.",
        "By using a flag variable to check for event listener removal.",
        "By not adding event listeners in the first place."
      ],
      correctAnswer: "By calling `removeEventListener()` when the event is no longer needed.",
      answerDescription: "To avoid memory leaks, event listeners should be removed with `removeEventListener()` when they are no longer needed."
    },
    {
      id: 8,
      question: "How can you track memory usage in JavaScript?",
      options: [
        "Using browser developer tools like the 'Memory' tab.",
        "Using `console.log()` to track memory usage.",
        "By profiling code execution time.",
        "By limiting the number of objects created."
      ],
      correctAnswer: "Using browser developer tools like the 'Memory' tab.",
      answerDescription: "Most modern browsers provide tools like the 'Memory' tab in the Developer Tools to monitor memory usage and identify potential memory leaks."
    },
    {
      id: 9,
      question: "What is the purpose of `window.gc()` in JavaScript?",
      options: [
        "It manually triggers garbage collection in environments that support it.",
        "It is a method to explicitly clean memory from the DOM.",
        "It increases memory usage for better performance.",
        "It is a deprecated feature."
      ],
      correctAnswer: "It manually triggers garbage collection in environments that support it.",
      answerDescription: "`window.gc()` is available in some browser environments (e.g., Chrome) for manual garbage collection, but it’s typically not available in production environments."
    },
    {
      id: 10,
      question: "Which method can be used to optimize the performance of an application using large data sets?",
      options: [
        "Use lazy loading to only load data when needed.",
        "Use `eval()` to run large scripts dynamically.",
        "Use global variables to hold large data in memory.",
        "Increase the size of the memory cache."
      ],
      correctAnswer: "Use lazy loading to only load data when needed.",
      answerDescription: "Lazy loading is a technique to improve performance by loading only the data necessary for immediate use, reducing memory usage."
    },
    {
      id: 11,
      question: "What is the purpose of the `WeakMap` in JavaScript?",
      options: [
        "It allows objects to be garbage collected when there are no other references to them.",
        "It stores key-value pairs in which both the keys and values are weakly referenced.",
        "It is used to store data that doesn't need to be garbage collected.",
        "It helps to optimize the garbage collection process."
      ],
      correctAnswer: "It allows objects to be garbage collected when there are no other references to them.",
      answerDescription: "A `WeakMap` allows its keys to be garbage collected when there are no other references to them, making it useful for avoiding memory leaks."
    },
    {
      id: 12,
      question: "What is a best practice to prevent memory leaks when working with large numbers of DOM elements?",
      options: [
        "Use event delegation to handle events for multiple elements efficiently.",
        "Manually clean up every DOM element after use.",
        "Store all DOM elements in global variables.",
        "Use `innerHTML` to quickly replace DOM elements."
      ],
      correctAnswer: "Use event delegation to handle events for multiple elements efficiently.",
      answerDescription: "Event delegation allows you to attach a single event listener to a parent element, which can manage events for multiple child elements, thus avoiding excessive event listeners and potential memory leaks."
    },
    {
      id: 13,
      question: "How can you prevent memory leaks when working with large arrays?",
      options: [
        "By ensuring that objects and references within the array are properly disposed of.",
        "By copying arrays into new arrays after every operation.",
        "By using global variables to store arrays.",
        "By using arrays as frequently as possible in the code."
      ],
      correctAnswer: "By ensuring that objects and references within the array are properly disposed of.",
      answerDescription: "Ensuring that objects and references within large arrays are properly cleared after use can help prevent memory leaks."
    },
    {
      id: 14,
      question: "Which JavaScript feature can help improve performance when working with large datasets?",
      options: [
        "Web Workers to run scripts in background threads.",
        "Using `eval()` to evaluate large blocks of code.",
        "Using synchronous AJAX calls.",
        "Using large global variables to store data."
      ],
      correctAnswer: "Web Workers to run scripts in background threads.",
      answerDescription: "Web Workers allow for offloading computationally intensive tasks to background threads, improving performance and preventing UI blocking."
    },
    {
      id: 15,
      question: "What is the impact of using `eval()` on performance?",
      options: [
        "It can lead to performance issues due to dynamic code evaluation.",
        "It makes the code run faster by dynamically compiling it.",
        "It improves performance by caching evaluated code.",
        "It has no effect on performance."
      ],
      correctAnswer: "It can lead to performance issues due to dynamic code evaluation.",
      answerDescription: "`eval()` can cause performance problems because it forces the JavaScript engine to reparse and recompile the code, which can be slow."
    },
    {
      id: 16,
      question: "What does the `requestAnimationFrame()` method do?",
      options: [
        "It helps to optimize animation performance by scheduling animations to run before the next repaint.",
        "It runs the animation code asynchronously.",
        "It accelerates the animation by running it in parallel with other tasks.",
        "It forces the browser to repaint immediately."
      ],
      correctAnswer: "It helps to optimize animation performance by scheduling animations to run before the next repaint.",
      answerDescription: "`requestAnimationFrame()` schedules a function to run before the next repaint, optimizing animations and reducing unnecessary computation."
    },
    {
      id: 17,
      question: "How do you optimize memory usage when dealing with large JSON data in JavaScript?",
      options: [
        "By parsing the JSON data only when needed, instead of storing it all in memory at once.",
        "By using synchronous parsing of JSON data.",
        "By converting the JSON data into a string and storing it in localStorage.",
        "By manipulating the raw JSON as a string without parsing it."
      ],
      correctAnswer: "By parsing the JSON data only when needed, instead of storing it all in memory at once.",
      answerDescription: "Large JSON datasets can be optimized by parsing only the required portions at a time, avoiding loading the entire dataset into memory."
    },
    {
      id: 18,
      question: "What is the effect of using too many global variables on memory?",
      options: [
        "Global variables can cause memory leaks because they remain in memory for the lifetime of the application.",
        "Global variables have no impact on memory.",
        "Global variables improve performance by reducing memory usage.",
        "Global variables automatically clean up memory when no longer needed."
      ],
      correctAnswer: "Global variables can cause memory leaks because they remain in memory for the lifetime of the application.",
      answerDescription: "Global variables persist for the lifetime of the application, which can lead to memory leaks if not handled properly."
    },
    {
      id: 19,
      question: "What is the purpose of object pooling in JavaScript?",
      options: [
        "Object pooling is used to manage memory by reusing objects instead of frequently creating and destroying them.",
        "It is used to prevent memory leaks by manually cleaning up objects.",
        "It is used to create more objects to use them temporarily.",
        "It is used to delay garbage collection."
      ],
      correctAnswer: "Object pooling is used to manage memory by reusing objects instead of frequently creating and destroying them.",
      answerDescription: "Object pooling improves memory management by reusing objects, reducing the overhead of constant object creation and destruction."
    },
    {
      id: 20,
      question: "How can you optimize the performance of a website with many DOM elements?",
      options: [
        "By using `documentFragment` to batch updates to the DOM.",
        "By manually changing the innerHTML of each element.",
        "By using global variables to store DOM elements.",
        "By avoiding any DOM manipulation."
      ],
      correctAnswer: "By using `documentFragment` to batch updates to the DOM.",
      answerDescription: "`documentFragment` allows for batching DOM updates and reducing reflows and repaints, improving performance."
    }
  ];
  
  export const javascriptDesignPatterns = [
    {
      id: 1,
      question: "What is an IIFE (Immediately Invoked Function Expression) in JavaScript?",
      options: [
        "It is a function that is defined and immediately invoked at the same time.",
        "It is a function that is called only when a specific condition is met.",
        "It is a function that invokes other functions after a delay.",
        "It is a function that is invoked once when the script loads."
      ],
      correctAnswer: "It is a function that is defined and immediately invoked at the same time.",
      answerDescription: "An IIFE is a function that is defined and executed immediately after its declaration, often used to create a local scope."
    },
    {
      id: 2,
      question: "What is the main advantage of using an IIFE?",
      options: [
        "It avoids polluting the global scope by creating a local scope.",
        "It improves performance by reducing function call overhead.",
        "It allows functions to be asynchronous.",
        "It helps to avoid JavaScript syntax errors."
      ],
      correctAnswer: "It avoids polluting the global scope by creating a local scope.",
      answerDescription: "IIFEs are used to create a private scope, helping to avoid polluting the global namespace with variables and functions."
    },
    {
      id: 3,
      question: "How do you define an IIFE in JavaScript?",
      options: [
        "(function() { /* code */ })();",
        "(function() { /* code */ });",
        "function() { /* code */ }();",
        "function() { /* code */ }"
      ],
      correctAnswer: "(function() { /* code */ })();",
      answerDescription: "An IIFE is defined using an anonymous function that is immediately invoked using parentheses."
    },
    {
      id: 4,
      question: "What is the Module Pattern in JavaScript?",
      options: [
        "A design pattern that encapsulates code in a function to create private and public parts.",
        "A design pattern that combines multiple functions into a single object.",
        "A design pattern that minimizes function calls.",
        "A pattern used to handle asynchronous code."
      ],
      correctAnswer: "A design pattern that encapsulates code in a function to create private and public parts.",
      answerDescription: "The Module Pattern encapsulates functionality within a function scope, allowing for public methods to be exposed while keeping other parts private."
    },
    {
      id: 5,
      question: "How can you create a module in JavaScript?",
      options: [
        "By defining an object that contains public and private methods.",
        "By using a class with private properties.",
        "By using an IIFE to return an object.",
        "By using a function that directly manipulates the DOM."
      ],
      correctAnswer: "By using an IIFE to return an object.",
      answerDescription: "Modules are often implemented using IIFEs to expose a public interface while keeping the implementation details private."
    },
    {
      id: 6,
      question: "What is the Singleton Pattern in JavaScript?",
      options: [
        "A pattern that ensures a class has only one instance and provides a global point of access.",
        "A pattern that creates multiple instances of a class with unique data.",
        "A pattern used to store global variables in a single object.",
        "A pattern used to encapsulate complex functions."
      ],
      correctAnswer: "A pattern that ensures a class has only one instance and provides a global point of access.",
      answerDescription: "The Singleton Pattern ensures that a class has only one instance, and that instance is accessible globally."
    },
    {
      id: 7,
      question: "How can you implement the Singleton Pattern in JavaScript?",
      options: [
        "By using a static method that returns a single instance of the class.",
        "By creating an instance in the constructor and storing it globally.",
        "By using a function to check if the instance already exists before creating a new one.",
        "By using closures to create private data within a class."
      ],
      correctAnswer: "By using a function to check if the instance already exists before creating a new one.",
      answerDescription: "The Singleton Pattern can be implemented by checking if the instance already exists and only creating a new one if necessary."
    },
    {
      id: 8,
      question: "What is the purpose of the Factory Pattern in JavaScript?",
      options: [
        "To create objects based on a specific set of data or conditions without exposing the instantiation logic.",
        "To store a collection of reusable objects.",
        "To ensure that a class has only one instance.",
        "To manage asynchronous operations in JavaScript."
      ],
      correctAnswer: "To create objects based on a specific set of data or conditions without exposing the instantiation logic.",
      answerDescription: "The Factory Pattern provides a way to create objects without exposing the instantiation logic, allowing flexibility in object creation."
    },
    {
      id: 9,
      question: "How does the Factory Pattern help in creating objects?",
      options: [
        "It provides a method that creates objects based on input parameters or conditions.",
        "It creates a class that is responsible for object creation and management.",
        "It creates new classes for each object type.",
        "It allows for the direct manipulation of DOM elements."
      ],
      correctAnswer: "It provides a method that creates objects based on input parameters or conditions.",
      answerDescription: "A Factory Pattern creates objects based on specific parameters or conditions without exposing the object creation logic."
    },
    {
      id: 10,
      question: "What is a key difference between the Factory Pattern and the Constructor Pattern?",
      options: [
        "The Factory Pattern hides the instantiation details, whereas the Constructor Pattern exposes them.",
        "The Factory Pattern uses the `new` keyword, while the Constructor Pattern does not.",
        "The Factory Pattern is used for function-based classes only.",
        "The Constructor Pattern is only useful for creating singleton objects."
      ],
      correctAnswer: "The Factory Pattern hides the instantiation details, whereas the Constructor Pattern exposes them.",
      answerDescription: "The Factory Pattern hides the creation logic from the client, while the Constructor Pattern directly exposes the object creation."
    },
    {
      id: 11,
      question: "What is the purpose of the Revealing Module Pattern in JavaScript?",
      options: [
        "To define private variables and methods within a function and expose a public API.",
        "To combine multiple modules into one.",
        "To ensure that a class has only one instance.",
        "To manage asynchronous operations in a modular way."
      ],
      correctAnswer: "To define private variables and methods within a function and expose a public API.",
      answerDescription: "The Revealing Module Pattern defines private variables and methods, exposing only the public API to the outside."
    },
    {
      id: 12,
      question: "Which design pattern ensures that only one instance of a class is created?",
      options: [
        "Singleton Pattern",
        "Factory Pattern",
        "Module Pattern",
        "Observer Pattern"
      ],
      correctAnswer: "Singleton Pattern",
      answerDescription: "The Singleton Pattern ensures that only one instance of a class is created and provides access to that instance globally."
    },
    {
      id: 13,
      question: "What is the Observer Pattern used for in JavaScript?",
      options: [
        "To allow objects to subscribe and react to changes in other objects.",
        "To create objects based on input conditions.",
        "To ensure that a class has only one instance.",
        "To manage DOM events efficiently."
      ],
      correctAnswer: "To allow objects to subscribe and react to changes in other objects.",
      answerDescription: "The Observer Pattern is used to allow one object (subject) to notify others (observers) about changes, typically in an event-driven system."
    },
    {
      id: 14,
      question: "What is the primary benefit of using the Module Pattern in JavaScript?",
      options: [
        "It creates a private scope for variables and methods, avoiding global namespace pollution.",
        "It allows for the use of classes in JavaScript.",
        "It speeds up the execution of functions.",
        "It enables asynchronous programming in JavaScript."
      ],
      correctAnswer: "It creates a private scope for variables and methods, avoiding global namespace pollution.",
      answerDescription: "The Module Pattern encapsulates private functionality and exposes only the necessary public methods to prevent global namespace pollution."
    },
    {
      id: 15,
      question: "How would you modify an existing Singleton class to allow it to handle multiple instances of different data?",
      options: [
        "Add a method to allow creating new instances while ensuring the original instance is still available.",
        "Use the `new` keyword to allow multiple instances.",
        "Remove the instance check in the constructor.",
        "Replace the class with a function."
      ],
      correctAnswer: "Add a method to allow creating new instances while ensuring the original instance is still available.",
      answerDescription: "To handle multiple instances, you can modify the Singleton to allow the creation of new instances while ensuring only one original instance exists."
    },
    {
      id: 16,
      question: "Which design pattern would you use to handle creating objects based on dynamic conditions, without exposing object creation logic?",
      options: [
        "Factory Pattern",
        "Singleton Pattern",
        "Observer Pattern",
        "Module Pattern"
      ],
      correctAnswer: "Factory Pattern",
      answerDescription: "The Factory Pattern is ideal for creating objects based on dynamic conditions, without exposing the object creation logic to the client."
    },
    {
      id: 17,
      question: "What is the purpose of a decorator in JavaScript?",
      options: [
        "It enhances or modifies the behavior of functions or objects.",
        "It creates a new instance of a class.",
        "It defines methods for an object.",
        "It manages asynchronous execution."
      ],
      correctAnswer: "It enhances or modifies the behavior of functions or objects.",
      answerDescription: "A decorator is used to enhance or modify the behavior of a function or object, often used for logging, timing, or validation purposes."
    },
    {
      id: 18,
      question: "Which of the following design patterns is often used for event-driven architectures?",
      options: [
        "Observer Pattern",
        "Factory Pattern",
        "Singleton Pattern",
        "Module Pattern"
      ],
      correctAnswer: "Observer Pattern",
      answerDescription: "The Observer Pattern is commonly used in event-driven architectures to allow one object to notify other objects about changes."
    },
    {
      id: 19,
      question: "What is the primary advantage of using a Factory Pattern over directly instantiating objects?",
      options: [
        "It allows for greater flexibility in object creation and management.",
        "It reduces the memory usage.",
        "It forces the use of the `new` keyword.",
        "It automatically handles object destruction."
      ],
      correctAnswer: "It allows for greater flexibility in object creation and management.",
      answerDescription: "The Factory Pattern provides flexibility in creating objects, especially when the instantiation logic can vary based on conditions."
    },
    {
      id: 20,
      question: "What does the term 'revealing' refer to in the Revealing Module Pattern?",
      options: [
        "The practice of revealing only the public API of a module.",
        "The practice of revealing all private methods within a module.",
        "The automatic revelation of functions after execution.",
        "The use of the `this` keyword in a module."
      ],
      correctAnswer: "The practice of revealing only the public API of a module.",
      answerDescription: "In the Revealing Module Pattern, only the public methods are exposed, hiding the implementation details and keeping the private methods within the closure."
    }
  ];

  export const reactReduxTesting = [
    {
      id: 1,
      question: "What are React hooks, and how do they work with state and lifecycle methods?",
      options: [
        "React hooks allow functional components to use state and lifecycle methods without needing to convert to class components.",
        "React hooks are used to pass data between parent and child components.",
        "React hooks are used to optimize component re-renders in functional components.",
        "React hooks only manage state and do not affect lifecycle methods."
      ],
      correctAnswer: "React hooks allow functional components to use state and lifecycle methods without needing to convert to class components.",
      answerDescription: "React hooks like `useState` and `useEffect` allow functional components to manage state and handle side effects, which were previously only possible in class components."
    },
    {
      id: 2,
      question: "What is the difference between `useState` and `useReducer` in React?",
      options: [
        "`useState` is for managing simple state values, while `useReducer` is used for managing more complex state logic.",
        "`useState` handles side effects, while `useReducer` is only for managing state.",
        "`useState` is asynchronous, while `useReducer` is synchronous.",
        "`useState` is only used in class components, while `useReducer` is for functional components."
      ],
      correctAnswer: "`useState` is for managing simple state values, while `useReducer` is used for managing more complex state logic.",
      answerDescription: "`useState` is typically used for simple state values, while `useReducer` is more suitable for managing complex state logic with actions and reducers."
    },
    {
      id: 3,
      question: "How do you handle side effects in React components?",
      options: [
        "Using `useEffect` hook to manage side effects such as data fetching and event listeners.",
        "Using `useCallback` hook to memoize the function.",
        "Using the `render` method for side effects.",
        "Using `useState` to handle side effects."
      ],
      correctAnswer: "Using `useEffect` hook to manage side effects such as data fetching and event listeners.",
      answerDescription: "The `useEffect` hook is used to perform side effects like fetching data, updating the DOM, or subscribing to external events in functional components."
    },
    {
      id: 4,
      question: "What is Redux, and how do you manage state in React applications using Redux?",
      options: [
        "Redux is a state management library that stores state in a global store, and updates are made using actions and reducers.",
        "Redux is a UI library for creating reusable components in React.",
        "Redux is a routing library for React applications.",
        "Redux is an HTTP client for making API calls."
      ],
      correctAnswer: "Redux is a state management library that stores state in a global store, and updates are made using actions and reducers.",
      answerDescription: "Redux is a predictable state container for JavaScript apps, used to manage and centralize application state in a global store."
    },
    {
      id: 5,
      question: "What are the three core principles of Redux?",
      options: [
        "Single source of truth, state is read-only, and changes are made with pure functions.",
        "State is mutable, components are reusable, and events are handled by the UI.",
        "State is global, components are independent, and side effects are hidden.",
        "Single source of truth, side effects are handled in the store, and UI components are decoupled."
      ],
      correctAnswer: "Single source of truth, state is read-only, and changes are made with pure functions.",
      answerDescription: "The core principles of Redux are: having a single source of truth (the store), making state read-only, and using pure functions (reducers) to make changes."
    },
    {
      id: 6,
      question: "What is the purpose of actions and reducers in Redux?",
      options: [
        "Actions describe what happened, and reducers specify how the state changes in response to actions.",
        "Actions handle the UI, and reducers handle state changes.",
        "Actions store state, and reducers manage lifecycle methods.",
        "Actions are for state changes, and reducers are for component communication."
      ],
      correctAnswer: "Actions describe what happened, and reducers specify how the state changes in response to actions.",
      answerDescription: "In Redux, actions are dispatched to describe the events or changes, and reducers define how the application's state should change in response."
    },
    {
      id: 7,
      question: "What is the `useSelector` hook in React Redux?",
      options: [
        "It is used to select a part of the state from the Redux store.",
        "It is used to dispatch actions to the Redux store.",
        "It is used to subscribe to state changes in a class component.",
        "It is used to map Redux actions to props."
      ],
      correctAnswer: "It is used to select a part of the state from the Redux store.",
      answerDescription: "`useSelector` is a hook provided by React Redux that allows functional components to access the Redux store's state."
    },
    {
      id: 8,
      question: "How do you dispatch actions in React Redux?",
      options: [
        "Using the `useDispatch` hook to dispatch actions from functional components.",
        "Using the `dispatch` method from the Redux store directly.",
        "Using `useState` to trigger dispatch actions.",
        "By calling `setState` in a class component."
      ],
      correctAnswer: "Using the `useDispatch` hook to dispatch actions from functional components.",
      answerDescription: "`useDispatch` is a hook in React Redux that provides the `dispatch` function to dispatch actions from functional components."
    },
    {
      id: 9,
      question: "What is the `mapStateToProps` function in Redux?",
      options: [
        "It is used to map the Redux store state to component props in class components.",
        "It is used to update the Redux store with new values.",
        "It is used to subscribe components to specific actions.",
        "It is used to bind action creators to component props."
      ],
      correctAnswer: "It is used to map the Redux store state to component props in class components.",
      answerDescription: "`mapStateToProps` is used to select data from the Redux store and pass it as props to the connected component in class components."
    },
    {
      id: 10,
      question: "What is middleware in Redux?",
      options: [
        "It is used to extend the Redux store's capabilities by intercepting and modifying actions before they reach the reducers.",
        "It is a function that binds action creators to component props.",
        "It stores state updates before they are committed to the store.",
        "It directly updates the UI when the state changes."
      ],
      correctAnswer: "It is used to extend the Redux store's capabilities by intercepting and modifying actions before they reach the reducers.",
      answerDescription: "Middleware in Redux is used to enhance the Redux store's functionality, like logging, async operations (with `redux-thunk`), or crash reporting."
    },
    {
      id: 11,
      question: "How do you test asynchronous functions in JavaScript?",
      options: [
        "Using Jest’s `async` and `await` with promises or mocking the API call.",
        "By calling the function and checking the output immediately.",
        "By using `setTimeout` to simulate asynchronous behavior.",
        "By testing the function in a callback environment."
      ],
      correctAnswer: "Using Jest’s `async` and `await` with promises or mocking the API call.",
      answerDescription: "To test asynchronous functions in JavaScript, Jest provides `async/await` to handle promises and `mock` functions to simulate API calls."
    },
    {
      id: 12,
      question: "What is Jest, and how is it used to test React components?",
      options: [
        "Jest is a testing framework that allows you to write tests for JavaScript, including React components, by using assertions.",
        "Jest is a library for building React components.",
        "Jest is a module bundler used in React projects.",
        "Jest is used to optimize React performance during rendering."
      ],
      correctAnswer: "Jest is a testing framework that allows you to write tests for JavaScript, including React components, by using assertions.",
      answerDescription: "Jest is a popular testing framework that works well with React for writing unit and integration tests with features like mocking, assertions, and snapshots."
    },
    {
      id: 13,
      question: "How can you test state changes in React components using Jest?",
      options: [
        "By using `setState` to trigger changes and verifying the updated state with assertions.",
        "By using `useState` to simulate state changes in test files.",
        "By using `ReactDOM.render()` to check the DOM after state changes.",
        "By rendering the component and checking the component's output."
      ],
      correctAnswer: "By using `setState` to trigger changes and verifying the updated state with assertions.",
      answerDescription: "In Jest, you can trigger state changes with `setState` and then use assertions to verify the component's state after changes."
    },
    {
      id: 14,
      question: "What is Enzyme, and how is it used in React testing?",
      options: [
        "Enzyme is a testing utility for React that helps with rendering components, simulating events, and making assertions.",
        "Enzyme is a library for managing state in React components.",
        "Enzyme is a framework for testing Redux actions and reducers.",
        "Enzyme is used to optimize React rendering performance."
      ],
      correctAnswer: "Enzyme is a testing utility for React that helps with rendering components, simulating events, and making assertions.",
      answerDescription: "Enzyme is a testing utility developed by Airbnb for testing React components, providing methods like `shallow`, `mount`, and `render` to test components and simulate events."
    },
    {
      id: 15,
      question: "How can you mock API calls in Jest?",
      options: [
        "By using `jest.mock()` to replace the actual API call with a mock function.",
        "By directly modifying the component to use mock data.",
        "By using `setInterval` to simulate API calls.",
        "By sending fake requests in the test."
      ],
      correctAnswer: "By using `jest.mock()` to replace the actual API call with a mock function.",
      answerDescription: "`jest.mock()` is used to mock modules like API calls, allowing tests to run without hitting real APIs by simulating the responses."
    },
    {
      id: 16,
      question: "What is the purpose of shallow rendering in React testing?",
      options: [
        "Shallow rendering renders only the component without its children, useful for unit tests.",
        "Shallow rendering renders the entire application tree to test integration.",
        "Shallow rendering is used to simulate events in React components.",
        "Shallow rendering tests the performance of React components."
      ],
      correctAnswer: "Shallow rendering renders only the component without its children, useful for unit tests.",
      answerDescription: "Shallow rendering in Enzyme renders the component without rendering its child components, making it useful for isolated unit testing."
    },
    {
      id: 17,
      question: "How do you test Redux actions and reducers in Jest?",
      options: [
        "By dispatching actions and asserting the new state after the reducer processes them.",
        "By calling `setState` in the test and checking the state.",
        "By manually invoking the component's render method.",
        "By simulating user input and testing UI updates."
      ],
      correctAnswer: "By dispatching actions and asserting the new state after the reducer processes them.",
      answerDescription: "In Jest, Redux actions can be tested by dispatching them and asserting that the state changes according to the logic in the reducer."
    },
    {
      id: 18,
      question: "What is a snapshot test in Jest?",
      options: [
        "A snapshot test takes a snapshot of the rendered output and compares it to the stored snapshot to detect changes.",
        "A snapshot test checks if a component is correctly mounted in the DOM.",
        "A snapshot test simulates a user interaction with the component.",
        "A snapshot test measures the performance of a component."
      ],
      correctAnswer: "A snapshot test takes a snapshot of the rendered output and compares it to the stored snapshot to detect changes.",
      answerDescription: "Snapshot testing in Jest helps ensure UI consistency by comparing the current rendered output of components with previously saved snapshots."
    },
    {
      id: 19,
      question: "What is the primary benefit of using Jest for testing React components?",
      options: [
        "Jest provides easy integration with React and its features like mock functions, snapshot testing, and assertions.",
        "Jest is a UI framework that allows for better component styling.",
        "Jest improves the performance of React components during testing.",
        "Jest allows for easier debugging of React components."
      ],
      correctAnswer: "Jest provides easy integration with React and its features like mock functions, snapshot testing, and assertions.",
      answerDescription: "Jest is optimized for React and provides built-in utilities for mocking, snapshot testing, and assertions, making it easy to test React components."
    },
    {
      id: 20,
      question: "How do you handle form input in React?",
      options: [
        "By using controlled components where the form data is managed by the component's state.",
        "By using uncontrolled components that handle form input directly in the DOM.",
        "By using external libraries like jQuery to handle form input.",
        "By binding form elements directly to the Redux store."
      ],
      correctAnswer: "By using controlled components where the form data is managed by the component's state.",
      answerDescription: "In React, controlled components manage form data within the component's state, allowing for more predictable and controlled behavior."
    }
  ];
  
  export const functionalProgramming = [
    {
      id: 1,
      question: "What is a higher-order function in JavaScript?",
      options: [
        "A higher-order function is a function that takes another function as an argument or returns a function as a result.",
        "A higher-order function is a function that operates on arrays.",
        "A higher-order function is a function that only returns a value.",
        "A higher-order function is a function used to handle side effects."
      ],
      correctAnswer: "A higher-order function is a function that takes another function as an argument or returns a function as a result.",
      answerDescription: "Higher-order functions allow you to pass functions as arguments or return them from other functions, enabling more flexible and reusable code."
    },
    {
      id: 2,
      question: "Can you provide an example of a higher-order function in JavaScript?",
      options: [
        "Array.prototype.map(), which takes a function as an argument and returns a new array.",
        "setTimeout(), which returns a timer ID.",
        "parseInt(), which converts a string to an integer.",
        "Array.prototype.push(), which adds an element to the array."
      ],
      correctAnswer: "Array.prototype.map(), which takes a function as an argument and returns a new array.",
      answerDescription: "The `map()` function is a classic example of a higher-order function, as it accepts a function as an argument and applies it to each element of the array."
    },
    {
      id: 3,
      question: "What does immutability mean in functional programming?",
      options: [
        "Immutability means that once a data structure is created, it cannot be modified.",
        "Immutability means that data can be modified but not deleted.",
        "Immutability allows for the mutation of an object's properties.",
        "Immutability means that data is only available within the scope of the function."
      ],
      correctAnswer: "Immutability means that once a data structure is created, it cannot be modified.",
      answerDescription: "In functional programming, immutability ensures that data structures cannot be changed once they are created, which helps avoid side effects and makes code more predictable."
    },
    {
      id: 4,
      question: "What are pure functions in JavaScript?",
      options: [
        "Pure functions are functions that always return the same output for the same input and have no side effects.",
        "Pure functions are functions that modify the input arguments directly.",
        "Pure functions are functions that execute asynchronously.",
        "Pure functions are functions that return a random output each time they are called."
      ],
      correctAnswer: "Pure functions are functions that always return the same output for the same input and have no side effects.",
      answerDescription: "Pure functions don't modify any external state or rely on it, and they always produce the same output for the same input, which makes them predictable and testable."
    },
    {
      id: 5,
      question: "How does immutability help avoid side effects in functional programming?",
      options: [
        "Immutability prevents data from being altered, reducing unintended changes to state that might lead to side effects.",
        "Immutability makes the code run faster by reducing the need for state checks.",
        "Immutability helps JavaScript handle asynchronous functions more effectively.",
        "Immutability simplifies event handling in DOM manipulation."
      ],
      correctAnswer: "Immutability prevents data from being altered, reducing unintended changes to state that might lead to side effects.",
      answerDescription: "By ensuring data cannot be modified directly, immutability helps avoid accidental changes to shared state, which can introduce side effects into the system."
    },
    {
      id: 6,
      question: "What is the difference between declarative and imperative programming?",
      options: [
        "Declarative programming focuses on describing what to do, while imperative programming focuses on how to do it.",
        "Declarative programming is faster than imperative programming.",
        "Declarative programming involves more side effects than imperative programming.",
        "Declarative programming directly manipulates memory, while imperative programming uses variables."
      ],
      correctAnswer: "Declarative programming focuses on describing what to do, while imperative programming focuses on how to do it.",
      answerDescription: "Declarative programming allows you to describe the desired outcome without specifying the steps, while imperative programming involves detailed instructions on how to achieve a result."
    },
    {
      id: 7,
      question: "Which of the following is an example of declarative programming in JavaScript?",
      options: [
        "Using `Array.prototype.map()` to transform an array.",
        "Using a `for` loop to iterate over an array and modify each element.",
        "Using `setInterval()` to execute a function every second.",
        "Using a `while` loop to wait for a condition to be true."
      ],
      correctAnswer: "Using `Array.prototype.map()` to transform an array.",
      answerDescription: "In declarative programming, you describe the transformation (using `map()`) rather than specifying how the iteration works manually."
    },
    {
      id: 8,
      question: "What is a common advantage of functional programming?",
      options: [
        "It allows for better parallelism and easier reasoning about code.",
        "It provides more flexibility in handling side effects.",
        "It makes it easier to work with mutable data structures.",
        "It simplifies the management of global state."
      ],
      correctAnswer: "It allows for better parallelism and easier reasoning about code.",
      answerDescription: "Functional programming makes it easier to reason about code due to its focus on immutability, pure functions, and avoiding side effects, which also aids in parallelism."
    },
    {
      id: 9,
      question: "Why are higher-order functions considered a key concept in functional programming?",
      options: [
        "They allow for more reusable and modular code by accepting or returning functions.",
        "They allow for better optimization of function execution.",
        "They are the only way to handle asynchronous operations.",
        "They make code more readable by reducing the number of parameters."
      ],
      correctAnswer: "They allow for more reusable and modular code by accepting or returning functions.",
      answerDescription: "Higher-order functions enhance modularity and reuse, allowing you to write flexible, composable code by working with functions as first-class citizens."
    },
    {
      id: 10,
      question: "What is the `filter()` method in JavaScript?",
      options: [
        "A higher-order function that creates a new array with all elements that pass a test implemented by a provided function.",
        "A function that transforms each element of an array to a new value.",
        "A method used to reduce an array to a single value.",
        "A method used to sort elements of an array."
      ],
      correctAnswer: "A higher-order function that creates a new array with all elements that pass a test implemented by a provided function.",
      answerDescription: "The `filter()` method is a higher-order function that applies a provided function to each element in an array, returning a new array with elements that satisfy the condition."
    },
    {
      id: 11,
      question: "What is the purpose of the `reduce()` method in JavaScript?",
      options: [
        "It reduces an array to a single value by applying a function to each element.",
        "It filters the elements of an array based on a provided condition.",
        "It maps over the array and transforms each element.",
        "It modifies the elements of an array in place."
      ],
      correctAnswer: "It reduces an array to a single value by applying a function to each element.",
      answerDescription: "`reduce()` is a higher-order function that iterates over an array and reduces it to a single value based on a provided function."
    },
    {
      id: 12,
      question: "What is the main advantage of using `map()`, `filter()`, and `reduce()` over traditional `for` loops?",
      options: [
        "They provide a more functional and declarative approach to working with arrays.",
        "They execute faster than traditional `for` loops.",
        "They allow for mutable state changes.",
        "They require fewer function calls."
      ],
      correctAnswer: "They provide a more functional and declarative approach to working with arrays.",
      answerDescription: "The `map()`, `filter()`, and `reduce()` methods offer a more readable and declarative approach, making it easier to reason about transformations on arrays."
    },
    {
      id: 13,
      question: "How do closures relate to functional programming?",
      options: [
        "Closures allow functions to remember their lexical environment and access variables from outer scopes.",
        "Closures are a way to manage state in functional programming.",
        "Closures are used to implement asynchronous operations.",
        "Closures are not relevant to functional programming."
      ],
      correctAnswer: "Closures allow functions to remember their lexical environment and access variables from outer scopes.",
      answerDescription: "Closures are important in functional programming as they enable functions to capture and retain access to variables from their outer scope, facilitating functional behavior like currying and partial application."
    },
    {
      id: 14,
      question: "What does currying mean in functional programming?",
      options: [
        "Currying is the process of converting a function that takes multiple arguments into a series of functions that each take a single argument.",
        "Currying is the process of combining multiple functions into a single function.",
        "Currying is the process of applying a function to all elements of an array.",
        "Currying is the process of delaying function execution."
      ],
      correctAnswer: "Currying is the process of converting a function that takes multiple arguments into a series of functions that each take a single argument.",
      answerDescription: "Currying allows for the partial application of functions, where each function returns another function that takes the next argument."
    },
    {
      id: 15,
      question: "What is the concept of partial application in functional programming?",
      options: [
        "Partial application is the process of fixing some arguments of a function and generating a new function.",
        "Partial application is the process of calling a function with fewer arguments.",
        "Partial application is the process of applying a function to all elements of an array.",
        "Partial application is the process of executing functions asynchronously."
      ],
      correctAnswer: "Partial application is the process of fixing some arguments of a function and generating a new function.",
      answerDescription: "Partial application allows you to create specialized functions by fixing some of the arguments of a function while leaving others to be supplied later."
    },
    {
      id: 16,
      question: "How does functional programming handle side effects?",
      options: [
        "Functional programming aims to minimize side effects by using pure functions and immutability.",
        "Functional programming encourages the use of side effects to simplify code.",
        "Functional programming relies on external libraries to handle side effects.",
        "Functional programming allows side effects only in asynchronous functions."
      ],
      correctAnswer: "Functional programming aims to minimize side effects by using pure functions and immutability.",
      answerDescription: "Functional programming seeks to avoid side effects by encouraging the use of pure functions and immutable data structures, making code easier to test and reason about."
    },
    {
      id: 17,
      question: "What is a monad in functional programming?",
      options: [
        "A monad is a design pattern used to chain operations in a functional programming style.",
        "A monad is a type of higher-order function.",
        "A monad is a way to handle synchronous operations in functional programming.",
        "A monad is an object-oriented pattern used to manage state."
      ],
      correctAnswer: "A monad is a design pattern used to chain operations in a functional programming style.",
      answerDescription: "Monads allow for the chaining of operations and are used to handle side effects, like asynchronous operations, in a controlled manner in functional programming."
    },
    {
      id: 18,
      question: "How does immutability affect performance in JavaScript?",
      options: [
        "Immutability can improve performance by preventing unnecessary re-renders in UI frameworks like React.",
        "Immutability always reduces performance, especially in large-scale applications.",
        "Immutability has no effect on performance in JavaScript.",
        "Immutability can slow down performance by requiring deep copies of data structures."
      ],
      correctAnswer: "Immutability can improve performance by preventing unnecessary re-renders in UI frameworks like React.",
      answerDescription: "In React, for example, immutability helps in optimizing rendering, as React can efficiently detect changes to the data and trigger updates only when necessary."
    },
    {
      id: 19,
      question: "What is tail recursion in functional programming?",
      options: [
        "Tail recursion occurs when a recursive function's last operation is a recursive call, allowing optimizations to avoid additional stack frames.",
        "Tail recursion is a form of iteration.",
        "Tail recursion is a way to create infinite loops in functional programming.",
        "Tail recursion is only used for sorting algorithms."
      ],
      correctAnswer: "Tail recursion occurs when a recursive function's last operation is a recursive call, allowing optimizations to avoid additional stack frames.",
      answerDescription: "Tail recursion helps optimize recursive function calls by enabling the compiler or runtime to reuse the current function's stack frame, preventing stack overflow in deep recursions."
    },
    {
      id: 20,
      question: "How does functional programming contribute to the scalability of applications?",
      options: [
        "Functional programming promotes statelessness and immutability, which leads to more predictable and concurrent operations, improving scalability.",
        "Functional programming encourages the use of global state, which improves scalability.",
        "Functional programming requires managing large mutable data structures, making scaling more difficult.",
        "Functional programming always involves complex algorithms, which reduces scalability."
      ],
      correctAnswer: "Functional programming promotes statelessness and immutability, which leads to more predictable and concurrent operations, improving scalability.",
      answerDescription: "Functional programming's emphasis on immutability and statelessness ensures that operations can run concurrently and in parallel, leading to better scalability."
    }
  ];
  
  export const webAPIs = [
    {
      id: 1,
      question: "What is the `fetch()` function in JavaScript?",
      options: [
        "A function used to make network requests and retrieve resources over the network.",
        "A function used to read data from localStorage.",
        "A function used to store data in sessionStorage.",
        "A function used to interact with the DOM directly."
      ],
      correctAnswer: "A function used to make network requests and retrieve resources over the network.",
      answerDescription: "`fetch()` is a JavaScript API that provides a way to make network requests, such as retrieving data from APIs or sending data to a server."
    },
    {
      id: 2,
      question: "How do you handle errors when using the `fetch()` API?",
      options: [
        "You use a `.catch()` method to handle errors after the promise is resolved.",
        "You use the `error` event to handle errors.",
        "You use a `try...catch` block to handle errors with async/await.",
        "You can't handle errors in `fetch()`; it will always succeed."
      ],
      correctAnswer: "You use a `try...catch` block to handle errors with async/await.",
      answerDescription: "When using `fetch()` with `async/await`, you can wrap the code in a `try...catch` block to catch any errors that occur during the network request."
    },
    {
      id: 3,
      question: "What is the difference between `localStorage` and `sessionStorage`?",
      options: [
        "`localStorage` persists data across browser sessions, while `sessionStorage` only lasts for the duration of the page session.",
        "`sessionStorage` persists data across browser sessions, while `localStorage` only lasts for the duration of the page session.",
        "Both are used for storing session data and behave the same.",
        "`localStorage` is more secure than `sessionStorage`."
      ],
      correctAnswer: "`localStorage` persists data across browser sessions, while `sessionStorage` only lasts for the duration of the page session.",
      answerDescription: "`localStorage` stores data persistently, meaning it remains even after the browser is closed, while `sessionStorage` is temporary and is cleared when the session ends."
    },
    {
      id: 4,
      question: "How do you store data in `localStorage`?",
      options: [
        "localStorage.setItem('key', 'value');",
        "localStorage.add('key', 'value');",
        "localStorage.store('key', 'value');",
        "localStorage.push('key', 'value');"
      ],
      correctAnswer: "localStorage.setItem('key', 'value');",
      answerDescription: "`localStorage.setItem('key', 'value')` is the correct syntax to store a key-value pair in `localStorage`."
    },
    {
      id: 5,
      question: "What does `JSON.stringify()` do?",
      options: [
        "Converts a JavaScript object into a JSON string.",
        "Converts a JSON string into a JavaScript object.",
        "Stores a JavaScript object in localStorage.",
        "Sends a JavaScript object to the server."
      ],
      correctAnswer: "Converts a JavaScript object into a JSON string.",
      answerDescription: "`JSON.stringify()` is used to convert a JavaScript object into a JSON string so it can be transmitted over the network or stored in `localStorage`."
    },
    {
      id: 6,
      question: "What is the purpose of `JSON.parse()` in JavaScript?",
      options: [
        "Converts a JSON string into a JavaScript object.",
        "Converts a JavaScript object into a JSON string.",
        "Sends a JavaScript object to the server.",
        "Encodes data for storage in localStorage."
      ],
      correctAnswer: "Converts a JSON string into a JavaScript object.",
      answerDescription: "`JSON.parse()` is used to convert a JSON string into a JavaScript object, which can then be used in the code."
    },
    {
      id: 7,
      question: "What does AJAX stand for?",
      options: [
        "Asynchronous JavaScript and XML.",
        "Advanced JavaScript and XML.",
        "Asynchronous JSON and XML.",
        "Asynchronous JavaScript and eXtension."
      ],
      correctAnswer: "Asynchronous JavaScript and XML.",
      answerDescription: "AJAX stands for Asynchronous JavaScript and XML, which refers to a set of web development techniques used to send and receive data asynchronously without refreshing the page."
    },
    {
      id: 8,
      question: "How can you send a `GET` request using AJAX?",
      options: [
        "Using `fetch()` with the method set to 'GET'.",
        "Using `XMLHttpRequest` with the `open()` method set to 'GET'.",
        "Both `fetch()` and `XMLHttpRequest` can be used to send a GET request.",
        "AJAX doesn't support `GET` requests."
      ],
      correctAnswer: "Both `fetch()` and `XMLHttpRequest` can be used to send a GET request.",
      answerDescription: "You can use both `fetch()` and `XMLHttpRequest` to send `GET` requests. `fetch()` is a modern alternative, while `XMLHttpRequest` is the older method."
    },
    {
      id: 9,
      question: "What is the `Response` object returned by `fetch()`?",
      options: [
        "An object representing the response to the request, including data and status.",
        "An object that contains the request headers.",
        "An object that stores the request method.",
        "An object that stores cookies for the request."
      ],
      correctAnswer: "An object representing the response to the request, including data and status.",
      answerDescription: "The `Response` object contains information about the response, such as the status code, headers, and the response body (which can be processed using `.json()` or `.text()` methods)."
    },
    {
      id: 10,
      question: "How do you fetch data from an API using `fetch()`?",
      options: [
        "fetch('url').then(response => response.json()).then(data => console.log(data));",
        "fetch('url').get().then(response => response.json()).then(data => console.log(data));",
        "fetch('url').get().then(data => console.log(data));",
        "fetch('url').then(response => console.log(response));"
      ],
      correctAnswer: "fetch('url').then(response => response.json()).then(data => console.log(data));",
      answerDescription: "You can use `fetch()` to make a request to an API. The `then()` method is used to process the `Response` object, and `.json()` is used to parse the response body into a JavaScript object."
    },
    {
      id: 11,
      question: "How do you check if a `fetch()` request was successful?",
      options: [
        "You check the `response.ok` property, which is `true` for successful responses.",
        "You check the `status` property, which should be `200` for successful responses.",
        "Both `response.ok` and `status` can be used to check for success.",
        "`fetch()` requests are always successful, there is no need to check."
      ],
      correctAnswer: "Both `response.ok` and `status` can be used to check for success.",
      answerDescription: "`response.ok` is `true` for successful responses (status code 200-299). Alternatively, you can check the `status` code directly (200 for success)."
    },
    {
      id: 12,
      question: "What does the `localStorage.getItem()` method do?",
      options: [
        "It retrieves the value associated with a given key from localStorage.",
        "It sets the value of a given key in localStorage.",
        "It removes a key-value pair from localStorage.",
        "It clears all data stored in localStorage."
      ],
      correctAnswer: "It retrieves the value associated with a given key from localStorage.",
      answerDescription: "`localStorage.getItem('key')` retrieves the value of the specified key from `localStorage`. If the key does not exist, it returns `null`."
    },
    {
      id: 13,
      question: "How do you clear all data in `localStorage`?",
      options: [
        "localStorage.clear();",
        "localStorage.removeAll();",
        "localStorage.deleteAll();",
        "localStorage.reset();"
      ],
      correctAnswer: "localStorage.clear();",
      answerDescription: "`localStorage.clear()` removes all key-value pairs stored in `localStorage`."
    },
    {
      id: 14,
      question: "What is the purpose of `sessionStorage`?",
      options: [
        "It stores data for the duration of the page session.",
        "It stores data for the duration of the browser session.",
        "It stores data permanently across sessions.",
        "It stores large data in a compressed format."
      ],
      correctAnswer: "It stores data for the duration of the page session.",
      answerDescription: "`sessionStorage` stores data that is available for the duration of the page session and is cleared when the browser window or tab is closed."
    },
    {
      id: 15,
      question: "How can you send a `POST` request using the `fetch()` API?",
      options: [
        "By setting the method to 'POST' and providing the data in the body.",
        "By setting the method to 'GET' and providing the data in the body.",
        "By using the `post()` method.",
        "By setting the method to 'PUT' and providing the data in the body."
      ],
      correctAnswer: "By setting the method to 'POST' and providing the data in the body.",
      answerDescription: "To send a `POST` request with `fetch()`, set the `method` to 'POST' and include the data you want to send in the `body` of the request."
    },
    {
      id: 16,
      question: "How do you parse a JSON response from an API using `fetch()`?",
      options: [
        "response.json()",
        "response.parse()",
        "response.toJSON()",
        "response.body()"
      ],
      correctAnswer: "response.json()",
      answerDescription: "`response.json()` is used to parse the response body into a JavaScript object when the response is in JSON format."
    },
    {
      id: 17,
      question: "What is the difference between `fetch()` and `XMLHttpRequest`?",
      options: [
        "`fetch()` is a modern, promise-based API, while `XMLHttpRequest` is older and callback-based.",
        "`XMLHttpRequest` is used only for sending `POST` requests, while `fetch()` can be used for all types of requests.",
        "`fetch()` is synchronous, while `XMLHttpRequest` is asynchronous.",
        "`fetch()` and `XMLHttpRequest` are functionally identical."
      ],
      correctAnswer: "`fetch()` is a modern, promise-based API, while `XMLHttpRequest` is older and callback-based.",
      answerDescription: "`fetch()` offers a simpler, promise-based syntax, whereas `XMLHttpRequest` uses callback functions and is considered outdated."
    },
    {
      id: 18,
      question: "How can you handle a `timeout` error in a `fetch()` request?",
      options: [
        "By using `AbortController` to set a timeout on the request.",
        "By using the `timeout` property in `fetch()`.",
        "By setting the `timeout` property in `XMLHttpRequest`.",
        "By adding a timeout callback in the `then()` method."
      ],
      correctAnswer: "By using `AbortController` to set a timeout on the request.",
      answerDescription: "`AbortController` can be used to abort a `fetch()` request after a certain timeout period, allowing you to handle timeout scenarios."
    },
    {
      id: 19,
      question: "How do you handle cross-origin requests (CORS) in `fetch()`?",
      options: [
        "By using the `mode: 'cors'` option in the `fetch()` configuration.",
        "By adding a `crossOrigin` property to the request.",
        "By setting the `CORS` flag in the server response.",
        "By using the `withCredentials` property."
      ],
      correctAnswer: "By using the `mode: 'cors'` option in the `fetch()` configuration.",
      answerDescription: "To make cross-origin requests, you need to specify `mode: 'cors'` in the `fetch()` options. The server also needs to support CORS."
    },
    {
      id: 20,
      question: "How do you handle JSON parsing errors in `fetch()`?",
      options: [
        "By using a `try...catch` block around the `response.json()` call.",
        "By checking the `response.ok` status before calling `response.json()`.",
        "By using the `response.json()` method with a callback function.",
        "JSON parsing errors cannot be handled in `fetch()`."
      ],
      correctAnswer: "By using a `try...catch` block around the `response.json()` call.",
      answerDescription: "You can handle JSON parsing errors by wrapping the `response.json()` method in a `try...catch` block to catch any errors that may occur during parsing."
    }
  ];
  
  
  
  
  
  
  
  