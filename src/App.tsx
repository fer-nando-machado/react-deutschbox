import { useRef, useState } from "react";
import DeutschBox from "./DeutschBox";

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
      <div className="content">
        <p>
          <b>A checkbox done in German style.</b> In order to get started,
          install this package and replace any instance of{" "}
          <code>{`<input type="checkbox"/>`}</code> in your{" "}
          <a href="https://react.dev/">React</a> code by the imported{" "}
          <code>{`<DeutschBox/>`}</code> component.
        </p>
        <p>
          You will be able to interact with your <code>{`<DeutschBox/>`}</code>{" "}
          using the same attributes you use on any regular{" "}
          <code>{`<input/>`}</code> from{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox">
            HTML
          </a>
          . See the examples:
        </p>
        <textarea
          readOnly
          rows={1}
          value={`import DeutschBox from "react-deutschbox";`}
          spellCheck={false}
        />

        <div className="example">
          <div>
            <h4>
              with state{" | "}
              <a href="https://react.dev/learn/typescript#typing-usestate">
                <code>useState()</code>
              </a>
            </h4>
            <span>
              Using states, you can manage the value of controlled components
              dynamically, as usual:{" "}
              <code>
                {"{"}
                <b>checked:</b> {checked.toString()}
                {"}"}
              </code>
            </span>
          </div>
          <DeutschBox
            checked={checked}
            onChange={onChange}
            size={75}
            feedback="left"
            // feedback={Math.random() < 0.5 ? "left" : "right"}
          />
        </div>
        <textarea
          readOnly
          rows={11}
          value={`const [checked, setChecked] = useState(false);
const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setChecked(event.target.checked);
};

<DeutschBox
  checked={checked}
  onChange={onChange}
  feedback="left"
  size={75}
/>`}
          spellCheck={false}
        />

        <div className="example">
          <div>
            <h4>
              with references{" | "}
              <a href="https://react.dev/learn/referencing-values-with-refs">
                <code>useRef()</code>
              </a>
            </h4>
            <span>
              On uncontrolled components, you can access the current value of{" "}
              <code>
                <b>checked</b>
              </code>{" "}
              directly:{" "}
              <button onClick={() => alert(ref.current?.checked)}>
                <code>alert(ref.current?.checked);</code>
              </button>
            </span>
          </div>
          <DeutschBox
            id="demo-id"
            name="demo-name"
            ref={ref}
            checked={true}
            size={75}
            color="green"
            readOnly
          />
        </div>
        <textarea
          readOnly
          rows={11}
          value={`const ref = useRef<HTMLInputElement>(null);

<DeutschBox
  id="demo-id"
  name="demo-name"
  ref={ref}
  checked={true}
  color="green"
  size={75}
  readOnly
/>`}
          spellCheck={false}
        />
      </div>

      <div className="external">
        <a href="https://www.npmjs.com/package/react-deutschbox">
          <img
            alt="NPM version"
            src="https://img.shields.io/npm/v/react-deutschbox?style=for-the-badge&logo=npm&color=black"
          />
        </a>
        <a href="https://github.com/fer-nando-machado/react-deutschbox">
          <img
            alt="GitHub last update"
            src="https://img.shields.io/github/last-commit/fer-nando-machado/react-deutschbox?style=for-the-badge&logo=github&label=GitHub&color=black"
          />
        </a>
      </div>
    </div>
  );
}

export default App;
