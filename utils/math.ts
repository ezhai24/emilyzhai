// Linearly maps a value from one range to another and clamps that
// newly calculated value between the new min/max.
//
// i.e. clampRange(5, 0, 10, 50, 100)
//   - maps 5 as the "0.5th" value in the [0,10] range to 75 which
//     is the the "0.5th" value in the [50,100] range
//   - clamps 75 between [50,100] => 75
//
// i.e. clampRange(-5, 0, 10, 50, 100)
//   - maps -5 as the "-0.5th" value in the [0,10] range to -25 which
//     is the the "-0.5th" value in the [50,100] range
//   - clamps -24 between [50,100] => 50
export const clampRange = (
  value: number,
  oldMin: number,
  oldMax: number,
  newMin: number,
  newMax: number,
) => {
  const translatedValue =
    ((value - oldMin) / (oldMax - oldMin)) * (newMax - newMin) + newMin;
  return Math.max(Math.min(translatedValue, newMax), newMin);
};
