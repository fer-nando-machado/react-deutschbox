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
  const classes = [
    "bubble-label",
    direction || "",
    shadow ? "shadow" : "",
  ].join(" ");
  return <label className={classes}>{children}</label>;
};

export default BubbleLabel;
