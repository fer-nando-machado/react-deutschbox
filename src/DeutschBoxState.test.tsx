import { describe, it, expect } from "vitest";

import {
  DeutschBoxMap,
  DeutschBoxState,
  getNextState,
} from "./DeutschBoxState";

describe("DeutschBoxState", () => {
  it("should verify settings for Unchecked", () => {
    expect(DeutschBoxMap[DeutschBoxState.Unchecked]).toEqual({
      label: "",
      checked: false,
    });
  });

  it("should verify settings for Checked", () => {
    expect(DeutschBoxMap[DeutschBoxState.Checked]).toEqual({
      label: "ja",
      checked: true,
    });
  });

  it("should verify settings for Dechecked", () => {
    expect(DeutschBoxMap[DeutschBoxState.Dechecked]).toEqual({
      label: "nein",
      checked: false,
    });
  });

  it("should verify settings for Rechecked", () => {
    expect(DeutschBoxMap[DeutschBoxState.Rechecked]).toEqual({
      label: "doch!",
      checked: true,
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

  it("should go from Rechecked to Unchecked", () => {
    expect(getNextState(DeutschBoxState.Rechecked)).toBe(
      DeutschBoxState.Unchecked
    );
  });

  it("should stay Rechecked with definitive behaviour", () => {
    expect(getNextState(DeutschBoxState.Rechecked, true)).toBe(
      DeutschBoxState.Rechecked
    );
  });

  it("should default to Unchecked as fallback", () => {
    expect(getNextState("unknown" as DeutschBoxState)).toBe(
      DeutschBoxState.Unchecked
    );
  });
});
