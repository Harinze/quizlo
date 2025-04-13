// export const reactInterviewQuestions = [
//     {
//       id: 1,
//       question: "What is the purpose of the `useEffect` hook in React?",
//       options: [
//         "To fetch data only",
//         "To perform side effects in function components",
//         "To create new components",
//         "To manage component state"
//       ],
//       correctAnswer: "To perform side effects in function components"
//     },
//     {
//       id: 2,
//       question: "What will happen if you call `setState` inside `useEffect` without a dependency array?",
//       options: [
//         "Nothing happens",
//         "The component updates once",
//         "It will cause an infinite re-render loop",
//         "It throws an error"
//       ],
//       correctAnswer: "It will cause an infinite re-render loop"
//     },
//     {
//       id: 3,
//       question: "What is the difference between `props` and `state` in React?",
//       options: [
//         "Props are mutable, state is immutable",
//         "Both are used for styling",
//         "Props are passed to components, state is managed within the component",
//         "No difference"
//       ],
//       correctAnswer: "Props are passed to components, state is managed within the component"
//     },
//     {
//       id: 4,
//       question: "What is JSX?",
//       options: [
//         "A CSS preprocessor",
//         "JavaScript XML that allows writing HTML in React",
//         "A browser plugin",
//         "A data-fetching library"
//       ],
//       correctAnswer: "JavaScript XML that allows writing HTML in React"
//     },
//     {
//       id: 5,
//       question: "How do you pass a callback to a child component?",
//       options: [
//         "Using the `children` prop",
//         "By importing the child inside the parent",
//         "By passing the function via props",
//         "You cannot pass functions to children"
//       ],
//       correctAnswer: "By passing the function via props"
//     },
//     {
//       id: 6,
//       question: "What hook is used to access and update component state in a functional component?",
//       options: [
//         "useEffect",
//         "useRef",
//         "useState",
//         "useMemo"
//       ],
//       correctAnswer: "useState"
//     },
//     {
//       id: 7,
//       question: "What does the `key` prop do in a list rendering in React?",
//       options: [
//         "It adds CSS styles",
//         "It uniquely identifies each element for efficient DOM updates",
//         "It is used to pass secret props",
//         "None of the above"
//       ],
//       correctAnswer: "It uniquely identifies each element for efficient DOM updates"
//     },
//     {
//       id: 8,
//       question: "What is the virtual DOM in React?",
//       options: [
//         "An actual copy of the DOM",
//         "A DOM that exists in the browser only",
//         "A lightweight copy of the real DOM used for performance optimization",
//         "A DOM created using HTML"
//       ],
//       correctAnswer: "A lightweight copy of the real DOM used for performance optimization"
//     },
//     {
//       id: 9,
//       question: "What is the correct way to conditionally render a component?",
//       options: [
//         "Using if/else outside the render",
//         "Using ternary operators or logical &&",
//         "You cannot conditionally render in React",
//         "Using a for loop"
//       ],
//       correctAnswer: "Using ternary operators or logical &&"
//     },
//     {
//       id: 10,
//       question: "Which hook is used to reference a DOM element in React?",
//       options: [
//         "useState",
//         "useEffect",
//         "useCallback",
//         "useRef"
//       ],
//       correctAnswer: "useRef"
//     },
//     {
//       id: 11,
//       question: "What does `React.memo` do?",
//       options: [
//         "It creates a class component",
//         "It avoids unnecessary re-renders by memoizing functional components",
//         "It memorizes user input",
//         "It caches API responses"
//       ],
//       correctAnswer: "It avoids unnecessary re-renders by memoizing functional components"
//     },
//     {
//       id: 12,
//       question: "Which lifecycle method is used to fetch data in a class component?",
//       options: [
//         "componentWillUpdate",
//         "componentDidMount",
//         "render",
//         "constructor"
//       ],
//       correctAnswer: "componentDidMount"
//     },
//     {
//       id: 13,
//       question: "What is `useCallback` used for in React?",
//       options: [
//         "To memoize a callback function to prevent unnecessary re-renders",
//         "To fetch data asynchronously",
//         "To run effects only once",
//         "To update state based on props"
//       ],
//       correctAnswer: "To memoize a callback function to prevent unnecessary re-renders"
//     },
//     {
//       id: 14,
//       question: "How can you improve performance in React?",
//       options: [
//         "Use inline functions in render",
//         "Avoid using keys",
//         "Use memoization like `React.memo`, `useMemo`, and `useCallback`",
//         "Use global variables"
//       ],
//       correctAnswer: "Use memoization like `React.memo`, `useMemo`, and `useCallback`"
//     },
//     {
//       id: 15,
//       question: "What will `useEffect(() => {}, [])` do?",
//       options: [
//         "It runs every render",
//         "It runs only once after the component mounts",
//         "It runs before every update",
//         "It never runs"
//       ],
//       correctAnswer: "It runs only once after the component mounts"
//     },
//     {
//       id: 16,
//       question: "How do you lift state up in React?",
//       options: [
//         "By using global variables",
//         "By moving state to the nearest common ancestor",
//         "By using Redux",
//         "By setting state in the child component"
//       ],
//       correctAnswer: "By moving state to the nearest common ancestor"
//     },
//     {
//       id: 17,
//       question: "How is React different from Angular?",
//       options: [
//         "React is a library, Angular is a framework",
//         "Angular uses JSX, React doesn't",
//         "React uses two-way binding, Angular uses one-way",
//         "They are identical"
//       ],
//       correctAnswer: "React is a library, Angular is a framework"
//     },
//     {
//       id: 18,
//       question: "What is the role of `ReactDOM.render`?",
//       options: [
//         "To update the state",
//         "To render React elements into the DOM",
//         "To define routing",
//         "To create a component"
//       ],
//       correctAnswer: "To render React elements into the DOM"
//     },
//     {
//       id: 19,
//       question: "What is the purpose of the `useMemo` hook?",
//       options: [
//         "To store references to DOM elements",
//         "To memoize the result of a computation",
//         "To manage state",
//         "To return a new function on each render"
//       ],
//       correctAnswer: "To memoize the result of a computation"
//     },
//     {
//       id: 20,
//       question: "What will the following code return: `typeof React`?",
//       options: [
//         "function",
//         "object",
//         "undefined",
//         "string"
//       ],
//       correctAnswer: "object"
//     },
//      {
//     id: 21,
//     question: "What does the second argument of `useEffect` control?",
//     options: [
//       "How many components are rendered",
//       "Which state or props changes should trigger the effect",
//       "The return value of the effect",
//       "The cleanup function"
//     ],
//     correctAnswer: "Which state or props changes should trigger the effect"
//   },
//   {
//     id: 22,
//     question: "What happens if you return a function from inside `useEffect()`?",
//     options: [
//       "Nothing, it's ignored",
//       "React will call it during cleanup (e.g., on unmount)",
//       "It updates the DOM directly",
//       "It replaces the entire effect"
//     ],
//     correctAnswer: "React will call it during cleanup (e.g., on unmount)"
//   },
//   {
//     id: 23,
//     question: "What does `useLayoutEffect` do differently from `useEffect`?",
//     options: [
//       "It doesn't exist in React",
//       "It executes before DOM painting, blocking the screen update",
//       "It’s used to layout the page",
//       "It automatically batches updates"
//     ],
//     correctAnswer: "It executes before DOM painting, blocking the screen update"
//   },
//   {
//     id: 24,
//     question: "Which hook prevents a component from re-rendering unless its dependencies change?",
//     options: [
//       "useEffect",
//       "useCallback",
//       "useMemo",
//       "React.memo"
//     ],
//     correctAnswer: "React.memo"
//   },
//   {
//     id: 25,
//     question: "How would you handle an error thrown by a child component?",
//     options: [
//       "Wrap it with `ErrorBoundary`",
//       "Use try-catch inside the child",
//       "Use `componentDidCatch` in functional components",
//       "Use `useErrorHandler()`"
//     ],
//     correctAnswer: "Wrap it with `ErrorBoundary`"
//   },
//   {
//     id: 26,
//     question: "How can you debounce an input in React?",
//     options: [
//       "Use `setTimeout` inside `useEffect`",
//       "Use `useMemo` with a ref",
//       "Use `useRef` and `clearInterval`",
//       "Use `useLayoutEffect`"
//     ],
//     correctAnswer: "Use `setTimeout` inside `useEffect`"
//   },
//   {
//     id: 27,
//     question: "Why might you use `useReducer` instead of `useState`?",
//     options: [
//       "To store multiple types of values",
//       "To optimize styling performance",
//       "For complex state logic and state transitions",
//       "To fetch external data"
//     ],
//     correctAnswer: "For complex state logic and state transitions"
//   },
//   {
//     id: 28,
//     question: "What is a controlled component in React?",
//     options: [
//       "A component that maintains its own state",
//       "A component whose state is controlled by the DOM",
//       "An input element whose value is managed by React state",
//       "A form that auto-submits"
//     ],
//     correctAnswer: "An input element whose value is managed by React state"
//   },
//   {
//     id: 29,
//     question: "What happens if you call `setState` multiple times in a row in the same function?",
//     options: [
//       "All updates happen instantly",
//       "React batches and merges updates in one re-render",
//       "Only the first one applies",
//       "The last one overwrites others"
//     ],
//     correctAnswer: "React batches and merges updates in one re-render"
//   },
//   {
//     id: 30,
//     question: "What is the correct way to share logic between multiple components?",
//     options: [
//       "Use HOC or custom hooks",
//       "Use `useEffect` with multiple returns",
//       "Use Context API only",
//       "You cannot share logic between components"
//     ],
//     correctAnswer: "Use HOC or custom hooks"
//   },
//   {
//     id: 31,
//     question: "What’s the role of the dependency array in `useCallback`?",
//     options: [
//       "To define how often the function runs",
//       "To trigger a re-render",
//       "To re-memoize the function when dependencies change",
//       "To skip function calls"
//     ],
//     correctAnswer: "To re-memoize the function when dependencies change"
//   },
//   {
//     id: 32,
//     question: "Why should `key` props be stable and unique when rendering lists?",
//     options: [
//       "To avoid unnecessary re-renders and bugs",
//       "To trigger animations",
//       "To identify which items to style",
//       "To pass data to a reducer"
//     ],
//     correctAnswer: "To avoid unnecessary re-renders and bugs"
//   },
//   {
//     id: 33,
//     question: "Which is true about `React.StrictMode`?",
//     options: [
//       "It renders components twice in dev mode to detect side effects",
//       "It disables unsafe lifecycles in production",
//       "It automatically improves performance",
//       "It’s required to use hooks"
//     ],
//     correctAnswer: "It renders components twice in dev mode to detect side effects"
//   },
//   {
//     id: 34,
//     question: "How can you avoid prop drilling in a deeply nested component structure?",
//     options: [
//       "Use Redux or Context API",
//       "Use `useRef`",
//       "Use `useEffect`",
//       "Pass props through all layers"
//     ],
//     correctAnswer: "Use Redux or Context API"
//   },
//   {
//     id: 35,
//     question: "Which tool is typically used to test React components?",
//     options: [
//       "Jest and React Testing Library",
//       "Mocha and Axios",
//       "Postman and Enzyme only",
//       "Cypress only"
//     ],
//     correctAnswer: "Jest and React Testing Library"
//   },
//   {
//     id: 36,
//     question: "Which hook can help avoid creating new object references on every render?",
//     options: [
//       "useMemo",
//       "useCallback",
//       "useRef",
//       "All of the above"
//     ],
//     correctAnswer: "All of the above"
//   },
//   {
//     id: 37,
//     question: "How do you lazy load a component in React?",
//     options: [
//       "`import` and `useEffect`",
//       "`React.lazy(() => import(...))` and `<Suspense>`",
//       "Use `useRef`",
//       "Use `React.memo`"
//     ],
//     correctAnswer: "`React.lazy(() => import(...))` and `<Suspense>`"
//   },
//   {
//     id: 38,
//     question: "What is the default behavior of `useEffect` if no dependencies are specified?",
//     options: [
//       "Runs on initial mount only",
//       "Runs every time the component renders",
//       "Runs once per prop change",
//       "Throws an error"
//     ],
//     correctAnswer: "Runs every time the component renders"
//   },
//   {
//     id: 39,
//     question: "What is an uncontrolled component in React?",
//     options: [
//       "A component with no props",
//       "A form element that handles its own state via the DOM",
//       "A component that uses Context",
//       "A child that controls its parent"
//     ],
//     correctAnswer: "A form element that handles its own state via the DOM"
//   },
//   {
//     id: 40,
//     question: "Which of these can cause memory leaks in React apps?",
//     options: [
//       "Forgotten `setTimeout`/`setInterval` cleanup",
//       "Not unsubscribing from listeners in `useEffect`",
//       "Leaving mounted components uncleaned",
//       "All of the above"
//     ],
//     correctAnswer: "All of the above"
//   }

//   ];
  