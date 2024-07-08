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

export const getNextState = (
  current: DeutschBoxState,
  definitive?: boolean
): DeutschBoxState => {
  switch (current) {
    case DeutschBoxState.Unchecked:
      return DeutschBoxState.Checked;
    case DeutschBoxState.Checked:
      return DeutschBoxState.Dechecked;
    case DeutschBoxState.Dechecked:
      return DeutschBoxState.Rechecked;
    case DeutschBoxState.Rechecked:
      return definitive ? DeutschBoxState.Rechecked : DeutschBoxState.Unchecked;
    default:
      return DeutschBoxState.Unchecked;
  }
};
