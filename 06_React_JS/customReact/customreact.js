function customRender(reactElement, container) {
  /*
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);

  container.appendChild(domElement);
  */

  // Create a DOM element of the type specified in reactElement (e.g., "a" tag)
  const domElement = document.createElement(reactElement.type);

  // Set the inner content of the element (like text inside the <a> tag)
  domElement.innerHTML = reactElement.children;

  // Loop through each property in reactElement.props
  for (const prop in reactElement.props) {
    if (prop == "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  // Append the newly created DOM element to the container
  container.appendChild(domElement);
}

// Define a simple React-like element with type, props, and children
const reactElement = {
  type: "a", // The HTML tag type
  props: {
    href: "https://google.com", // Link URL
    target: "_blank", // Open in new tab
  },
  children: "Click me to visit google", // Text inside the <a> tag
};
const mainContainer = document.querySelector("#root");

// Render the custom element into the DOM
customRender(reactElement, mainContainer);
