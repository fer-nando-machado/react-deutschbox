import React, { useEffect, useState } from "react";
import "./DeutschBox.css";

enum DeutschBoxState {
  Unchecked = "Unchecked",
  Checked = "Checked",
  Dechecked = "Dechecked",
  Rechecked = "Rechecked",
}

type DeutschBoxProps = {
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
};

const DeutschBox: React.FC<DeutschBoxProps> = ({
  name,
  checked,
  onChange,
  disabled,
}) => {
  const [state, setState] = useState<DeutschBoxState>(
    checked ? DeutschBoxState.Checked : DeutschBoxState.Unchecked
  );

  useEffect(() => {
    console.log(DeutschBoxStyle.getInstance());
  }, []);

  const handleChange = () => {
    if (disabled) return;

    let newState: DeutschBoxState;
    let newValue: boolean;
    switch (state) {
      case DeutschBoxState.Unchecked:
        newState = DeutschBoxState.Checked;
        newValue = true;
        break;
      case DeutschBoxState.Checked:
        newState = DeutschBoxState.Dechecked;
        newValue = false;
        break;
      case DeutschBoxState.Dechecked:
        newState = DeutschBoxState.Rechecked;
        newValue = true;
        break;
      case DeutschBoxState.Rechecked:
        return;
      default:
        newState = DeutschBoxState.Unchecked;
        newValue = false;
        break;
    }
    setState(newState);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={() => {}}
        style={{ display: "none" }}
      />
      <div className={`DeutschBox ${state}`} onClick={handleChange} />
    </>
  );
};

class DeutschBoxStyle {
  private static instance: DeutschBoxStyle;
  private injected = false;

  private constructor() {}

  public static getInstance(): DeutschBoxStyle {
    if (!DeutschBoxStyle.instance) {
      DeutschBoxStyle.instance = new DeutschBoxStyle();
    }
    return DeutschBoxStyle.instance;
  }

  public injectStyle(): void {
    if (this.injected) return;

    const css = `
      .DeutschBox {
        width: 11px;
        height: 11px;
        border: 1px solid rgb(134, 134, 134);
        display: inline-block;
        cursor: pointer;
        position: relative;
        border-radius: 2.5px;
      }
      
      .DeutschBox.Unchecked,
      .DeutschBox.Checked {
        background-color: white;
      }
      
      .DeutschBox.Checked::after {
        color: #dd0000;
        content: "╳";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 11px;
        font-weight: bold;
      }
      
      .DeutschBox.Dechecked,
      .DeutschBox.Rechecked {
        background-color: #dd0000;
      }
      
      .DeutschBox.Rechecked::after {
        border: 1px solid #dd0000;
        position: absolute;
        content: "";
        top: -6px;
        left: -6px;
        width: 21px;
        height: 21px;
        border-radius: 50%;
        pointer-events: none;
      }
    `;

    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
    this.injected = true;
  }
}

export default DeutschBox;
