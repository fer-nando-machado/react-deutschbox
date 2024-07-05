import React, { InputHTMLAttributes, useState } from "react";
import "./DeutschBox.scss";
import {
  DeutschBoxState,
  DeutschBoxStateMap,
  getNextState,
} from "./DeutschBoxState";
import BubbleLabel from "./BubbleLabel";

interface DeutschBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  feedback?: boolean;
  //ref?: any;
}

const DeutschBox: React.FC<DeutschBoxProps> = ({
  name,
  checked,
  disabled,
  feedback,
  color = "Highlight",
  size = 13,
  onChange,
  ...props
}) => {
  const [state, setState] = useState<DeutschBoxState>(
    checked ? DeutschBoxState.Checked : DeutschBoxState.Unchecked
  );

  const handleClick = () => {
    if (disabled) return;

    const nextState: DeutschBoxState = getNextState(state);
    if (nextState === state) return;
    setState(nextState);

    if (!onChange) return;
    const event = createEvent(DeutschBoxStateMap[nextState].value);
    onChange(event);
  };

  const style: React.CSSProperties = {
    "--color": color,
    "--size": `${size}px`,
  } as React.CSSProperties;

  return (
    <span className={"react-deutschbox"} style={style}>
      <input
        type="checkbox"
        hidden
        checked={DeutschBoxStateMap[state].value}
        //ref={ref}
        onChange={onChange}
        {...props}
      />
      <button className={state} disabled={disabled} onClick={handleClick} />
      {feedback && DeutschBoxStateMap[state].label && (
        <BubbleLabel direction="left" shadow>
          {DeutschBoxStateMap[state].label}
        </BubbleLabel>
      )}
    </span>
  );
};

export function createEvent(checked: boolean) {
  return { target: { checked } } as React.ChangeEvent<HTMLInputElement>;
}

export default DeutschBox;
