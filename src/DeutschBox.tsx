import React, { useState } from "react";
import "./DeutschBox.css";
import "./assets/BubbleSpeech.scss";
import {
  DeutschBoxState,
  DeutschBoxStateMap,
  getNextState,
} from "./DeutschBoxState";

type DeutschBoxProps = {
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  feedback?: boolean;
  color?: string;
  onChange?: (checked: boolean) => void;
};

const DeutschBox: React.FC<DeutschBoxProps> = ({
  name,
  checked,
  disabled,
  feedback,
  color,
  onChange,
}) => {
  const [state, setState] = useState<DeutschBoxState>(
    checked ? DeutschBoxState.Checked : DeutschBoxState.Unchecked
  );

  const handleChange = () => {
    if (disabled) return;

    const nextState: DeutschBoxState = getNextState(state);
    setState(nextState);

    if (onChange) {
      onChange(DeutschBoxStateMap[nextState].value);
    }
  };

  return (
    <span
      className={"react-deutschbox"}
      style={{ "--color": color } as React.CSSProperties}
    >
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={() => {}}
      />
      <span className={`box ${state}`} onClick={handleChange} />
      {feedback && DeutschBoxStateMap[state].label && (
        <label className="bubble-speech shadow left">
          {DeutschBoxStateMap[state].label}
        </label>
      )}
    </span>
  );
};

export default DeutschBox;
