import axios from "axios";

const getPin = () => {
  const options = {
    method: "POST",
    url: "https://pincode.p.rapidapi.com/",
    headers: {
      "content-type": "application/json",
      "Content-Type": "application/json",
      "X-RapidAPI-Host": "pincode.p.rapidapi.com",
      "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
    },
    data: '{"searchBy":"pincode","value":110001}',
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default getPin;
