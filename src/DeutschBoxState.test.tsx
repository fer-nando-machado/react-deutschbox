import { describe, it, expect } from "vitest";

import {
  DeutschBoxStateMap,
  DeutschBoxState,
  getNextState,
} from "./DeutschBoxState";

describe("DeutschBoxStateMap", () => {
  it("should verify settings for Unchecked", () => {
    expect(DeutschBoxStateMap[DeutschBoxState.Unchecked]).toEqual({
      label: "",
      value: false,
    });
  });

  it("should verify settings for Checked", () => {
    expect(DeutschBoxStateMap[DeutschBoxState.Checked]).toEqual({
      label: "ja",
      value: true,
    });
  });

  it("should verify settings for Dechecked", () => {
    expect(DeutschBoxStateMap[DeutschBoxState.Dechecked]).toEqual({
      label: "nein",
      value: false,
    });
  });

  it("should verify settings for  Rechecked", () => {
    expect(DeutschBoxStateMap[DeutschBoxState.Rechecked]).toEqual({
      label: "doch!",
      value: true,
    });
  });
});

describe("getNextState", () => {
  it("should go from Unchecked to Checked", () => {
    expect(getNextState(DeutschBoxState.Unchecked)).toBe(
      DeutschBoxState.Checked
    );
  });

  it("should go from Checked to Dechecked", () => {
    expect(getNextState(DeutschBoxState.Checked)).toBe(
      DeutschBoxState.Dechecked
    );
  });

  it("should go from Dechecked to Rechecked", () => {
    expect(getNextState(DeutschBoxState.Dechecked)).toBe(
      DeutschBoxState.Rechecked
    );
  });

  it("should stay Rechecked", () => {
    expect(getNextState(DeutschBoxState.Rechecked)).toBe(
      DeutschBoxState.Rechecked
    );
  });

  it("should default to Unchecked as fallback", () => {
    expect(getNextState("unknown" as DeutschBoxState)).toBe(
      DeutschBoxState.Unchecked
    );
  });
});
