import "./App.css";
import Card from "./components/Card";

function App() {
  // let myObj = {
  //   username: "Anand",
  //   age: 24,
  // };

  // let newArr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-red-400 text-white p-3 rounded-xl">Tailwind test</h1>
      <Card username="Anand" btnText="Click Me" />
      <Card username="Prateek" btnText="Visit Me" />
      <Card />
    </>
  );
}

export default App;

/*
props in React:
 > Props (short for properties) are read-only inputs you pass from a parent component to a child component in React.
 ✅ Option 1: Destructure the prop in the parameter
 Ex:
 function Card({ username }) {
  console.log(username);

 ✅ Option 2: Use props inside the function
 function Card(props) {
  console.log(props.username);
*/
