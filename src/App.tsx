import { useState } from "react";
import DeutschBox from "./DeutschBox";
import GitHubLogo from "./assets/github.svg";
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
        color="#DD0000"
        onChange={setChecked}
      />
      <h4>
        <code>checked: {checked.toString()}</code>
      </h4>
      <a
        href="https://github.com/fer-nando-machado/react-deutschbox"
        target="_blank"
      >
        <img src={GitHubLogo} alt="GitHub" height="24" />
      </a>
    </div>
  );
}

export default App;
