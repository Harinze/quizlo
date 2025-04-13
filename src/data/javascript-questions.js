
export const javaScriptQuestions = [
  {
    id: 1,
    question: "What does 'this' refer to in a regular function?",
    options: [
      "The global object (window in the browser)",
      "The function itself",
      "The object that called the function",
      "None of the above"
    ],
    correctAnswer: "The global object (window in the browser)",
    answerDescription: "In non-strict mode, 'this' in a regular function refers to the global object (window in browsers). In strict mode, it would be undefined unless the function is called with a specific context."
  },
  {
    id: 2,
    question: "Which method is used to create a new array with all elements of the original array that pass a test?",
    options: ["map()", "filter()", "reduce()", "forEach()"],
    correctAnswer: "filter()",
    answerDescription: "`filter()` returns a new array containing only elements that pass the condition specified in the callback function."
  },
  {
    id: 3,
    question: "What is a closure in JavaScript?",
    options: [
      "A function within another function",
      "A function that retains access to its lexical scope",
      "A block of code that doesn't execute immediately",
      "None of the above"
    ],
    correctAnswer: "A function that retains access to its lexical scope",
    answerDescription: "A closure is a function that retains access to its lexical scope even when the function is executed outside that scope."
  },
  {
    id: 4,
    question: "What is the difference between '==' and '===' in JavaScript?",
    options: [
      "'==' checks for value equality, while '===' checks for value and type equality",
      "'==' checks for value and type equality, while '===' checks for value equality",
      "There is no difference",
      "Both are used for strict equality only"
    ],
    correctAnswer: "'==' checks for value equality, while '===' checks for value and type equality",
    answerDescription: "'==' performs type coercion before comparison, while '===' requires both type and value to be the same."
  },
  {
    id: 5,
    question: "Which of the following is true about JavaScript's 'prototypal inheritance'?",
    options: [
      "Objects inherit from other objects directly",
      "Objects inherit from classes",
      "Inheritance is based on prototypes, not classes",
      "All objects are instances of the same class"
    ],
    correctAnswer: "Objects inherit from other objects directly",
    answerDescription: "In JavaScript, objects can directly inherit from other objects via the prototype chain, known as prototypal inheritance."
  },
  {
    id: 6,
    question: "What is the purpose of the 'bind()' method in JavaScript?",
    options: [
      "It creates a new function that, when called, has its 'this' keyword set to the provided value",
      "It binds an object to a function",
      "It allows you to chain multiple functions",
      "It sets the context of a promise"
    ],
    correctAnswer: "It creates a new function that, when called, has its 'this' keyword set to the provided value",
    answerDescription: "`bind()` returns a new function with the specified `this` value and optionally preset arguments."
  },
  {
    id: 7,
    question: "How do you handle errors in a Promise-based function?",
    options: [
      "By using the 'catch()' method",
      "By using 'throw' statement inside the Promise",
      "By using try-catch blocks within the Promise",
      "By using the 'finally()' method"
    ],
    correctAnswer: "By using the 'catch()' method",
    answerDescription: "`catch()` is used to handle any error that occurs in a Promise chain."
  },
  {
    id: 8,
    question: "Which of the following is true about the 'async' keyword?",
    options: [
      "It makes a function return a promise",
      "It can only be used with functions that return a Promise",
      "It automatically wraps a function in a try-catch block",
      "All of the above"
    ],
    correctAnswer: "All of the above",
    answerDescription: "The `async` keyword turns a function into one that returns a Promise and allows `await` inside it; the function behaves like it's wrapped in try-catch for error handling."
  },
  {
    id: 9,
    question: "What will the following code output? 'console.log(!!'false')'",
    options: [
      "true",
      "false",
      "undefined",
      "NaN"
    ],
    correctAnswer: "true",
    answerDescription: "The string `'false'` is a non-empty string, which is truthy. Applying `!!` converts it to a boolean `true`."
  },
  {
    id: 10,
    question: "What is the purpose of the 'finally()' method in Promises?",
    options: [
      "It allows you to execute code after the promise settles, regardless of success or failure",
      "It is used to trigger an error",
      "It allows you to chain another Promise",
      "It terminates the chain of Promises"
    ],
    correctAnswer: "It allows you to execute code after the promise settles, regardless of success or failure",
    answerDescription: "`finally()` is used to execute cleanup or final steps after a Promise is settled, no matter if it was fulfilled or rejected."
  },
  {
    id: 11,
    question: "What will the following code return? '() => {} instanceof Function'",
    options: ["true", "false", "undefined", "null"],
    correctAnswer: "true",
    answerDescription: "Arrow functions are still instances of Function, even though they have different behavior compared to regular functions."
  },
  {
    id: 12,
    question: "How does the 'await' keyword work in JavaScript?",
    options: [
      "It pauses the execution of an async function until the Promise resolves or rejects",
      "It handles errors inside a promise",
      "It returns a promise object",
      "It converts a callback function to a promise"
    ],
    correctAnswer: "It pauses the execution of an async function until the Promise resolves or rejects",
    answerDescription: "`await` can only be used inside async functions and pauses execution until the promise is resolved or rejected."
  },
  {
    id: 13,
    question: "Which of the following is correct about JavaScript's 'class' syntax?",
    options: [
      "Classes are just syntactic sugar over prototypes",
      "Classes allow you to define object methods inside the class",
      "Classes cannot be instantiated directly",
      "Both A and B"
    ],
    correctAnswer: "Both A and B",
    answerDescription: "JavaScript's class syntax is syntactic sugar over prototype-based inheritance and allows defining methods inside the class."
  },
  {
    id: 14,
    question: "What is the output of 'console.log(typeof NaN)'?",
    options: ["number", "undefined", "NaN", "object"],
    correctAnswer: "number",
    answerDescription: "`NaN` stands for Not-a-Number but its type is still 'number' in JavaScript."
  },
  {
    id: 15,
    question: "What is the difference between the 'call()' and 'apply()' methods?",
    options: [
      "'call()' accepts an array, while 'apply()' accepts a list of arguments",
      "'apply()' accepts an array, while 'call()' accepts a list of arguments",
      "They are the same",
      "Both are used to invoke a function in a different context"
    ],
    correctAnswer: "'apply()' accepts an array, while 'call()' accepts a list of arguments",
    answerDescription: "`apply()` takes arguments as an array; `call()` takes them individually. Both invoke functions with a specified 'this' context."
  },
  {
    id: 16,
    question: "What is the output of this JavaScript code? 'console.log([1] == true)'",
    options: ["true", "false", "undefined", "NaN"],
    correctAnswer: "true",
    answerDescription: "[1] is converted to '1', and `true` is converted to 1. So the comparison becomes '1' == 1, which is true due to type coercion."
  },
  {
    id: 17,
    question: "Which of the following is NOT a valid JavaScript data type?",
    options: ["String", "Boolean", "Object", "Function"],
    correctAnswer: "Function",
    answerDescription: "Function is a subtype of 'object' in JavaScript, not a standalone data type."
  },
  {
    id: 18,
    question: "Which of the following is NOT a valid way to create an object in JavaScript?",
    options: [
      "let obj = new Object()",
      "let obj = {}",
      "let obj = new MyObject()",
      "let obj = Object.create()"
    ],
    correctAnswer: "let obj = Object.create()",
    answerDescription: "`Object.create()` requires a prototype argument; calling it without arguments throws an error."
  },
  {
    id: 19,
    question: "Which JavaScript method can be used to combine two arrays into one?",
    options: ["concat()", "push()", "join()", "merge()"],
    correctAnswer: "concat()",
    answerDescription: "`concat()` returns a new array that merges the calling array with other array(s) or values."
  },
  {
    id: 20,
    question: "What does the 'setTimeout()' function do in JavaScript?",
    options: [
      "Delays the execution of a function until after a set amount of time",
      "Executes a function immediately",
      "Sets a loop to repeatedly execute a function",
      "None of the above"
    ],
    correctAnswer: "Delays the execution of a function until after a set amount of time",
    answerDescription: "`setTimeout()` schedules a function to run after a specified number of milliseconds."
  },
  {
    id: 21,
    question: "What is the result of the expression '0.1 + 0.2 === 0.3' in JavaScript?",
    options: ["true", "false", "undefined", "NaN"],
    correctAnswer: "false",
    answerDescription: "Due to floating-point precision errors, `0.1 + 0.2` results in 0.30000000000000004, not exactly 0.3."
  },
  {
    id: 22,
    question: "What is the purpose of the 'Object.create()' method?",
    options: [
      "It creates a new object with a specified prototype",
      "It creates a new object without any prototype",
      "It adds new properties to an existing object",
      "It adds a method to an object"
    ],
    correctAnswer: "It creates a new object with a specified prototype",
    answerDescription: "`Object.create()` creates a new object and sets its prototype to the object provided as the first argument."
  },
  {
    id: 23,
    question: "What is the output of 'console.log([] == ![])' in JavaScript?",
    options: ["true", "false", "undefined", "NaN"],
    correctAnswer: "true",
    answerDescription: "`[] == ![]` is true due to type coercion. `![]` is false, so it becomes `[] == false`, which is also coerced to true."
  },
  {
    id: 24,
    question: "Which method is used to convert a JSON string into a JavaScript object?",
    options: ["JSON.parse()", "JSON.stringify()", "Object.fromJSON()", "JSON.decode()"],
    correctAnswer: "JSON.parse()",
    answerDescription: "`JSON.parse()` takes a JSON-formatted string and returns the equivalent JavaScript object."
  },
  {
    id: 25,
    question: "What is the output of 'console.log(null == undefined)' in JavaScript?",
    options: ["true", "false", "undefined", "NaN"],
    correctAnswer: "true",
    answerDescription: "`null == undefined` is true due to type coercion; they are loosely equal."
  },
  {
    id: 26,
    question: "Which of the following is the correct way to create a class in JavaScript?",
    options: [
      "class MyClass() {}",
      "function MyClass() {}",
      "class MyClass {}",
      "function class MyClass {}"
    ],
    correctAnswer: "class MyClass {}",
    answerDescription: "`class MyClass {}` is the correct syntax to declare a class in JavaScript."
  },
  {
    id: 27,
    question: "Which of the following can be used to prevent a class from being subclassed?",
    options: [
      "Object.freeze()",
      "Object.seal()",
      "static methods",
      "None of the above"
    ],
    correctAnswer: "Object.freeze()",
    answerDescription: "`Object.freeze()` prevents modifications to an object, including class prototypes, making subclassing ineffective."
  },
  {
    id: 28,
    question: "What will the following code output: 'console.log([1, 2] + [3, 4])'?",
    options: ["1, 23, 4", "1,2,3,4", "[1,2][3,4]", "Error"],
    correctAnswer: "1,2,3,4",
    answerDescription: "Adding arrays results in string concatenation: `[1, 2] + [3, 4]` becomes `'1,2' + '3,4'` = `'1,23,4'`."
  },
  {
    id: 29,
    question: "What is the output of 'console.log(!![])'?",
    options: ["true", "false", "undefined", "null"],
    correctAnswer: "true",
    answerDescription: "`[]` is a truthy value in JavaScript. Applying `!!` converts it to `true`."
  },
  {
    id: 30,
    question: "Which of the following is used to define a function that returns a promise?",
    options: ["async function", "callback function", "function* generator", "promise function"],
    correctAnswer: "async function",
    answerDescription: "An `async` function always returns a Promise, either explicitly or implicitly."
  },
  {
    id: 31,
    question: "What does the 'typeof' operator do in JavaScript?",
    options: [
      "Returns the type of a variable or expression",
      "Checks if the variable is an object",
      "Checks if the variable is an array",
      "Returns the size of the variable"
    ],
    correctAnswer: "Returns the type of a variable or expression",
    answerDescription: "`typeof` is used to check the data type of a variable or expression, returning a string."
  },
  {
    id: 32,
    question: "Which of the following is a feature of JavaScript's 'event loop'?",
    options: [
      "Handles asynchronous tasks and executes the next task in the queue after the current task is finished",
      "Executes synchronous tasks first",
      "Only executes tasks when the main thread is idle",
      "None of the above"
    ],
    correctAnswer: "Handles asynchronous tasks and executes the next task in the queue after the current task is finished",
    answerDescription: "The event loop handles non-blocking I/O and ensures that async tasks are processed after the call stack is clear."
  },
  {
    id: 33,
    question: "What does 'NaN' stand for in JavaScript?",
    options: ["Not a Number", "Negative and Number", "No Answer Needed", "Null and Nothing"],
    correctAnswer: "Not a Number",
    answerDescription: "`NaN` stands for Not-a-Number and represents a value that is not a valid number."
  },
  {
    id: 34,
    question: "Which of the following is a correct way to declare a constant variable in JavaScript?",
    options: ["const variableName", "let variableName", "var variableName", "final variableName"],
    correctAnswer: "const variableName",
    answerDescription: "`const` is used to declare block-scoped, read-only named constants."
  },
  {
    id: 35,
    question: "What is the result of 'false == 0' in JavaScript?",
    options: ["true", "false", "undefined", "NaN"],
    correctAnswer: "true",
    answerDescription: "Due to type coercion, `false` becomes 0 and `0 == 0` is true."
  },
  {
    id: 36,
    question: "Which method is used to check if an array includes a specific element in JavaScript?",
    options: ["includes()", "indexOf()", "contains()", "find()"],
    correctAnswer: "includes()",
    answerDescription: "`includes()` checks if an array contains a specific value and returns true or false."
  },
  {
    id: 37,
    question: "Which operator is used for checking strict equality in JavaScript?",
    options: ["==", "===", "!=", "!=="],
    correctAnswer: "===",
    answerDescription: "`===` checks both value and type equality without type coercion."
  },
  {
    id: 38,
    question: "Which of the following can be used to remove an element from the end of an array in JavaScript?",
    options: ["pop()", "shift()", "unshift()", "splice()"],
    correctAnswer: "pop()",
    answerDescription: "`pop()` removes the last element from an array and returns it."
  },
  {
    id: 39,
    question: "Which method is used to convert an object to a JSON string in JavaScript?",
    options: ["JSON.stringify()", "JSON.parse()", "Object.toString()", "Object.toJSON()"],
    correctAnswer: "JSON.stringify()",
    answerDescription: "`JSON.stringify()` serializes a JavaScript object into a JSON-formatted string."
  },
  {
    id: 40,
    question: "What is the result of the following expression: 'true + false'?",
    options: ["true", "false", "1", "0"],
    correctAnswer: "1",
    answerDescription: "`true` becomes 1 and `false` becomes 0, so `true + false` evaluates to 1."
  }
];


 
