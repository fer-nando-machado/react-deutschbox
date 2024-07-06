export enum DeutschBoxState {
  Unchecked = "unchecked",
  Checked = "checked",
  Dechecked = "dechecked",
  Rechecked = "rechecked",
}

interface DeutschBoxData {
  label: string;
  checked: boolean;
}

export const DeutschBoxMap: Record<DeutschBoxState, DeutschBoxData> = {
  [DeutschBoxState.Unchecked]: {
    label: "",
    checked: false,
  },
  [DeutschBoxState.Checked]: {
    label: "ja",
    checked: true,
  },
  [DeutschBoxState.Dechecked]: {
    label: "nein",
    checked: false,
  },
  [DeutschBoxState.Rechecked]: {
    label: "doch!",
    checked: true,
  },
};

export const getNextState = (current: DeutschBoxState): DeutschBoxState => {
  switch (current) {
    case DeutschBoxState.Unchecked:
      return DeutschBoxState.Checked;
    case DeutschBoxState.Checked:
      return DeutschBoxState.Dechecked;
    case DeutschBoxState.Dechecked:
      return DeutschBoxState.Rechecked;
    case DeutschBoxState.Rechecked:
    // TODO disable cycle feature
    //  return DeutschBoxState.Rechecked;
    default:
      return DeutschBoxState.Unchecked;
  }
};
