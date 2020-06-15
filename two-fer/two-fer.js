//twoFer is exported
export const twoFer = (name = "") => {
  return name.length == 0
    ? `One for you, one for me.`
    : `One for ${name}, one for me.`;
};
