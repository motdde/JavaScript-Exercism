export const age = (planet, age) =>
  Number((age / 31557600 / conc[planet]).toFixed(2));

const conc = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};
