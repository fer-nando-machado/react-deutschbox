import React, { forwardRef, InputHTMLAttributes, useState } from "react";
import "./DeutschBox.scss";
import {
  DeutschBoxState,
  DeutschBoxMap,
  getNextState,
} from "./DeutschBoxState";
import BubbleLabel from "./BubbleLabel";

/**
 * Props for the DeutschBox component
 */
interface DeutschBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Specifies the position of the feedback bubble label
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
          <BubbleLabel direction={feedback} shadow>
            {DeutschBoxMap[state].label}
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
