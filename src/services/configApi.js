// export const baseUrl = "http://localhost:8080/api/v1";
// export const baseUrl = "http://3.88.27.4/api/api/v1";

export const baseUrl = "https://qviple.com/api/v1";

export const prepareHeaders = (headers) => {
  // const toke = useSelector((state) => state.authChange);
  var token = localStorage.getItem("token");
  setTimeout(() => {
    if (token) {
      return "";
    } else {
      token = localStorage.getItem("token");
    }
  }, [100]);
  // console.log
  if (token) {
    headers.set("authorization", `${token}`);
    // headers.set(
    //   "authorization",
    //   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSG93YXJkXzEyMSIsImluc0lkIjoiNjI5ZjQzZWNmMWQyNTg0NGI5YzIzZThiIiwiaW5zUGFzc3dvcmQiOiIkMmEkMTIkQ2tPWnVuSU1XYWVPZVlYdFBJNkVmT0Q2cXJsY3g0ZHh2M2I0bmV2UWw5Wm9yandORXdOUHUiLCJpYXQiOjE2NTU5NjIzMDYsImV4cCI6MTY1NjA0ODcwNn0.6z_CtzsvJB4UPWM3ztwZlACbdHbPbEm7qBNZ8g1tfMs"
    // );
  }
  return headers;
};
