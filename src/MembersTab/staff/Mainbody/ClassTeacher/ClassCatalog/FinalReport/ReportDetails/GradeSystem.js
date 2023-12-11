const Grade = (args, args2) => {
  let mark = Math.round(args);
  // console.info(args, args2);
  if (mark >= 91) {
    return "A+";
  } else if (mark >= 81 && mark < 91) {
    return "A";
  } else if (mark >= 71 && mark < 81) {
    return "B+";
  } else if (mark >= 61 && mark < 71) {
    return "B";
  } else if (mark >= 51 && mark < 61) {
    return "C";
  } else if (mark >= Math.round(args2) && mark < 51) {
    return "D";
  } else if (mark < Math.round(args2)) {
    return "F";
  } else {
    return "-";
  }
};

export { Grade };
