export const specificFormatDate = (arr) => {
  const newArray = [];
  for (let arrVal of arr) {
    const val = arrVal?.split("-");
    const day = val[0] > 9 ? val[0] : `0${val[0]}`;
    const month = val[1] > 9 ? val[1] : `0${val[1]}`;
    const date = `${day}/${month}/${val[2]}`;
    newArray.push(date);
  }
  return newArray;
};

export const specificFormatOneDate = (dateOne) => {
  const val = dateOne?.split("-");
  // const day = val[2] > 9 ? val[2] : val[2];
  // const month = val[1] > 9 ? val[1] : `0${val[1]}`;
  const date = `${val[2]}/${val[1]}/${val[0]}`;
  return date;
};
