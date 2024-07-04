import { useState } from "react";
import DeutschBox from "./DeutschBox";
import GitHubLogo from "./assets/github.svg";
import NPMLogo from "./assets/npm.svg";

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
        feedback
        color="#DD0000"
        size="75px"
        checked={checked}
        onChange={setChecked}
      />
      <h4>
        <code>checked: {checked.toString()}</code>
      </h4>
      <div className="external">
        <a
          href="https://github.com/fer-nando-machado/react-deutschbox"
          target="_blank"
        >
          <img src={GitHubLogo} alt="react-deutschbox @ GitHub" height="25" />
        </a>
        <a
          href="https://www.npmjs.com/package/react-deutschbox"
          target="_blank"
        >
          <img src={NPMLogo} alt="react-deutschbox @ npm" height="18" />
        </a>
      </div>
    </div>
  );
}

export default App;
