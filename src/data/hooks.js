import { v4 as uuidv4 } from "uuid";

const hooks = [
  {
    name: "useLocalStorage.js",
    demo: "https://csb-hjz05.netlify.app/",
    sandbox:
      "https://codesandbox.io/s/lingering-wildflower-hjz05?file=/src/useLocalStorage.js",
    id: uuidv4(),
    explanation:
      "The useLocalStorage hook accepts a keyName and state parameter. Under the hood, it uses the useEffect hook to store the given state to window.localStorage with the keyName argument being the key and the state as the value. The hook returns an object with a clear property, which is a function that removes the stored data from localStorage. ",
  },
  {
    name: "useClipboard.js",
    demo: "https://csb-r4x89.netlify.app/",
    sandbox:
      "https://codesandbox.io/s/useclipboardjs-r4x89?file=/src/useClipboard.js",
    id: uuidv4(),
    explanation:
      "A custom React hook that allows users to pass an object with the property toBeCopied that should point at a string value that should be copied to the clipboard. This hook will access the built in Clipboard API (window.navigator.clipboard), and copy the string value to the user’s clipboard. The hook returns an object with 4 properties – idle, resolved, rejected, and error. Idle, resolved, and rejected are status variables. If idle is truthy, then no action is taken - nothing is copied, if resolved is truthy then the string was copied to the clipboard successfully, and if rejected is truthy then the copying action has failed. The error object contains a message property that explains what exactly went wrong, like permission issues. The user also has an option to pass a onOpen prop, that will be invoked regardless of the result of the asynchronous operation (copying to the clipboard). This can be used to open up a message with information like “copied” or “not copied",
  },
  {
    name: "useMediaQuery.js",
    demo: "https://hopeful-mayer-36bfe6.netlify.app/",
    sandbox:
      "https://codesandbox.io/s/usemediaqueryjs-3cy9l?file=/src/useMediaQuery.js",
    id: uuidv4(),
    explanation:
      "The useMediaQuery hook uses the Window interface’s matchMedia function to check whether the given media query parameter matches document. So, if the media query string is `(max-width: 550px)` and the viewport is 500px, then the hook returns the boolean value true. The hook keeps track of document size changes, so if the screen is enlarged and the viewport is now 800px, then the state updates, and useMediaQuery now returns false. This hook should mostly be used for design purposes, like using a different navbar UI for desktop, tablet, and mobile.",
  },
  {
    name: "useWidth.js",
    demo: "https://csb-5k4w7.netlify.app/",
    sandbox: "https://codesandbox.io/s/usewidthjs-5k4w7?file=/src/useWidth.js",
    id: uuidv4(),
    explanation:
      "The useWidth hook accepts a ref of a React element, and returns the width of the given element. It adds an event listener to the window object that is triggered by a ‘resize’ event. If the user wants to get the width of the whole window, then they need to pass an object with a current property that points at window, and also pass a second argument with the value ‘innerWidth’. The effect only runs once, and removes the event listener if the component using the hook is unmounted; this will avoid a memory leak.",
  },
  {
    name: "useOpen.js",
    demo: "https://csb-6t7w4.netlify.app/",
    sandbox: "https://codesandbox.io/s/useopenjs-6t7w4?file=/src/useOpen.js",
    id: uuidv4(),
    explanation:
      "The useOpen state was developed for maintaining an open and close state, e.g. controlling whether a modal is open or closed. The hook returns an object with 4 properties, open – a boolean, onOpen – updates the open state to true, onClose – updates the open state to false, and toggle – toggles the open state. All state setter functions are memoized with useCallback, so they can be passed as a dependency value if necessary. ",
  },
];
export default hooks;
