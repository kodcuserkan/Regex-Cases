import { useState } from "react";
import "./App.css";
import Regex from "./components/regex";

function App() {
  const [word, setWord] = useState("enter a word");

  return (
    <div className="App">
      <h1>REGEX</h1>
      <input
        type="text"
        placeholder="enter a word"
        onChange={(e) => setWord(e.target.value)}
      />
      <Regex myString={word} />
    </div>
  );
}

export default App;
