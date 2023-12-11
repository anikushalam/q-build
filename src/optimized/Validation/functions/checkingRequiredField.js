export const requiredField = (data, optional = []) => {
  let error = {};
  for (let obj in data) {
    if (optional?.includes(obj)) {
    } else {
      if (!data[obj]) error[obj] = "* required";
    }
  }
  return error;
};

export const existingRequiredField = (required = {}) => {
  for (let req in required) {
    return false;
  }
  return true;
};
