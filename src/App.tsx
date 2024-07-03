import { useState } from "react";
import DeutschBox from "./DeutschBox";
import "./App.css";

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="App">
      <h1>
        <code>{"<DeutschBox/>"}</code>
      </h1>
      <DeutschBox
        name="demo"
        checked={checked}
        feedback={true}
        onChange={setChecked}
      />
      <h4>
        <code>checked: {checked.toString()}</code>
      </h4>
    </div>
  );
}

export default App;
