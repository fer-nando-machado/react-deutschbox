import React from "react";
import "./BubbleLabel.scss";

type BubbleLabelProps = {
  children?: string;
  shadow?: boolean;
  direction?: "top" | "bottom" | "left" | "right";
};

const BubbleLabel: React.FC<BubbleLabelProps> = ({
  children,
  shadow,
  direction,
}) => {
  return (
    <label className={`bubble-label ${shadow && "shadow"} ${direction}`}>
      {children}
    </label>
  );
};

export default BubbleLabel;
