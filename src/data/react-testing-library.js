// export const rtlQuizzes = [
//     {
//       id: 1,
//       question: "What is the primary goal of React Testing Library?",
//       options: [
//         "Test implementation details",
//         "Encourage testing behavior from the user's perspective",
//         "Provide mocks for Redux",
//         "Simulate server-side rendering"
//       ],
//       correctAnswer: "Encourage testing behavior from the user's perspective"
//     },
//     {
//       id: 2,
//       question: "Which query is best for finding elements in the DOM according to accessibility standards?",
//       options: ["getByText", "getByRole", "getByTestId", "getByClassName"],
//       correctAnswer: "getByRole"
//     },
//     {
//       id: 3,
//       question: "What does `render()` do in React Testing Library?",
//       options: [
//         "It compiles the React component",
//         "It mounts the component to a virtual DOM for testing",
//         "It renders the component to the real DOM",
//         "It re-renders the entire app"
//       ],
//       correctAnswer: "It mounts the component to a virtual DOM for testing"
//     },
//     {
//       id: 4,
//       question: "Which query will throw an error if no matching element is found?",
//       options: ["queryByText", "findByText", "getByText", "queryAllByText"],
//       correctAnswer: "getByText"
//     },
//     {
//       id: 5,
//       question: "Which method is used to simulate user actions in tests?",
//       options: ["fireEvent", "simulate", "act", "useEffect"],
//       correctAnswer: "fireEvent"
//     },
//     {
//       id: 6,
//       question: "Which is the best way to test an input field in React Testing Library?",
//       options: [
//         "Use querySelector and change its value",
//         "Use fireEvent.change() and pass a value",
//         "Use ReactDOM.render() to mount it manually",
//         "Use getElementById and assign value directly"
//       ],
//       correctAnswer: "Use fireEvent.change() and pass a value"
//     },
//     {
//       id: 7,
//       question: "Why is `findBy` query asynchronous?",
//       options: [
//         "It delays intentionally",
//         "It waits for the element to appear in the DOM",
//         "It triggers a fetch call",
//         "It runs after all tests"
//       ],
//       correctAnswer: "It waits for the element to appear in the DOM"
//     },
//     {
//       id: 8,
//       question: "Which query returns null instead of throwing if no element is found?",
//       options: ["getByText", "queryByText", "findByText", "getAllByText"],
//       correctAnswer: "queryByText"
//     },
//     {
//       id: 9,
//       question: "What does the `screen` object provide?",
//       options: [
//         "Access to React props",
//         "Access to DOM queries globally",
//         "Renders components",
//         "Handles cleanup of components"
//       ],
//       correctAnswer: "Access to DOM queries globally"
//     },
//     {
//       id: 10,
//       question: "How do you test a button click in React Testing Library?",
//       options: [
//         "screen.click(button)",
//         "fireEvent.click(button)",
//         "simulateClick(button)",
//         "act(button.click)"
//       ],
//       correctAnswer: "fireEvent.click(button)"
//     },
//     {
//       id: 11,
//       question: "What is the best practice for selecting elements in tests?",
//       options: ["Use getByTestId", "Use getByRole", "Use querySelector", "Use getById"],
//       correctAnswer: "Use getByRole"
//     },
//     {
//       id: 12,
//       question: "What does `cleanup()` do?",
//       options: [
//         "Cleans up localStorage after tests",
//         "Resets mocked components",
//         "Removes the rendered tree from the DOM",
//         "Deletes unused test data"
//       ],
//       correctAnswer: "Removes the rendered tree from the DOM"
//     },
//     {
//       id: 13,
//       question: "Which library is often used with React Testing Library to simulate user events?",
//       options: ["Jest", "Mocha", "User Event", "Cypress"],
//       correctAnswer: "User Event"
//     },
//     {
//       id: 14,
//       question: "What’s the difference between `queryBy` and `getBy`?",
//       options: [
//         "`queryBy` throws an error, `getBy` returns null",
//         "`getBy` throws an error if not found, `queryBy` returns null",
//         "Both do the same",
//         "`getBy` waits, `queryBy` is synchronous"
//       ],
//       correctAnswer: "`getBy` throws an error if not found, `queryBy` returns null"
//     },
//     {
//       id: 15,
//       question: "What should you avoid testing according to RTL philosophy?",
//       options: [
//         "User-visible behavior",
//         "Implementation details like internal state",
//         "DOM structure",
//         "Component re-renders"
//       ],
//       correctAnswer: "Implementation details like internal state"
//     },
//     {
//       id: 16,
//       question: "How do you test form submission in RTL?",
//       options: [
//         "Check the form values only",
//         "Use fireEvent.submit(formElement)",
//         "Use screen.submit(formElement)",
//         "Assign values directly"
//       ],
//       correctAnswer: "Use fireEvent.submit(formElement)"
//     },
//     {
//       id: 17,
//       question: "Which is the best way to simulate real user input?",
//       options: ["fireEvent.input", "fireEvent.change", "userEvent.type", "act(() => input.value = '')"],
//       correctAnswer: "userEvent.type"
//     },
//     {
//       id: 18,
//       question: "What is the preferred method to simulate user interaction in RTL v14+?",
//       options: ["fireEvent", "userEvent", "simulate", "trigger"],
//       correctAnswer: "userEvent"
//     },
//     {
//       id: 19,
//       question: "How do you test asynchronous UI updates?",
//       options: ["By using async/await with findBy", "By setting a timeout", "Using wait() only", "Testing immediately after render"],
//       correctAnswer: "By using async/await with findBy"
//     },
//     {
//       id: 20,
//       question: "Which method will you use to wait for an element to disappear?",
//       options: ["waitForElementToBeRemoved", "getByText", "wait()", "findByRole"],
//       correctAnswer: "waitForElementToBeRemoved"
//     },
//     {
//       id: 21,
//       question: "Which function is used to wrap the tested component with context or router?",
//       options: ["render()", "customRender()", "withContext()", "mount()"],
//       correctAnswer: "customRender()"
//     },
//     {
//       id: 22,
//       question: "How do you verify if an element is not present?",
//       options: ["getByText returns null", "queryByText returns null", "findByText fails", "all of the above"],
//       correctAnswer: "queryByText returns null"
//     },
//     {
//       id: 23,
//       question: "What is a test ID used for?",
//       options: [
//         "To uniquely identify components during development",
//         "To write tests that avoid fragile selectors",
//         "To set component keys",
//         "To mock state"
//       ],
//       correctAnswer: "To write tests that avoid fragile selectors"
//     },
//     {
//       id: 24,
//       question: "Why should you avoid testing internal state or props?",
//       options: [
//         "It’s difficult to implement",
//         "It changes too often",
//         "It violates the user's behavior-first principle",
//         "It requires mocking"
//       ],
//       correctAnswer: "It violates the user's behavior-first principle"
//     },
//     {
//       id: 25,
//       question: "What is the role of `act()` in testing?",
//       options: [
//         "It wraps updates to ensure correct rendering behavior",
//         "It acts as a router",
//         "It executes test cases in batches",
//         "It re-renders the component tree"
//       ],
//       correctAnswer: "It wraps updates to ensure correct rendering behavior"
//     },
//     {
//       id: 26,
//       question: "Which method should you use to test error boundaries?",
//       options: ["getByError", "getByRole", "render with error props", "trigger error inside render"],
//       correctAnswer: "trigger error inside render"
//     },
//     {
//       id: 27,
//       question: "Why is `findByText` preferred over `waitFor()` + `getByText`?",
//       options: [
//         "It's shorter",
//         "It's more performant",
//         "It directly combines waiting and querying",
//         "It's deprecated"
//       ],
//       correctAnswer: "It directly combines waiting and querying"
//     },
//     {
//       id: 28,
//       question: "Which function should you use to verify text content exists on screen?",
//       options: ["getByText", "queryByText", "screen.findByText", "All of the above"],
//       correctAnswer: "All of the above"
//     },
//     {
//       id: 29,
//       question: "Which RTL function simulates typing into an input field?",
//       options: ["typeEvent()", "userEvent.type()", "fireEvent.input()", "inputField()"],
//       correctAnswer: "userEvent.type()"
//     },
//     {
//       id: 30,
//       question: "What is the best way to test dynamic content based on API data?",
//       options: [
//         "Use fake timers",
//         "Mock fetch and use findBy queries",
//         "Wait for API call to complete in real time",
//         "Use getByText and rerender"
//       ],
//       correctAnswer: "Mock fetch and use findBy queries"
//     },
//     {
//       id: 31,
//       question: "Which query is NOT part of the default screen object?",
//       options: ["getByRole", "findByText", "queryById", "getAllByText"],
//       correctAnswer: "queryById"
//     },
//     {
//       id: 32,
//       question: "How do you check if a checkbox is checked?",
//       options: [
//         "expect(checkbox).toBeChecked()",
//         "checkbox.checked === true",
//         "expect(checkbox.value).toBe(true)",
//         "screen.getByRole('checkbox').hasClass('checked')"
//       ],
//       correctAnswer: "expect(checkbox).toBeChecked()"
//     },
//     {
//       id: 33,
//       question: "Which query will help test elements that appear conditionally?",
//       options: ["findBy", "getBy", "queryAllBy", "act()"],
//       correctAnswer: "findBy"
//     },
//     {
//       id: 34,
//       question: "Which query is best when testing multiple similar items (e.g. list items)?",
//       options: ["getByText", "getAllByRole", "findByText", "queryByText"],
//       correctAnswer: "getAllByRole"
//     },
//     {
//       id: 35,
//       question: "What does `jest.fn()` do in testing?",
//       options: [
//         "It creates a mock function",
//         "It triggers component re-render",
//         "It spies on components",
//         "It validates JSX"
//       ],
//       correctAnswer: "It creates a mock function"
//     },
//     {
//       id: 36,
//       question: "What’s a good use case for `waitFor()`?",
//       options: [
//         "Waiting for element to appear or change after a delay",
//         "Rendering a component",
//         "Wrapping fireEvent",
//         "Waiting for test results to print"
//       ],
//       correctAnswer: "Waiting for element to appear or change after a delay"
//     },
//     {
//       id: 37,
//       question: "What is `jest.mock()` used for?",
//       options: [
//         "To mock imported modules like axios",
//         "To test hooks",
//         "To avoid real JSX rendering",
//         "To override fireEvent"
//       ],
//       correctAnswer: "To mock imported modules like axios"
//     },
//     {
//       id: 38,
//       question: "Which RTL method helps simulate tabbing between elements?",
//       options: ["fireEvent.keyDown", "userEvent.tab", "simulateTab", "screen.tab"],
//       correctAnswer: "userEvent.tab"
//     },
//     {
//       id: 39,
//       question: "Why is `getByTestId` not recommended for most cases?",
//       options: [
//         "It doesn't work in all browsers",
//         "It encourages testing implementation details",
//         "It's slow",
//         "It doesn't work with async components"
//       ],
//       correctAnswer: "It encourages testing implementation details"
//     },
//     {
//       id: 40,
//       question: "What makes a test reliable and maintainable in RTL?",
//       options: [
//         "Testing UI behavior not code structure",
//         "Mocking all props",
//         "Using getElementById",
//         "Relying on internal state changes"
//       ],
//       correctAnswer: "Testing UI behavior not code structure"
//     }
//   ];
  