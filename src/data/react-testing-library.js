export const rtlQuizzes = [
    {
      id: 1,
      question: "What is the primary goal of React Testing Library?",
      options: [
        "Test implementation details",
        "Encourage testing behavior from the user's perspective",
        "Provide mocks for Redux",
        "Simulate server-side rendering"
      ],
      correctAnswer: "Encourage testing behavior from the user's perspective",
      answerDescription: "React Testing Library encourages tests that focus on what the user experiences, not internal component logic."
    },
    {
      id: 2,
      question: "Which query is best for finding elements in the DOM according to accessibility standards?",
      options: ["getByText", "getByRole", "getByTestId", "getByClassName"],
      correctAnswer: "getByRole",
      answerDescription: "`getByRole` reflects how screen readers interact with content, making it the most accessible-first query."
    },
    {
      id: 3,
      question: "What does `render()` do in React Testing Library?",
      options: [
        "It compiles the React component",
        "It mounts the component to a virtual DOM for testing",
        "It renders the component to the real DOM",
        "It re-renders the entire app"
      ],
      correctAnswer: "It mounts the component to a virtual DOM for testing",
      answerDescription: "`render()` sets up the component in a virtual DOM so you can test how it behaves."
    },
    {
      id: 4,
      question: "Which query will throw an error if no matching element is found?",
      options: ["queryByText", "findByText", "getByText", "queryAllByText"],
      correctAnswer: "getByText",
      answerDescription: "`getByText` is synchronous and throws an error if no matching element is found."
    },
    {
      id: 5,
      question: "Which method is used to simulate user actions in tests?",
      options: ["fireEvent", "simulate", "act", "useEffect"],
      correctAnswer: "fireEvent",
      answerDescription: "`fireEvent` triggers DOM events like clicks or changes to simulate user interaction."
    },
    {
      id: 6,
      question: "Which is the best way to test an input field in React Testing Library?",
      options: [
        "Use querySelector and change its value",
        "Use fireEvent.change() and pass a value",
        "Use ReactDOM.render() to mount it manually",
        "Use getElementById and assign value directly"
      ],
      correctAnswer: "Use fireEvent.change() and pass a value",
      answerDescription: "`fireEvent.change()` properly simulates a user typing and triggers React change handlers."
    },
    {
      id: 7,
      question: "Why is `findBy` query asynchronous?",
      options: [
        "It delays intentionally",
        "It waits for the element to appear in the DOM",
        "It triggers a fetch call",
        "It runs after all tests"
      ],
      correctAnswer: "It waits for the element to appear in the DOM",
      answerDescription: "`findBy` is useful for testing async behavior, like loading data and rendering after delay."
    },
    {
      id: 8,
      question: "Which query returns null instead of throwing if no element is found?",
      options: ["getByText", "queryByText", "findByText", "getAllByText"],
      correctAnswer: "queryByText",
      answerDescription: "`queryByText` safely returns null when the element isn’t found, making it ideal for negative assertions."
    },
    {
      id: 9,
      question: "What does the `screen` object provide?",
      options: [
        "Access to React props",
        "Access to DOM queries globally",
        "Renders components",
        "Handles cleanup of components"
      ],
      correctAnswer: "Access to DOM queries globally",
      answerDescription: "`screen` lets you call queries without needing destructuring from `render()`."
    },
    {
      id: 10,
      question: "How do you test a button click in React Testing Library?",
      options: [
        "screen.click(button)",
        "fireEvent.click(button)",
        "simulateClick(button)",
        "act(button.click)"
      ],
      correctAnswer: "fireEvent.click(button)",
      answerDescription: "`fireEvent.click()` simulates a real user clicking a button in the DOM."
    },
    {
      id: 11,
      question: "What is the best practice for selecting elements in tests?",
      options: ["Use getByTestId", "Use getByRole", "Use querySelector", "Use getById"],
      correctAnswer: "Use getByRole",
      answerDescription: "`getByRole` follows accessibility standards and reflects how users interact with your app."
    },
    {
      id: 12,
      question: "What does `cleanup()` do?",
      options: [
        "Cleans up localStorage after tests",
        "Resets mocked components",
        "Removes the rendered tree from the DOM",
        "Deletes unused test data"
      ],
      correctAnswer: "Removes the rendered tree from the DOM",
      answerDescription: "`cleanup()` ensures no side effects or lingering elements between tests."
    },
    {
      id: 13,
      question: "Which library is often used with React Testing Library to simulate user events?",
      options: ["Jest", "Mocha", "User Event", "Cypress"],
      correctAnswer: "User Event",
      answerDescription: "`@testing-library/user-event` simulates more realistic user interactions than `fireEvent`."
    },
    {
      id: 14,
      question: "What’s the difference between `queryBy` and `getBy`?",
      options: [
        "`queryBy` throws an error, `getBy` returns null",
        "`getBy` throws an error if not found, `queryBy` returns null",
        "Both do the same",
        "`getBy` waits, `queryBy` is synchronous"
      ],
      correctAnswer: "`getBy` throws an error if not found, `queryBy` returns null",
      answerDescription: "Use `queryBy` for optional elements and `getBy` for required ones, as `getBy` will throw if not found."
    },
    {
      id: 15,
      question: "What should you avoid testing according to RTL philosophy?",
      options: [
        "User-visible behavior",
        "Implementation details like internal state",
        "DOM structure",
        "Component re-renders"
      ],
      correctAnswer: "Implementation details like internal state",
      answerDescription: 'RTL promotes testing what the user sees, not how the component is implemented.'
    },
    {
      id: 16,
      question: "How do you test form submission in RTL?",
      options: [
        "Check the form values only",
        "Use fireEvent.submit(formElement)",
        "Use screen.submit(formElement)",
        "Assign values directly"
      ],
      correctAnswer: "Use fireEvent.submit(formElement)",
      answerDescription: 'Simulate a real form submission using `fireEvent.submit()` to trigger onSubmit handlers.'
    },
    {
      id: 17,
      question: "Which is the best way to simulate real user input?",
      options: ["fireEvent.input", "fireEvent.change", "userEvent.type", "act(() => input.value = '')"],
      correctAnswer: "userEvent.type",
      answerDescription: "`userEvent.type()` simulates typing character by character, closer to actual user behavior."
    },
    {
      id: 18,
      question: "What is the preferred method to simulate user interaction in RTL v14+?",
      options: ["fireEvent", "userEvent", "simulate", "trigger"],
      correctAnswer: "userEvent",
      answerDescription: "`userEvent` is the modern, recommended way to simulate complex interactions like typing or tabbing."
    },
    {
      id: 19,
      question: "How do you test asynchronous UI updates?",
      options: ["By using async/await with findBy", "By setting a timeout", "Using wait() only", "Testing immediately after render"],
      correctAnswer: "By using async/await with findBy",
      answerDescription: "`findBy` automatically waits for elements, making it perfect for testing UI updates after data loads."
    },
    {
      id: 20,
      question: "Which method will you use to wait for an element to disappear?",
      options: ["waitForElementToBeRemoved", "getByText", "wait()", "findByRole"],
      correctAnswer: "waitForElementToBeRemoved",
      answerDescription: "Use `waitForElementToBeRemoved` to wait for loading indicators or modals to disappear."
    },
    {
      id: 21,
      question: "What is the purpose of the `act()` function?",
      options: [
        "To update props",
        "To wrap code that triggers updates",
        "To initialize components",
        "To mock components"
      ],
      correctAnswer: "To wrap code that triggers updates",
      answerDescription: "`act()` ensures that all updates related to a test are processed before making assertions."
    },
    {
      id: 22,
      question: "How does `userEvent.click()` differ from `fireEvent.click()`?",
      options: [
        "It is synchronous",
        "It’s more realistic and includes pointer events",
        "It uses jQuery internally",
        "It triggers server requests"
      ],
      correctAnswer: "It’s more realistic and includes pointer events",
      answerDescription: "`userEvent.click()` simulates actual user behavior more closely by triggering multiple events like pointerDown and mouseDown."
    },
    {
      id: 23,
      question: "What does `waitFor()` do?",
      options: [
        "Pauses test execution",
        "Repeats a callback until it stops throwing or times out",
        "Waits for a specific duration",
        "Waits for all events to fire"
      ],
      correctAnswer: "Repeats a callback until it stops throwing or times out",
      answerDescription: "`waitFor()` is used to wait for async conditions to be met, such as changes in the DOM."
    },
    {
      id: 24,
      question: "Which query is best for checking if an element exists multiple times?",
      options: ["getAllByText", "getByText", "queryByText", "findByText"],
      correctAnswer: "getAllByText",
      answerDescription: "`getAllByText` returns an array of all matching elements, useful when you expect multiple instances."
    },
    {
      id: 25,
      question: "What’s the benefit of using `screen` over destructuring from `render()`?",
      options: [
        "It improves performance",
        "It allows consistent access to queries",
        "It replaces the need for imports",
        "It shortens test code"
      ],
      correctAnswer: "It allows consistent access to queries",
      answerDescription: "`screen` gives global access to queries, making tests cleaner and more consistent."
    },
    {
      id: 26,
      question: "Which assertion checks that a button is disabled?",
      options: [
        "expect(button.disabled).toBe(true)",
        "expect(button).toBeDisabled()",
        "expect(button).disabled()",
        "expect(button).not.toBeEnabled()"
      ],
      correctAnswer: "expect(button).toBeDisabled()",
      answerDescription: "`@testing-library/jest-dom` provides `toBeDisabled()` for clearer assertions on disabled form elements."
    },
    {
      id: 27,
      question: "What does `findAllBy` return?",
      options: [
        "A promise that resolves to an array of elements",
        "The first matching element",
        "An array immediately",
        "null if not found"
      ],
      correctAnswer: "A promise that resolves to an array of elements",
      answerDescription: "`findAllBy` is async and waits for all matching elements to appear before resolving."
    },
    {
      id: 28,
      question: "When should you use `waitFor()` over `findBy`?",
      options: [
        "When you expect an element to be removed",
        "When testing static content",
        "When you need more control over waiting",
        "When you use getBy"
      ],
      correctAnswer: "When you need more control over waiting",
      answerDescription: "`waitFor()` is flexible and allows custom logic inside the callback, unlike `findBy` which is limited to DOM queries."
    },
    {
      id: 29,
      question: "How would you test for a loading spinner that eventually disappears?",
      options: [
        "Expect spinner to be in the document",
        "Use waitForElementToBeRemoved",
        "Check its CSS display property",
        "Use setTimeout"
      ],
      correctAnswer: "Use waitForElementToBeRemoved",
      answerDescription: "`waitForElementToBeRemoved()` waits for the spinner to be removed from the DOM before continuing."
    },
    {
      id: 30,
      question: "What does `jest.fn()` help with in RTL tests?",
      options: [
        "Rendering React components",
        "Creating test doubles (mocks)",
        "Simulating click events",
        "Async testing"
      ],
      correctAnswer: "Creating test doubles (mocks)",
      answerDescription: "`jest.fn()` lets you create mock functions to test interactions and verify calls."
    },
    {
      id: 31,
      question: "Which is a valid reason to use `data-testid`?",
      options: [
        "To style elements",
        "As a backup when semantic queries don’t work",
        "To optimize rendering",
        "To mock a component"
      ],
      correctAnswer: "As a backup when semantic queries don’t work",
      answerDescription: "`data-testid` should be a last resort when other queries like `getByRole` or `getByLabelText` are not feasible."
    },
    {
      id: 32,
      question: "How can you test that a modal opens after clicking a button?",
      options: [
        "Use getById",
        "Click the button and expect modal text to be in the document",
        "Render the modal directly",
        "Use useEffect to trigger the modal"
      ],
      correctAnswer: "Click the button and expect modal text to be in the document",
      answerDescription: "Simulate the user action (click) and then check if the modal’s content is in the DOM."
    },
    {
      id: 33,
      question: "What query would you use to find elements based on their label text?",
      options: [
        "getByLabelText",
        "getByText",
        "getByTestId",
        "getByRole"
      ],
      correctAnswer: "getByLabelText",
      answerDescription: "`getByLabelText` is used to query form elements like inputs based on their associated label."
    },
    {
      id: 34,
      question: "How do you test a component's state change?",
      options: [
        "Check state values directly in the component",
        "Simulate events and check DOM changes",
        "Use Redux or Context mocks",
        "Test implementation details"
      ],
      correctAnswer: "Simulate events and check DOM changes",
      answerDescription: "Testing state should focus on observable effects like changes in the DOM, rather than directly checking the internal state."
    },
    {
      id: 35,
      question: "What query should you use to select elements by their role?",
      options: [
        "getByRole",
        "getByText",
        "queryByRole",
        "getByTestId"
      ],
      correctAnswer: "getByRole",
      answerDescription: "`getByRole` is the preferred query for selecting elements based on their role, ensuring accessibility."
    },
    {
      id: 36,
      question: "What’s the benefit of using `@testing-library/jest-dom`?",
      options: [
        "It makes RTL compatible with jest",
        "It provides additional matchers for DOM elements",
        "It runs tests asynchronously",
        "It simulates user interactions"
      ],
      correctAnswer: "It provides additional matchers for DOM elements",
      answerDescription: "`@testing-library/jest-dom` extends jest with matchers like `toBeInTheDocument` for cleaner assertions."
    },
    {
      id: 37,
      question: "What method allows you to mock browser API calls in tests?",
      options: [
        "mockImplementation",
        "mockFunction",
        "jest.fn()",
        "mockServiceWorker"
      ],
      correctAnswer: "mockImplementation",
      answerDescription: "`mockImplementation` allows you to replace function implementations like fetch for controlling test behavior."
    },
    {
      id: 38,
      question: "How do you test async effects like fetching data?",
      options: [
        "Test using `findBy` queries",
        "Use `waitFor` with assertions",
        "Use `screen.debug()`",
        "Render only after data is available"
      ],
      correctAnswer: "Test using `findBy` queries",
      answerDescription: "`findBy` queries automatically wait for async DOM changes, making them ideal for async data tests."
    },
    {
      id: 39,
      question: "What is a best practice when testing user interaction?",
      options: [
        "Use static props",
        "Test specific UI details",
        "Test user behavior instead of implementation",
        "Test private methods"
      ],
      correctAnswer: "Test user behavior instead of implementation",
      answerDescription: "Tests should focus on how the user interacts with your app, rather than on its internal workings."
    },
    {
      id: 40,
      question: "Which query would you use to find a button element by its name?",
      options: [
        "getByRole",
        "getByText",
        "getByName",
        "getByTestId"
      ],
      correctAnswer: "getByText",
      answerDescription: "`getByText` is commonly used to select elements based on their text content, including button labels."
    }
  ];
  