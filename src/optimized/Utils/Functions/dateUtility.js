export const yearMonthDay = (val) => {
  let splitDate = val?.split("/");
  let dob = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;
  return dob;
};
export const slashDateFormat = (val) => {
  let splitDate = val?.split("-");
  if (splitDate[2]?.length > 2)
    return `${splitDate[0] > 9 ? splitDate[0] : `0${splitDate[0]}`}/${
      splitDate[1] > 9 ? splitDate[1] : `0${splitDate[1]}`
    }/${splitDate[2]}`;
  else
    return `${splitDate[2] > 9 ? splitDate[2] : `0${splitDate[2]}`}/${
      splitDate[1] > 9 ? splitDate[1] : `0${splitDate[1]}`
    }/${splitDate[0]}`;
};
