import { useState } from "react";
import DeutschBox from "./DeutschBox";
import "./App.css";

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="App">
      <h1>DeutschBox</h1>
      <div>
        <DeutschBox checked={checked} onChange={setChecked} />
      </div>
      <code>{checked.toString()}</code>
    </div>
  );
}

export default App;
