// Import the Youtube component from the local file "Youtube.js" or "Youtube.jsx"
import Youtube from "./Youtube";

function App() {
  // Declare a variable to hold the username
  const username = "Anand Kumar";

  return (
    // React Fragment allows returning multiple elements without adding extra nodes in the DOM
    <>
      <h1>React with {username}</h1>
      <h1>Vite react app</h1>
      <Youtube />
    </> //React Fragment
  );
}

// Export the App component as the default export so it can be used elsewhere
export default App;

/*
⚠️ Notes:

✅ <>...</> is a React Fragment, used to return multiple elements without adding extra nodes to the DOM.

*/
