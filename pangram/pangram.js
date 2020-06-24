export const isPangram = (phrase) => {
  let panagram = new Set(phrase.replace(/[^a-z]/gi, "").toLowerCase().split(""))
  return panagram.size === 26;
};
