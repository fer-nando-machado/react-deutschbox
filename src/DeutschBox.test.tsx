import "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import DeutschBox from "./DeutschBox";

describe("DeutschBox", () => {
  let onChangeMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    onChangeMock = vi.fn();
  });

  it("should render default DeutschBox", () => {
    render(<DeutschBox />);

    const button = screen.getByRole("button");
    const checkbox = document.querySelector('input[type="checkbox"]');
    const container = screen.getByRole("button").parentElement;

    expect(button).toBeInTheDocument();
    expect(button).not.toBeChecked();
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeVisible();
    expect(container).toHaveStyle("--color: #DD0000");
    expect(container).toHaveStyle("--size: 13px");
  });

  it("should handle state changes correctly", () => {
    render(<DeutschBox onChange={onChangeMock} />);

    const button = screen.getByRole("button");
    const checkbox = document.querySelector('input[type="checkbox"]');

    fireEvent.click(button);
    expect(checkbox).toBeChecked();
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenLastCalledWith({
      target: { checked: true },
    });

    fireEvent.click(button);
    expect(checkbox).not.toBeChecked();
    expect(onChangeMock).toHaveBeenCalledTimes(2);
    expect(onChangeMock).toHaveBeenLastCalledWith({
      target: { checked: false },
    });

    fireEvent.click(button);
    expect(checkbox).toBeChecked();
    expect(onChangeMock).toHaveBeenCalledTimes(3);
    expect(onChangeMock).toHaveBeenLastCalledWith({
      target: { checked: true },
    });

    fireEvent.click(button);
    expect(checkbox).not.toBeChecked();
    expect(onChangeMock).toHaveBeenCalledTimes(4);
    expect(onChangeMock).toHaveBeenLastCalledWith({
      target: { checked: false },
    });
  });

  it("should handle state changes correctly (with definitive behaviour)", () => {
    render(<DeutschBox onChange={onChangeMock} definitive />);

    const button = screen.getByRole("button");
    const checkbox = document.querySelector('input[type="checkbox"]');

    fireEvent.click(button);
    expect(checkbox).toBeChecked();
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenLastCalledWith({
      target: { checked: true },
    });

    fireEvent.click(button);
    expect(checkbox).not.toBeChecked();
    expect(onChangeMock).toHaveBeenCalledTimes(2);
    expect(onChangeMock).toHaveBeenLastCalledWith({
      target: { checked: false },
    });

    fireEvent.click(button);
    expect(checkbox).toBeChecked();
    expect(onChangeMock).toHaveBeenCalledTimes(3);
    expect(onChangeMock).toHaveBeenLastCalledWith({
      target: { checked: true },
    });

    fireEvent.click(button);
    expect(checkbox).toBeChecked();
    expect(onChangeMock).toHaveBeenCalledTimes(3);
    expect(onChangeMock).toHaveBeenLastCalledWith({
      target: { checked: true },
    });
  });

  it("should not change state when disabled", () => {
    render(<DeutschBox onChange={onChangeMock} checked disabled />);

    const button = screen.getByRole("button");
    const checkbox = document.querySelector('input[type="checkbox"]');
    expect(checkbox).toBeChecked();

    fireEvent.click(button);
    expect(checkbox).toBeChecked();
    expect(onChangeMock).not.toHaveBeenCalled();
  });

  it("should display the correct label when feedback is enabled", () => {
    render(<DeutschBox feedback="left" />);

    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(screen.getByText(/ja/i)).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.getByText(/nein/i)).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.getByText(/doch!/i)).toBeInTheDocument();
  });

  it("should pass default InputHTMLAttributes to hidden checkbox", () => {
    render(
      <DeutschBox
        id="7"
        name="hobbies"
        value="swimming"
        aria-label="Hobbies"
        checked
        required
        disabled
      />
    );

    const checkbox = document.querySelector('input[type="checkbox"]');

    expect(checkbox).toHaveAttribute("id", "7");
    expect(checkbox).toHaveAttribute("name", "hobbies");
    expect(checkbox).toHaveAttribute("aria-label", "Hobbies");
    expect(checkbox).toHaveAttribute("value", "swimming");
    expect(checkbox).toHaveAttribute("checked", "");
    expect(checkbox).toHaveAttribute("required", "");
    expect(checkbox).toHaveAttribute("disabled", "");
  });

  it("should apply custom color and size styles to container", () => {
    render(<DeutschBox color="#777777" size={20} />);

    const container = screen.getByRole("button").parentElement;

    expect(container).toHaveStyle("--color: #777777");
    expect(container).toHaveStyle("--size: 20px");
  });
});
