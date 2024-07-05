import { useRef, useState } from "react";
import DeutschBox from "./DeutschBox";
import GitHubLogo from "./assets/github.svg";
import NPMLogo from "./assets/npm.svg";

import "./App.scss";

function App() {
  const ref = useRef<HTMLInputElement>(null);

  const [checked, setChecked] = useState(false);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="App">
      <h1>
        <code>{"<DeutschBox/>"}</code>
      </h1>

      <h3>usage examples</h3>

      <div className="example">
        <div className="description">
          <h4>with state</h4>
          <code>
            checked: <b>{checked.toString()}</b>
          </code>
        </div>
        <DeutschBox
          checked={checked}
          onChange={onChange}
          size={75}
          color="#DD0000"
          feedback={true}
        />
      </div>
      <textarea
        readOnly
        value={`const [checked, setChecked] = useState(false);
const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setChecked(event.target.checked);
};

<DeutschBox
  checked={checked}
  onChange={onChange}
  size={75} color="#DD0000" 
  feedback={true}
/>`}
        spellCheck={false}
      />

      <div className="example">
        <div className="description">
          <h4>with references</h4>
          <button onClick={() => alert(ref.current?.checked)}>
            <code>alert(ref.current?.checked)</code>
          </button>
        </div>
        <DeutschBox
          id="demo-id"
          name="demo-name"
          ref={ref}
          checked={true}
          size={75}
          feedback={false}
          readOnly
        />
      </div>
      <textarea
        readOnly
        value={`const ref = useRef<HTMLInputElement>(null);

<DeutschBox
  id="demo-id"
  name="demo-name"
  ref={ref}
  checked={true}
  size={75}
  feedback={false}
  readOnly
/>`}
        spellCheck={false}
      />

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
