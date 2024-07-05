import "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import BubbleLabel from "./BubbleLabel";

describe("BubbleLabel", () => {
  it("should render default component correctly", () => {
    render(<BubbleLabel>Test</BubbleLabel>);

    const bubble = screen.getByText(/Test/i);
    expect(bubble).toBeInTheDocument();
    expect(bubble).not.toHaveClass("shadow");
    expect(bubble).not.toHaveClass("top");
    expect(bubble).not.toHaveClass("left");
    expect(bubble).not.toHaveClass("bottom");
    expect(bubble).not.toHaveClass("right");
  });

  it("should apply shadow class when shadow is true", () => {
    render(<BubbleLabel shadow={true}>Test</BubbleLabel>);

    expect(screen.getByText(/Test/i)).toHaveClass("shadow");
  });

  it("should apply direction class when direction is set", () => {
    render(<BubbleLabel direction="top">Test Top</BubbleLabel>);
    render(<BubbleLabel direction="bottom">Test Bottom</BubbleLabel>);
    render(<BubbleLabel direction="left">Test Left</BubbleLabel>);
    render(<BubbleLabel direction="right">Test Right</BubbleLabel>);

    expect(screen.getByText(/Test Top/i)).toHaveClass("top");
    expect(screen.getByText(/Test Bottom/i)).toHaveClass("bottom");
    expect(screen.getByText(/Test Left/i)).toHaveClass("left");
    expect(screen.getByText(/Test Right/i)).toHaveClass("right");
  });
});
