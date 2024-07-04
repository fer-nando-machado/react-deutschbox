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
  size?: string;
  onChange?: (checked: boolean) => void;
};

const DeutschBox: React.FC<DeutschBoxProps> = ({
  name,
  checked,
  disabled,
  feedback,
  color,
  size,
  onChange,
}) => {
  const [state, setState] = useState<DeutschBoxState>(
    checked ? DeutschBoxState.Checked : DeutschBoxState.Unchecked
  );

  const handleChange = () => {
    const nextState: DeutschBoxState = getNextState(state);
    setState(nextState);
    if (onChange) {
      onChange(DeutschBoxStateMap[nextState].value);
    }
  };

  return (
    <span
      className={"react-deutschbox"}
      style={{ "--color": color, "--size": size } as React.CSSProperties}
    >
      <input
        type="checkbox"
        hidden
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={() => {}}
      />
      <button
        className={`${state}`}
        disabled={disabled}
        onClick={handleChange}
      />
      {!disabled && feedback && DeutschBoxStateMap[state].label && (
        <label className="bubble-speech shadow left">
          {DeutschBoxStateMap[state].label}
        </label>
      )}
    </span>
  );
};

export default DeutschBox;
