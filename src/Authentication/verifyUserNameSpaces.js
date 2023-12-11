const verifyUserNameSpaces = (username) => {
  if (
    username.includes("!") ||
    username.includes("@") ||
    username.includes("#") ||
    username.includes("$") ||
    username.includes("%") ||
    username.includes("^") ||
    username.includes("&") ||
    username.includes("*") ||
    username.includes("(") ||
    username.includes(")") ||
    username.includes("+") ||
    username.includes("~") ||
    username.includes(".") ||
    username.includes(",") ||
    username.includes("/") ||
    username.includes(";")
    //  ||
    // username.includes(" ")
  ) {
    return true;
  } else {
    return false;
  }
};

export default verifyUserNameSpaces;
