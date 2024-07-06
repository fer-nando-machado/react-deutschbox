import React, { forwardRef, InputHTMLAttributes, useState } from "react";
import "./DeutschBox.scss";
import {
  DeutschBoxState,
  DeutschBoxStateMap,
  getNextState,
} from "./DeutschBoxState";
import BubbleLabel from "./BubbleLabel";

interface DeutschBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  feedback?: "left" | "right";
}

const DeutschBox = forwardRef<HTMLInputElement, DeutschBoxProps>(
  (
    {
      feedback,
      checked,
      disabled,
      size = 13,
      color = "#DD0000",
      onChange,
      ...props
    },
    ref
  ) => {
    const [state, setState] = useState<DeutschBoxState>(
      checked ? DeutschBoxState.Checked : DeutschBoxState.Unchecked
    );

    const onClick = () => {
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
      <span className={"deutschbox"} style={style}>
        <input
          type="checkbox"
          hidden
          checked={DeutschBoxStateMap[state].value}
          ref={ref}
          disabled={disabled}
          onChange={onChange}
          {...props}
        />
        <button className={state} disabled={disabled} onClick={onClick} />
        {feedback && DeutschBoxStateMap[state].label && (
          <BubbleLabel direction={feedback} shadow>
            {DeutschBoxStateMap[state].label}
          </BubbleLabel>
        )}
      </span>
    );
  }
);

function createEvent(checked: boolean) {
  return { target: { checked } } as React.ChangeEvent<HTMLInputElement>;
}

export default DeutschBox;
