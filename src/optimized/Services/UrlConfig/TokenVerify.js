export const tokenVerify = (headers) => {
  var token = localStorage.getItem("token");

  if (token) headers.set("authorization", token);
  return headers;
};
