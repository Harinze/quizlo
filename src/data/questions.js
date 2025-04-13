// // src/data/questions.js
// export const questions = [
//   {
//     id: 1,
//     question: "What does 'this' refer to in a regular function?",
//     options: [
//       "The global object (window in the browser)",
//       "The function itself",
//       "The object that called the function",
//       "None of the above"
//     ],
//     correctAnswer: "The global object (window in the browser)",
//     answerDescription: "In a regular function (not an arrow function), 'this' refers to the global object when called in the global scope. In the browser, the global object is the 'window' object. So, when we call a function without any context, 'this' will point to 'window'. In strict mode, 'this' would be 'undefined'."
//   },
//   {
//     id: 2,
//     question: "Which method is used to create a new array with all elements of the original array that pass a test?",
//     options: ["map()", "filter()", "reduce()", "forEach()"],
//     correctAnswer: "filter()"
//   },
//   {
//     id: 3,
//     question: "What is a closure in JavaScript?",
//     options: [
//       "A function within another function",
//       "A function that retains access to its lexical scope",
//       "A block of code that doesn't execute immediately",
//       "None of the above"
//     ],
//     correctAnswer: "A function that retains access to its lexical scope"
//   },
//   {
//     id: 4,
//     question: "What is the difference between '==' and '===' in JavaScript?",
//     options: [
//       "'==' checks for value equality, while '===' checks for value and type equality",
//       "'==' checks for value and type equality, while '===' checks for value equality",
//       "There is no difference",
//       "Both are used for strict equality only"
//     ],
//     correctAnswer: "'==' checks for value equality, while '===' checks for value and type equality"
//   },
//   {
//     id: 5,
//     question: "Which of the following is true about JavaScript's 'prototypal inheritance'?",
//     options: [
//       "Objects inherit from other objects directly",
//       "Objects inherit from classes",
//       "Inheritance is based on prototypes, not classes",
//       "All objects are instances of the same class"
//     ],
//     correctAnswer: "Objects inherit from other objects directly"
//   },
//   {
//     id: 6,
//     question: "What is the purpose of the 'bind()' method in JavaScript?",
//     options: [
//       "It creates a new function that, when called, has its 'this' keyword set to the provided value",
//       "It binds an object to a function",
//       "It allows you to chain multiple functions",
//       "It sets the context of a promise"
//     ],
//     correctAnswer: "It creates a new function that, when called, has its 'this' keyword set to the provided value"
//   },
//   {
//     id: 7,
//     question: "How do you handle errors in a Promise-based function?",
//     options: [
//       "By using the 'catch()' method",
//       "By using 'throw' statement inside the Promise",
//       "By using try-catch blocks within the Promise",
//       "By using the 'finally()' method"
//     ],
//     correctAnswer: "By using the 'catch()' method"
//   },
//   {
//     id: 8,
//     question: "Which of the following is true about the 'async' keyword?",
//     options: [
//       "It makes a function return a promise",
//       "It can only be used with functions that return a Promise",
//       "It automatically wraps a function in a try-catch block",
//       "All of the above"
//     ],
//     correctAnswer: "All of the above"
//   },
//   {
//     id: 9,
//     question: "What will the following code output? 'console.log(!!'false')'",
//     options: [
//       "true",
//       "false",
//       "undefined",
//       "NaN"
//     ],
//     correctAnswer: "true"
//   },
//   {
//     id: 10,
//     question: "What is the purpose of the 'finally()' method in Promises?",
//     options: [
//       "It allows you to execute code after the promise settles, regardless of success or failure",
//       "It is used to trigger an error",
//       "It allows you to chain another Promise",
//       "It terminates the chain of Promises"
//     ],
//     correctAnswer: "It allows you to execute code after the promise settles, regardless of success or failure"
//   },
//   {
//     id: 11,
//     question: "What will the following code return? '() => {} instanceof Function'",
//     options: [
//       "true",
//       "false",
//       "undefined",
//       "null"
//     ],
//     correctAnswer: "true"
//   },
//   {
//     id: 12,
//     question: "How does the 'await' keyword work in JavaScript?",
//     options: [
//       "It pauses the execution of an async function until the Promise resolves or rejects",
//       "It handles errors inside a promise",
//       "It returns a promise object",
//       "It converts a callback function to a promise"
//     ],
//     correctAnswer: "It pauses the execution of an async function until the Promise resolves or rejects"
//   },
//   {
//     id: 13,
//     question: "Which of the following is correct about JavaScript's 'class' syntax?",
//     options: [
//       "Classes are just syntactic sugar over prototypes",
//       "Classes allow you to define object methods inside the class",
//       "Classes cannot be instantiated directly",
//       "Both A and B"
//     ],
//     correctAnswer: "Both A and B"
//   },
//   {
//     id: 14,
//     question: "What is the output of 'console.log(typeof NaN)'?",
//     options: [
//       "number",
//       "undefined",
//       "NaN",
//       "object"
//     ],
//     correctAnswer: "number"
//   },
//   {
//     id: 15,
//     question: "What is the difference between the 'call()' and 'apply()' methods?",
//     options: [
//       "'call()' accepts an array, while 'apply()' accepts a list of arguments",
//       "'apply()' accepts an array, while 'call()' accepts a list of arguments",
//       "They are the same",
//       "Both are used to invoke a function in a different context"
//     ],
//     correctAnswer: "'apply()' accepts an array, while 'call()' accepts a list of arguments"
//   },
//   {
//     id: 16,
//     question: "What is the output of this JavaScript code? 'console.log([1] == true)'",
//     options: [
//       "true",
//       "false",
//       "undefined",
//       "NaN"
//     ],
//     correctAnswer: "true"
//   },
//   {
//     id: 17,
//     question: "Which of the following is NOT a valid JavaScript data type?",
//     options: ["String", "Boolean", "Object", "Function"],
//     correctAnswer: "Function"
//   },
//   {
//     id: 18,
//     question: "Which of the following is NOT a valid way to create an object in JavaScript?",
//     options: [
//       "let obj = new Object()",
//       "let obj = {}",
//       "let obj = new MyObject()",
//       "let obj = Object.create()"
//     ],
//     correctAnswer: "let obj = Object.create()"
//   },
//   {
//     id: 19,
//     question: "Which JavaScript method can be used to combine two arrays into one?",
//     options: ["concat()", "push()", "join()", "merge()"],
//     correctAnswer: "concat()"
//   },
//   {
//     id: 20,
//     question: "What does the 'setTimeout()' function do in JavaScript?",
//     options: [
//       "Delays the execution of a function until after a set amount of time",
//       "Executes a function immediately",
//       "Sets a loop to repeatedly execute a function",
//       "None of the above"
//     ],
//     correctAnswer: "Delays the execution of a function until after a set amount of time"
//   },
//   {
//     id: 21,
//     question: "What is the result of the expression '0.1 + 0.2 === 0.3' in JavaScript?",
//     options: [
//       "true",
//       "false",
//       "undefined",
//       "NaN"
//     ],
//     correctAnswer: "false"
//   },
//   {
//     id: 22,
//     question: "What is the purpose of the 'Object.create()' method?",
//     options: [
//       "It creates a new object with a specified prototype",
//       "It creates a new object without any prototype",
//       "It adds new properties to an existing object",
//       "It adds a method to an object"
//     ],
//     correctAnswer: "It creates a new object with a specified prototype"
//   },
//   {
//     id: 23,
//     question: "What is the output of 'console.log([] == ![])' in JavaScript?",
//     options: [
//       "true",
//       "false",
//       "undefined",
//       "NaN"
//     ],
//     correctAnswer: "true"
//   },
//   {
//     id: 24,
//     question: "Which method is used to convert a JSON string into a JavaScript object?",
//     options: ["JSON.parse()", "JSON.stringify()", "Object.fromJSON()", "JSON.decode()"],
//     correctAnswer: "JSON.parse()"
//   },
//   {
//     id: 25,
//     question: "What is the output of 'console.log(null == undefined)' in JavaScript?",
//     options: [
//       "true",
//       "false",
//       "undefined",
//       "NaN"
//     ],
//     correctAnswer: "true"
//   },
//   {
//     id: 26,
//     question: "Which of the following is the correct way to create a class in JavaScript?",
//     options: [
//       "class MyClass() {}",
//       "function MyClass() {}",
//       "class MyClass {}",
//       "function class MyClass {}"
//     ],
//     correctAnswer: "class MyClass {}"
//   },
//   {
//     id: 27,
//     question: "Which of the following can be used to prevent a class from being subclassed?",
//     options: [
//       "Object.freeze()",
//       "Object.seal()",
//       "static methods",
//       "None of the above"
//     ],
//     correctAnswer: "Object.freeze()"
//   },
//   {
//     id: 28,
//     question: "What will the following code output: 'console.log([1, 2] + [3, 4])'?",
//     options: [
//       "1, 23, 4",
//       "1,2,3,4",
//       "[1,2][3,4]",
//       "Error"
//     ],
//     correctAnswer: "1,2,3,4"
//   },
//   {
//     id: 29,
//     question: "What is the output of 'console.log(!![])'?",
//     options: [
//       "true",
//       "false",
//       "undefined",
//       "null"
//     ],
//     correctAnswer: "true"
//   },
//   {
//     id: 30,
//     question: "Which of the following is used to define a function that returns a promise?",
//     options: [
//       "async function",
//       "callback function",
//       "function* generator",
//       "promise function"
//     ],
//     correctAnswer: "async function"
//   },
//   {
//     id: 31,
//     question: "What does the 'typeof' operator do in JavaScript?",
//     options: [
//       "Returns the type of a variable or expression",
//       "Checks if the variable is an object",
//       "Checks if the variable is an array",
//       "Returns the size of the variable"
//     ],
//     correctAnswer: "Returns the type of a variable or expression"
//   },
//   {
//     id: 32,
//     question: "Which of the following is a feature of JavaScript's 'event loop'?",
//     options: [
//       "Handles asynchronous tasks and executes the next task in the queue after the current task is finished",
//       "Executes synchronous tasks first",
//       "Only executes tasks when the main thread is idle",
//       "None of the above"
//     ],
//     correctAnswer: "Handles asynchronous tasks and executes the next task in the queue after the current task is finished"
//   },
//   {
//     id: 33,
//     question: "What does 'NaN' stand for in JavaScript?",
//     options: [
//       "Not a Number",
//       "Negative and Number",
//       "No Answer Needed",
//       "Null and Nothing"
//     ],
//     correctAnswer: "Not a Number"
//   },
//   {
//     id: 34,
//     question: "Which of the following is a correct way to declare a constant variable in JavaScript?",
//     options: [
//       "const variableName",
//       "let variableName",
//       "var variableName",
//       "final variableName"
//     ],
//     correctAnswer: "const variableName"
//   },
//   {
//     id: 35,
//     question: "What is the result of 'false == 0' in JavaScript?",
//     options: [
//       "true",
//       "false",
//       "undefined",
//       "NaN"
//     ],
//     correctAnswer: "true"
//   },
//   {
//     id: 36,
//     question: "Which method is used to check if an array includes a specific element in JavaScript?",
//     options: ["includes()", "indexOf()", "contains()", "find()"],
//     correctAnswer: "includes()"
//   },
//   {
//     id: 37,
//     question: "Which operator is used for checking strict equality in JavaScript?",
//     options: [
//       "==",
//       "===",
//       "!=",
//       "!=="
//     ],
//     correctAnswer: "==="
//   },
//   {
//     id: 38,
//     question: "Which of the following can be used to remove an element from the end of an array in JavaScript?",
//     options: ["pop()", "shift()", "unshift()", "splice()"],
//     correctAnswer: "pop()"
//   },
//   {
//     id: 39,
//     question: "Which method is used to convert an object to a JSON string in JavaScript?",
//     options: ["JSON.stringify()", "JSON.parse()", "Object.toString()", "Object.toJSON()"],
//     correctAnswer: "JSON.stringify()"
//   },
//   {
//     id: 40,
//     question: "What is the result of the following expression: 'true + false'?",
//     options: [
//       "true",
//       "false",
//       "1",
//       "0"
//     ],
//     correctAnswer: "1"
//   }
// ];
