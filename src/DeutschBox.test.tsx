import "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import DeutschBox from "./DeutschBox";

describe("DeutschBox Component", () => {
  let onChangeMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    onChangeMock = vi.fn();
  });

  it("should render the default DeutschBox", () => {
    render(<DeutschBox />);

    const button = screen.getByRole("button");
    const checkbox = document.querySelector('input[type="checkbox"]');

    expect(button).toBeInTheDocument();
    expect(button).not.toBeChecked();
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeVisible();
  });

  it("should handle state changes correctly", () => {
    render(<DeutschBox onChange={onChangeMock} />);

    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(onChangeMock).toHaveBeenCalledWith(true);

    fireEvent.click(button);
    expect(onChangeMock).toHaveBeenCalledWith(false);

    fireEvent.click(button);
    expect(onChangeMock).toHaveBeenCalledWith(true);
  });

  it("should not change state when disabled", () => {
    render(<DeutschBox disabled onChange={onChangeMock} />);

    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(onChangeMock).not.toHaveBeenCalled();
  });

  it("should display the correct label when feedback is enabled", () => {
    render(<DeutschBox feedback />);

    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(screen.getByText(/ja/i)).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.getByText(/nein/i)).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.getByText(/doch!/i)).toBeInTheDocument();
  });

  it("should apply custom color and size styles", () => {
    render(<DeutschBox color="red" size="20px" />);

    const container = screen.getByRole("button").parentElement;

    expect(container).toHaveStyle("--color: red");
    expect(container).toHaveStyle("--size: 20px");
  });
});
