import "./App.css";
import { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  //when user clicks it will take the "name" from
  //the button and concatinate it with result to
  //form a string in setResult
  const userClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  //when the user clicks on the clear button it will
  //replace and save setResult to an empty string
  const clear = () => {
    setResult("");
  };

  //when the Del button is clicked it will remove
  //the last character of the string saved in setResult
  const handleDelete = () => {
    setResult(result.slice(0, -1));
  };

  //used to calculate the final result
  //and set it to a string
  //otherwise catch and output "Error"
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch {
      setResult("Error");
    }
  };

  return (
    //set up for the calculator on screen and for formatting with css
    <div className="App">
      <div className="container">
        {/* sends the string currently in result to the input text field */}
        <form>
          <input type="text" value={result} />
        </form>

        {/* creats the buttons that will be included on the calculator */}
        <div className="keypad">
          {/* each button uses onClick to send the "name" to the string for calculation */}
          <button onClick={clear} id="clear">
            AC
          </button>
          <button onClick={handleDelete}>DEL</button>
          <button onClick={userClick} name="/">
            &divide;
          </button>
          <button onClick={userClick} name="7">
            7
          </button>
          <button onClick={userClick} name="8">
            8
          </button>
          <button onClick={userClick} name="9">
            9
          </button>
          <button onClick={userClick} name="*">
            &times;
          </button>
          <button onClick={userClick} name="4">
            4
          </button>
          <button onClick={userClick} name="5">
            5
          </button>
          <button onClick={userClick} name="6">
            6
          </button>
          <button onClick={userClick} name="-">
            -
          </button>
          <button onClick={userClick} name="1">
            1
          </button>
          <button onClick={userClick} name="2">
            2
          </button>
          <button onClick={userClick} name="3">
            3
          </button>
          <button onClick={userClick} name="+">
            +
          </button>
          <button onClick={userClick} name="0">
            0
          </button>
          <button onClick={userClick} name=".">
            .
          </button>
          <button onClick={calculate} id="equal">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
