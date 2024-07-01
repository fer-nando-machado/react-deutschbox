import React, { useState } from "react";
import "./DeutschBox.css";

enum DeutschBoxState {
  Unchecked = "Unchecked",
  Checked = "Checked",
  Dechecked = "Dechecked",
  Rechecked = "Rechecked",
}

type DeutschBoxProps = {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
};

const DeutschBox: React.FC<DeutschBoxProps> = ({
  checked,
  onChange,
  disabled,
}) => {
  const [state, setState] = useState<DeutschBoxState>(
    checked ? DeutschBoxState.Checked : DeutschBoxState.Unchecked
  );

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
        checked={checked}
        onChange={() => {}}
        style={{ display: "none" }}
      />
      <div className={`DeutschBox ${state}`} onClick={handleChange} />
    </>
  );
};

export default DeutschBox;
