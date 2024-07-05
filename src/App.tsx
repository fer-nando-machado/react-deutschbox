import { useState } from "react";
import DeutschBox from "./DeutschBox";
import GitHubLogo from "./assets/github.svg";
import NPMLogo from "./assets/npm.svg";

import "./App.scss";
import BubbleLabel from "./BubbleLabel";

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
      <p style={{ display: "none" }}>
        <BubbleLabel direction="left">hello</BubbleLabel>
        <BubbleLabel direction="right">turn</BubbleLabel>
        <BubbleLabel direction="top">your</BubbleLabel>
        <BubbleLabel direction="bottom">radio</BubbleLabel>
        <BubbleLabel>on</BubbleLabel>
      </p>
      <h4>
        <code>checked: {checked.toString()}</code>
      </h4>
      <div className="external">
        <a href="https://github.com/fer-nando-machado/react-deutschbox">
          <img src={GitHubLogo} alt="react-deutschbox @ GitHub" height="25" />
        </a>
        <a href="https://www.npmjs.com/package/react-deutschbox">
          <img src={NPMLogo} alt="react-deutschbox @ npm" height="18" />
        </a>
      </div>
    </div>
  );
}

export default App;
