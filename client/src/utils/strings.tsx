export const titleCase = (text: string) => {
  const [firstLetter, ...rest] = text;
  return firstLetter.toUpperCase() + rest.join("").toLowerCase();
};
