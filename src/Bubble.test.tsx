import "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Bubble from "./Bubble";

describe("Bubble", () => {
  it("should render default component correctly", () => {
    render(<Bubble>Test</Bubble>);

    const bubble = screen.getByText(/Test/i);
    expect(bubble).toBeInTheDocument();
    expect(bubble).not.toHaveClass("shadow");
    expect(bubble).not.toHaveClass("top");
    expect(bubble).not.toHaveClass("left");
    expect(bubble).not.toHaveClass("bottom");
    expect(bubble).not.toHaveClass("right");
  });

  it("should apply shadow class when shadow is true", () => {
    render(<Bubble shadow={true}>Test</Bubble>);

    expect(screen.getByText(/Test/i)).toHaveClass("shadow");
  });

  it("should apply direction class when direction is set", () => {
    render(<Bubble direction="top">Test Top</Bubble>);
    render(<Bubble direction="bottom">Test Bottom</Bubble>);
    render(<Bubble direction="left">Test Left</Bubble>);
    render(<Bubble direction="right">Test Right</Bubble>);

    expect(screen.getByText(/Test Top/i)).toHaveClass("top");
    expect(screen.getByText(/Test Bottom/i)).toHaveClass("bottom");
    expect(screen.getByText(/Test Left/i)).toHaveClass("left");
    expect(screen.getByText(/Test Right/i)).toHaveClass("right");
  });
});
