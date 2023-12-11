// export const baseUrl = "http://localhost:8080";
// export const baseUrl = "http://3.88.27.4/api";
// export const baseUrl = "http://52.23.152.125/api";
export const baseUrl = "https://qviple.com";

export const postMethod = "POST";
export const patchMethod = "PATCH";
export const putMethod = "PUT";
export const deleteMethod = "DELETE";

// var token = localStorage.getItem("token");
export const session = () => {
  var token = localStorage.getItem("token");
  setTimeout(() => {
    if (token) {
      return "";
    } else {
      token = localStorage.getItem("token");
    }
  }, [100]);
  return token;
};

// export const imageShowUrl1 = "http://3.88.27.4/api/api/v1/all-images";
// export const imageShowUrl = "http://3.88.27.4/api/api/v1/all-images";
// export const paytmActionUrl = "https://securegw-stage.paytm.in/order/process";
// export const pdfShowUrlNext =
//   "https://qviple-development.s3.ap-south-1.amazonaws.com";

export const imageShowUrl1 = "https://qviple.com/api/v1/all-images";
export const imageShowUrl = "https://d3dqpu54js2vfl.cloudfront.net";
export const paytmActionUrl = "https://securegw.paytm.in/order/process";
export const pdfShowUrlNext = "https://qviple-dev.s3.ap-south-1.amazonaws.com";

// export const imageShowUrl1 = "http://localhost:8080/api/v1/all-images";
// export const imageShowUrl = "http://localhost:8080/api/v1/all-images";
export const imageShowUrl2 = "https://d3dqpu54js2vfl.cloudfront.net/web-client";

export const fileShowUrl = "https://d3dqpu54js2vfl.cloudfront.net";

export const customAvatarUrl =
  "https://d3dqpu54js2vfl.cloudfront.net/3d-avatar";
