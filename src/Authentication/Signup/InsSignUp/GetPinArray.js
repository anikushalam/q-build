// import axios from 'axios'

const GetPinArray = (pincode, setPinDistrict, setPinState) => {
  const options = {
    method: "POST",
    url: "https://pincode.p.rapidapi.com/",
    headers: {
      "content-type": "application/json",
      "Content-Type": "application/json",
      "X-RapidAPI-Key": "fc7ed05a15msh3985985ec5ef152p14a24cjsn91c90e91c1e9",
      "X-RapidAPI-Host": "pincode.p.rapidapi.com",
    },
    data: `{"searchBy":"pincode","value":${pincode}}`,
  };

  // axios.request(options).then(function (response) {
  //   var pinSet = new Set()
  //   var data = response.data
  //   data && data.map((dt) => (
  //     pinSet.add(dt.district)
  //   ))
  // 	setPinDistrict([...pinSet])
  //   setPinState(data && data[0].circle)
  // }).catch(function (error) {
  // 	// console.error(error);
  // });
};

export default GetPinArray;
