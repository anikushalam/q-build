export const withCurrentDate = (args) => {
  const onCurrentDate = new Date();
  const argsSplit = args?.split("/");
  const onArgsDate = new Date(
    `${argsSplit[2]}-${argsSplit[1]}-${argsSplit[0]}`
  );
  if (onCurrentDate <= onArgsDate) return false;
  else return true;
};

export const validatePreviousDate = (args) => {
  const onCurrentDate = new Date();
  const argsSplit = args?.split("/");
  const onArgsDate = new Date(
    `${argsSplit[2]}-${argsSplit[1]}-${argsSplit[0]}`
  );
  // console.info("this is both date", onCurrentDate < onArgsDate);
  // console.info("this is both date", onCurrentDate === onArgsDate);
  // console.info("this is both date", onCurrentDate > onArgsDate);
  if (onCurrentDate <= onArgsDate)
    return {
      status: true,
      value: `${argsSplit[2]}-${argsSplit[1]}-${argsSplit[0]}`,
    };
  else
    return {
      status: false,
      value: "",
    };
};
