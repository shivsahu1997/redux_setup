export const getCapitalized = (string) => {
  let str = "";
  if (string) {
    str = string.replace(
      /(^\w|\s\w)(\S*)/g,
      (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase()
    );
  }
  return str;
};
