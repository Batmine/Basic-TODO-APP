import React, { useState } from "react";
import "./App.css";
import Todo from "./Todo";

function App() {
  // React way to write variable.. (const it's how we declare variable, the setInputText is a function when the inputTextis called the second one is setInputText), we put the useState in a default value ('') when the app upload the input text should be blanc
  const [inputText, setInputText] = useState(""); // we keep tracking of the inpuText
  const [todos, setTodos] = useState([]); // with that we can add our list of todo in our State in order to keep track of our list of todos

  const addATodo = (event) => {
    //a function gonna fire when I click on ADD A TODO
    event.preventDefault(); // it's saying to not refresh to keep our todo list when added
    setTodos([inputText, ...todos]); // Trick spread operator, we set the Todos and keep everything to an array (array is just a list), and whatever I put in the inputText it's gonna push it in the array, put the ...todo last in order have our todo updated in the up of the page
    setInputText(""); // after we put our text for the todo app, we set the input clear
    console.log("This is your todo list", [...todos, inputText]);
  };
  return (
    // BEM naming (app and not App)
    <div className="app">
      <h1>Todo app</h1>
      <form>
        <input //We take our input and button in a form in order to be able to add the type submit on our button (for entering the input text in todo list with enter) and this disabled={!inputText} in our button is to make our button not working if te inputText is empty
          value={inputText} // there we set value and onChange (as the user type in) it fires off an event it grab the input text and his value this is why event.target.value
          onChange={(event) => setInputText(event.target.value)} // ES6 arrow function a mordern approch to write javascript
          type="text"
        />

        <button disabled={!inputText} type="submit" onClick={addATodo}>
          {" "}
          ADD A TODO
        </button>

        {todos.map((
          todo // map is a ES6 function, it's gonna loop through our todo list and gonna return something ( with =>) and show it after that the todo that it take to show it with h2
        ) => (
          <Todo text={todo} /> //we put our Todo component we have just created
        ))}
      </form>
    </div>
  );
}

export default App;
