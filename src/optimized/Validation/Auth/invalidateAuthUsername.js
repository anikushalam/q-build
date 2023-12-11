const specailSymbol = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "+",
  "~",
  ".",
  ",",
  "/",
  ":",
  ";",
];

export const invalidateAuthUsername = (username) => {
  if (specailSymbol.includes(username)) return true;
  return false;
};

export const invalidateAuthEmailOrMobile = (data) => {
  if (data?.includes("@")) return false;
  else if (data?.length === 8) return true;
  else return false;
};

export const typeOfAuth = (data) => {
  if (data?.includes("@")) return "e-mail";
  else if (data?.length === 8) return "qviple id";
  else return "mobile number";
};
