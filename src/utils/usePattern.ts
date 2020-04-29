import * as React from "react";

const patternOptions = [
  "diagonal-lines-lg",
  "cross-dots-lg",
  "grid-lg",
  "dots-lg",
  "horizontal-lines-xl"
];

export function usePattern() {
  const [pattern, setState] = React.useState(0);

  function nextPattern() {
    setState((pattern + 1) % patternOptions.length);
  }

  return [patternOptions[pattern], nextPattern] as const;
}
