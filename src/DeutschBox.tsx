import React, { useState } from "react";
import "./DeutschBox.scss";
import {
  DeutschBoxState,
  DeutschBoxStateMap,
  getNextState,
} from "./DeutschBoxState";
import BubbleLabel from "./BubbleLabel";

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

  const style = {
    "--color": color,
    "--size": size,
  } as React.CSSProperties;

  return (
    <span className={"react-deutschbox"} style={style}>
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
      {feedback && DeutschBoxStateMap[state].label && (
        <BubbleLabel shadow direction="left">
          {DeutschBoxStateMap[state].label}
        </BubbleLabel>
      )}
    </span>
  );
};

export default DeutschBox;
