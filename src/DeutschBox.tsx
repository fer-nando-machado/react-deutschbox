import React, { forwardRef, InputHTMLAttributes, useState } from "react";
import Bubble from "./Bubble";
import {
  DeutschBoxState,
  DeutschBoxMap,
  getNextState,
} from "./DeutschBoxState";
import "./DeutschBox.scss";

/**
 * Props for the DeutschBox component
 */
interface DeutschBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Specifies the position of the feedback bubble
   * @default undefined
   */
  feedback?: "left" | "right";

  /**
   * If true, the component will not cycle after the last state
   * @default false
   */
  definitive?: boolean;
}

const DeutschBox = forwardRef<HTMLInputElement, DeutschBoxProps>(
  (
    {
      feedback,
      definitive,
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

      const nextState: DeutschBoxState = getNextState(state, definitive);
      if (nextState === state) return;
      setState(nextState);

      if (!onChange) return;
      const event = createEvent(DeutschBoxMap[nextState].checked);
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
          readOnly
          checked={DeutschBoxMap[state].checked}
          ref={ref}
          disabled={disabled}
          onChange={onChange}
          {...props}
        />
        <button className={state} disabled={disabled} onClick={onClick} />
        {feedback && DeutschBoxMap[state].label && (
          <Bubble direction={feedback} shadow>
            {DeutschBoxMap[state].label}
          </Bubble>
        )}
      </span>
    );
  }
);

function createEvent(checked: boolean) {
  return { target: { checked } } as React.ChangeEvent<HTMLInputElement>;
}

export default DeutschBox;
