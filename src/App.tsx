import { useState } from "react";
import DeutschBox from "./DeutschBox";
import "./App.css";

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="App">
      <h1>DeutschBox</h1>
      <DeutschBox
        name="demo"
        checked={checked}
        feedback={true}
        onChange={setChecked}
      />
    </div>
  );
}

export default App;
