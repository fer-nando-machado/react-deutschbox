export enum DeutschBoxState {
  Unchecked = "unchecked",
  Checked = "checked",
  Dechecked = "dechecked",
  Rechecked = "rechecked",
}

interface DeutschBoxStateObject {
  label: string;
  value: boolean;
}

export const DeutschBoxStateMap: Record<
  DeutschBoxState,
  DeutschBoxStateObject
> = {
  [DeutschBoxState.Unchecked]: {
    label: "",
    value: false,
  },
  [DeutschBoxState.Checked]: {
    label: "ja",
    value: true,
  },
  [DeutschBoxState.Dechecked]: {
    label: "nein",
    value: false,
  },
  [DeutschBoxState.Rechecked]: {
    label: "doch!",
    value: true,
  },
};

export const getNextState = (
  currentState: DeutschBoxState
): DeutschBoxState => {
  switch (currentState) {
    case DeutschBoxState.Unchecked:
      return DeutschBoxState.Checked;
    case DeutschBoxState.Checked:
      return DeutschBoxState.Dechecked;
    case DeutschBoxState.Dechecked:
      return DeutschBoxState.Rechecked;
    case DeutschBoxState.Rechecked:
    default:
      return DeutschBoxState.Unchecked;
  }
};
