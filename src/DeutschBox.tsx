import React, { useState } from "react";
import "./DeutschBox.css";
import {
  DeutschBoxState,
  getNextState,
  DeutschBoxStateMap,
} from "./DeutschBoxState";

type DeutschBoxProps = {
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
};

const DeutschBox: React.FC<DeutschBoxProps> = ({
  name,
  checked,
  onChange,
  disabled,
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
    <span>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={() => {}}
        style={{ display: "none" }}
      />
      <span className={`react-deutschbox ${state}`} onClick={handleChange} />
      <label> {DeutschBoxStateMap[state].label}</label>
    </span>
  );
};

export default DeutschBox;
