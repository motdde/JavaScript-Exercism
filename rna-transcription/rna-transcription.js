export const toRna =(dna) => dna.split('').map(v => transformations[v]).join('');

const transformations = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
};
