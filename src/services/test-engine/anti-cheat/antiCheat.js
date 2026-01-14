// Anti-cheat Engine – detect only (no auto punish)

export function detectCheating({
  tabSwitches,
  focusLoss,
  ipChange,
}) {
  let flags = [];

  if (tabSwitches > 3) flags.push("TAB_SWITCH_ABUSE");
  if (focusLoss > 2) flags.push("FOCUS_LOSS");
  if (ipChange) flags.push("IP_CHANGE");

  return {
    flagged: flags.length > 0,
    flags,
    checkedAt: Date.now(),
  };
}
