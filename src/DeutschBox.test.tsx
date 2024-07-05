import "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import DeutschBox, { createEvent } from "./DeutschBox";

describe("DeutschBox", () => {
  let onChangeMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    onChangeMock = vi.fn();
  });

  it("should render default DeutschBox", () => {
    render(<DeutschBox readOnly />);

    const button = screen.getByRole("button");
    const checkbox = document.querySelector('input[type="checkbox"]');
    const container = screen.getByRole("button").parentElement;

    expect(button).toBeInTheDocument();
    expect(button).not.toBeChecked();
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeVisible();
    expect(container).toHaveStyle("--color: Highlight");
    expect(container).toHaveStyle("--size: 13px");
  });

  it("should handle state changes correctly", () => {
    render(<DeutschBox onChange={onChangeMock} readOnly />);

    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(onChangeMock).toHaveBeenLastCalledWith(createEvent(true));
    fireEvent.click(button);
    expect(onChangeMock).toHaveBeenLastCalledWith(createEvent(false));
    fireEvent.click(button);
    expect(onChangeMock).toHaveBeenLastCalledWith(createEvent(true));
    expect(onChangeMock).toHaveBeenCalledTimes(3);

    fireEvent.click(button);
    expect(onChangeMock).toHaveBeenCalledTimes(3);
  });

  it("should not change state when disabled", () => {
    render(<DeutschBox disabled onChange={onChangeMock} />);

    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(onChangeMock).not.toHaveBeenCalled();
  });

  it("should display the correct label when feedback is enabled", () => {
    render(<DeutschBox feedback readOnly />);

    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(screen.getByText(/ja/i)).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.getByText(/nein/i)).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.getByText(/doch!/i)).toBeInTheDocument();
  });

  it("should apply custom color and size styles", () => {
    render(<DeutschBox color="#777777" size={20} readOnly />);

    const container = screen.getByRole("button").parentElement;

    expect(container).toHaveStyle("--color: #777777");
    expect(container).toHaveStyle("--size: 20px");
  });
});
