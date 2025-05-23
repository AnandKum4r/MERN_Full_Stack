import React from "react";
import ReactDOM from "react-dom/client";
// import {jsx as _jsx} from "react/jsx-runtime.js"
import App from "./App.jsx";

// ✅ Custom React Component
function MyApp() {
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  );
}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google{" "}
  </a>
);

// Regular JavaScript string variable
const anotherUser = "Chai aur React"

// ✅ Manually creating a React element using React.createElement
const reactElement = React.createElement(
  "a", // Element type
  { href: "https://google.com", target: "_blank" }, // Props
  "Click me to visit google page", // Child #1 (text)
  //   anotherUser
  anotherElement // Child #2 (JSX element embedded inside)
);

// ✅ Render the manually created element to the root DOM node
ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
