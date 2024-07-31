import React from "react";
import "./Bubble.scss";

type BubbleProps = {
  children?: string;
  shadow?: boolean;
  direction?: "top" | "bottom" | "left" | "right";
};

const Bubble: React.FC<BubbleProps> = ({ children, shadow, direction }) => {
  const classes = ["bubble", direction || "", shadow ? "shadow" : ""].join(" ");
  return <aside className={classes}>{children}</aside>;
};

export default Bubble;
