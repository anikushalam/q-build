export const checkPrevDate = (args) => {
  const onCurrentDate = new Date();
  const argsSplit = args?.split("/");
  const day = +argsSplit[0];
  const month = +argsSplit[1];
  const year = +argsSplit[2];
  const onCurrentDateISO = onCurrentDate.toISOString()?.split("-");

  const dayISO = +onCurrentDateISO[2]?.substring(0, 2);
  const monthISO = +onCurrentDateISO[1];
  const yearISO = +onCurrentDateISO[0];
  var inputDate = new Date(`${argsSplit[1]}/${argsSplit[0]}/${argsSplit[2]}`);

  function minTwoDigits(n) {
    return (n < 10 ? "0" : "") + n;
  }

  if (inputDate.setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0)) {
    return [false, `${year}-${minTwoDigits(month)}-${minTwoDigits(day)}`];
  } else {
    return [true, `${year}-${minTwoDigits(month)}-${minTwoDigits(day)}`];
  }
};
