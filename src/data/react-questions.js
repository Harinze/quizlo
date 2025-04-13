export const reactInterviewQuestions = [
    {
      id: 1,
      question: "What is the purpose of the `useEffect` hook in React?",
      options: [
        "To fetch data only",
        "To perform side effects in function components",
        "To create new components",
        "To manage component state"
      ],
      correctAnswer: "To perform side effects in function components",
      answerDescription: "The `useEffect` hook is used to perform side effects in function components, like data fetching, subscriptions, or manual DOM manipulation."
    },
    {
      id: 2,
      question: "What will happen if you call `setState` inside `useEffect` without a dependency array?",
      options: [
        "Nothing happens",
        "The component updates once",
        "It will cause an infinite re-render loop",
        "It throws an error"
      ],
      correctAnswer: "It will cause an infinite re-render loop",
      answerDescription: "Calling `setState` inside `useEffect` without a dependency array causes the effect to run after every render, leading to infinite re-renders."
    },
    {
      id: 3,
      question: "What is the difference between `props` and `state` in React?",
      options: [
        "Props are mutable, state is immutable",
        "Both are used for styling",
        "Props are passed to components, state is managed within the component",
        "No difference"
      ],
      correctAnswer: "Props are passed to components, state is managed within the component",
      answerDescription: "Props are passed from parent to child components, whereas state is local to the component and can be updated to trigger re-renders."
    },
    {
      id: 4,
      question: "What is JSX?",
      options: [
        "A CSS preprocessor",
        "JavaScript XML that allows writing HTML in React",
        "A browser plugin",
        "A data-fetching library"
      ],
      correctAnswer: "JavaScript XML that allows writing HTML in React",
      answerDescription: "JSX is a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript. React components typically return JSX to define their structure."
    },
    {
      id: 5,
      question: "How do you pass a callback to a child component?",
      options: [
        "Using the `children` prop",
        "By importing the child inside the parent",
        "By passing the function via props",
        "You cannot pass functions to children"
      ],
      correctAnswer: "By passing the function via props",
      answerDescription: "Callbacks can be passed to child components as props. The child component can then invoke the function when needed."
    },
    {
      id: 6,
      question: "What hook is used to access and update component state in a functional component?",
      options: [
        "useEffect",
        "useRef",
        "useState",
        "useMemo"
      ],
      correctAnswer: "useState",
      answerDescription: "`useState` is the hook that allows you to declare state variables in a functional component and update them."
    },
    {
      id: 7,
      question: "What does the `key` prop do in a list rendering in React?",
      options: [
        "It adds CSS styles",
        "It uniquely identifies each element for efficient DOM updates",
        "It is used to pass secret props",
        "None of the above"
      ],
      correctAnswer: "It uniquely identifies each element for efficient DOM updates",
      answerDescription: "The `key` prop is used to help React identify which items have changed, are added, or are removed, enhancing performance during list re-rendering."
    },
    {
      id: 8,
      question: "What is the virtual DOM in React?",
      options: [
        "An actual copy of the DOM",
        "A DOM that exists in the browser only",
        "A lightweight copy of the real DOM used for performance optimization",
        "A DOM created using HTML"
      ],
      correctAnswer: "A lightweight copy of the real DOM used for performance optimization",
      answerDescription: "The virtual DOM is a lightweight representation of the actual DOM that React uses to optimize updates and minimize direct manipulation of the browser's DOM."
    },
    {
      id: 9,
      question: "What is the correct way to conditionally render a component?",
      options: [
        "Using if/else outside the render",
        "Using ternary operators or logical &&",
        "You cannot conditionally render in React",
        "Using a for loop"
      ],
      correctAnswer: "Using ternary operators or logical &&",
      answerDescription: "Conditional rendering in React can be done with ternary operators or logical `&&` inside the JSX to determine whether a component should render."
    },
    {
      id: 10,
      question: "Which hook is used to reference a DOM element in React?",
      options: [
        "useState",
        "useEffect",
        "useCallback",
        "useRef"
      ],
      correctAnswer: "useRef",
      answerDescription: "`useRef` is used to persist values across renders and to reference DOM elements directly, making it useful for DOM manipulation."
    },
    {
      id: 11,
      question: "What does `React.memo` do?",
      options: [
        "It creates a class component",
        "It avoids unnecessary re-renders by memoizing functional components",
        "It memorizes user input",
        "It caches API responses"
      ],
      correctAnswer: "It avoids unnecessary re-renders by memoizing functional components",
      answerDescription: "`React.memo` is a higher-order component that memoizes a functional component to prevent unnecessary re-renders when its props do not change."
    },
    {
      id: 12,
      question: "Which lifecycle method is used to fetch data in a class component?",
      options: [
        "componentWillUpdate",
        "componentDidMount",
        "render",
        "constructor"
      ],
      correctAnswer: "componentDidMount",
      answerDescription: "In class components, `componentDidMount` is used to fetch data after the component has mounted."
    },
    {
      id: 13,
      question: "What is `useCallback` used for in React?",
      options: [
        "To memoize a callback function to prevent unnecessary re-renders",
        "To fetch data asynchronously",
        "To run effects only once",
        "To update state based on props"
      ],
      correctAnswer: "To memoize a callback function to prevent unnecessary re-renders",
      answerDescription: "`useCallback` returns a memoized version of a callback function, preventing it from being recreated on every render."
    },
    {
      id: 14,
      question: "How can you improve performance in React?",
      options: [
        "Use inline functions in render",
        "Avoid using keys",
        "Use memoization like `React.memo`, `useMemo`, and `useCallback`",
        "Use global variables"
      ],
      correctAnswer: "Use memoization like `React.memo`, `useMemo`, and `useCallback`",
      answerDescription: "Memoization techniques like `React.memo`, `useMemo`, and `useCallback` help reduce unnecessary renders and improve performance."
    },
    {
      id: 15,
      question: "What will `useEffect(() => {}, [])` do?",
      options: [
        "It runs every render",
        "It runs only once after the component mounts",
        "It runs before every update",
        "It never runs"
      ],
      correctAnswer: "It runs only once after the component mounts",
      answerDescription: "The empty dependency array `[]` in `useEffect` ensures that the effect runs only once, right after the component mounts."
    },
    {
      id: 16,
      question: "How do you lift state up in React?",
      options: [
        "By using global variables",
        "By moving state to the nearest common ancestor",
        "By using Redux",
        "By setting state in the child component"
      ],
      correctAnswer: "By moving state to the nearest common ancestor",
      answerDescription: "Lifting state up involves moving the state to the nearest common ancestor component so that it can be shared among multiple child components."
    },
    {
      id: 17,
      question: "How is React different from Angular?",
      options: [
        "React is a library, Angular is a framework",
        "Angular uses JSX, React doesn't",
        "React uses two-way binding, Angular uses one-way",
        "They are identical"
      ],
      correctAnswer: "React is a library, Angular is a framework",
      answerDescription: "React is a JavaScript library focused on building UI components, while Angular is a full-fledged framework that provides a complete solution for web applications."
    },
    {
      id: 18,
      question: "What is the role of `ReactDOM.render`?",
      options: [
        "To update the state",
        "To render React elements into the DOM",
        "To define routing",
        "To create a component"
      ],
      correctAnswer: "To render React elements into the DOM",
      answerDescription: "`ReactDOM.render` is used to render React components into the DOM and establish the root component for a React app."
    },
    {
      id: 19,
      question: "What is the purpose of the `useMemo` hook?",
      options: [
        "To store references to DOM elements",
        "To memoize the result of a computation",
        "To manage state",
        "To return a new function on each render"
      ],
      correctAnswer: "To memoize the result of a computation",
      answerDescription: "`useMemo` is used to memoize the result of expensive calculations to prevent unnecessary re-computations on each render."
    },
    {
      id: 20,
      question: "What is the correct way to handle form submission in React?",
      options: [
        "Using traditional form submission",
        "Using a button with `onClick` handler",
        "Using `onSubmit` event handler",
        "Using `useState` to control form inputs"
      ],
      correctAnswer: "Using `onSubmit` event handler",
      answerDescription: "Form submission is handled using the `onSubmit` event handler in React, typically preventing default behavior to control the submission process."
    },
    {
      id: 21,
      question: "What is `prop drilling`?",
      options: [
        "Passing props from parent to child components",
        "Passing state directly to the component",
        "Using `useEffect` for side effects",
        "Using Redux"
      ],
      correctAnswer: "Passing props from parent to child components",
      answerDescription: "Prop drilling refers to the process of passing props down through multiple levels of components, even if some components don't use them."
    },
    {
      id: 22,
      question: "What is `React.lazy` used for?",
      options: [
        "To load components asynchronously",
        "To render elements lazily",
        "To optimize the component rendering",
        "To define conditional rendering"
      ],
      correctAnswer: "To load components asynchronously",
      answerDescription: "`React.lazy` allows you to dynamically import components and split the bundle, improving performance by loading components only when needed."
    },
    {
      id: 23,
      question: "How do you pass a function as a prop to a child component?",
      options: [
        "By passing the function directly in JSX",
        "By binding the function inside the child component",
        "By using the context API",
        "By calling the function in the parent"
      ],
      correctAnswer: "By passing the function directly in JSX",
      answerDescription: "Functions can be passed to child components just like any other value, using the prop in JSX."
    },
    {
      id: 24,
      question: "How does React handle events?",
      options: [
        "Using a native DOM event system",
        "By using JSX to handle events",
        "React does not handle events",
        "By using custom event handlers"
      ],
      correctAnswer: "Using a native DOM event system",
      answerDescription: "React handles events using a synthetic event system that wraps the browser's native events, ensuring consistent behavior across browsers."
    },
    {
      id: 25,
      question: "What are controlled components in React?",
      options: [
        "Components that manage their own state",
        "Components that depend on the global state",
        "Components where form data is controlled by React state",
        "Components without any state"
      ],
      correctAnswer: "Components where form data is controlled by React state",
      answerDescription: "Controlled components have their form elements' values controlled by React state, ensuring that the form's state is always in sync with the component."
    },
    {
      id: 26,
      question: "What does `React.createElement` do?",
      options: [
        "Creates a component",
        "Creates a new element in the DOM",
        "Creates a virtual DOM element",
        "Creates a function"
      ],
      correctAnswer: "Creates a virtual DOM element",
      answerDescription: "`React.createElement` creates a virtual DOM element, which is later rendered into the actual DOM by React."
    },
    {
      id: 27,
      question: "What is the purpose of the `shouldComponentUpdate` lifecycle method?",
      options: [
        "It triggers the component to re-render",
        "It determines if the component should re-render",
        "It handles state changes",
        "It is used to manage the component's children"
      ],
      correctAnswer: "It determines if the component should re-render",
      answerDescription: "`shouldComponentUpdate` allows you to optimize performance by preventing unnecessary re-renders of the component."
    },
    {
      id: 28,
      question: "What is the difference between `componentWillMount` and `componentDidMount`?",
      options: [
        "`componentWillMount` is invoked before the component mounts, while `componentDidMount` is invoked after the component mounts",
        "They are the same",
        "`componentWillMount` is used for state changes, `componentDidMount` is used for props changes",
        "`componentDidMount` is used for side effects, `componentWillMount` is for state management"
      ],
      correctAnswer: "`componentWillMount` is invoked before the component mounts, while `componentDidMount` is invoked after the component mounts",
      answerDescription: "`componentWillMount` was used to perform actions before the component mounts, but it has been deprecated in favor of `componentDidMount`, which is called after the component is mounted."
    },
    {
      id: 29,
      question: "What does `forceUpdate` do in React?",
      options: [
        "Forces the component to update",
        "Forces the component to rerender",
        "Stops the component from updating",
        "Is used to change state directly"
      ],
      correctAnswer: "Forces the component to update",
      answerDescription: "`forceUpdate` bypasses `shouldComponentUpdate` and forces the component to update, even if the state or props have not changed."
    },
    {
      id: 30,
      question: "What is the purpose of `React.StrictMode`?",
      options: [
        "To check for deprecated features and potential problems in an app",
        "To improve app performance",
        "To add debugging capabilities",
        "To enable strict rendering behavior"
      ],
      correctAnswer: "To check for deprecated features and potential problems in an app",
      answerDescription: "`React.StrictMode` is a wrapper that activates additional checks for potential issues, such as detecting unsafe lifecycle methods and detecting legacy API usage."
    },
    {
      id: 31,
      question: "How do you update the state of a component?",
      options: [
        "Directly changing the state variable",
        "Using `setState` (class component) or `useState` setter (functional component)",
        "Using `updateState` method",
        "Manually re-rendering the component"
      ],
      correctAnswer: "Using `setState` (class component) or `useState` setter (functional component)",
      answerDescription: "State is updated in class components using `setState` and in functional components using the setter function from `useState`."
    },
    {
      id: 32,
      question: "What is the role of the `key` attribute in React lists?",
      options: [
        "To assign styles to list items",
        "To manage the state of each list item",
        "To help React identify which items have changed",
        "To create unique identifiers"
      ],
      correctAnswer: "To help React identify which items have changed",
      answerDescription: "The `key` prop helps React efficiently update the list by tracking which items have changed, been added, or removed."
    },
    {
      id: 33,
      question: "What is `React.lazy` used for?",
      options: [
        "To load components asynchronously",
        "To optimize component rendering",
        "To perform side effects",
        "To manage state"
      ],
      correctAnswer: "To load components asynchronously",
      answerDescription: "`React.lazy` allows for dynamic component loading only when needed, which helps reduce the initial bundle size."
    },
    {
      id: 34,
      question: "What are Hooks in React?",
      options: [
        "Functions that let you use React state and lifecycle features in functional components",
        "A way to update props in functional components",
        "A way to manage class components",
        "Functions used for animation"
      ],
      correctAnswer: "Functions that let you use React state and lifecycle features in functional components",
      answerDescription: "Hooks are special functions that allow you to use React state, lifecycle methods, and other features in functional components."
    },
    {
      id: 35,
      question: "Which hook can help avoid creating new object references on every render?",
      options: [
        "useMemo",
        "useCallback",
        "useRef",
        "All of the above"
      ],
      correctAnswer: "All of the above",
      answerDescription: "All of these hooks can help avoid unnecessary creation of new references on each render, improving performance."
    },
    {
      id: 36,
      question: "What is the purpose of `useContext` in React?",
      options: [
        "To handle routing",
        "To share state between components without prop drilling",
        "To update the DOM",
        "To fetch data from an API"
      ],
      correctAnswer: "To share state between components without prop drilling",
      answerDescription: "`useContext` allows you to share global state across components without the need to pass props manually through each level of the component tree."
    },
    {
      id: 37,
      question: "What happens when a component’s state changes in React?",
      options: [
        "The component re-renders",
        "The component doesn’t re-render",
        "Only its parent re-renders",
        "The component unmounts and mounts again"
      ],
      correctAnswer: "The component re-renders",
      answerDescription: "State changes in React trigger re-renders of the component to reflect the new state, ensuring the UI stays up to date."
    },
    {
      id: 38,
      question: "What is the purpose of `React.Fragment`?",
      options: [
        "To add a wrapper div without affecting the DOM",
        "To wrap multiple elements without adding extra nodes to the DOM",
        "To manage state in components",
        "To fetch data asynchronously"
      ],
      correctAnswer: "To wrap multiple elements without adding extra nodes to the DOM",
      answerDescription: "`React.Fragment` allows you to group multiple elements without adding an extra node to the DOM, which is useful for returning multiple elements from a component."
    },
    {
      id: 39,
      question: "What does the `dangerouslySetInnerHTML` attribute do?",
      options: [
        "It allows injecting raw HTML into a React component",
        "It injects CSS styles into a component",
        "It enables an iframe inside a component",
        "It allows JavaScript execution within components"
      ],
      correctAnswer: "It allows injecting raw HTML into a React component",
      answerDescription: "`dangerouslySetInnerHTML` is used to inject raw HTML into a component, which can be dangerous if not sanitized properly, hence the 'dangerous' warning."
    },
    {
      id: 40,
      question: "What is the purpose of `React.memo`?",
      options: [
        "To avoid unnecessary re-renders",
        "To create new components",
        "To force a component to update",
        "To manage state efficiently"
      ],
      correctAnswer: "To avoid unnecessary re-renders",
      answerDescription: "`React.memo` is used to memoize functional components to prevent re-renders when their props haven't changed."
    }
  ];
  